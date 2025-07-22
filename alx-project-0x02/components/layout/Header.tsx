import Link from "next/link";

const Header: React.FC =()=>{
    return(
        <header>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/posts">Posts</Link>
        </header>
    )
}
export default Header;