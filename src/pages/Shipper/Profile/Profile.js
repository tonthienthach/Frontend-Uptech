import React, { useEffect, useRef } from 'react';
import styles from './Profile.module.scss'
import classNames from 'classnames/bind';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import SidebarAdmin from '../../../Layout/components/SidebarAdmin';
import SidebarAdminMobi from '../../../Layout/components/SidebarAdmin/SidebarAdminMobi';

const cx = classNames.bind(styles)

function Profile() {
    const datePickerRef = useRef(null);
    useEffect(() => {
        flatpickr(datePickerRef.current, {
          dateFormat: 'd/m/Y',
          // Các tùy chọn khác cho date picker
        });
      }, []);

    return (  
        <div className={cx('d-flex', 'page')}>
            <div className={cx('col-lg-3 col-xl-2 d-none d-xl-block', 'sidebar-wrapper')}>
                    <SidebarAdmin />
                </div>
                <div className={cx('d-block d-xl-none', 'sidebar-mobi-wrapper')}>
                    <SidebarAdminMobi />
                </div>
            <div class={cx('container')}>
                <div className={cx('d-flex align-items-center', 'section')}>Hồ sơ</div>
                <div className={cx('row justify-content-center','col-lg-12')}>
                    <div className={cx('form_profile','row justify-content-center','col-lg-11')}>
                        <div class={cx('float-left')}>
                            <p class={cx('title')}>Hồ sơ của tôi</p>
                        </div>
                        <div class="row justify-content-center">
                            <div class={cx('d-inline', 'col-md-12', 'centerP')}>
                                <div class={cx('left')}>
                                    <div class={cx('avatar', 'justify-content-center')}>
                                        <img src="https://vapa.vn/wp-content/uploads/2022/12/hinh-anh-sans-ngau-nhat-001.jpg" class="rounded-circle avatar" alt="Ảnh"/>
                                    </div>
                                    <div class={cx('file')}>
                                        <input type="file" class={cx('form-control')}/>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <form action="/Web/editProfile">
                                    <div class={cx('d-inline', 'col-md-8')}>
                                        <div class={cx('profile__input', 'd-flex')}>
                                        <p>
                                            Tên
                                        </p>
                                        <input type="text" class={cx('form-control')} value="${sessionScope.acc.fullName}"
                                            name="name" required="" />
                                        </div>
                                        <div class={cx('profile__input', 'd-flex')}>
                                        <p>
                                            Email
                                        </p>
                                        <input type="text" class={cx('form-control')} value="${sessionScope.acc.phone}"
                                            name="email" required="" />
                                        </div>
                                        <div class={cx('profile__input', 'd-flex')}>
                                        <p>
                                            Số điện thoại
                                        </p>
                                        <input type="text" class={cx('form-control')} value="${sessionScope.acc.address}"
                                            name="phone" required="" />
                                        </div>
                                        <div class={cx('form-check', 'd-flex')}>
                                            <p>Giới tính</p>
                                            <div class={cx('form-check-content')}>
                                                <input class="form-check-input" type="checkbox" id="checkbox1"/>
                                                <label class="form-check-label" for="checkbox1">
                                                    Nam
                                                </label>
                                                <input class="form-check-input" type="checkbox" id="checkbox1"/>
                                                <label class="form-check-label" for="checkbox1">
                                                    Nữ
                                                </label>
                                            </div>
                                        </div>
                                        <div class={cx('profile__input', 'd-flex')}>
                                            <p>Ngày sinh</p>                        
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="datepicker"
                                                placeholder="Chọn ngày"
                                                ref={datePickerRef}
                                            />
                                        </div>
                                        <div class={cx('button_Luu')} style={{ padding: '15px' }}>
                                            <input type="button" value="Lưu" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}
export default Profile;