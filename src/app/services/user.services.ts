class userlist{
    clientMap = new Map<string, string>()
    moderatorMap = new Map<string, string>() 

    addAccount(name : string, password : string, mode : string) : boolean{
        if(mode == 'client'){
            if(this.clientMap.has(name))
                return false;
            this.clientMap.set(name, password);
        }
        else
        if(mode == 'moderator'){
            if(this.moderatorMap.has(name))
                return false;
            this.clientMap.set(name, password);
        }
        else return false;
        return true;
    }

    validate(mode : string) : boolean{
        if(mode == 'client'){
            return  false;
        }
        else
        if(mode == 'moderator'){
            return true;
        }
        return false;
    }
}