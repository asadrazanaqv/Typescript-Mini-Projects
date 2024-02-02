const magicians: string[] = ["David Copperfield", "Houdini", "Penn and Teller"];


function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (const magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}


function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}


const originalMagicians: string[] = [...magicians];


const great_magicians: string[] = make_great(originalMagicians);


console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("\nGreat Magicians:");
show_magicians(great_magicians);
