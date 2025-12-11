"use client";

import { useState } from "react";
import { Section } from "../../components/Section";
import { Reveal } from "../../components/Reveal";

export default function Terms() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      id: "overview",
      title: "Terms Overview",
      content: `These Terms of Use ("Terms") represent a legally binding agreement between you, whether personally or on behalf of an entity ("you"), and Krists Eiduks (the "Content Creator," "we," "us," or "our") of K3 Capital Solutions (the "Website"). These Terms govern your access to and use of the Website. By accessing and using the Website, you agree that you have read and accept these Terms in full. If you disagree with these Terms or any part of these Terms you must not access or use the Website.

The Website is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to access or use the Website.

We reserve the right, in our sole discretion, to make changes or modifications to these Terms at any time and for any reason. We will alert you of any changes by updating the "Last Updated" date of these Terms. You waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms to stay informed of updates. You will be subject to, and will be deemed to have accepted the changes in any revised Terms by your continued access or use of the Website after the date such revised Terms are posted.`,
    },
    {
      id: "legal-capacity",
      title: "Legal Capacity & Representations",
      content: `By using the Website, you represent and warrant that: (1) you have the legal capacity to enter into these Terms; (2) you are not a minor in the jurisdiction in which you reside; (3) if you are accessing the Website on behalf of an entity, you have the authority to legally bind such entity; and (4) your use of the Website will not violate any applicable law or regulation.

The Website is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would be subject to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Website from locations outside of the United States do so on their own initiative and are solely responsible for compliance with applicable local laws.`,
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      content: `Unless otherwise indicated, the Content (as defined below) made available by the Content Creator through the Website is the property of the Content Creator or licensed to the Content Creator and is protected by trademark, copyright, and other intellectual property and unfair competition laws. The term "Content" includes without limitation text, graphics, images, animations, videos, data, designs, logos, button icons, stories, tools, calculators, and the arrangement, collection and assembly of the same.

Subject to your compliance with these Terms, you are granted a limited license to access, view, display, download, and print the Website, including the Content contained therein, to which you have properly gained access, solely for your own personal, non-commercial use, and subject to the restrictions set forth herein. We reserve all rights in and to the Website and the Content not expressly granted.`,
    },
    {
      id: "restrictions",
      title: "Restrictions on Use",
      content: `While using the Website, you represent and warrant that you will comply with all applicable laws, rules, and regulations. In addition, you specifically agree not to:

1. Use the Website for any unlawful purpose.
2. Modify, adapt, sublicense, translate, sell, reverse engineer, decompile or disassemble the Website or any portion thereof.
3. Reproduce, duplicate, copy, or otherwise exploit the Website for a commercial purpose.
4. Harvest or collect information about Website visitors without their express consent.
5. Restrict or inhibit any other visitor from using the Website, including, without limitation, by means of "hacking" or "cracking" or defacing the Website or any portion thereof.
6. Remove any copyright, trademark, or other proprietary rights notices contained in the Website.
7. Frame or mirror any part of the Website without the Content Creator's prior written authorization.
8. Use any robot, spider, site search/retrieval application, or other manual or automatic device or process to retrieve, index, data mine, or in any way reproduce or circumvent the navigational structure or presentation of the Website or its contents.
9. Use the Website in any way that causes or may cause damage to the Website or impairment of the availability or accessibility of the Website.`,
    },
    {
      id: "feedback",
      title: "User Feedback",
      content: `In the event you provide to Content Creator any feedback, suggestions, ideas, or identification of problems or deficiencies and possible remedies therefor (collectively, "Feedback") with respect to the Website or any related product or service provided by Content Creator or its affiliates, you grant us and our affiliates a worldwide, royalty-free, perpetual, irrevocable, fully sub-licensable license to use such Feedback in any ways, including but not limited to providing you or other users with the Website, improving the Website, or creating or offering new products or services.`,
    },
    {
      id: "third-party",
      title: "Third Party Products and Services",
      content: `The Website may contain links to other websites and resources ("Third-Party Websites") or may reference products, services, processes, or other information by trade name, trademark, manufacturer, supplier, or otherwise. Inclusion of such links and references does not constitute or imply endorsement, sponsorship or recommendation thereof, or any affiliation therewith, by the Content Creator. For the avoidance of doubt, the Content Creator has not reviewed all of the sites linked to in the Website and is not responsible or liable for the content of any such Third-Party Websites or the products or services offered on such Third-Party Websites. Use of any such linked sites, products, and services will be governed by the agreements and policies relating to the use of these sites, products, and services, and is at your own risk.

Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Websites or your purchase of such products or services.

The Website may provide information from or links to certain brokerage companies for your convenience only. The Content Creator does not endorse or recommend the services of any brokerage company. The brokerage company you select (and not the Content Creator) is solely responsible for its services to you.`,
    },
    {
      id: "investment-advice",
      title: "No Investment Advice",
      content: `The Website is published and provided for informational and entertainment purposes only. The information in the Website constitutes the Content Creator's own opinions. None of the information contained in the Website constitutes a recommendation that any particular security, portfolio of securities, transaction, or investment strategy is suitable for any specific person. You understand that the Content Creator is not advising, and will not advise you personally, concerning the nature, potential, value, or suitability of any particular security, portfolio of securities, transaction, investment strategy or other matter. To the extent any of the information contained in the Website may be deemed to be investment advice, such information is impersonal and not tailored to the investment needs of any specific person.

From time to time, the Content Creator or its affiliates may hold positions or other interests in securities mentioned in the Website and may trade for their own account(s) based on the information presented. The Content Creator may also take positions inconsistent with the views expressed in its messages on the Website. The Content Creator may hold licenses with FINRA, the SEC, or state securities authorities and these licenses may or may not be disclosed by the Content Creator in the Website.

Investing in the investments discussed in the Website may be risky and speculative. The applicable companies may have limited operating histories, little available public information, and the stocks they issue may be volatile and illiquid. Trading in such securities can result in immediate and substantial losses of the capital invested. You should invest risk capital, and not capital required for other purposes, such as retirement savings, student loans, mortgages or education.`,
    },
    {
      id: "disclaimer",
      title: "Disclaimer",
      content: `THIS WEBSITE DOES NOT CONSTITUTE FINANCIAL ADVICE OF ANY KIND. IF YOU REQUIRE ADVICE IN RELATION TO ANY FINANCIAL MATTER YOU SHOULD CONSULT AN APPROPRIATE PROFESSIONAL. YOU ARE AWARE OF AND AGREE THAT WE SHALL NOT BE RESPONSIBLE FOR ANY LOSS THAT YOU SUFFER AS A RESULT OF ANY FINANCIAL TRANSACTION, REGARDLESS OF WHETHER OR NOT YOU ENTER SUCH TRANSACTION BASED IN ANY WAY UPON ANYTHING YOU LEARN FROM THE WEBSITE. CONTENT CREATOR IS NOT YOUR FINANCIAL ADVISOR AND WHEN IT COMES TO MAKING FINANCIAL DECISIONS, YOU ARE ON YOUR OWN.

THE WEBSITE AND THE CONTENT ARE PROVIDED "AS-IS" AND "AS-AVAILABLE" AND THE CONTENT CREATOR, ITS PARTNERS, AND AFFILIATES, DISCLAIM ANY AND ALL REPRESENTATIONS AND WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. NO OPINION, ADVICE, OR STATEMENT OF THE CONTENT CREATOR OR ITS PARTNERS OR AFFILIATES, WHETHER MADE ON THE WEBSITE OR OTHERWISE, SHALL CREATE ANY WARRANTY.

THE CONTENT CREATOR CANNOT GUARANTEE AND DOES NOT PROMISE ANY SPECIFIC RESULTS FROM USE OF THE WEBSITE. THE CONTENT CREATOR DOES NOT REPRESENT OR WARRANT THAT CONTENT OR MATERIALS ON THE WEBSITE OR ELSEWHERE ARE ACCURATE, COMPLETE, RELIABLE, CURRENT OR ERROR-FREE OR THAT THE WEBSITE OR ANY OF THE SERVERS USED TO OPERATE THE WEBSITE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. THEREFORE, YOU SHOULD EXERCISE CAUTION IN THE USE AND DOWNLOADING OF ANY CONTENT OR MATERIALS AND USE INDUSTRY-RECOGNIZED SOFTWARE TO DETECT AND DISINFECT VIRUSES. WITHOUT LIMITING THE FOREGOING, YOU UNDERSTAND AND AGREE THAT YOUR USE OF THE WEBSITE IS AT YOUR OWN DISCRETION AND RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR YOUR USE THEREOF AND ANY DAMAGES TO YOUR MOBILE DEVICE OR COMPUTER SYSTEM, LOSS OF DATA OR OTHER HARM OF ANY KIND THAT MAY RESULT. YOU AGREE TO HOLD THE CONTENT CREATOR AND ITS AFFILIATES AND PARTNERS HARMLESS FROM ANY RAMIFICATIONS, FINANCIAL OR OTHERWISE, THAT OCCUR TO YOU AS A RESULT OF ACTING OR RELYING ON THE WEBSITE OR CONTENT.

WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD-PARTY WEBSITE, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY MONITOR ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. THE CONTENT CREATOR, ITS AFFILIATES, AND PARTNERS SHALL NOT BE LIABLE FOR ANY DAMAGES OR COSTS OF ANY TYPE ARISING OUT OF OR IN ANY WAY CONNECTED WITH YOUR USE OF THE SERVICES OF ANY BROKERAGE COMPANY.`,
    },
    {
      id: "limitation",
      title: "Limitation of Liability",
      content: `IN NO EVENT WILL THE CONTENT CREATOR, ITS AFFILIATES, PARTNERS, MEMBERS, MANAGERS, DIRECTORS, OFFICERS, EMPLOYEES OR AGENTS BE LIABLE TO YOU OR ANY THIRD PERSON FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING FOR ANY LOST PROFITS OR LOST DATA, ARISING FROM YOUR USE OF THE WEBSITE, OR ANY OF THE CONTENT OR OTHER MATERIALS ON, ACCESSED THROUGH, OR DOWNLOADED FROM THE WEBSITE, EVEN IF THE CONTENT CREATOR OR ITS AFFILIATES, PARTNERS, MEMBERS, MANAGERS, DIRECTORS, OFFICERS, EMPLOYEES OR AGENTS IS AWARE OR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

TO THE MAXIMUM EXTENT PERMITTED BY LAW, CONTENT CREATOR ASSUMES NO LIABILITY OR RESPONSIBILITY FOR: (1) ERRORS, MISTAKES, OR INACCURACIES OF THE WEBSITE, (2) PERSONAL INJURY OR PROPERTY DAMAGES, OR ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE WEBSITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE WEBSITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE WEBSITE, AND/OR (6) ANY ERRORS OR OMISSION IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE WEBSITE.

NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, THE LIABILITY OF THE CONTENT CREATOR AND ITS AFFILIATES, PARTNERS, MEMBERS, MANAGERS, DIRECTORS, OFFICERS, EMPLOYEES AND AGENTS TO YOU FOR ANY CAUSE WHATSOEVER, AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO THE CONTENT CREATOR FOR THE WEBSITE IN THE IMMEDIATELY PRECEDING TWELVE MONTHS, BUT IN NO CASE WILL SUCH LIABILITY TO YOU EXCEED $1000.

CERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.`,
    },
    {
      id: "indemnification",
      title: "Indemnification",
      content: `You agree to indemnify, defend, and hold harmless the Content Creator, its affiliates, officers, directors, members, managers, employees, consultants, and agents from any and all third-party claims, liability, damages, and/or costs (including but not limited to reasonable attorneys' fees) arising from: (i) your use of the Website; (ii) your violation of these Terms; (iii) your User Contributions; and (iv) your infringement of any intellectual property or other right of any person or entity in connection with your use of the Website and/or your User Contributions.`,
    },
    {
      id: "modifications",
      title: "Modification and Interruptions",
      content: `We have the right but not the obligation to monitor the Website. The Website may be unavailable from time to time for maintenance or other reasons. We reserve the right to change, revise, suspend, discontinue, or otherwise modify the Website at any time and for any reason without notice. You agree that we have no liability whatsoever for any loss, damages, or inconvenience caused by your inability to access or use the Website during any downtime or discontinuance of the Website. Nothing in these Terms will be construed to obligate us to maintain and support the Website or to supply any corrections, updates, or releases in connection therewith.`,
    },
    {
      id: "termination",
      title: "Term and Termination",
      content: `These Terms shall remain in full force and effect while you access and use the Website. Those sections of these Terms which by their nature should survive termination or expiration of these Terms, shall survive, including but not limited to the following provisions: "Disclaimer"; "Limitation of Liability"; "Indemnification"; "Term and Termination"; "Governing Law"; and "Dispute Resolution."

We reserve the right to terminate your access to the Website (including blocking certain IP addresses) immediately and without notice or liability to you for any reason or no reason, including if we become aware and determine, in our sole discretion, that you are violating any of these Terms, including but not limited to the Restrictions on Use and any representations, warranties, or covenants contained in these Terms. Immediately upon termination, you must cease all access and use of the Website.`,
    },
    {
      id: "governing-law",
      title: "Governing Law",
      content: `These Terms will be governed by and construed in accordance with the laws of the State of New York without regard to its conflict of law provisions. Sole and exclusive jurisdiction for any action or proceeding arising out of or related to these Terms or the Website shall be an appropriate state or Federal court located in the State of New York.`,
    },
    {
      id: "dispute-resolution",
      title: "Dispute Resolution",
      content: `Except where and to the extent prohibited by law, you agree that, if there is any controversy, claim, action, or dispute arising out of or related to your use of the Website or the breach, enforcement, interpretation, or validity of these Terms or any part of them ("Dispute"), the parties shall first try in good faith to settle such Dispute by providing written notice to the other party describing the facts and circumstances of the Dispute and allowing the receiving party thirty (30) days in which to respond to or settle the Dispute. The parties agree that this dispute resolution procedure is a condition precedent that must be satisfied before initiating any litigation or filing any claim against the other party.

IF ANY DISPUTE CANNOT BE RESOLVED BY THE ABOVE DISPUTE RESOLUTION PROCEDURE, YOU AGREE THAT THE SOLE AND EXCLUSIVE JURISDICTION FOR SUCH DISPUTE WILL BE BY BINDING ARBITRATION ON AN INDIVIDUAL BASIS. ARBITRATION ON AN INDIVIDUAL BASIS MEANS THAT YOU WILL NOT HAVE, AND YOU WAIVE, THE RIGHT FOR A JUDGE OR JURY TO DECIDE YOUR CLAIMS, AND THAT YOU MAY NOT PROCEED IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE CAPACITY. Other rights that you and we would otherwise have in court will not be available or will be more limited in arbitration, including discovery and appeals rights. Arbitration shall take place in New York, New York. The number of arbitrators shall be three (3). The language of the proceeding shall be English. The governing law shall be the substantive law of New York.`,
    },
    {
      id: "electronic",
      title: "Electronic Communications",
      content: `Visiting the Website, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all notices, disclosures, and other communications we provide to you electronically, via email and on the site, satisfy any legal requirements that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC DELIVERY OF NOTICES, POLICIES BY US OR VIA THE WEBSITE. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.`,
    },
    {
      id: "miscellaneous",
      title: "Miscellaneous",
      content: `These Terms and any policies or operating rules posted by us on the Website or in respect to the Website constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right or provision. We may assign any or all of our rights or obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment, or agency relationship created by you and us as a result of these Terms or use of the Website. You agree that these Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms and the lack of signing by the parties hereto to execute these Terms.`,
    },
  ];

  return (
    <Section id="terms" className="section-alt">
      <div className="container">
        <Reveal>
          <h1 className="hero-title">Terms and Conditions</h1>
          <p className="section-intro" style={{ marginBottom: "32px" }}>
            Please read these terms carefully before using K3 Capital Solutions.
            By accessing this website, you agree to be bound by these Terms and
            Conditions.
          </p>
        </Reveal>

        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              marginBottom: "32px",
              padding: "16px",
              backgroundColor: "var(--surface-alt)",
              borderRadius: "8px",
              borderLeft: "4px solid var(--highlight-bar)",
            }}
          >
            <strong>Last Updated:</strong> December 2025
          </p>

          {sections.map((section) => (
            <Reveal key={section.id} delay={0.05}>
              <div
                style={{
                  marginBottom: "16px",
                  borderBottom: "1px solid var(--divider)",
                }}
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  style={{
                    width: "100%",
                    padding: "18px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "left",
                    fontSize: "1.05rem",
                    fontWeight: "600",
                    color: "var(--brand-navy)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#3a7ca5";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--brand-navy)";
                  }}
                >
                  {section.title}
                  <span
                    style={{
                      transform:
                        expandedSection === section.id
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                      fontSize: "1.2rem",
                      marginLeft: "12px",
                    }}
                  >
                    ▼
                  </span>
                </button>
                {expandedSection === section.id && (
                  <div style={{ padding: "0 18px 18px" }}>
                    {section.content.split("\n\n").map((paragraph, idx) => (
                      <p
                        key={idx}
                        style={{
                          marginBottom: "12px",
                          color: "var(--text-muted)",
                          lineHeight: "1.7",
                          fontSize: "0.95rem",
                        }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <div
          style={{
            marginTop: "48px",
            padding: "24px",
            backgroundColor: "var(--surface-alt)",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
            If you have any questions about these Terms, please contact us at{" "}
            <a
              href="mailto:hello@k3capital.com"
              style={{
                color: "#3a7ca5",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              hello@k3capital.com
            </a>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 1000px;
          }
        }
      `}</style>
    </Section>
  );
}
