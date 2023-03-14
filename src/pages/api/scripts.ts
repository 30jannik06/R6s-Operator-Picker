/*
import { attackers, defenders, allOps} from "@/pages/api/operator";

const elements = {
    img: document.querySelector('.operatorPortait'),
    icon: document.querySelector('.operatorIcon'),
    name: document.querySelector('.operatorName')
}

const buttons = {
    atk: document.querySelector('.btnATK'),
    def: document.querySelector('.btnDEF'),
}

 *//*
buttons.atk?.addEventListener('click', () => displayRandomOperator(attackers))
buttons.def?.addEventListener('click', () => displayRandomOperator(defenders))


export function displayRandomOperator(role: any) {
    console.log("test")
    const randomIndex = Math.floor(Math.random() * role.length)
    const {image, icon, name} = role[randomIndex]

    elements.img?.setAttribute('src', image)
    elements.img?.setAttribute('alt', name)
    elements.icon?.setAttribute('src', icon)
    elements.icon?.setAttribute('alt', name)
    // @ts-ignore
    elements.name.textContent = name
}
*/
export function displayRandomOperator(e: any, attackers: any) {
    e.preventDefault();
    console.log("test")
}
