package com.ar.spa;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
//import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class UsuarioDAO {

    public Integer insertUsuario(Usuario usuario){

        DatabaseConnection conexion = new DatabaseConnection();
        Connection cn = conexion.conectar(); 

		//Statement stm = null;
        PreparedStatement pstm = null;
		ResultSet rs = null;
        String insertarUsuarioSql = "INSERT INTO usuarios(nombre,apellido,email,pass,fecha_nac, pais) VALUES (?,?,?,?,?,?)";
	
        try {
            pstm = cn.prepareStatement(insertarUsuarioSql);

            pstm.setString(1, usuario.getNombre());
            pstm.setString(2, usuario.getApellido());
            pstm.setString(3, usuario.getEmail());
            pstm.setString(4, usuario.getPass());
            pstm.setString(5, usuario.getFecha_nac());
            pstm.setString(6, usuario.getPais());
            
            int result = pstm.executeUpdate();
            
            if(result > 0){
                rs = pstm.getGeneratedKeys();
                if(rs.next()){
                    System.out.println("Se registro exitosamente un nuevo usuario");
                    return rs.getInt(1);
                }
                else{
                    System.out.println("Error al obtener el id del usuario registrado");;
                    return null;
                }

            }
            else{
                System.out.println("Hubo un error al registrar un nuevo usuario");
                return null;
            }


        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }

    public List<Usuario> getAllUsuarios(){
        DatabaseConnection conexion = new DatabaseConnection();
        Connection cn = conexion.conectar(); 
		//Statement stm = null;
        PreparedStatement pstm = null;
		ResultSet rs = null;
        String selectUsuariosSql = "SELECT * FROM usuarios";
        
        List<Usuario> usuarios = new ArrayList<>();
    
           try {
            /*stm = cn.createStatement();
            stm.executeQuery(insertarUsuarioSql);*/
            pstm = cn.prepareStatement(selectUsuariosSql);
            rs = pstm.executeQuery();
            while (rs.next()) {
                Integer id_usuarios = rs.getInt("id_usuarios");
                String nombre = rs.getString("nombre");
                String apellido = rs.getString("apellido");
                String email = rs.getString("email");
                String pass = rs.getString("pass");
                String fecha_nac = rs.getString("fecha_nac");
                String pais = rs.getString("pais");              

                Usuario usuario = new Usuario(id_usuarios, nombre, apellido, email, pass, fecha_nac, pais);
                
                usuarios.add(usuario);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
            return null;
       
        }

        return usuarios;
	
    }

}
