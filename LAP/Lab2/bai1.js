const result = {
    success: ["max-lenght", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
    const failureItems = [...arr];
    return failureItems;
}
const failureList = makeList(result.failure);
console.log(failureList);
var html = "";
failureList.forEach((item) => {
    html += `<li>${item}</li>`;
});
console.log(html);
document.getElementById("bai1").innerHTML = html;
