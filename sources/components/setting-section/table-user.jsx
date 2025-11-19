import React from "react";
import IconAdmin from "../../assets/icon/clarity_employee-line.svg?react";
import IconOwner from "../../assets/icon/fluent-mdl2_party-leader.svg?react";
import IconOpenEye from "../../assets/icon/el_eye-open.svg?react";
import IconCloseEye from "../../assets/icon/el_eye-close.svg?react";
import IconEdit from "../../assets/icon/flowbite_edit-outline.svg?react";
import IconDelete from "../../assets/icon/material-symbols_delete.svg?react";

function TableUser() {
  return(
    <div className="table-user">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama Pengguna</th>
            <th>Email</th>
            <th>Jabatan</th>
            <th>Status</th>
            <th>Kata Sandi</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>Cristian</td>
            <td>cristian01@gmail.com</td>
            <td>Karyawan</td>
            <td>
                <p><IconAdmin className="icon greenIcon" /> Admin</p>
            </td>
            <td>admin123 <IconOpenEye className="icon blackIcon" /></td>
            <td>
              <IconEdit className="icon greenIcon" />
              <IconDelete className="icon redIcon" />
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Jonathan</td>
            <td>jonathan02@gmail.com</td>
            <td>Pemilik Perusahaan</td>
            <td>
                <p><IconOwner className="icon greenIcon" /> Pemilik</p>
            </td>
            <td>****** <IconCloseEye className="icon blackIcon" /></td>
            <td>
              <IconEdit className="icon greenIcon" />
              <IconDelete className="icon redIcon" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableUser;