export /**
 * CurrentTech
 */
    class CurrentTech {

    currentTech: Tech[];

    constructor(parameters) {
        this.currentTech = [];

        this.loadCurrentTech();
    }

    loadCurrentTech() {

        this.currentTech.push(new Tech(
            "Aurelia",
            "Aurelia is a JavaScript client framework for mobile, desktop and web leveraging simple conventions and empowering creativity",
            "http://aurelia.io",
            "http://aurelia.io/images/main-logo.svg",
            "ui/frontend"));
    }
}

export /**
 * Tech
 */
    class Tech {

    name: string;
    description: string;
    link: string;
    imageSrc: string;
    type: string;

    constructor(name: string, description: string, link: string, imageSrc: string, type: string) {
        this.name = name;
        this.description = description;
        this.link = link;
        this.imageSrc = imageSrc;
        this.type = type;
    }
}