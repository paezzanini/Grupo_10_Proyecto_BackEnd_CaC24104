package com.ar.spa;
public class Usuario {

    private int id_usuarios;
    private String nombre;
    private String apellido;
    private String email;
    private String pass;
    private String fecha_nac; //fecha
    private String pais;

    public Usuario(){

    }

    public Usuario(int id_usuarios, String nombre, String apellido, String email, String pass, String fecha_nac,
            String pais) {
        this.id_usuarios = id_usuarios;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.pass = pass;
        this.fecha_nac = fecha_nac;
        this.pais = pais;
    }

    public int getId_usuarios() {
        return id_usuarios;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getFecha_nac() {
        return fecha_nac;
    }

    public void setFecha_nac(String fecha_nac) {
        this.fecha_nac = fecha_nac;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }
    
   

}
