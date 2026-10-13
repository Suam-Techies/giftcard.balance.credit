import styles from "./page.module.css";

const steps = [
  {
    number: "01",
    title: "Check the card materials",
    text: "Look on the back of the card, its packaging, or the receipt for the balance and support instructions for your specific card.",
  },
  {
    number: "02",
    title: "Verify the address",
    text: "Type the web address shown on your card yourself. Check it carefully before following a link or entering any information.",
  },
  {
    number: "03",
    title: "Review recent activity",
    text: "Pending authorizations, purchases, and refunds can change the available balance or affect when it updates.",
  },
];

const questions = [
  {
    question: "Where should I check a GiftCardMall or MyGift card balance?",
    answer:
      "Use the website or phone number printed on your card or its original packaging. Card programs can differ, so follow the instructions supplied with your particular card.",
  },
  {
    question: "Do all gift cards need to be activated?",
    answer:
      "No. Some cards are activated at purchase, while others may need an extra step. Check the receipt and the card's own instructions to see what applies.",
  },
  {
    question: "Why was my prepaid card declined?",
    answer:
      "A low available balance, a pending authorization, an incorrect billing detail, a card restriction, or an incomplete activation can all cause a decline. Check with the card provider using the contact details on the card.",
  },
  {
    question: "Can I use a Visa gift card for any online purchase?",
    answer:
      "Not always. Acceptance depends on the merchant, the card's terms, available funds, and the kind of transaction. Review the cardholder information before trying again.",
  },
  {
    question: "Is this the official GiftCardMall or MyGift website?",
    answer:
      "No. This is an independent informational guide and is not affiliated with GiftCardMall, MyGift, Blackhawk Network, or a payment network. Use the official service details printed on your card.",
  },
];

