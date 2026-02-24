export default function DocumentsRequired({ t }) {
    return (
        <section className="documents-section">
            <div className="container">
                <h2 className="section-title">{t.documents.title}</h2>
                <div className="documents-grid">
                    <div className="document-card">
                        <h4>{t.documents.omani}</h4>
                        <ul>
                            <li>{t.documents.omanId}</li>
                            <li>{t.documents.omanLicense}</li>
                        </ul>
                    </div>
                    <div className="document-card">
                        <h4>{t.documents.gulf}</h4>
                        <ul>
                            <li>{t.documents.gulfId}</li>
                            <li>{t.documents.gulfLicense}</li>
                        </ul>
                    </div>
                    <div className="document-card">
                        <h4>{t.documents.foreigner}</h4>
                        <ul>
                            <li>{t.documents.passport}</li>
                            <li>{t.documents.intlLicense}</li>
                            <li>{t.documents.visa}</li>
                        </ul>
                    </div>
                </div>
                <p className="document-note">{t.documents.depositNote}</p>
            </div>
        </section>
    );
}
