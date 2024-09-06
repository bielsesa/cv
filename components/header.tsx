export default function Header() {
    return (
        <div className="flex-0.5" id="header">
            <p className="text-pink font-light text-4xl">Biel Serrano</p>
            <p className="text-lavender italic font-light text-lg">Backend Developer based in Barcelona (ES)</p>
            <p className="text-normal text-xl">
                <a className="hover:underline" href="mailto:bielsesa@gmail.com">Email</a> / <a className="hover:underline" href="https://www.linkedin.com/in/biel-serrano-sánchez-13ba05170">LinkedIn</a> / <a className="hover:underline" href="https://github.com/bielsesa">GitHub</a> / <a className="hover:underline" href="https://astronautpotato.itch.io/">itch.io</a>
            </p>
        </div>
    );
}