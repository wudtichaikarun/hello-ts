export interface Periodical {
  issueNumber: number;
}

export class Magazine implements Periodical {
  issueNumber: number;
  constructor(issue: number) {
    this.issueNumber = issue;
  }
}

export function GetMagazineByIssueNumber(issue: number): Magazine {
  let instance = new Magazine(issue);

  return instance;
}
