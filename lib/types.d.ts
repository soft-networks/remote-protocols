type Suit = "A" | "B" | "C" | "D";
interface Rating {
  intimacy: number;
  effort: number; 
}

interface Exercise {
  id: string,
  name: string,
  text: string,
  rating: Rating,
  suit: Suit
}

interface exerciseProps {
  exercise: Exercise;
  share?: boolean;
}
