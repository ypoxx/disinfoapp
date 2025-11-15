import { ReactNode } from 'react';

export interface LessonSection {
  id: string;
  title: string;
  type?: 'default' | 'info' | 'warning' | 'tip' | 'example';
  content: ReactNode;
}

export interface LessonStep {
  id: string;
  title: string;
  sections: LessonSection[];
}

export interface LessonContent {
  moduleId: string;
  steps: LessonStep[];
}
