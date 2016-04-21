
export class Skills {
  
  skills: Skill[];
  
  constructor() {
    
    this.skills = [];
    
    this.loadSkills();
  }
  
  loadSkills() {
    
    this.skills.push(new Skill("C#", 10))
    this.skills.push(new Skill(".Net", 10))
    this.skills.push(new Skill("SQL", 8))
    this.skills.push(new Skill("NoSQL", 8))
    this.skills.push(new Skill("JavaScript (ECMA 6/7)", 6))
    this.skills.push(new Skill("TypeScript", 8))
    this.skills.push(new Skill("HTML5", 6))
    this.skills.push(new Skill("CSS3", 4))
    this.skills.push(new Skill("REST/Web API", 8))
    this.skills.push(new Skill("OOP/OOD", 10))
    this.skills.push(new Skill("SOLID", 8))
    this.skills.push(new Skill("Distributed Systems", 8))
    this.skills.push(new Skill("Web Applications", 8))
    this.skills.push(new Skill("Application Architecture", 10))
    this.skills.push(new Skill("SCRUM/Agile", 8))
  }
}

export /**
 * Skill
 */
class Skill {
  
  name: string;
  rank: number;
  
  constructor(name: string, rank:number) {
    this.name = name;
    this.rank = rank;
  }
}
