import React from "react";
import { Table } from "reactstrap";

const Restrictions = () => {
  return (
    <>
      <h2>
        Naughty List <i className="fas fa-poop"></i>
      </h2>
      <Table>
        <thead>
          <tr>
            <th>Brokerage</th>
            <th>Restrictions</th>
            <th>Purchase Allowment</th>
            <th>Tickers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                href="https://robinhood.com/us/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Robinhood
              </a>
            </td>
            <td>Shares, Options</td>
            <td>1-5 Shares, 10options/Standard Limits</td>
            <td className="rh">
              AAL, ACB, AG, AMC, AMD, BB, BBBY, BYDDY, BYND, CCIV, CLOV, CRIS,
              CTRM, EXPR, EZGO, GM, GME, GTE, HIMS. INO, IPOE, IPOF, JAGX, KOSS,
              LLIT, MRNA, NAKD, NCTY, NOK, NVAX, OPEN, RLX, RKT, RYCEY, SBUX,
              SHLS, SIEB, SLV, SNDL, SOXL, SRNE, STPK, TGC, TIRX, TR, TRVG,
              WKHS, XM, ZOM
            </td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www.schwab.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Charles Schwab
              </a>
            </td>
            <td>Increased Margin, Limiting Options Contracts</td>
            <td>Varies</td>
            <td>None</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www.trading212.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trading212
              </a>
            </td>
            <td>Increased Margin, Limiting Options Contracts</td>
            <td>Varies</td>
            <td>None</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www1.interactivebrokers.com/en/home.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                Interactive Brokers
              </a>
            </td>
            <td>Increased Margin, Limiting Options Contracts</td>
            <td>Varies</td>
            <td>None</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://invest.ameritrade.com/grid/p/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                TD Ameritrade
              </a>
            </td>
            <td>Increased Margin, Limiting Options Contracts</td>
            <td>Varies</td>
            <td>
              AMC, CVM, EXPR, FOSL, GME, NOK, BB, BBBY, FIZZ, GSX, IRBT, NCMI,
              TR, UONE, VIR, NAK, NAKD, DDS, KOSS
            </td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www.apexclearing.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apex Clearing
              </a>
            </td>
            <td>Restricting Trading</td>
            <td>Varies</td>
            <td>
              *Not a brokerage but a clearing firm that executes trades on
              behalf of brokers. Becareful if your broker uses this clearing
              firm to execute trades.
            </td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www.banking.barclaysus.com/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Barclays
              </a>
            </td>
            <td>Restricting Trading</td>
            <td>Varies</td>
            <td>
              *Not a brokerage but a clearing firm that executes trades on
              behalf of brokers. Becareful if your broker uses this clearing
              firm to execute trades.
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Restrictions;
