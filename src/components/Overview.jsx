import { Link } from 'react-router-dom';
import './Overview.css'
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const Overview = () => {
    const transactions = [
        { orderId: "#281209", status: 'Successful', transactionId: '131634495747', refundDate: 'Today, 08:45 PM', orderAmount: '$100' },
        { orderId: "#281208", status: 'Processing', transactionId: '131634495747', refundDate: 'Yesterday, 3:00 PM', orderAmount: '$100' },
        { orderId: "#281209", status: 'Successful', transactionId: '131634495747', refundDate: 'Yesterday, 3:00 PM', orderAmount: '$100' },
        { orderId: "#272209", status: 'Successful', transactionId: '131634495747', refundDate: '12 Jul 2023, 03:00 PM', orderAmount: '$100' },
        { orderId: "#281209", status: 'Successful', transactionId: '131634495747', refundDate: '12 Jul 2023, 03:00 PM', orderAmount: '$100' },
        { orderId: "#286209", status: 'Successful', transactionId: '131634495747', refundDate: '12 Jul 2023, 03:00 PM', orderAmount: '$100' },
    ];

    const getStatusColor = (status) => {
        return status === 'Processing' ? '#999999' : '#17B31B';
      };

    return (
        <div className='overview'>
            <div className="top">
                <h3>Overview</h3>
                <select id="monthSelector">
                    <option value="thisMonth">This Month</option>
                </select>
            </div>

            <div className="middle">
                <div className="paymentCard selected">
                    <div className="amount">
                        <div className="amountText">
                            <p>NextPayout</p>
                            <HelpOutlineOutlinedIcon style={{ width: "15px", color: "white" }}/>
                        </div>

                        <div className="amountMain">
                            <h3>$ 2,312.33</h3>
                            <div className="amountLink">
                                <Link to="/" className='link'>23 orders</Link>
                                <KeyboardArrowRightOutlinedIcon  style={{ color: "white" }}/>
                            </div>
                        </div>
                    </div>
                    <div className="nextPayoutDate">
                        <p>Next payout date:</p>
                        <p>Today, 4:00PM</p>
                    </div>
                </div>
                <div className="paymentCard">
                    <div className="amount">
                        <div className="amountText">
                            <p>Amount Processing</p>
                            <HelpOutlineOutlinedIcon  style={{ width: "15px", color: "#4D4D4D" }}/>
                        </div>

                        <div className="amountMain">
                            <h3>$ 92,312.20</h3>
                            <div className="amountLink">
                                <Link to="/" className='link'>13 orders</Link>
                                <KeyboardArrowRightOutlinedIcon style={{ color: "146EB4" }}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="paymentCard">
                    <div className="amount">
                        <div className="amountText">
                            <p>Amount Processed</p>
                            <HelpOutlineOutlinedIcon  sstyle={{ width: "15px", color: "#4D4D4D" }}/>
                        </div>

                        <div className="amountMain">
                            <h3>$ 23,92,312.19</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div className='text'>
                    <h3>Transactions | This Month</h3>
                </div>
                <div className="options">
                    <div
                        id={1}
                        className={`option`}
                    >
                        <p>Payouts (22)</p>
                    </div>
                    <div
                        id={2}
                        className={`option selected`}
                    >
                        <p>Refunds (6)</p>
                    </div>
                </div>

                <div className="transactionSection">
                    <div className="searchBar">
                        <SearchIcon alt="Search Icon" className="searchIcon" style={{ color: "#656565" }} />
                        <input type="text" placeholder="Order ID or transaction ID" />
                        <div className="right">
                            <div className="sort">
                                <p>Sort</p>
                                <ImportExportOutlinedIcon />
                            </div>
                            <div className="download">
                                <FileDownloadOutlinedIcon />
                            </div>
                        </div>
                    </div>

                    <div className="transactions">
                        <div className="transaction transactionHeader">
                            <div className="attributeName">Order Id</div>
                            <div className="attributeName">Status</div>
                            <div className="attributeName">Transaction Id</div>
                            <div className="attributeName">Refund date</div>
                            <div className="attributeName">Order amount</div>
                        </div>

                        {transactions.map((transaction, index) => (
                        <div key={index} className="transaction">
                            <div className="orderId">{transaction.orderId}</div>
                            <div className="status">
                                <div
                                    style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: getStatusColor(transaction.status),
                                    display: 'inline-block',
                                    marginRight: '5px',
                                    }}
                                ></div>
                                {transaction.status}
                            </div>
                            <div>{transaction.transactionId}</div>
                            <div>{transaction.refundDate}</div>
                            <div>{transaction.orderAmount}</div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Overview