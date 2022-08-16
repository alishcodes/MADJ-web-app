package com.madj;

import javax.mail.*;
import javax.mail.internet.*;
import javax.mail.PasswordAuthentication;
import java.util.Properties;
/**
 * Mailer helper class to handle emails.
 * @author  Jonathan Navarro
 * @author Mitchel Mercer
 * @version 1.0
 * @since 2022-08-15
 * @see Transport
 */
public class Mailer {
    private static final String SMTP_AUTH_USER = System.getenv("EMAILNAME");
    private static final String SMTP_AUTH_PWD  = System.getenv("EMAILPASS");

    /**
     * Send email from company email to recipient. Uses outlook host.
     * @param to The recipient of the email.
     * @param subject The email's subject.
     * @param body The email's contents.
     */
    public static void send(String to, String subject, String body){
        // set email properties
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "outlook.office365.com");
        props.put("mail.smtp.port", "587");

        // generate session information for authentication
        Session session = Session.getInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(SMTP_AUTH_USER, SMTP_AUTH_PWD);
                    }
                });

        // try to send email
        try {
            // set recipients and email contents
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(SMTP_AUTH_USER));
            message.setRecipients(Message.RecipientType.TO,
                    InternetAddress.parse(to));
            message.setSubject(subject);
            message.setContent(body, "text/html"); // contents are written in HTML

            // send the email
            Transport.send(message);

            System.out.println("Email sent successfully");

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}