export default function Home() {
  return (
    <main id="top" className={styles.page}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>

      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Gift Card Balance home">
          <span className={styles.brandMark} aria-hidden="true">
            <span />
          </span>
          <span>Gift Card Balance</span>
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#balance">Balance</a>
          <a href="#activation">Activation</a>
          <a href="#troubleshooting">Troubleshooting</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className={styles.headerCta} href="#safe-check">
          Start here <span aria-hidden="true">↗</span>
        </a>
      </header>

      <div className={styles.notice} role="note">
        <span className={styles.noticeIcon} aria-hidden="true">i</span>
        <p>
          <strong>Independent guide.</strong> We are not the card issuer and
          never ask for your card number, PIN, or security code.
        </p>
      </div>

      <section className={styles.hero} id="main-content">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            CLEAR, PRACTICAL CARD HELP
          </p>
          <h1>
            GiftCardMall/Mygift
            <br />
            <span>Know what to do next.</span>
          </h1>
          <p className={styles.heroText}>
            Looking for a GiftCardMall or MyGift balance, activation, or
            payment answer? Start with the card itself and find the safest next
            step for your specific card.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#balance">
              How to check a balance <span aria-hidden="true">→</span>
            </a>
            <a className={styles.textButton} href="#faq">
              Browse common questions
            </a>
          </div>
          <div className={styles.trustNote}>
            <span className={styles.checkIcon} aria-hidden="true">✓</span>
            No card details needed to use this guide
          </div>
        </div>

        <div className={styles.heroVisual} aria-label="Illustration of a gift card">
          <div className={styles.sunShape} />
          <div className={styles.cardShadow} />
          <div className={styles.giftCard}>
            <div className={styles.cardTop}>
              <span className={styles.cardLabel}>A LITTLE SOMETHING</span>
              <span className={styles.cardSparkle} aria-hidden="true">✳</span>
            </div>
            <div className={styles.cardGift} aria-hidden="true">
              <span className={styles.giftRibbon} />
              <span className={styles.giftBow} />
            </div>
            <div className={styles.cardBottom}>
              <span>GIFT CARD</span>
              <span className={styles.cardDots} aria-hidden="true">••••</span>
            </div>
          </div>
          <div className={styles.visualCaption}>
            <span className={styles.captionDot} />
            Helpful guidance, not an account portal
          </div>
        </div>
      </section>

      <section className={styles.quickStart} id="safe-check">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>A GOOD PLACE TO BEGIN</p>
          <h2>Before you check a card</h2>
          <p>Three simple habits can help you find the right service and protect your card.</p>
        </div>
        <div className={styles.stepGrid}>
          {steps.map((step) => (
            <article className={styles.stepCard} key={step.number}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.guideSection} id="balance">
        <div className={styles.guideAside}>
          <p className={styles.eyebrow}>BALANCE BASICS</p>
          <h2>Check your balance with confidence.</h2>
          <p>
            Your available amount may differ from the original card value.
            Recent purchases, returns, or pending holds can affect what is
            currently available.
          </p>
          <a className={styles.inlineLink} href="#safety">
            Keep your details safe <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className={styles.instructionList}>
          {steps.map((step) => (
            <div className={styles.instruction} key={`balance-${step.number}`}>
              <span className={styles.instructionNumber}>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.splitSection} id="activation">
        <div className={styles.splitHeading}>
          <p className={styles.eyebrow}>ACTIVATION</p>
          <h2>Does your card need to be activated?</h2>
        </div>
        <div className={styles.splitBody}>
          <p>
            It depends on the card. Some are ready to use after purchase; others
            may have an activation step. Check the receipt, packaging, and
            instructions that came with yours rather than relying on a general
            search result.
          </p>
          <div className={styles.tipBox}>
            <span className={styles.tipIcon} aria-hidden="true">↗</span>
            <p>
              If the card still does not work after following its instructions,
              contact the provider using the support details printed on the
              card. Keep the purchase receipt if you have it.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.paymentSection} id="visa">
        <div className={styles.paymentCopy}>
          <p className={styles.eyebrow}>USING A PREPAID CARD</p>
          <h2>Will it work for this purchase?</h2>
          <p>
            A Visa-branded gift card uses a payment network, but that does not
            guarantee every merchant or transaction will accept it. The card’s
            terms and available funds matter too.
          </p>
        </div>
        <div className={styles.paymentPoints}>
          <div><span>01</span><p>Confirm the retailer accepts this kind of prepaid card.</p></div>
          <div><span>02</span><p>Check the available balance and any transaction limits.</p></div>
          <div><span>03</span><p>Follow the card issuer’s instructions for online billing details.</p></div>
        </div>
      </section>

      <section className={styles.troubleshootSection} id="troubleshooting">
        <div>
          <p className={styles.eyebrow}>QUICK TROUBLESHOOTING</p>
          <h2>Payment declined?</h2>
          <p className={styles.troubleshootLead}>
            A decline can have several causes. Work through these checks, then
            contact the issuer if you still need help.
          </p>
        </div>
        <div className={styles.checkList}>
          <p><span aria-hidden="true">✓</span> Check the available balance, including pending holds.</p>
          <p><span aria-hidden="true">✓</span> Make sure the card is activated if required.</p>
          <p><span aria-hidden="true">✓</span> Verify the merchant accepts this card and transaction type.</p>
          <p><span aria-hidden="true">✓</span> Review the card details and expiration date you entered.</p>
          <p><span aria-hidden="true">✓</span> Use the support contact printed on the card for account-specific help.</p>
        </div>
      </section>

      <section className={styles.safetySection} id="safety">
        <div className={styles.safetyBadge} aria-hidden="true">!</div>
        <div>
          <p className={styles.eyebrow}>A QUICK SAFETY REMINDER</p>
          <h2>Keep your card details private.</h2>
          <p>
            Only enter card information on a service you have verified from the
            card’s own printed instructions. Do not share your PIN or security
            code in response to an unsolicited call, email, or text.
          </p>
        </div>
        <span className={styles.safetyDecoration} aria-hidden="true">✳</span>
      </section>

      <section className={styles.faqSection} id="faq">
        <div className={styles.faqIntro}>
          <p className={styles.eyebrow}>GOOD TO KNOW</p>
          <h2>Frequently asked questions</h2>
          <p>General guidance for common gift card questions.</p>
        </div>
        <div className={styles.faqList}>
          {questions.map((item) => (
            <details className={styles.faqItem} key={item.question}>
              <summary>
                {item.question}
                <span aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <a className={styles.brand} href="#top">
          <span className={styles.brandMark} aria-hidden="true"><span /></span>
          <span>Gift Card Balance</span>
        </a>
        <p>
          Independent information only. Always follow the instructions and
          terms provided with your card.
        </p>
        <a className={styles.backToTop} href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
