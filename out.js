// Defining Namespaces
var Membership;
(function (Membership) {
    function AddMember(name) {
        console.log(name);
    }
    Membership.AddMember = AddMember;
    var Cards;
    (function (Cards) {
        function IssueCard(memberNumber) {
            console.log(memberNumber);
        }
        Cards.IssueCard = IssueCard;
    })(Cards = Membership.Cards || (Membership.Cards = {}));
})(Membership || (Membership = {}));
///<reference path="namespaces.ts" />
var memberName = "Romantic";
var memberNumber = 999;
Membership.AddMember(memberName);
Membership.Cards.IssueCard(memberNumber);
