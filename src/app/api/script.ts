import {attackers, defenders, allOps} from "@/app/api/operator";

export function displayRandomOperator(role: any) {
    const randomIndex = Math.floor(Math.random() * role.length)
    const {image, icon, name} = role[randomIndex]

    return {image, icon , name}
}


export function gotoURL(url: string) {
    window.open(url);
}
