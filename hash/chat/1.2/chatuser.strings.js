
//============================================================================

// Copyright (c) Base Digitale Platform. All rights reserved.

//============================================================================

"use strict";

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Ifm.Chat.Strings constants

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

namespace("Ifm.Chat.Strings");

(function(ns) {

    // English
    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    ns.en = {
        // Browser Alert (take care: does not allow accented characters)
        UnloadPageConfirm   : "If you leave the page, you close the conversation!",
        // Messages
        Confirm             : "Are you sure?",
        ServiceUnavailable  : "Service unavailable at the moment.<br>Please try again later.",
        ConnectionLost      : "Connection lost",
        SenderIsUser        : "You",
        ChatStateComposing  : "is writing...",
        // Commands:
        Disconnect          : "Disconnect",
        DisconnectConfirm   : "Confirm?",
        DisconnectConfirmNo : "No",
        DisconnectConfirmYo : "Yes",

        //BotNickname         : "Bob the bot",
        BotNickname         : "Synthetic",

        FileTransfer: {
            NotAvailable    : "File transfer not available",
            NotAvailOther   : "File transfer not available with this user",
            TransferTitle   : "File", // + filename + status
            Complete        : "transferred", // in chat history
            // Commands:
            Accept          : "Accept",
            Cancel          : "Cancel",
            Open            : "Open",
            // Status:
            Waiting         : "waiting",
            Canceled        : "canceled",
            Error           : "error",
            Receiving       : "receiving",
            Sending         : "sending",
            Received        : "received",
            Sent            : "sent"
        }
    }

    // Italian
    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    ns.it = {
        // Browser Alert (take care: does not allow accented characters)
        UnloadPageConfirm   : "Se lasci questa pagina, la conversazione viene chiusa!",
        // Messages
        Confirm             : "Sei sicuro?",
        ServiceUnavailable  : "Servizio attualmente non disponibile.<br>Riprova pi&ugrave; tardi.",
        ConnectionLost      : "Caduta connessione",
        SenderIsUser        : "Tu",
        ChatStateComposing  : "sta scrivendo...",
        // Commands:
        Disconnect          : "Disconnetti",
        DisconnectConfirm   : "Confermi?",
        DisconnectConfirmNo : "No",
        DisconnectConfirmYo : "Si",

        //BotNickname         : "Rob il bot",
        BotNickname         : "Synthetic",

        FileTransfer: {
            NotAvailable    : "Trasferimento file non disponibile",
            NotAvailOther   : "Trasferimento file non disponibile con questo utente",
            TransferTitle   : "File", // + filename + status
            Complete        : "trasferito", // in chat history
            // Commands:
            Accept          : "Accetta",
            Cancel          : "Annulla",
            Open            : "Apri",
            // Status:
            Waiting         : "in attesa",
            Canceled        : "annullato",
            Error           : "errore",
            Receiving       : "ricezione",
            Sending         : "invio",
            Received        : "ricevuto",
            Sent            : "inviato"
        }
    }

})(Ifm.Chat.Strings);
