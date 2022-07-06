package com.ngokngekboy.doctorcare.controller.doctor;

import com.ngokngekboy.doctorcare.dto.FindDoctorNameDTO;
import com.ngokngekboy.doctorcare.dto.LoginDTO;
import com.ngokngekboy.doctorcare.dto.SuccessDTO;
import com.ngokngekboy.doctorcare.dto.UpdatePasswordDTO;
import com.ngokngekboy.doctorcare.dto.doctor.*;
import com.ngokngekboy.doctorcare.dto.patient.DetailApointmentDTO;
import com.ngokngekboy.doctorcare.service.IDoctorSer;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@AllArgsConstructor
@RequestMapping("/doctor")
public class DoctorController {

    private IDoctorSer iDoctorSer;


    @PostMapping("/login")
    public ResponseEntity DoctorLogin(@RequestBody LoginDTO loginDTO)
    {
        SuccessDTO successDTO=iDoctorSer.DoctorLogin(loginDTO);
        if(successDTO==null)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.ok(successDTO);
    }
    @PostMapping("/renewpassword")
    public ResponseEntity DoctorRenewPassword(@RequestParam String token, @RequestBody UpdatePasswordDTO updatePasswordDTO)
    {
        boolean check=iDoctorSer.ForgotPassword(token,updatePasswordDTO);
        if(check)
        {
            return ResponseEntity.ok().build();
        }
        else
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
    @PostMapping("/forgotpassword")
    public ResponseEntity DoctorForgotPassword(@RequestBody ForgotPasswordDTO forgotPasswordDTO)
    {
        boolean check=iDoctorSer.SendResetPasswordDoctor(forgotPasswordDTO.getEmail());
        if(check)
            return ResponseEntity.ok().build();
        else
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
    @GetMapping("/danhsachbacsi")
    public ResponseEntity GetDanhSachBacSi()
    {
        List<InfoDoctor>infoDoctorList=iDoctorSer.GetDanhSachDocTor();
        return ResponseEntity.ok(infoDoctorList);
    }
    @GetMapping("/getbacsiedit")
    public ResponseEntity GetBacSiEdit(@RequestParam Long id)
    {
        InfoDoctor infoDoctor=iDoctorSer.GetDoctorEditId(id);
        if(infoDoctor!=null)
            return ResponseEntity.ok(infoDoctor);
        else
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
    @PostMapping("/getbacsibyname")
    public ResponseEntity GetBacSiByName(@RequestBody FindDoctorNameDTO findDoctorNameDTO)
    {
        List<InfoDoctor>infoDoctorList=iDoctorSer.GetDanhSachDocTorByName(findDoctorNameDTO.getName());
        return ResponseEntity.ok(infoDoctorList);
    }
    @PostMapping("/core/xinnghi")
    public ResponseEntity DoctorXinNghie(@RequestBody BacSiXinNghiDTO bacSiXinNghiDTO)
    {
        boolean check=iDoctorSer.BacSiXinNghiPhep(bacSiXinNghiDTO);
        if(check)
            return ResponseEntity.ok().build();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
    @GetMapping("/core/gettodayapointment")
    public ResponseEntity GetListTodayApointmentByDoctor()
    {
        List<DoctorTodayApointmentDTO>doctorTodayApointmentDTOList=iDoctorSer.GetTodayApointmentDoctor();
        return ResponseEntity.ok(doctorTodayApointmentDTOList);
    }
    @PostMapping("/core/khambenh")
    public ResponseEntity DoctorKhamBenh(@RequestParam Long lichhenid, @RequestBody KhamBenhDTO khamBenhDTO)
    {
        boolean check=iDoctorSer.KhamBenhAndChoThuoc(khamBenhDTO,lichhenid);
        if(check)
            return ResponseEntity.ok().build();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
    @GetMapping("/core/getallthuoc")
    public ResponseEntity DoctorGetAllThuoc ()
    {
        List<ThuocAvailableDoctorDTO>thuocAvailableDoctorDTOS=iDoctorSer.GetThuocAvailableDoctor();
        return ResponseEntity.ok(thuocAvailableDoctorDTOS);
    }
    @PostMapping("/core/getdetailthuocbyname")
    public ResponseEntity DocGetThuocByName(@RequestBody NameThuocDoctorDTO nameThuocDoctorDTO)
    {
        List<ThuocAvailableDoctorDTO>thuocAvailableDoctorDTOS=iDoctorSer.GetThuocAvailableDoctorByName(nameThuocDoctorDTO);
        return ResponseEntity.ok(thuocAvailableDoctorDTOS);
    }
    @GetMapping("/core/benhnhantungkhambenh")
    public ResponseEntity BenhNhanTungKhamBenh()
    {
        List<BenhNhanTungKhamBenhDTO>benhNhanTungKhamBenhDTOS=
                iDoctorSer.GetBenhNhanTungKhamBenh();
        return ResponseEntity.ok(benhNhanTungKhamBenhDTOS);
    }
    @PostMapping("/core/benhtungkhambenhtheotenoremail")
    public ResponseEntity BenhNhanTungKhamBenhTheoTenOrEmail(@RequestBody TenEmailPatientDTO tenEmailPatientDTO)
    {
        List<BenhNhanTungKhamBenhDTO>benhNhanTungKhamBenhDTOS=
                iDoctorSer.GetBenhNhanTungKhamBenhTheoTenOrEmail(tenEmailPatientDTO.getName_or_email());
        return ResponseEntity.ok(benhNhanTungKhamBenhDTOS);
    }
    @GetMapping("/core/hosbenhan")
    public ResponseEntity GetHoSoBenhAnDoctor(@RequestParam Long id)
    {
        List<HoSoBenhAnDTO>hoSoBenhAnDTOList=iDoctorSer.GetHoSoBenhAnBaseOnPatientId(id);
        return ResponseEntity.ok(hoSoBenhAnDTOList);
    }
    @GetMapping("/core/detailapointment")
    public ResponseEntity GetDetailApointmentBaseId(@RequestParam Long id)
    {
        DetailApointmentDTO detailApointmentDTO=iDoctorSer.GetDetailApointment(id);
        return ResponseEntity.ok(detailApointmentDTO);
    }
    @GetMapping("/core/dashboard")
    public ResponseEntity GetDashboard()
    {
        DashboardDTO dashboardDTO=iDoctorSer.GetDashboard();
        return ResponseEntity.ok(dashboardDTO);
    }
    @GetMapping("/core/topbenhnhantrongthang")
    public ResponseEntity GetTopBenhNhanTrongThang()
    {
        List<TopBenhNhanTrongThangDTO>topBenhNhanTrongThangDTOS=iDoctorSer.GetTopBenhNhanTrongThang();
        return ResponseEntity.ok(topBenhNhanTrongThangDTOS);
    }
    @GetMapping("/core/topthuocdungtrongthang")
    public ResponseEntity GetTopThuocTrongThang()
    {
        List<TopThuocTrongThangDTO>topBenhNhanTrongThangDTOS=iDoctorSer.GetThuocTrongThang();
        return ResponseEntity.ok(topBenhNhanTrongThangDTOS);
    }

}
