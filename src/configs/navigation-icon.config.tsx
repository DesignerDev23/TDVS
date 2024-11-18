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
} from 'react-icons/hi'

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
    driver: <HiOutlineTruck />
}

export default navigationIcon
