export type Quiz = Question[];

export interface Question {
  category: string;
  id: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: {
    text: string;
  };
  tags?: string[];
  type?: string;
  difficulty?: string;
  regions?: any[];
  isNiche?: boolean;
}
