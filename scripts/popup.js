$(document).ready(initFriendList)

function pushFriend(){
    let name = document.getElementById('friend')
    let url = document.getElementById('url')
    let list = document.getElementById('frList')
    let link = document.createElement('a')
    let li = document.createElement('li')
    link.setAttribute('href', url.value)
    link.innerHTML = name.value
    li.appendChild(link)
    list.appendChild(li);
    localStorage.setItem(name.value, url.value)
    name.value = ''
    url.value = ''
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addFriend').addEventListener('click', pushFriend);
});

function initFriendList() {
    let list = document.getElementById('frList')
    let keys = Object.keys(localStorage)
    for (let key of keys) {
        let link = document.createElement('a')
        link.setAttribute('href', localStorage.getItem(key))
        link.innerHTML = key
        let li = document.createElement('li')
        li.appendChild(link)
        list.appendChild(li);
    }
}
