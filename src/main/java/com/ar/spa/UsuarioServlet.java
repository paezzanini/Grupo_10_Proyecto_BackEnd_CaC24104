package com.ar.spa;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

@WebServlet("/usuarios") /* http://server/usuarios */
public class UsuarioServlet extends HttpServlet {

    private UsuarioDAO usuarioDAO = new UsuarioDAO();
    private ObjectMapper objectMapper = new ObjectMapper();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "*");
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type");

        req.setCharacterEncoding("UTF-8");
        resp.setCharacterEncoding("UTF-8");

        Usuario usuario = objectMapper.readValue(req.getInputStream(), Usuario.class);
        Integer id = usuarioDAO.insertUsuario(usuario);
        String jsonResponse = objectMapper.writeValueAsString(id);
        resp.setContentType("application/json");
        resp.getWriter().write(jsonResponse);

        resp.setStatus(HttpServletResponse.SC_CREATED); //201

    }


    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "*");
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type");

        req.setCharacterEncoding("UTF-8");
        resp.setCharacterEncoding("UTF-8");

        try {
            List<Usuario> usuarios = usuarioDAO.getAllUsuarios();
            String jsonResp = objectMapper.writeValueAsString(usuarios);
            resp.setContentType("application/json");
            resp.getWriter().write(jsonResp);

        } catch (NumberFormatException e) {
            resp.sendError(HttpServletResponse.SC_BAD_REQUEST, "ID invalido");
            e.printStackTrace();
        }

    }

    
}

    


