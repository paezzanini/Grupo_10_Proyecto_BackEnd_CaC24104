package com.ar.spa;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
//import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class UsuarioDAO {

    public Integer insertUsuario(Usuario usuario) {
        String insertarUsuarioSql = "INSERT INTO usuarios(nombre,apellido,email,pass,fecha_nac,pais) VALUES (?,?,?,?,?,?)";
        try (Connection cn = new DatabaseConnection().conectar();
             PreparedStatement pstm = cn.prepareStatement(insertarUsuarioSql, PreparedStatement.RETURN_GENERATED_KEYS)) {

            pstm.setString(1, usuario.getNombre());
            pstm.setString(2, usuario.getApellido());
            pstm.setString(3, usuario.getEmail());
            pstm.setString(4, usuario.getPass());
            pstm.setString(5, usuario.getFecha_nac());
            pstm.setString(6, usuario.getPais());

            int result = pstm.executeUpdate();

            if (result > 0) {
                try (ResultSet rs = pstm.getGeneratedKeys()) {
                    if (rs.next()) {
                        System.out.println("Se registro exitosamente un nuevo usuario");
                        return rs.getInt(1);
                    } else {
                        System.out.println("Error al obtener el id del usuario registrado");
                        return null;
                    }
                }
            } else {
                System.out.println("Hubo un error al registrar un nuevo usuario");
                return null;
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    public List<Usuario> getAllUsuarios() {
        String selectUsuariosSql = "SELECT * FROM usuarios";
        List<Usuario> usuarios = new ArrayList<>();

        try (Connection cn = new DatabaseConnection().conectar();
             PreparedStatement pstm = cn.prepareStatement(selectUsuariosSql);
             ResultSet rs = pstm.executeQuery()) {

            while (rs.next()) {
                Integer id_usuarios = rs.getInt("id_usuarios");
                String nombre = rs.getString("nombre");
                String apellido = rs.getString("apellido");
                String email = rs.getString("email");
                String pass = rs.getString("pass");
                Date fecha_Nac_Date = rs.getDate("fecha_nac");
               // String fecha_nac = rs.getString("fecha_nac");
                String pais = rs.getString("pais");
                String fecha_nac = new SimpleDateFormat("yyyy-MM-dd").format(fecha_Nac_Date);

                Usuario usuario = new Usuario(id_usuarios, nombre, apellido, email, pass, fecha_nac, pais);
                usuarios.add(usuario);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }

        return usuarios;
    }

}
