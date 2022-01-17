import React, { useEffect, useState } from 'react';
import logo from './../invoice/amaco-logo.png';
import url from '../invoice/InvoiceService';
function Header() {
  const [state, setstate] = useState([])
  useEffect(() => {
    url.get('company').then(({ data }) => {
      setstate(data[0])
    })
  }, [])
  return (
    <thead style={{ display: "table-header-group", marginTop: '20px' }} >
      <tr>

        <td>
          <div class="empty-header">
            {/* <header> */}
            <div className="px-2 flex justify-between">
              <div className="flex">
                <div className="pr-12">
                  {localStorage.getItem('division') == 3 ? <>
                    <img src={state?.image1} alt="logo" style={{ marginLeft: '15px', width: 237 }} />
                  </> : <>
                    <img src={state?.image1} alt="logo" style={{ marginLeft: '15px', width: 237 }} />

                  </>}

                </div>

                <div className="viewer__order-info px-4 mb-4 flex justify-between">
                </div>
              </div>
              <div className="flex pr-4 mr-1">
                <div style={{ marginLeft: '50px' }}>
                  <h2 style={{ color: '#1d2257', textAlign: 'right' }}>
                    {
                      localStorage.getItem('division') == 3 ? <>
                        شركة أماكو مانيفاكترنج اند أندستريل سيرفيزيس المحدودة
                      </> : <>
                        {state?.arabic_name}
                      </>
                    }


                  </h2>

                  {
                    localStorage.getItem('division') == 3 ? <>
                      <h3 style={{ color: '#1d2257', textAlign: 'right', fontSize: 20 }}>
                        {/* AMACO ARABIA CONTRACTING COMPANY */}
                        Amaco Manufacturing & Industrial Services Pvt. Ltd.

                      </h3>
                    </> : <>
                      <h3 style={{ color: '#1d2257', textAlign: 'right', fontSize: 20 }}>
                        {/* AMACO ARABIA CONTRACTING COMPANY */}
                        {state?.name}

                      </h3>
                    </>
                  }
                  <h5 style={{ color: '#555', textAlign: 'right', fontSize: 17 }} className="font-normal b-4 capitalize">
                    C.R.
                    {localStorage.getItem('division') == 3 ? <>2055017282</> : <> {state?.cr_no} </>}
                    | VAT  {localStorage.getItem('division') == 3 ? <>310398615200003</> : <>{state?.vat_no}</>}


                  </h5>

                </div>
              </div>
            </div>
            {/* </header> */}
          </div>
        </td>


      </tr>
    </thead>

  )
}

export default Header
