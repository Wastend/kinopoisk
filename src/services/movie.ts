export type Movie = { 
    id: number; 
    name: string; 
    alternativeName: string, 
    description: string, 
    rating: { 
        kp: number 
    }, 
    year: number, 
    persons: [{ 
        id: number, 
        name: string, 
        enProfession: string 
    }] 
};
