const flex_1_home = document.querySelector('#flex_1_home')
const item_1 = document.querySelector('.item_1')
const item_2 = document.querySelector('.item_2')
const text_home = document.querySelector('#text_home')
const link_social = document.querySelector('.link_social')

const options = {
    threshold: [0.5]
}


function onEntryItem2(elem) {
    console.log(elem);
    elem.forEach(element => {
        if (element.isIntersecting) {
            element.target.style.flex = parseInt(0)
            flex_1_home.style.flex = 10
            item_1.style.display = 'flex'

            setTimeout(() => {
                element.target.style.flex = 4
                flex_1_home.style.flex = 1
                element.target.className = 'active_item_2_img item_2'
            }, 2000);

            setTimeout(() => {
                text_home.style.opacity = 1
                text_home.style.transform = 'translateY(0px)'
            }, 3000);

            setTimeout(() => {
                link_social.style.transform = 'rotate(-90deg) translateY(0px)'
                link_social.style.opacity = 1
            }, 3500);
        }
    });
}

const observerItem2 = new IntersectionObserver(onEntryItem2, options)
observerItem2.observe(item_2)

//////////////


const fire_shop = document.querySelector('#fire_shop')
const game_title_shop = document.querySelector('#game_title_shop')
const p_shop = document.querySelector('#p_shop')

function onEntryFireShop(elem) {
    elem.forEach(item => {
        if (item.isIntersecting) {
            item.target.className = 'active'
        }
    })
}

const observerFireShop = new IntersectionObserver(onEntryFireShop, options)

observerFireShop.observe(fire_shop)

function onEntryGameTitleShop(elem) {
    elem.forEach(item => {
        if (item.isIntersecting) {
            item.target.className = 'active'
        }
    })
}

const observerGameTitleShop = new IntersectionObserver(onEntryGameTitleShop, options)

observerGameTitleShop.observe(game_title_shop)

function onEntryPShop(elem) {
    elem.forEach(item => {
        if (item.isIntersecting) {
            item.target.className = 'active'
        }
    })
}

const observerPShop = new IntersectionObserver(onEntryPShop, options)

observerPShop.observe(p_shop)




////////////////
const cards = document.querySelectorAll('.card_1')

function onEntryCard(elem) {
    elem.forEach(item => {
        if (item.isIntersecting) {
            setTimeout(() => {
            item.target.classList.add('active')
            }, 500);
        }
    })
}

const observerCards = new IntersectionObserver(onEntryCard, options)

for(let card of cards) {
    observerCards.observe(card)
}


////////////////
const person = document.querySelector('.person')

function onEntryPerson(elem) {
    elem.forEach(item => {
        if (item.isIntersecting) {
            setTimeout(() => {
            item.target.classList.add('active')
            }, 200);
        }
    })
}

const obverser = new IntersectionObserver(onEntryPerson, options)

obverser.observe(person)





const bi = document.querySelector('.bi')

bi.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}