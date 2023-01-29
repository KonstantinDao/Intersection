export interface Room {
    id: string;
    name: string;
    room_nr: number;
    participants: string[];
    numberOfParticipants: number;
    matches: string[];
}