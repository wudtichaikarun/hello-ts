// Defining Namespaces
namespace Membership {
  export function AddMember(name: string) {
    console.log(name);
  }

  export namespace Cards {
    export function IssueCard(memberNumber: number) {
      console.log(memberNumber);
    }
  }
}
