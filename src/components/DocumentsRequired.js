export default function DocumentsRequired() {
    return (
        <section className="documents-section">
            <div className="container">
                <h2 className="section-title">Documents Required</h2>
                <p className="section-subtitle">
                    Drive hassle-free with Mouj Rent Car – Your passport to adventure! To ensure a smooth rental experience,
                    please have the following documents ready. Your journey starts with the right paperwork – because your
                    safety and satisfaction are our top priorities!
                </p>
                <div className="documents-grid">
                    <div className="document-card">
                        <h4>Omani Citizen &amp; Resident</h4>
                        <ul>
                            <li>Residence ID</li>
                            <li>Driving Licence</li>
                        </ul>
                    </div>
                    <div className="document-card">
                        <h4>Gulf Citizen &amp; Resident</h4>
                        <ul>
                            <li>Residence ID</li>
                            <li>Driving Licence</li>
                            <li>Passport</li>
                        </ul>
                    </div>
                    <div className="document-card">
                        <h4>Foreigner</h4>
                        <ul>
                            <li>International Driving Licence</li>
                            <li>Passport</li>
                            <li>Tourist Visa Stamp</li>
                        </ul>
                        <p className="note">
                            Foreigners have to Pay Deposit 50 OMR. The amount will be refunded after 3 weeks (21 Days) through:
                            1. Transfer through exchange offices by Western Union or Moneygram.
                            2. Transfer to the Bank Account.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
