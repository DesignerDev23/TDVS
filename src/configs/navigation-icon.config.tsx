import {
    HiOutlineColorSwatch,
    HiOutlineDesktopComputer,
    HiOutlineTemplate,
    HiOutlineViewGridAdd,
    HiOutlineHome,
    HiBriefcase,
    HiUserAdd,
    HiOutlineShoppingCart,
    HiDocumentReport,
    HiOutlineTruck,
    HiCreditCard,
} from 'react-icons/hi'

import { FaBiking } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

export type NavigationIcons = Record<string, JSX.Element>

const navigationIcon: NavigationIcons = {
    home: <HiOutlineHome />,
    singleMenu: <HiOutlineViewGridAdd />,
    collapseMenu: <HiOutlineTemplate />,
    groupSingleMenu: <HiOutlineDesktopComputer />,
    groupCollapseMenu: <HiOutlineColorSwatch />,
    business: <HiBriefcase />,
    register: <HiUserAdd />,
    order: <HiOutlineShoppingCart />,
    report: <HiDocumentReport />,
    driver: <HiOutlineTruck />,
    payments: <HiCreditCard />,
    rider: <FaBiking />,
    support: <BiSupport />,
}

export default navigationIcon
