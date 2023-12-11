import Nav from "../../components/nav";
import Transaction from "../../components/transaction";

export default function Transactions() {
  const data = {
    title: "Argent Bank Checking",
    amount: "$48,098.43",
    amountDescription: "Available balance",
  };
  return (
    <>
      <Nav />
      <main className="main bg-dark">
        <header className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">{data.title}</h3>
            <p className="account-amount">{data.amount}</p>
            <p className="account-amount-description">
              {data.amountDescription}
            </p>
          </div>
          <div className="account-content-wrapper cta">
            <button
              onClick={() => {
                console.log("allons voir cette transaction : ", data.title);
              }}
            >
              X
            </button>
          </div>
        </header>
        <section>
          <table>
            {/*  premiere ligne */}
            <tr>
              <th>Date</th>
              <th>Description</th>
              {/* separation ici */}
              <th>Amount</th>
              <th>Balance</th>
            </tr>
            <Transaction />
          </table>
        </section>
      </main>
    </>
  );
}
