export default function Footer() {
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content sticky bottom-0">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by <a href="https://github.com/FilippoPietroNeri" className="link">Filippo Pietro Neri</a></p>
            </aside>
        </footer>
    )
}