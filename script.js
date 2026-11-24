function scrollToChecker() {
    document.getElementById("checker").scrollIntoView({
        behavior: "smooth"
    });
}

function checkFraud() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let result = document.getElementById("result");

    if (input.trim() === "") {
        result.innerHTML = "Please describe a situation first.";
        return;
    }

    let keywords = [
        "otp", "pin", "qr code", "scan",
        "collect request", "customer care",
        "screenshot", "receive money",
        "password", "urgent", "link",
        "refund", "payment request"
    ];

    let detected = keywords.filter(word => input.includes(word));

    if (detected.length > 0) {
        result.innerHTML = `
            <h3>⚠️ Warning: Suspicious Activity</h3>
            <p>We noticed potentially risky terms: ${detected.join(", ")}.</p>
            <p><strong>Safety Advice:</strong></p>
            <ul>
                <li>Never share your UPI PIN or OTP.</li>
                <li>Never approve an unexpected payment request.</li>
                <li>Verify payments in your official payment app.</li>
                <li>Never scan a QR code just to receive money.</li>
            </ul>
            <p>This is a keyword-based awareness check, not a confirmed fraud detection.</p>
        `;
    } else {
        result.innerHTML = `
            <h3>✅ No Common Warning Keywords Detected</h3>
            <p>We did not find common warning keywords in your description.</p>
            <p>However, this does not guarantee that the situation is safe.
            Always verify the sender and payment details.</p>
        `;
    }
}

function clearChecker() {
    document.getElementById("userInput").value = "";
    document.getElementById("result").innerHTML = "";
}

function showTip(number) {
    const tips = {
        1: "Fake Payment Screenshot: Never trust a screenshot alone. Check your actual bank or UPI transaction history.",
        2: "QR Code Scam: Scanning a QR code and entering your UPI PIN can authorise a payment. You do not need to scan a QR code to receive money.",
        3: "Fake Customer Care: Contact customer support only through official bank or UPI app channels.",
        4: "Collect Request: Read every payment request carefully. Reject unexpected requests.",
        5: "OTP Scam: Never share your OTP, UPI PIN or banking passwords with anyone."
    };

    document.getElementById("tipBox").innerHTML =
        `<h3>🛡️ Safety Tip</h3><p>${tips[number]}</p>`;
}
