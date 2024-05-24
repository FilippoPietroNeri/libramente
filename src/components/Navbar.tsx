'use client';
import MindIcon from "./icons/Mind";
import HomeIcon from "./icons/Home";
import SearchIcon from "./icons/Search";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
    const { data: session } = useSession();
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="/">Home <HomeIcon /></a></li>
                        {session ?
                            <>
                                <li><a href="/genre/search">Search Genre <SearchIcon /></a></li>
                                <li><a href="/book/search">Search Book <SearchIcon /></a></li>
                                <li><a href="/book/list">Book List <SearchIcon /></a></li>
                            </>
                            : ""}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl" href="/">LibriMente <MindIcon /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="/">Home <HomeIcon /></a></li>
                    {session ?
                        <>
                            <li><a href="/genre/search">Search Genre <SearchIcon /></a></li>
                            <li><a href="/book/search">Search Book <SearchIcon /></a></li>
                            <li><a href="/book/list">Book List <SearchIcon /></a></li>
                        </>
                        : ""}
                </ul>
            </div>
            <div className="navbar-end">
                {session ?
                    <>
                        <Link href="#" className="btn btn-primary" onClick={() => signOut()}>
                            Sign out
                        </Link>
                    </>
                    :
                    <>
                        <Link href="#" className="btn btn-primary" onClick={() => signIn()}>
                            Sign in
                        </Link>
                    </>}
            </div>
        </div>
    )
};