// app/not-found.js
import CtaBtn from "./components/CtaBtn";


export default function NotFound() {
  return (
    <main>
        <div className="error-page">
            <div className="content">
                <h1 className="heading-1 heading-1-sm">404</h1>
                <p>We can’t find the page you are looking for</p>
                    <CtaBtn href="/" text="Back to home" />
            </div>
        </div>
    </main>
  );
}