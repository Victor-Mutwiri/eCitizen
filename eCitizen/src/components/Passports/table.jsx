import './table.css'

export default function Table(){
    return (
        <table className="custom-table">
          <thead>
            <tr>
              <th>PASSPORT TYPE</th>
              <th>FEE (Ksh)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>32 Pages Ordinary "A" Series</td>
              <td>Kshs. 4,550</td>
            </tr>
            <tr>
              <td>48 pages Ordinary "B" Series</td>
              <td>Kshs. 6,050</td>
            </tr>
            <tr>
              <td>64 Pages Ordinary "C" Series</td>
              <td>Kshs. 7,550</td>
            </tr>
            <tr>
              <td>East African Passport</td>
              <td>Kshs. 990</td>
            </tr>
            <tr>
              <td>Diplomatic passport (48 page)</td>
              <td>Kshs. 7,550</td>
            </tr>
            <tr>
              <td>Mutilated Passport</td>
              <td>Kshs. 10,050</td>
            </tr>
            <tr>
              <td>Lost Passport</td>
              <td>Kshs. 12,050</td>
            </tr>
          </tbody>
        </table>
      );
}