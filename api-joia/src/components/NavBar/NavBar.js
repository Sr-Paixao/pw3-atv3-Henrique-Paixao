import { Outlet, Link } from "react-router-dom";
import styles from './NavBar.module.css'
export default function NavBar(){
    return(
        <>
            <ul className={styles.list}>
                <li className={styles.item} >
                    <Link to='/'>Listing</Link>
                </li>
                <li className={styles.item} >
                    <Link to='/create'>Create</Link>
                </li>
                <li className={styles.item} >
                    <Link to='/getting'>Getting</Link>
                </li>
                <li className={styles.item} >
                    <Link to='/updating'>Updating</Link>
                </li>
                <li className={styles.item} >
                    <Link to='/delete'>delete</Link>
                </li>
            </ul>

            <Outlet/>
        </>


    )
}