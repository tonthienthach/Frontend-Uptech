import React from 'react';
import classNames from 'classnames/bind';
import styles from './EmployeeManager.module.scss';
import ListEmployee from './ListEmployee/ListEmployee';
import EmployeeListItem from '../../../components/EmployeeListItem';
import SidebarAdmin from '../../../Layout/components/SidebarAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const cx = classNames.bind(styles);
function EmployeeManager() {
    const [employeeListItems, setEmployeeListItems] = useState([
        { id: 1, name: 'Trần Thị Trà My', phone: '0938049556', address: '566 Nguyễn Thái Sơn, F5, Q.GV, TP.HCM' },
        { id: 2, name: 'Trần Thị Trà My', phone: '0938049556', address: '566 Nguyễn Thái Sơn, F5, Q.GV, TP.HCM' },
        { id: 3, name: 'Trần Thị Trà My', phone: '0938049556', address: '566 Nguyễn Thái Sơn, F5, Q.GV, TP.HCM' },
        { id: 4, name: 'Trần Thị Trà My', phone: '0938049556', address: '566 Nguyễn Thái Sơn, F5, Q.GV, TP.HCM' },
        { id: 5, name: 'Trần Thị Trà My', phone: '0938049556', address: '566 Nguyễn Thái Sơn, F5, Q.GV, TP.HCM' },
    ]);

    const deleteItem = (itemId) => {
        const shouldDelete = window.confirm('Bạn có muốn xóa nhân viên này không?');
        if (shouldDelete) {
            setEmployeeListItems((prevEmployeeListItems) => prevEmployeeListItems.filter((item) => item.id !== itemId));
        }
    };
    const [currentPage, setCurrentPage] = useState(1); // page mặc định là 1
    const totalPages = Math.ceil(employeeListItems.length / 5); // số page mỗi page 5 item
    const pageItems = [];
    for (let i = 1; i <= totalPages; i++) {
        pageItems.push(i);
    }
    const startIndex = (currentPage - 1) * 5; // item bắt đầu cho mỗi page
    const endIndex = startIndex + 5; // item kết thúc cho mỗi page
    const currentItems = employeeListItems.slice(startIndex, endIndex); // item cho page hiện tại

    const [addEmployee, setAddEmpolyee] = useState(false);
    const showAddEmployeeModal = () => setAddEmpolyee(true);
    const closeAddEmployeeModal = () => setAddEmpolyee(false);

    return (
        <div className={cx('container-fluid')}>
            <div className={cx('row')}>
                <SidebarAdmin />
                <div className={cx('col-12 col-md-9 col-xl-10 container-fluid', 'content-section')}>
                    <div className={cx('d-flex align-items-center ', 'title')}>Quản lý nhân viên</div>
                    <div className={cx('wrapper')}>
                        <div className={cx('content')}>
                            <div className={cx('container-fluid')}>
                                <div className={cx('add-btn')}>
                                    <button
                                        className={cx('btn btn-primary btn-lg font-weight-bold')}
                                        onClick={showAddEmployeeModal}
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                        Thêm
                                    </button>
                                </div>
                                <div className={cx('row align-items-center', 'header')}>
                                    <div className={cx('col-lg-1 col-md-1 d-flex justify-content-center')}>
                                        <p>ID</p>
                                    </div>
                                    <div className={cx('col-lg-3 col-md-3 d-flex justify-content-center')}>
                                        <p>Họ và tên</p>
                                    </div>
                                    <div className={cx('col-lg-2 col-md-2 d-flex justify-content-center')}>
                                        <p>SĐT</p>
                                    </div>
                                    <div className={cx('col-lg-4 col-md-4 d-flex justify-content-center')}>
                                        <p>Địa chỉ</p>
                                    </div>
                                    <div className={cx('col-lg-2 col-md-2 d-flex justify-content-center')}>
                                        <p>Thao tác</p>
                                    </div>
                                </div>
                                <div className={cx('row align-items-center', 'employee-list')}>
                                    <ListEmployee>
                                        {currentItems.map((item) => (
                                            <EmployeeListItem
                                                key={item.id}
                                                fullname={item.name}
                                                phone={item.phone}
                                                address={item.address}
                                                deleteItem={() => deleteItem(item.id)}
                                            />
                                        ))}
                                    </ListEmployee>
                                </div>
                                <div className={cx('d-flex justify-content-center', 'paging')}>
                                    <ul className={cx('pagination pagination-lg')}>
                                        {currentPage === 1 ? (
                                            <li className={cx('page-item disabled')}>
                                                <span className={cx('page-link')}>Trước</span>
                                            </li>
                                        ) : (
                                            <li className={cx('page-item')}>
                                                <span
                                                    onClick={() => setCurrentPage(currentPage - 1)}
                                                    className={cx('page-link')}
                                                >
                                                    Trước
                                                </span>
                                            </li>
                                        )}
                                        {pageItems.map((index) =>
                                            currentPage === index ? (
                                                <li className={cx('page-item active')}>
                                                    <span className={cx('page-link')}>{index}</span>
                                                </li>
                                            ) : (
                                                <li className={cx('page-item')}>
                                                    <span
                                                        onClick={() => setCurrentPage(index)}
                                                        className={cx('page-link')}
                                                    >
                                                        {index}
                                                    </span>
                                                </li>
                                            ),
                                        )}
                                        {currentPage === totalPages ? (
                                            <li className={cx('page-item disabled')}>
                                                <span className={cx('page-link')}>Sau</span>
                                            </li>
                                        ) : (
                                            <li className={cx('page-item')}>
                                                <span
                                                    onClick={() => setCurrentPage(currentPage + 1)}
                                                    className={cx('page-link')}
                                                >
                                                    Sau
                                                </span>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal show={addEmployee} onHide={closeAddEmployeeModal} className={cx('add-employee-modal')}>
                        <Modal.Header closeButton>
                            <div className={cx('title-modal')}>Thêm nhân viên</div>
                        </Modal.Header>
                        <Modal.Body>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-3 col-md-3', 'heading-modal')}>
                                    <div>Tên:</div>
                                </div>
                                <input type="text" className={cx('col-lg-9 col-md-9')} />
                            </div>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-3 col-md-3', 'heading-modal')}>
                                    <div>Email:</div>
                                </div>
                                <input type="email" className={cx('col-lg-9 col-md-9')} />
                            </div>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-3 col-md-3', 'heading-modal')}>
                                    <div>Mật khẩu:</div>
                                </div>
                                <input type="password" className={cx('col-lg-9 col-md-9')} />
                            </div>

                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-3 col-md-3', 'heading-modal')}>
                                    <div>Số điện thoại:</div>
                                </div>
                                <input type="text" className={cx('col-lg-9 col-md-9')} />
                            </div>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-3 col-md-3', 'heading-modal')}>
                                    <div>Địa chỉ:</div>
                                </div>
                                <input type="text" className={cx('col-lg-9 col-md-9')} />
                            </div>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-3 col-md-3', 'heading-modal')}>
                                    <div>Ngày sinh:</div>
                                </div>
                                <input type="date" className={cx('col-lg-9 col-md-9')} />
                            </div>
                            <div className={cx('row align-items-center')}>
                                <div className={cx('col-lg-3 col-md-3', 'heading-modal')}>
                                    <div>Giới tính:</div>
                                </div>
                                <span className={cx('col-lg-9 col-md-9', 'gender')}>
                                    <input type="radio" id="male" name="gender" value="male" />
                                    <label for="male">Nam</label>
                                    <input type="radio" id="female" name="gender" value="female" />
                                    <label for="female">Nữ</label>
                                </span>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button className={cx('btn btn-secondary btn-lg')} onClick={closeAddEmployeeModal}>
                                Đóng
                            </button>
                            <button className={cx('btn btn-primary btn-lg')} onClick={closeAddEmployeeModal}>
                                Thêm
                            </button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default EmployeeManager;