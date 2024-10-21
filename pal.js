function palindrome()
{
    let input = document.querySelector("#input").value
    let replace = input.replaceAll(" ","")
    let arr = replace.split("")
    let arrrev = arr.reverse()
    let arrjoin = arrrev.join("")
    let results = document.querySelector("#results")
    input = replace
    if (input == arrjoin)
    {
        results.innerHTML = `${input}` + " is a palindrome"
    }
    else{
        results.innerHTML = `${input}` + " is not a palindrome"
    }
}