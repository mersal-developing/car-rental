export default function InsuredFleet({ t }) {
    return (
        <section className="insured-section">
            <div className="container">
                <h2 className="section-title">{t.insured.title}</h2>
                <p>{t.insured.text}</p>
            </div>
        </section>
    );
}
