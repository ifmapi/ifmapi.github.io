
//============================================================================

// Copyright (c) IFM Infomaster. All rights reserved.

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
        UnloadPageConfirm   : "If you leave the page, you will lose any conversation open and you won't be able to receive new calls!",
        // Messages
        NoBrowserSupport    : "Your browser does not support WebSockets",
        DisconnectConfirm   : "If you disconnect, you will close any conversation open and you won't be able to receive new calls!",
        Confirm             : "Are you sure?",
        Connecting          : "Connecting",
        Disconnecting       : "Disconnecting",
        NotConnected        : "Not connected",
        Error               : "Error",
        PhoneBarNotFound    : "Cannot connect to the PhoneBar.",
        RunRetryPhoneBar    : "Check your settings, verify the PhoneBar is running and try again.",
        OpenFireNotFound    : "Cannot connect to the XMPP server.",
        RunRetryOpenFire    : "Check your settings, verify you are connected to the network and try again.",
        CallFailed          : "Call failed.",
        TransferFailed      : "Transfer request failed.",
        // Dialogs
        ButtonOK            : "OK",
        ButtonCancel        : "Cancel",
        ButtonRetry         : "Retry",
        ButtonConnect       : "Connect",
        ButtonDisconnect    : "Disconnect",
        ButtonHangup        : "Hangup",
        ButtonTransfer      : "Transfer",
        // UI
        ChatClosed          : "Conversation ended.",
        ChatCloseTab        : "Close",
        ChatInPostCallWork  : "You're in post-call work.",
        ChatGoAvailable     : "Finish",
        ChatStateComposing  : "is writing...",
        ChatStateTalking    : "Chatting",
        ChatStateClosed     : "Chat terminated",

        EventAssignment     : "Incoming call",
        EventFailed         : "Call failed",

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
        UnloadPageConfirm   : "Se chiudi questa pagina, le conversazioni attive saranno perdute e non potrai ricevere nuove chiamate!",
        // Messages
        NoBrowserSupport    : "Il tuo browser non supporta i WebSockets",
        DisconnectConfirm   : "Se ti disconnetti, le conversazioni attive saranno chiuse e non potrai ricevere nuove chiamate!",
        Confirm             : "Sei sicuro?",
        Connecting          : "Connessione",
        Disconnecting       : "Disconnessione",
        NotConnected        : "Non connesso",
        Error               : "Errore",
        PhoneBarNotFound    : "Impossibile connettersi alla PhoneBar.",
        RunRetryPhoneBar    : "Controlla le impostazioni, verifica che la PhoneBar sia in esecuzione e riprova.",
        OpenFireNotFound    : "Impossibile connettersi al server XMPP.",
        RunRetryOpenFire    : "Controlla le impostazioni, verifica la connessione di rete e riprova.",
        CallFailed          : "Chiamata fallita.",
        TransferFailed      : "Richiesta di trasferimento fallita.",
        // Dialogs
        ButtonOK            : "OK",
        ButtonCancel        : "Annulla",
        ButtonRetry         : "Riprova",
        ButtonConnect       : "Accedi",
        ButtonDisconnect    : "Esci",
        ButtonHangup        : "Aggancia",
        ButtonTransfer      : "Trasferisci",
        // UI
        ChatClosed          : "La conversazione &egrave; finita.",
        ChatCloseTab        : "Chiudi",
        ChatInPostCallWork  : "Sei in post-chiamata.",
        ChatGoAvailable     : "Ho finito",
        ChatStateComposing  : "sta scrivendo...",
        ChatStateTalking    : "In conversazione",
        ChatStateClosed     : "Conversazione chiusa",

        EventAssignment     : "Chiamata in arrivo",
        EventFailed         : "Chiamata fallita",

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
