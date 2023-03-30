import { MenuItem } from './menu-item';

export function Menu() {
  return (
    <div className="pure-menu">
      <ul className="pure-menu-list">
        <MenuItem pathname="/dragon">Пояс Дракона</MenuItem>
        <MenuItem pathname="/aden">Кристалл Адена</MenuItem>
        <MenuItem pathname="/hardin">Кристалл Хардина</MenuItem>
        <MenuItem pathname="/talisman-of-aden">Талисман Адена</MenuItem>
        <MenuItem pathname="/talisman-of-eva">Талисман Евы</MenuItem>
        <MenuItem pathname="/talisman-of-authority">
          Талисман Властителя
        </MenuItem>
        <MenuItem pathname="/talisman-of-benir">Талисман Бенира</MenuItem>
        <MenuItem pathname="/stones">Драгоценные Камни</MenuItem>
        <MenuItem pathname="/growth-rune">Руна Развития</MenuItem>
        <MenuItem pathname="/saiha-cloaks">Плащи Сайхи</MenuItem>
      </ul>
    </div>
  );
}
