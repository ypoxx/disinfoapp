/**
 * Claude API Integration for Text Analysis
 */

import { persuasionTechniques } from '@/data/persuasion';

const API_KEY = import.meta.env.VITE_CLAUDE_API_KEY;
const API_URL = 'https://api.anthropic.com/v1/messages';

export interface AnalysisResult {
  score: number; // 0-100, how manipulative the text is
  techniques: {
    id: string;
    name: string;
    confidence: number; // 0-100
    evidence: string; // Quote from text showing this technique
  }[];
  redFlags: string[];
  summary: string;
  recommendations: string[];
}

/**
 * Analyze text for manipulation techniques using Claude API
 */
export async function analyzeText(text: string): Promise<AnalysisResult> {
  if (!API_KEY || API_KEY === 'your_api_key_here') {
    throw new Error('Claude API key not configured. Please set VITE_CLAUDE_API_KEY in .env');
  }

  if (!text || text.trim().length === 0) {
    throw new Error('Text cannot be empty');
  }

  if (text.length > 2000) {
    throw new Error('Text too long. Maximum 2000 characters.');
  }

  // Create a prompt for Claude with all available techniques
  const techniqueList = persuasionTechniques
    .map((t) => `- ${t.name.de} (${t.id}): ${t.description.de}`)
    .join('\n');

  const prompt = `Du bist ein Experte für Desinformation und Manipulationstechniken. Analysiere den folgenden Text und identifiziere verwendete Persuasions- und Manipulationstechniken.

Verfügbare Techniken:
${techniqueList}

Zu analysierender Text:
"""
${text}
"""

Antworte im folgenden JSON-Format (nur gültiges JSON, keine zusätzlichen Erklärungen):
{
  "score": <0-100, wie manipulativ ist der Text insgesamt>,
  "techniques": [
    {
      "id": "<technique-id>",
      "name": "<technique-name>",
      "confidence": <0-100, wie sicher bist du>,
      "evidence": "<konkretes Zitat aus dem Text>"
    }
  ],
  "redFlags": [
    "<Liste von Red Flags im Text>"
  ],
  "summary": "<Kurze Zusammenfassung der Analyse in 2-3 Sätzen>",
  "recommendations": [
    "<Liste von Empfehlungen zum kritischen Umgang mit diesem Text>"
  ]
}

Wichtig:
- Nur Techniken verwenden, die wirklich im Text vorkommen
- Confidence sollte realistisch sein (60-80% bei klaren Fällen, 80-100% nur bei sehr eindeutigen)
- Evidence muss ein tatsächliches Zitat aus dem Text sein
- Wenn keine Manipulation erkennbar ist, score niedrig halten (0-30)
- RedFlags können sein: fehlende Quellen, emotionale Sprache, Caps-Lock, Ausrufezeichen, absolute Aussagen, etc.`;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 2048,
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Claude API Error:', error);
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.content[0].text;

    // Parse JSON response
    let result: AnalysisResult;
    try {
      result = JSON.parse(content);
    } catch (parseError) {
      console.error('Failed to parse Claude response:', content);
      throw new Error('Failed to parse API response');
    }

    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Unknown error occurred during analysis');
  }
}

/**
 * Mock analysis for testing (when API key is not available)
 */
export function mockAnalyzeText(text: string): AnalysisResult {
  const hasEmotionalWords = /(!{2,}|ALLE|NIEMAND|IMMER|NIE|SKANDAL|UNGLAUBLICH)/i.test(text);
  const hasCapsLock = text.split(' ').some((word) => word.length > 3 && word === word.toUpperCase());
  const hasNoSources = !/(Quelle|Studie|Bericht|laut)/i.test(text);

  const score = (hasEmotionalWords ? 30 : 0) + (hasCapsLock ? 25 : 0) + (hasNoSources ? 20 : 0);

  const techniques = [];
  if (hasEmotionalWords) {
    techniques.push({
      id: 'emotional-appeal',
      name: 'Emotionalisierung',
      confidence: 75,
      evidence: text.substring(0, 100) + '...',
    });
  }

  return {
    score: Math.min(score, 100),
    techniques,
    redFlags: [
      ...(hasCapsLock ? ['Übermäßige Nutzung von Großbuchstaben'] : []),
      ...(hasEmotionalWords ? ['Emotionale und absolute Sprache'] : []),
      ...(hasNoSources ? ['Keine Quellen angegeben'] : []),
    ],
    summary: `Der Text zeigt ${score > 50 ? 'deutliche' : score > 30 ? 'einige' : 'wenige'} Anzeichen von Manipulation.`,
    recommendations: [
      'Prüfe die Quellen der Informationen',
      'Suche nach unabhängigen Bestätigungen',
      'Achte auf emotionale Manipulation',
    ],
  };
}
