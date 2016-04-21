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
            "/assets/images/tech/aurelia.png",
            "ui/frontend"));
            
            this.currentTech.push(new Tech(
            "NodeJS",
            "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.",
            "https://nodejs.org",
            "/assets/images/tech/nodejs.png",
            "server/backend"));
            
            this.currentTech.push(new Tech(
            "Akka.Net",
            "Akka.NET is a toolkit and runtime for building highly concurrent, distributed, and fault tolerant event-driven applications on .NET & Mono.",
            "http://getakka.net/",
            "/assets/images/tech/akka.net.jpeg",
            "server/backend"));
            
            this.currentTech.push(new Tech(
            "Semantic UI",
            "Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML.",
            "http://semantic-ui.com/",
            "/assets/images/tech/semantic-ui.png",
            "ui/frontend"));
            
            this.currentTech.push(new Tech(
            ".Net | ASP.Net",
            "A free web framework for building Web sites and Web applications using HTML, CSS and JavaScript. Create Web APIs, mobile sites and use real-time technologies.",
            "http://www.asp.net/",
            "/assets/images/tech/asp.net.png",
            "server/backend"));
            
            this.currentTech.push(new Tech(
            "Redis",
            "Redis is an open source (BSD licensed), in-memory data structure store, used as database, cache and message broker.",
            "http://redis.io/",
            "/assets/images/tech/redis.png",
            "server/persistence"));
            
            this.currentTech.push(new Tech(
            "Gogs - Go Git Service",
            "A painless self-hosted Git service.",
            "https://gogs.io/",
            "/assets/images/tech/gogs.png",
            "misc"));
            
            this.currentTech.push(new Tech(
            "Mongo DB",
            "MongoDB is an open-source, document database designed for ease of development and scaling.",
            "https://www.mongodb.org/",
            "/assets/images/tech/mongodb.png",
            "server/persistence"));
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