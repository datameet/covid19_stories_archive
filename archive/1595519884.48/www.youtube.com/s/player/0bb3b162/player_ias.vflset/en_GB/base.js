var _yt_player={};(function(g){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ca,ea,aaa,ia,ka,oa,pa,qa,sa,ta,ua,baa,caa,va,daa,wa,xa,ya,eaa,Aa,Ba,Ca,Da,Ea,Fa,Ga,Ia,La,Ma,haa,iaa,Va,Wa,Xa,jaa,kaa,laa,Ya,maa,$a,naa,oaa,paa,ib,qaa,pb,qb,raa,vb,sb,saa,tb,taa,uaa,vaa,Cb,Eb,Fb,Jb,Lb,Mb,Vb,Xb,$b,ac,fc,gc,yaa,hc,ic,jc,rc,sc,uc,Fc,Gc,Hc,Mc,Kc,Caa,Faa,Gaa,Haa,Qc,Rc,Tc,Sc,Wc,Zc,Iaa,Jaa,Yc,ad,Kaa,fd,gd,hd,id,md,od,pd,Naa,qd,rd,vd,wd,xd,yd,zd,Ad,Bd,Dd,Fd,Gd,Id,Jd,Kd,Paa,Ld,Md,Nd,Od,Raa,Pd,Wd,Yd,ae,ee,fe,ke,le,oe,me,qe,se,re,Vaa,ce,Ge,Ee,Fe,Ie,He,be,Xaa,Je,Ke,Yaa,Pe,Re,Se,Ve,$aa,We,
Xe,Ye,Ze,af,cf,aba,$e,jf,kf,ff,nf,mf,cba,df,bf,qf,rf,sf,tf,vf,eba,wf,xf,fba,Cf,Ef,Gf,Hf,Jf,Kf,Lf,Nf,Of,gba,Qf,Sf,Tf,Pf,Rf,Ff,Mf,iba,Wf,Uf,Vf,Yf,hba,Xf,bg,dg,jba,kba,lba,mba,nba,oba,pba,hg,jg,gg,lg,mg,ng,og,pg,qg,rg,sg,tg,ug,qba,zg,vg,Bg,Cg,Dg,Eg,Fg,Ig,Jg,Kg,Lg,Mg,Ng,Og,Pg,Ug,Sg,Vg,rba,Wg,Xg,Yg,Zg,Tg,$g,bh,ah,ch,dh,eh,fh,gh,hh,ih,jh,kh,nh,ph,oh,qh,rh,uba,wba,xba,zba,uh,vh,xh,yh,Eh,Fh,Ih,Jh,Kh,Nh,Mh,Oh,Gh,Aba,Xh,Yh,Zh,Bba,$h,ai,bi,ci,di,ei,fi,Cba,gi,hi,ii,Dba,Eba,ji,li,ki,ni,oi,ri,pi,Gba,qi,si,ti,vi,
ui,wi,Hba,xi,Jba,Iba,Kba,Ai,Lba,Ci,Di,Ei,Bi,Fi,Mba,Gi,Nba,Ii,Qba,Ji,Ki,Li,Mi,Rba,Oi,Qi,Ti,Wi,Yi,Vi,Ui,Zi,Sba,$i,aj,bj,cj,Uba,hj,ij,Wba,jj,kj,lj,mj,nj,Xba,pj,qj,rj,sj,uj,tj,Yba,Zba,$ba,vj,xj,yj,zj,Bj,Cj,Dj,Ej,Fj,Aj,Gj,Hj,Ij,aca,bca,Jj,Kj,cca,Lj,Mj,dca,Oj,eca,Pj,Qj,Rj,fca,Sj,Tj,Vj,Xj,Yj,Zj,ak,bk,Uj,Wj,hca,ck,dk,ek,fk,gk,hk,lca,mca,nca,ik,kk,oca,pca,qca,mk,nk,rca,ok,sca,pk,tca,qk,rk,sk,uca,tk,vk,wk,xk,yk,zk,Ak,Bk,Ck,vca,wca,Dk,xca,Fk,Ek,Ik,Jk,Hk,yca,Cca,Bca,Lk,Dca,Eca,Fca,Hca,Gca,Ica,Mk,Ok,Qk,Rk,Sk,
Kca,Uk,Vk,Lca,Mca,Wk,Xk,Yk,Zk,Nca,$k,al,Oca,bl,cl,Qca,dl,el,gl,hl,jl,kl,ll,nl,ol,pl,rl,sl,fl,tl,vl,ul,wl,xl,zl,Sca,Al,Rca,Bl,Tca,Cl,Uca,Vca,El,Gl,Hl,Il,Jl,Fl,Ml,Nl,Kl,Wca,Yca,Zca,Pl,Ql,Rl,Sl,$ca,Tl,Ul,Vl,Wl,Xl,Yl,Zl,$l,cm,bm,bda,cda,dm,fm,am,em,ada,gm,hm,eda,fda,gda,hda,lm,mm,nm,im,om,pm,dda,ida,jda,kda,sm,qm,tm,vm,pda,lda,zm,Am,Bm,Cm,Dm,Em,uk,qda,Fm,Gm,rda,sda,tda,uda,vda,Im,Jm,Km,Lm,Mm,Nm,yda,zda,Om,Qm,Rm,Um,Tm,Zm,$m,bn,Cda,an,dn,fn,en,Ada,jn,ln,mn,Hda,Gda,nn,on,pn,qn,rn,tn,vn,Nda,Lda,Mda,Qda,Oda,
Pda,wn,Rda,yn,zn,Bn,Cn,Dn,Sda,Jn,Kn,Uda,Ln,Mn,Zda,Vda,Wn,Xn,Yn,eea,ao,bo,co,eo,fea,ho,io,jo,ko,lo,no,oo,ro,so,to,hea,iea,vo,wo,xo,Ao,yo,Bo,Do,Eo,Co,jea,Ho,Ko,kea,Uo,To,nea,oea,Wo,Zo,$o,ap,bp,qea,rea,ip,jp,kp,sea,pp,qp,tea,sp,up,rp,xp,Ap,zp,yp,Cp,Kp,Jp,Gp,wea,vea,Wp,Xp,Yp,Zp,$p,aq,eq,cq,fq,gq,hq,kq,jq,xea,zea,mq,Aea,qq,pq,Cea,rq,sq,Dea,wq,Eea,Fea,uq,Gea,yq,Hea,Iea,Bq,Cq,Dq,Eq,Fq,Gq,Hq,Iq,Kq,Lq,Jq,Mq,Nq,Oq,Pq,Jea,Qq,Kea,Sq,Nea,Vq,Oea,Pea,Qea,Wq,Yq,Rea,Sea,Tea,Uea,Vea,$q,Zq,ar,br,er,Xea,Wea,Yea,hr,cr,
dr,gr,$ea,fr,jr,bfa,pr,rr,sr,tr,dfa,wr,ffa,zr,yr,gfa,Cr,Br,Er,Fr,Gr,Ir,Hr,ifa,Lr,Mr,Nr,Or,Pr,Rr,Tr,Ur,Vr,Sr,mfa,kfa,Wr,Zr,$r,ofa,Xr,Yr,bs,ds,es,hs,fs,js,is,ks,pfa,ms,ns,cg,ps,rfa,rs,ts,us,ws,sfa,As,Bs,Cs,Es,tfa,Js,Is,Ds,Ks,Os,vfa,eg,bt,at,dt,$s,ct,wfa,et,gt,ht,it,jt,kt,lt,mt,nt,xfa,ot,pt,rt,tt,qt,yfa,ut,vt,xt,At,zfa,Bt,Ft,Dt,zt,Gt,Ct,Et,Ht,It,Jt,Afa,Lt,Mt,Nt,Ot,Ut,Bfa,Qt,Wt,Yt,au,$t,St,Xt,Vt,Cfa,bu,du,eu,Dfa,fu,gu,Pt,Rt,Tt,Zt,hu,iu,ju,lu,ku,Efa,mu,nu,ou,pu,qu,Ffa,tu,ru,vu,wu,xu,yu,zu,Au,Bu,Cu,Du,
Eu,Fu,Gu,Hu,Iu,Ju,Ku,Lu,Nu,Pu,Ou,Qu,Ru,Su,Tu,Uu,Gfa,Hfa,Ifa,Xu,Zu,$u,av,cv,dv,fv,Nfa,gv,hv,iv,jv,lv,mv,nv,ov,kv,Pfa,pv,qv,rv,tv,uv,Qfa,vv,Rfa,xv,Sfa,wv,yv,Av,Bv,Cv,Ev,Tfa,Fv,Iv,Jv,Kv,Gv,Nv,uu,Ov,Pv,Qv,Rv,Sv,Mv,Tv,Uv,Vv,Wv,Xv,Yv,Zv,aw,$v,bw,Vfa,cw,dw,ew,fw,gw,Wfa,Xfa,aga,cga,Yfa,Zfa,$fa,hw,iw,dga,kw,lw,mw,nw,ow,ega,pw,gga,rw,tw,uw,hga,iga,vw,ww,jga,kga,lga,xw,mga,Cw,yw,Fw,nga,oga,Gw,pga,qga,Hw,Iw,rga,Jw,Kw,Lw,sga,tga,Dw,uga,Mw,Nw,Pw,vga,Qw,Rw,Sw,Tw,Uw,wga,Vw,Ww,Xw,Yw,Zw,$w,ax,bx,cx,dx,ex,fx,gx,hx,
ix,xga,kx,yga,mx,jx,nx,ox,px,qx,rx,zga,wx,sx,Aga,Bga,zx,Ax,Bx,Cx,Dx,Ex,Gx,Hx,Ix,Jx,Dga,Ega,Kx,Fga,Gga,Lx,Mx,Nx,Ox,Px,Qx,Rx,Sx,Tx,Vx,Ux,Wx,Hga,Yx,Zx,$x,ay,by,cy,dy,ey,Iga,Q,fy,gy,hy,iy,jy,Iy,Jy,My,Ny,uy,Ay,Ey,Dy,Hy,Qy,Sy,Xy,ry,qy,Zy,Cy,az,dz,Qga,Rga,Sga,Tga,gz,hz,iz,jz,lz,mz,nz,oz,pz,kz,qz,Uga,sz,Xga,Zga,Yga,uz,Wga,Vga,tz,vz,$ga,wz,aha,cha,bha,dha,xz,yz,eha,fha,gha,zz,Az,iha,Bz,hha,Dz,Ez,jha,Fz,Hz,Iz,Jz,kha,Kz,Lz,nha,lha,mha,oha,Oz,Pz,pha,qha,rha,sha,Qz,Rz,uha,Mz,Nz,tha,Sz,Tz,vha,wha,Wz,Yz,Zz,bA,aA,
xha,dA,eA,zha,fA,Aha,Bha,Cha,Dha,Eha,hA,Fha,Gha,Hha,Iha,Jha,Kha,Rha,Sha,Tha,Vha,lA,mA,Wha,oA,pA,qA,sA,tA,nA,uA,rA,wA,xA,zA,yA,AA,BA,DA,EA,FA,GA,LA,IA,MA,QA,NA,TA,RA,UA,KA,aia,VA,HA,bia,XA,$A,ZA,cia,bB,cB,YA,dB,eB,iB,fB,jB,gia,pB,iia,uB,rB,sB,wB,hia,jia,xB,zB,AB,yB,kB,kia,lia,CB,vB,EB,mia,GB,HB,IB,KB,LB,tB,fia,lB,eia,mB,OB,DB,nia,TB,UB,VB,WB,nB,XB,BB,qB,YB,MB,ZB,oB,oia,hB,kA,jA,gA,dC,eC,fC,gC,pia,qia,hC,iC,jC,lC,mC,nC,ria,oC,pC,qC,rC,sC,uC,wC,vC,tia,uia,yC,zC,via,wia,CC,EC,DC,xia,AC,BC,yia,zia,Aia,
Bia,Cia,FC,Dia,Eia,GC,HC,IC,MC,LC,OC,JC,PC,QC,RC,KC,SC,NC,TC,WC,UC,VC,XC,YC,Iia,ZC,$C,aD,Jia,gD,hD,fD,jD,dD,iD,bD,Kia,lD,kD,mD,Lia,nD,cD,Mia,oD,pD,qD,rD,sD,tD,uD,vD,wD,xD,ED,AD,Nia,GD,HD,BD,CD,zD,DD,yD,FD,LD,KD,JD,ND,OD,PD,QD,SD,RD,TD,UD,VD,ZD,aE,bE,cE,dE,fE,gE,$D,XD,WD,YD,hE,iE,jE,kE,eE,lE,mE,nE,oE,qE,pE,Pia,rE,sE,tE,uE,vE,Sia,Ria,xE,yE,wE,zE,AE,BE,Tia,Wia,Xia,Yia,HE,IE,Zia,JE,$ia,DE,CE,Uia,KE,EE,FE,Via,GE,aja,bja,LE,lx,ija,fja,PE,QE,jja,RE,kja,VE,SE,UE,TE,lja,mja,XE,nja,WE,YE,ZE,$E,aF,bF,cF,dF,
eF,qja,pja,oja,rja,gF,sja,Fia,Gia,tja,jF,vja,kF,lF,wja,nF,oF,qF,sF,tF,vF,yja,Aja,Bja,Cja,uF,xF,yF,Dja,zF,DF,Eja,CF,FF,GF,BF,EF,hF,uja,AF,rF,xja,Fja,iF,HF,pF,mF,IF,Gja,JF,KF,LF,MF,Hja,Ija,OF,PF,Kja,QF,Lja,RF,Nja,SF,Oja,TF,UF,VF,WF,Pja,Qja,Rja,Sja,YF,XF,$F,Wja,Tja,Xja,aG,Uja,Vja,eG,bG,cG,Zja,fG,gG,dG,hG,iG,jG,kG,ZF,lG,$ja,mG,nG,qG,tG,uG,bka,aka,rG,wG,sG,vG,cka,pG,xG,dka,yG,AG,zG,BG,eka,fka,DG,EG,GG,CG,gka,FG,hka,HG,IG,JG,KG,ika,MG,OG,TG,SG,UG,VG,NG,LG,jka,WG,YG,ZG,XG,$G,kka,aH,cH,dH,eH,fH,fF,lka,jH,
lH,pH,oH,qH,sH,rH,nH,mka,xH,oka,zH,BH,CH,DH,uH,AH,EH,vH,qka,FH,GH,wH,HH,yH,pka,rka,tH,nka,IH,ska,KH,tka,uka,vka,xka,LH,wka,MH,RH,NH,QH,OH,PH,SH,TH,VH,WH,XH,yka,YH,ZH,aI,cI,fI,eI,gI,zka,jI,kI,hI,bI,mI,nI,oI,pI,Bka,qI,rI,sI,tI,Cka,vI,uI,xI,wI,AI,BI,CI,Hka,FI,HI,II,GI,JI,MI,OI,NI,PI,LI,Ika,KI,RI,Jka,Kka,TI,UI,VI,WI,XI,QI,dI,lI,ZI,aJ,bJ,cJ,$I,iJ,jJ,Lka,kJ,mJ,Mka,nJ,oJ,pJ,qJ,rJ,sJ,tJ,uJ,vJ,wJ,xJ,yJ,zJ,AJ,BJ,Nka,Oka,CJ,DJ,EJ,Pka,FJ,GJ,HJ,IJ,Qka,JJ,KJ,LJ,Rka,Tka,Ska,Uka,MJ,RJ,QJ,OJ,Vka,Wka,UJ,VJ,WJ,XJ,YJ,
ZJ,$J,Xka,bla,$ka,Yka,Zka,ala,dK,ela,cK,fla,jK,gK,hK,lK,mK,nK,oK,hla,ila,kla,pK,wK,tK,fK,rK,BK,zK,EK,xK,HK,GK,CK,LK,PK,NK,RK,TK,gla,vK,IK,YK,mla,ZK,XK,nla,$K,aL,ola,kK,UK,WK,cL,sK,FK,eL,dL,gL,fL,bL,pla,OK,uK,iL,qK,KK,qla,jL,VK,lL,mL,nL,oL,hL,yK,pL,QK,JK,SK,jla,rla,rL,sla,xL,vL,tL,uL,qL,sL,wL,yL,ula,tla,zL,DL,CL,EL,HL,FL,IL,GL,NL,OL,vla,SL,UL,wla,VL,ZL,xla,bM,dM,eM,cM,aM,$L,hM,jM,mM,nM,oM,qM,rM,tM,vM,wM,xM,zM,AM,BM,CM,FM,GM,HM,IM,JM,KM,MM,LM,NM,X,OM,yla,QM,RM,SM,WM,VM,XM,$M,mN,nN,GN,Dla,KN,Fla,PN,
QN,Ela,RN,Hla,MN,Gla,UN,VN,WN,XN,TM,YN,lN,TN,$N,aO,ZN,cO,eO,fO,jO,mO,nO,rO,Jla,Kla,tO,sO,uO,vO,wO,yO,xO,BO,CO,EO,FO,DO,IO,KO,LO,GO,MO,NO,Lla,OO,PO,QO,RO,SO,TO,WO,XO,VO,YO,$O,ZO,bP,eP,gP,hP,kP,Nla,nP,lP,pP,tP,uP,Ola,xP,yP,BP,DP,AP,GP,HP,Pla,FP,JP,KP,MP,NP,Qla,Sla,Rla,PP,QP,UP,VP,RP,WP,XP,YP,ZP,$P,aQ,bQ,cQ,dQ,gQ,Tla,iQ,hQ,kQ,lQ,oQ,pQ,rQ,sQ,tQ,vQ,wQ,xQ,yQ,zQ,DQ,BQ,AQ,CQ,EQ,FQ,GQ,HQ,KQ,IQ,OQ,PQ,QQ,MQ,RQ,SQ,TQ,UQ,VQ,XQ,aR,cR,dR,eR,ZQ,fR,YQ,jR,mR,nR,bR,iR,lR,kR,hR,$Q,gR,oR,pR,rR,sR,tR,uR,wR,yR,zR,AR,BR,
CR,ER,DR,FR,GR,HR,IR,KR,MR,LR,JR,OR,NR,PR,QR,Xla,SR,RR,TR,Yla,UR,VR,$R,ZR,aS,YR,dS,eS,gS,fS,hS,jS,kS,iP,pS,OP,lS,cS,oS,LQ,nS,rS,sS,Zla,$la,tS,wS,uS,xS,yS,zS,AS,BS,ES,cma,HS,bma,IS,DS,JS,EN,KS,GS,zja,FS,MS,ema,OS,fma,SS,PS,US,VS,WS,LS,YS,QS,ZS,XS,TS,FN,aT,NS,hma,dT,bT,fT,ima,cT,eT,gT,kma,iT,Bla,Cla,jT,kT,lT,mT,nT,uT,rma,mma,fP,lma,xT,zT,AT,BN,DT,sma,BT,CN,tT,GT,HT,IT,JT,LT,pma,qma,QT,PT,OT,wT,UT,VT,vT,WT,XT,uma,bN,ZT,aU,NT,MT,dU,eU,ET,fU,gU,RS,TT,AL,$S,iU,jU,tma,cU,bU,nU,oN,pU,PM,qU,ST,rU,tU,FT,CT,
hU,uU,vU,wU,xU,oma,$T,oT,yU,nma,zU,AU,YL,BU,CU,yma,DU,zma,Ama,EU,FU,HU,Dma,Ema,GU,Bma,NU,OU,Fma,Gma,TU,UU,VU,WU,Hma,XU,YU,ZU,Ima,Jma,$U,dV,cV,aV,bV,Kma,eV,fV,Lma,Mma,gV,Nma,Pma,Oma,hV,iV,Qma,jV,kV,lV,mV,nV,oV,pV,qV,rV,sV,Rma,tV,uV,vV,wV,yV,zV,Uma,Vma,AV,xV,BV,CV,Xma,Sma,DV,Tma,Yma,EV,GV,Zma,HV,IV,JV,KV,MV,LV,NV,OV,$ma,ana,bna,ena,fna,VV,gna,QV,dna,SV,cna,UV,TV,YV,WV,XV,ZV,RV,PV,hna,ina,aW,$V,bW,cW,dW,kna,jna,lna,eW,fW,gW,mna,nna,hW,ona,iW,pna,jW,kW,lW,mW,qna,nW,oW,pW,qW,rW,sW,tW,rna,uW,sna,vW,tna,
wW,xW,yW,una,zW,vna,AW,wna,BW,xna,yna,zna,Cna,Ana,Bna,Dna,Ena,CW,Fna,Gna,DW,Hna,Ina,Jna,Kna,Lna,EW,FW,GW,HW,IW,JW,KW,LW,MW,NW,OW,PW,QW,RW,SW,TW,UW,VW,WW,XW,YW,ZW,$W,aX,bX,cX,dX,eX,fX,gX,hX,iX,Mna,Nna,Pna,Qna,Ona,jX,Rna,Sna,kX,Tna,lX,Una,mX,nX,oX,Vna,Wna,Xna,pX,Yna,Zna,qX,sX,tX,aoa,uX,boa,coa,doa,vX,wX,eoa,foa,xX,goa,ioa,joa,koa,loa,zX,yX,hoa,AX,moa,noa,ooa,BX,CX,DX,EX,qoa,roa,soa,GX,toa,uoa,HX,voa,woa,xoa,IX,yoa,zoa,JX,Boa,Aoa,KX,LX,Coa,MX,NX,Doa,Eoa,Foa,Y,OX,Goa,Hoa,PX,QX,RX,SX,UX,VX,Joa,Ioa,WX,
XX,Loa,Koa,YX,Moa,ZX,$X,aY,Poa,bY,Soa,Roa,cY,Toa,dY,eY,fY,Uoa,Woa,gY,Xoa,hY,Yoa,$oa,Zoa,apa,bpa,cpa,dpa,epa,fpa,gpa,hpa,iY,jY,ipa,jpa,kpa,kY,lpa,mpa,opa,ppa,qpa,rpa,spa,pY,tpa,oY,upa,rY,vpa,xpa,wpa,tY,ypa,sY,Bpa,zpa,Dpa,Apa,uY,Gpa,vY,Fpa,Hpa,wY,Jpa,Kpa,FX,Cpa,poa,Ipa,xY,Epa,yY,zY,AY,BY,Lpa,CY,DY,EY,FY,GY,HY,IY,JY,KY,LY,Mpa,MY,NY,Npa,OY,Opa,Ppa,Qpa,Spa,Rpa,Tpa,Upa,Vpa,PY,Wpa,QY,RY,$pa,Xpa,Zpa,Ypa,SY,TY,aqa,UY,VY,bqa,cqa,dqa,eqa,WY,fqa,gqa,XY,jqa,iqa,kqa,lqa,YY,ZY,mqa,nqa,oqa,bZ,pqa,qqa,rqa,sqa,cZ,
aZ,tqa,eZ,uqa,fZ,gZ,hZ,iZ,jZ,kZ,lZ,mZ,vqa,nZ,wqa,oZ,pZ,qZ,xqa,rZ,sZ,tZ,uZ,vZ,yqa,Aqa,zqa,Bqa,wZ,Cqa,Dqa,xZ,Eqa,yZ,zZ,AZ,Fqa,Gqa,Hqa,BZ,CZ,EZ,DZ,FZ,GZ,Iqa,HZ,IZ,Kqa,JZ,Nqa,Oqa,Pqa,Mqa,KZ,Qqa,MZ,Rqa,Sqa,NZ,OZ,PZ,Tqa,QZ,Uqa,RZ,TZ,Wqa,Xqa,UZ,VZ,Yqa,WZ,XZ,Zqa,YZ,ZZ,$Z,a_,b_,c_,d_,e_,f_,ara,$qa,g_,bra,h_,i_,j_,dra,l_,hra,jra,n_,kra,o_,m_,p_,mra,nra,ora,A_,pra,D_,rra,w_,y_,E_,tra,ura,vra,wra,lra,xra,t_,qra,K_,H_,u_,G_,L_,I_,r_,zra,q_,F_,C_,M_,v_,x_,J_,B_,Bra,N_,Dra,Cra,O_,Z,Era,Fra,Gra,P_,SU,Pra,Q_,Ura,
Qra,Tra,Hra,Ira,Nra,Vra,Zra,Xra,X_,Y_,PU,dsa,W_,esa,b0,S_,fsa,bsa,c0,asa,V_,d0,R_,U_,T_,Wra,Yra,e0,f0,g0,gsa,h0,i0,j0,k0,l0,m0,n0,o0,p0,hsa,q0,Kra,isa,jsa,Mra,$ra,Sra,Rra,Ora,Lra,ksa,lsa,r0,z_,s_,sra,Z_,s0,t0,nsa,u0,rX,psa,yra,v0,qY,osa,qsa,rsa,w0,RU,ssa,tsa,usa,vsa,x0,y0,a0,$_,wsa,z0,A0,xsa,B0,C0,D0,E0,F0,G0,H0,Asa,Bsa,I0,J0,K0,Csa,Dsa,Esa,L0,M0,Fsa,N0,Gsa,O0,P0,csa,Q0,R0,S0,T0,Hsa,U0,V0,Isa,W0,Jsa,X0,Y0,Z0,Ksa,$0,Lsa,a1,Msa,b1,Nsa,$na,c1,Osa,zsa,e1,f1,Psa,ysa,g1,d1,Rsa,h1,Tsa,Usa,i1,Vsa,Wsa,j1,
k1,l1,Jra,Xsa,m1,Ysa,n1,Ssa,Zsa,$sa,ata,bta,cta,dta,eta,fta,gta,hta,p1,q1,ita,r1,jta,s1,t1,u1,v1,kta,lta,mta,nta,ota,pta,qta,sta,rta,x1,QU,tta,wta,yta,B1,C1,ba,ha,fa,faa,ed,Qa,gaa;ca=function(a){return function(){return ba[a].apply(this,arguments)}};
g.da=function(a,b){return ba[a]=b};
ea=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};
aaa=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};
ia=function(a,b){if(b)a:{for(var c=fa,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ha(c,d,{configurable:!0,writable:!0,value:f})}};
ka=function(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a};
g.p=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ea(a)}};
g.la=function(a){if(!(a instanceof Array)){a=g.p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a};
g.t=function(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.uc=b.prototype};
oa=function(){this.G=!1;this.B=null;this.u=void 0;this.o=1;this.C=this.F=0;this.M=this.A=null};
pa=function(a){if(a.G)throw new TypeError("Generator is already running");a.G=!0};
qa=function(a,b){a.A={bz:b,kA:!0};a.o=a.F||a.C};
g.ra=function(a,b,c){a.o=c;return{value:b}};
sa=function(a,b,c){a.F=b;void 0!=c&&(a.C=c)};
ta=function(a,b){a.o=b;a.F=0};
ua=function(a){a.F=0;var b=a.A.bz;a.A=null;return b};
baa=function(a){a.M=[a.A];a.F=0;a.C=0};
caa=function(a){var b=a.M.splice(0)[0];(b=a.A=a.A||b)?b.kA?a.o=a.F||a.C:void 0!=b.Gc&&a.C<b.Gc?(a.o=b.Gc,a.A=null):a.o=a.C:a.o=0};
va=function(a){this.o=new oa;this.u=a};
daa=function(a,b){pa(a.o);var c=a.o.B;if(c)return wa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.o["return"]);
a.o["return"](b);return xa(a)};
wa=function(a,b,c,d){try{var e=b.call(a.o.B,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.o.G=!1,e;var f=e.value}catch(h){return a.o.B=null,qa(a.o,h),xa(a)}a.o.B=null;d.call(a.o,f);return xa(a)};
xa=function(a){for(;a.o.o;)try{var b=a.u(a.o);if(b)return a.o.G=!1,{value:b.value,done:!1}}catch(c){a.o.u=void 0,qa(a.o,c)}a.o.G=!1;if(a.o.A){b=a.o.A;a.o.A=null;if(b.kA)throw b.bz;return{value:b["return"],done:!0}}return{value:void 0,done:!0}};
ya=function(a){this.next=function(b){pa(a.o);a.o.B?b=wa(a,a.o.B.next,b,a.o.I):(a.o.I(b),b=xa(a));return b};
this["throw"]=function(b){pa(a.o);a.o.B?b=wa(a,a.o.B["throw"],b,a.o.I):(qa(a.o,b),b=xa(a));return b};
this["return"]=function(b){return daa(a,b)};
this[Symbol.iterator]=function(){return this}};
g.za=function(a,b){var c=new ya(new va(b));na&&a.prototype&&na(c,a.prototype);return c};
eaa=function(a){function b(d){return a.next(d)}
function c(d){return a["throw"](d)}
return new Promise(function(d,e){function f(h){h.done?d(h.value):Promise.resolve(h.value).then(b,c).then(f,e)}
f(a.next())})};
Aa=function(a){return eaa(new ya(new va(a)))};
Ba=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{aA:e,yE:f}}return{aA:-1,yE:void 0}};
Ca=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
Da=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
Ea=function(a,b){a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d};
Fa=function(a){return a?a:Array.prototype.fill};
Ga=function(a){return a?a:Array.prototype.copyWithin};
g.Ha=function(a,b,c){a=a.split(".");c=c||g.v;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};
Ia=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&faa.test(a)?a:""};
g.Ja=function(a,b){for(var c=a.split("."),d=b||g.v,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.Ka=function(){};
La=function(a){a.Jd=void 0;a.getInstance=function(){return a.Jd?a.Jd:a.Jd=new a}};
Ma=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"};
g.Na=function(a){var b=Ma(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Oa=function(a){return"function"==Ma(a)};
g.Pa=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Ra=function(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++gaa)};
haa=function(a,b,c){return a.call.apply(a.bind,arguments)};
iaa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};
g.x=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.x=haa:g.x=iaa;return g.x.apply(null,arguments)};
g.Sa=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};
g.Ta=function(a,b){for(var c in b)a[c]=b[c]};
g.Ua=function(a,b){function c(){}
c.prototype=b.prototype;a.uc=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.uf=function(d,e,f){for(var h=Array(arguments.length-2),l=2;l<arguments.length;l++)h[l-2]=arguments[l];return b.prototype[e].apply(d,h)}};
Va=function(a){return a};
Wa=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Wa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
Xa=function(a,b){Wa.call(this,jaa(a,b))};
jaa=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");return d+c[e]};
kaa=function(){};
laa=function(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.A=!b&&/[?&]ae=1(&|$)/.test(a);this.B=!b&&/[?&]ae=2(&|$)/.test(a);if((this.o=/[?&]adurl=([^&]*)/.exec(a))&&this.o[1]){try{var c=decodeURIComponent(this.o[1])}catch(d){c=null}this.u=c}};
Ya=function(a){return function(){return a}};
g.Za=function(a){return a};
maa=function(a){var b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}};
$a=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
naa=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};
oaa=function(a,b){var c=0;return function(d){g.v.clearTimeout(c);var e=arguments;c=g.v.setTimeout(function(){a.apply(b,e)},50)}};
g.ab=function(a){return a[a.length-1]};
paa=function(a,b){var c=a.length,d="string"===typeof a?a.split(""):a;for(--c;0<=c;--c)c in d&&b.call(void 0,d[c],c,a)};
g.cb=function(a,b,c){b=g.bb(a,b,c);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};
g.bb=function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.db=function(a,b,c){var d=a.length,e="string"===typeof a?a.split(""):a;for(--d;0<=d;d--)if(d in e&&b.call(c,e[d],d,a))return d;return-1};
g.fb=function(a,b){return 0<=eb(a,b)};
g.gb=function(a){return 0==a.length};
ib=function(a){if(!Array.isArray(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};
g.kb=function(a,b){var c=eb(a,b),d;(d=0<=c)&&g.jb(a,c);return d};
g.jb=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.lb=function(a,b){var c=g.bb(a,b,void 0);0<=c&&g.jb(a,c)};
qaa=function(a,b){var c=0;paa(a,function(d,e){b.call(void 0,d,e,a)&&g.jb(a,e)&&c++})};
g.nb=function(a){return Array.prototype.concat.apply([],arguments)};
g.ob=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
pb=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}};
g.rb=function(a,b,c,d){Array.prototype.splice.apply(a,qb(arguments,1))};
qb=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};
raa=function(a){for(var b={},c=0,d=0;d<a.length;){var e=a[d++];var f=e;f=g.Pa(f)?"o"+g.Ra(f):(typeof f).charAt(0)+f;Object.prototype.hasOwnProperty.call(b,f)||(b[f]=!0,a[c++]=e)}a.length=c};
g.ub=function(a,b,c){return sb(a,c||tb,!1,b)};
vb=function(a,b){return sb(a,b,!0,void 0,void 0)};
sb=function(a,b,c,d,e){for(var f=0,h=a.length,l;f<h;){var m=f+(h-f>>>1),n;c?n=b.call(e,a[m],m,a):n=b(d,a[m]);0<n?f=m+1:(h=m,l=!n)}return l?f:-f-1};
g.wb=function(a,b){a.sort(b||tb)};
saa=function(a,b){var c=tb;g.wb(a,function(d,e){return c(b(d),b(e))})};
g.xb=function(a,b){if(!g.Na(a)||!g.Na(b)||a.length!=b.length)return!1;for(var c=a.length,d=taa,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0};
tb=function(a,b){return a>b?1:a<b?-1:0};
taa=function(a,b){return a===b};
g.yb=function(a,b,c){c=g.ub(a,b,c);0>c&&g.rb(a,-(c+1),0,b)};
g.zb=function(a,b,c){var d={};(0,g.y)(a,function(e,f){d[b.call(c,e,f,a)]=e});
return d};
uaa=function(a){for(var b=[],c=0;c<a;c++)b[c]="";return b};
vaa=function(a,b){var c=Array.prototype.splice.call(a,b,1);Array.prototype.splice.call(a,0,0,c[0])};
g.Ab=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Bb=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};
Cb=function(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c};
g.Db=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return!0;return!1};
Eb=function(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0};
Fb=function(a){for(var b in a)return a[b]};
g.Gb=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};
g.Hb=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
g.Ib=function(a,b){var c=g.Na(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a};
Jb=function(a,b){return null!==a&&b in a};
g.Kb=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};
Lb=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
Mb=function(a,b){var c=Lb(a,b,void 0);return c&&a[c]};
g.Nb=function(a){for(var b in a)return!1;return!0};
g.Pb=function(a){for(var b in a)delete a[b]};
g.Qb=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0};
g.Rb=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.Sb=function(a){var b=Ma(a);if("object"==b||"array"==b){if(g.Oa(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=g.Sb(a[c]);return b}return a};
g.Ub=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Tb.length;f++)c=Tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
Vb=function(a){var b=a;Object.isFrozen&&!Object.isFrozen(a)&&(b=Object.create(a),Object.freeze(b));return b};
Xb=function(){if(void 0===Wb){var a=null,b=g.v.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Va,createScript:Va,createScriptURL:Va})}catch(c){g.v.console&&g.v.console.error(c.message)}Wb=a}else Wb=a}return Wb};
$b=function(a,b){this.o=a===Yb&&b||"";this.u=Zb};
ac=function(a){return a instanceof $b&&a.constructor===$b&&a.u===Zb?a.o:"type_error:Const"};
g.bc=function(a){return new $b(Yb,a)};
fc=function(a,b){this.u=a===cc&&b||"";this.A=dc};
gc=function(a){return a instanceof fc&&a.constructor===fc&&a.A===dc?a.u:"type_error:TrustedResourceUrl"};
yaa=function(a,b){var c=ac(a);if(!waa.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);var d=c.replace(xaa,function(e,f){if(!Object.prototype.hasOwnProperty.call(b,f))throw Error('Found marker, "'+f+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));var h=b[f];return h instanceof $b?ac(h):encodeURIComponent(String(h))});
return hc(d)};
hc=function(a){var b=Xb();a=b?b.createScriptURL(a):a;return new fc(cc,a)};
ic=function(a,b){return 0==a.lastIndexOf(b,0)};
jc=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.kc=function(a){return/^[\s\xa0]*$/.test(a)};
rc=function(a,b){if(b)a=a.replace(lc,"&amp;").replace(mc,"&lt;").replace(nc,"&gt;").replace(oc,"&quot;").replace(pc,"&#39;").replace(qc,"&#0;");else{if(!zaa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(lc,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(mc,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(nc,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(oc,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(pc,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(qc,"&#0;"))}return a};
sc=function(a,b){return-1!=a.toLowerCase().indexOf(b.toLowerCase())};
g.vc=function(a,b){for(var c=0,d=tc(String(a)).split("."),e=tc(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var l=d[h]||"",m=e[h]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=uc(0==l[1].length?0:parseInt(l[1],10),0==m[1].length?0:parseInt(m[1],10))||uc(0==l[2].length,0==m[2].length)||uc(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
uc=function(a,b){return a<b?-1:a>b?1:0};
g.yc=function(a,b){this.u=a===wc&&b||"";this.A=xc};
g.zc=function(a){return a instanceof g.yc&&a.constructor===g.yc&&a.A===xc?a.u:"type_error:SafeUrl"};
g.Cc=function(a){a instanceof g.yc||(a="object"==typeof a&&a.sh?a.cf():String(a),a=Ac.test(a)?new g.yc(wc,a):null);return a||Bc};
g.Dc=function(a,b){if(a instanceof g.yc)return a;a="object"==typeof a&&a.sh?a.cf():String(a);if(b&&/^data:/i.test(a)){var c=String(a);c=c.replace(/(%0A|%0D)/g,"");var d=c.match(Aaa);c=(d&&Baa.test(d[1])?new g.yc(wc,c):null)||Bc;if(c.cf()==a)return c}Ac.test(a)||(a="about:invalid#zClosurez");return new g.yc(wc,a)};
Fc=function(){this.o="";this.u=Ec};
Gc=function(a){return a instanceof Fc&&a.constructor===Fc&&a.u===Ec?a.o:"type_error:SafeStyle"};
Hc=function(a){var b=new Fc;b.o=a;return b};
Mc=function(a){var b="",c;for(c in a)if(Object.prototype.hasOwnProperty.call(a,c)){if(!/^[-_a-zA-Z0-9]+$/.test(c))throw Error("Name allows only [-_a-zA-Z0-9], got: "+c);var d=a[c];null!=d&&(d=Array.isArray(d)?(0,g.Ic)(d,Kc).join(" "):Kc(d),b+=c+":"+d+";")}return b?Hc(b):Lc};
Kc=function(a){if(a instanceof g.yc)return'url("'+g.zc(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';a=a instanceof $b?ac(a):Caa(String(a));if(/[{;}]/.test(a))throw new Xa("Value does not allow [{;}], got: %s.",[a]);return a};
Caa=function(a){var b=a.replace(Nc,"$1").replace(Nc,"$1").replace(Oc,"url");if(Daa.test(b)){if(Eaa.test(a))return"zClosurez";for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}if(!b||!c||!Faa(a))return"zClosurez"}else return"zClosurez";return Gaa(a)};
Faa=function(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b};
Gaa=function(a){return a.replace(Oc,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(h,l,m){f=l;return m});
b=g.Cc(d).cf();return c+f+b+f+e})};
Haa=function(a){function b(d){Array.isArray(d)?(0,g.y)(d,b):c+=Gc(d)}
var c="";(0,g.y)(arguments,b);return c?Hc(c):Lc};
Qc=function(a){return-1!=g.Pc.indexOf(a)};
Rc=function(){return Qc("Firefox")||Qc("FxiOS")};
Tc=function(){return Qc("Safari")&&!(Sc()||Qc("Coast")||Qc("Opera")||Qc("Edge")||Qc("Edg/")||Qc("OPR")||Rc()||Qc("Silk")||Qc("Android"))};
Sc=function(){return(Qc("Chrome")||Qc("CriOS"))&&!Qc("Edge")};
Wc=function(){this.u="";this.B=Uc;this.A=null};
g.Xc=function(a){return a instanceof Wc&&a.constructor===Wc&&a.B===Uc?a.u:"type_error:SafeHtml"};
Zc=function(a){if(a instanceof Wc)return a;var b="object"==typeof a,c=null;b&&a.Cu&&(c=a.o());return Yc(rc(b&&a.sh?a.cf():String(a)),c)};
Iaa=function(a){function b(f){Array.isArray(f)?(0,g.y)(f,b):(f=Zc(f),e.push(g.Xc(f).toString()),f=f.o(),0==d?d=f:0!=f&&d!=f&&(d=null))}
var c=Zc($c),d=c.o(),e=[];(0,g.y)(a,b);return Yc(e.join(g.Xc(c).toString()),d)};
Jaa=function(a){return Iaa(Array.prototype.slice.call(arguments))};
Yc=function(a,b){return ad(a,b)};
ad=function(a,b){var c=new Wc,d=Xb();c.u=d?d.createHTML(a):a;c.A=b;return c};
g.bd=function(a,b){ac(a);ac(a);return ad(b,null)};
Kaa=function(a){var b=g.bc("Output of CSS sanitizer");ac(b);ac(b);return Hc(a)};
g.cd=function(a,b){if(Laa())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=g.Xc(b)};
g.dd=function(a,b){var c=b instanceof g.yc?b:g.Dc(b);a.href=g.zc(c)};
fd=function(a,b){a.src=gc(b);var c;(c=a.ownerDocument&&a.ownerDocument.defaultView)&&c!=g.v?c=Ia(c.document):(null===ed&&(ed=Ia(g.v.document)),c=ed);c&&a.setAttribute("nonce",c)};
gd=function(a,b,c,d){a=a instanceof g.yc?a:g.Dc(a);b=b||g.v;c=c instanceof $b?ac(c):c||"";return b.open(g.zc(a),c,d,void 0)};
hd=function(a){return encodeURIComponent(String(a))};
id=function(a){return decodeURIComponent(a.replace(/\+/g," "))};
g.jd=function(a){return a=rc(a,void 0)};
g.kd=function(a,b){var c=String(a),d=c.indexOf(".");-1==d&&(d=c.length);return Maa("0",Math.max(0,b-d))+c};
g.ld=function(a){return null==a?"":String(a)};
md=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.nd=function(a){var b=Number(a);return 0==b&&g.kc(a)?NaN:b};
od=function(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})};
pd=function(){return"googleAvInapp".replace(/([A-Z])/g,"-$1").toLowerCase()};
Naa=function(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})};
qd=function(a,b,c,d,e,f,h){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);h&&(l+="#"+h);return l};
rd=function(a){return a?decodeURI(a):a};
g.td=function(a,b){return b.match(sd)[a]||null};
g.ud=function(a){return rd(g.td(3,a))};
vd=function(a){a=a.match(sd);return qd(null,null,null,null,a[5],a[6],a[7])};
wd=function(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var h=c[d].substring(0,e);f=c[d].substring(e+1)}else h=c[d];b(h,f?id(f):"")}};
xd=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
yd=function(a,b){return b?a?a+"&"+b:b:a};
zd=function(a,b){if(!b)return a;var c=xd(a);c[1]=yd(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
Ad=function(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ad(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+hd(b)))};
Bd=function(a,b){for(var c=[],d=b||0;d<a.length;d+=2)Ad(a[d],a[d+1],c);return c.join("&")};
g.Cd=function(a){var b=[],c;for(c in a)Ad(c,a[c],b);return b.join("&")};
Dd=function(a,b){var c=2==arguments.length?Bd(arguments[1],0):Bd(arguments,1);return zd(a,c)};
g.Ed=function(a,b){var c=g.Cd(b);return zd(a,c)};
Fd=function(a,b,c){c=null!=c?"="+hd(c):"";return zd(a,b+c)};
Gd=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
Id=function(a,b){var c=a.search(Hd),d=Gd(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return id(a.substr(d,e-d))};
Jd=function(a,b){for(var c=a.search(Hd),d=0,e,f=[];0<=(e=Gd(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.substr(d));return f.join("").replace(Oaa,"$1")};
Kd=function(a,b,c){return Fd(Jd(a,b),b,c)};
Paa=function(a,b){var c=xd(a),d=c[1],e=[];d&&d.split("&").forEach(function(f){var h=f.indexOf("=");b.hasOwnProperty(0<=h?f.substr(0,h):f)||e.push(f)});
c[1]=yd(e.join("&"),g.Cd(b));return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
Ld=function(){return Qc("iPhone")&&!Qc("iPod")&&!Qc("iPad")};
Md=function(){return Ld()||Qc("iPad")||Qc("iPod")};
Nd=function(a){Nd[" "](a);return a};
Od=function(a,b){try{return Nd(a[b]),!0}catch(c){}return!1};
Raa=function(a,b){var c=Qaa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
Pd=function(){var a=g.v.document;return a?a.documentMode:void 0};
g.Rd=function(a){return Raa(a,function(){return 0<=g.vc(Qd,a)})};
g.Sd=function(a){return Number(Saa)>=a};
g.Td=function(a,b,c){return Math.min(Math.max(a,b),c)};
g.Ud=function(a,b){var c=a%b;return 0>c*b?c+b:c};
g.Vd=function(a,b,c){return a+c*(b-a)};
Wd=function(a,b){return 1E-6>=Math.abs(a-b)};
g.Xd=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};
Yd=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Zd=function(a,b){this.width=a;this.height=b};
g.$d=function(a,b){return a==b?!0:a&&b?a.width==b.width&&a.height==b.height:!1};
ae=function(a){return a.width*a.height};
ee=function(a){return a?new be(ce(a)):de||(de=new be)};
fe=function(a,b){return"string"===typeof b?a.getElementById(b):b};
g.he=function(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):g.ge(document,"*",a,b)};
g.ie=function(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):g.ge(c,"*",a,b)[0]||null}return c||null};
g.ge=function(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,h;h=a[f];f++)b==h.nodeName&&(d[e++]=h);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;h=a[f];f++)b=h.className,"function"==typeof b.split&&g.fb(b.split(/\s+/),c)&&(d[e++]=h);d.length=e;return d}return a};
ke=function(a,b){g.Ab(b,function(c,d){c&&"object"==typeof c&&c.sh&&(c=c.cf());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:je.hasOwnProperty(d)?a.setAttribute(je[d],c):ic(d,"aria-")||ic(d,"data-")?a.setAttribute(d,c):a[d]=c})};
le=function(a){a=a.document;a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new g.Zd(a.clientWidth,a.clientHeight)};
oe=function(a){var b=me(a);a=a.parentWindow||a.defaultView;return g.ne&&g.Rd("10")&&a.pageYOffset!=b.scrollTop?new g.Xd(b.scrollLeft,b.scrollTop):new g.Xd(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)};
me=function(a){return a.scrollingElement?a.scrollingElement:g.pe||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement};
qe=function(a){return a?a.parentWindow||a.defaultView:window};
g.te=function(a,b,c){var d=arguments,e=document,f=String(d[0]),h=d[1];if(!Taa&&h&&(h.name||h.type)){f=["<",f];h.name&&f.push(' name="',g.jd(h.name),'"');if(h.type){f.push(' type="',g.jd(h.type),'"');var l={};g.Ub(l,h);delete l.type;h=l}f.push(">");f=f.join("")}f=re(e,f);h&&("string"===typeof h?f.className=h:Array.isArray(h)?f.className=h.join(" "):ke(f,h));2<d.length&&se(e,f,d,2);return f};
se=function(a,b,c,d){function e(l){l&&b.appendChild("string"===typeof l?a.createTextNode(l):l)}
for(;d<c.length;d++){var f=c[d];if(!g.Na(f)||g.Pa(f)&&0<f.nodeType)e(f);else{a:{if(f&&"number"==typeof f.length){if(g.Pa(f)){var h="function"==typeof f.item||"string"==typeof f.item;break a}if(g.Oa(f)){h="function"==typeof f.item;break a}}h=!1}(0,g.y)(h?g.ob(f):f,e)}}};
g.ue=function(a){return re(document,a)};
re=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};
g.ve=function(a){return document.createTextNode(String(a))};
g.we=function(a,b){a.appendChild(b)};
g.xe=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.ye=function(a,b,c){a.insertBefore(b,a.childNodes[c]||null)};
g.ze=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
Vaa=function(a){return Uaa&&void 0!=a.children?a.children:(0,g.Ae)(a.childNodes,function(b){return 1==b.nodeType})};
g.Be=function(a){var b;if(Waa&&!(g.ne&&g.Rd("9")&&!g.Rd("10")&&g.v.SVGElement&&a instanceof g.v.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return g.Pa(b)&&1==b.nodeType?b:null};
g.Ce=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};
ce=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
g.De=function(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{g.xe(a);var c=ce(a);a.appendChild(c.createTextNode(String(b)))}};
Ge=function(a){var b;"A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?b=!a.disabled&&(!Ee(a)||Fe(a)):b=Ee(a)&&Fe(a);if(b&&g.ne){var c;!g.Oa(a.getBoundingClientRect)||g.ne&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a};
Ee=function(a){return g.ne&&!g.Rd("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")};
Fe=function(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a};
Ie=function(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return He(a,function(f){return(!e||f.nodeName==e)&&(!c||"string"===typeof f.className&&g.fb(f.className.split(/\s+/),c))},!0,d)};
He=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
be=function(a){this.o=a||g.v.document||document};
Xaa=function(a){this.wy=a};
Je=function(a,b,c){this.B=a;this.u=b;this.o=c||[];this.Hk=new Map};
Ke=function(a,b){Je.call(this,a,3,b)};
g.A=function(){this.Nb=this.Nb;this.fk=this.fk};
g.C=function(a,b){g.Le(a,g.Sa(g.Me,b))};
g.Le=function(a,b){a.Nb?b():(a.fk||(a.fk=[]),a.fk.push(b))};
g.Me=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Ne=function(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];g.Na(d)?g.Ne.apply(null,d):g.Me(d)}};
g.Oe=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.o=!1};
Yaa=function(a){var b=g.Ja("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(h){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.v.$googDebugFname||b}catch(h){e="Not available",c=!0}b=Pe(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;
if(null==c)if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Qe[c])c=Qe[c];else{c=String(c);if(!Qe[c]){var f=/function\s+([^\(]+)/m.exec(c);Qe[c]=f?f[1]:"[Anonymous]"}c=Qe[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=b;return a};
Pe=function(a,b){b||(b={});b[Re(a)]=!0;var c=a.stack||"",d=a.TT;d&&!b[Re(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=Pe(d,b));return c};
Re=function(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack};
Se=function(a,b){g.Oe.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.u=null;a&&this.init(a,b)};
Ve=function(a){return!(!a||!a[Ue])};
$aa=function(a,b,c,d,e){this.listener=a;this.o=null;this.src=b;this.type=c;this.capture=!!d;this.Sp=e;this.key=++Zaa;this.Ml=this.Wo=!1};
We=function(a){a.Ml=!0;a.listener=null;a.o=null;a.src=null;a.Sp=null};
Xe=function(a){this.src=a;this.listeners={};this.o=0};
Ye=function(a,b){var c=b.type;c in a.listeners&&g.kb(a.listeners[c],b)&&(We(b),0==a.listeners[c].length&&(delete a.listeners[c],a.o--))};
Ze=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ml&&f.listener==b&&f.capture==!!c&&f.Sp==d)return e}return-1};
af=function(a,b,c,d,e){if(d&&d.once)return $e(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)af(a,b[f],c,d,e);return null}c=bf(c);return Ve(a)?a.na(b,c,g.Pa(d)?!!d.capture:!!d,e):cf(a,b,c,!1,d,e)};
cf=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=g.Pa(e)?!!e.capture:!!e,l=df(a);l||(a[ef]=l=new Xe(a));c=l.add(b,c,d,h,f);if(c.o)return c;d=aba();c.o=d;d.src=a;d.listener=c;if(a.addEventListener)bba||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ff(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");gf++;return c};
aba=function(){var a=cba,b=hf?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
$e=function(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)$e(a,b[f],c,d,e);return null}c=bf(c);return Ve(a)?a.Vu(b,c,g.Pa(d)?!!d.capture:!!d,e):cf(a,b,c,!0,d,e)};
jf=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)jf(a,b[f],c,d,e);else d=g.Pa(d)?!!d.capture:!!d,c=bf(c),Ve(a)?a.nb(b,c,d,e):a&&(a=df(a))&&(b=a.Pm(b,c,d,e))&&kf(b)};
kf=function(a){if("number"!==typeof a&&a&&!a.Ml){var b=a.src;if(Ve(b))Ye(b.u,a);else{var c=a.type,d=a.o;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ff(c),d):b.addListener&&b.removeListener&&b.removeListener(d);gf--;(c=df(b))?(Ye(c,a),0==c.o&&(c.src=null,b[ef]=null)):We(a)}}};
ff=function(a){return a in lf?lf[a]:lf[a]="on"+a};
nf=function(a,b,c,d){var e=!0;if(a=df(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Ml&&(f=mf(f,d),e=e&&!1!==f)}return e};
mf=function(a,b){var c=a.listener,d=a.Sp||a.src;a.Wo&&kf(a);return c.call(d,b)};
cba=function(a,b){if(a.Ml)return!0;if(!hf){var c=b||g.Ja("window.event"),d=new Se(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var h=c.length-1;!d.o&&0<=h;h--){d.currentTarget=c[h];var l=nf(c[h],f,!0,d);e=e&&l}for(h=0;!d.o&&h<c.length;h++)d.currentTarget=c[h],l=nf(c[h],f,!1,d),e=e&&l}return e}return mf(a,new Se(b,
this))};
df=function(a){a=a[ef];return a instanceof Xe?a:null};
bf=function(a){if(g.Oa(a))return a;a[of]||(a[of]=function(b){return a.handleEvent(b)});
return a[of]};
g.pf=function(){g.A.call(this);this.u=new Xe(this);this.sa=this;this.ea=null};
qf=function(a,b,c,d){b=a.u.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.Ml&&h.capture==c){var l=h.listener,m=h.Sp||h.src;h.Wo&&Ye(a.u,h);e=!1!==l.call(m,d)&&e}}return e&&!d.defaultPrevented};
rf=function(a,b){this.A=a;this.B=b;this.u=0;this.o=null};
sf=function(a,b){a.B(b);100>a.u&&(a.u++,b.next=a.o,a.o=b)};
tf=function(a){g.v.setTimeout(function(){throw a;},0)};
vf=function(a){a=dba(a);!g.Oa(g.v.setImmediate)||g.v.Window&&g.v.Window.prototype&&!Qc("Edge")&&g.v.Window.prototype.setImmediate==g.v.setImmediate?(uf||(uf=eba()),uf(a)):g.v.setImmediate(a)};
eba=function(){var a=g.v.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!Qc("Presto")&&(a=function(){var e=g.ue("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var h="callImmediate"+Math.random(),l="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,g.x)(function(m){if(("*"==l||m.origin==l)&&m.data==h)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(h,l)}}});
if("undefined"!==typeof a&&!Qc("Trident")&&!Qc("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ty;c.ty=null;e()}};
return function(e){d.next={ty:e};d=d.next;b.port2.postMessage(0)}}return function(e){g.v.setTimeout(e,0)}};
wf=function(){this.u=this.o=null};
xf=function(){this.next=this.scope=this.o=null};
g.Bf=function(a,b){yf||fba();zf||(yf(),zf=!0);Af.add(a,b)};
fba=function(){if(g.v.Promise&&g.v.Promise.resolve){var a=g.v.Promise.resolve(void 0);yf=function(){a.then(Cf)}}else yf=function(){vf(Cf)}};
Cf=function(){for(var a;a=Af.remove();){try{a.o.call(a.scope)}catch(b){tf(b)}sf(Df,a)}zf=!1};
Ef=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
Gf=function(a){this.o=0;this.G=void 0;this.B=this.u=this.A=null;this.C=this.F=!1;if(a!=g.Ka)try{var b=this;a.call(void 0,function(c){Ff(b,2,c)},function(c){Ff(b,3,c)})}catch(c){Ff(this,3,c)}};
Hf=function(){this.next=this.context=this.onRejected=this.A=this.o=null;this.u=!1};
Jf=function(a,b,c){var d=If.get();d.A=a;d.onRejected=b;d.context=c;return d};
Kf=function(a){if(a instanceof Gf)return a;var b=new Gf(g.Ka);Ff(b,2,a);return b};
Lf=function(a){return new Gf(function(b,c){c(a)})};
Nf=function(a,b,c){Mf(a,b,c,null)||g.Bf(g.Sa(b,a))};
Of=function(a){return new Gf(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],Nf(e,b,c)})};
gba=function(a){return new Gf(function(b,c){var d=a.length,e=[];if(d)for(var f=function(n,q){d--;e[n]=q;0==d&&b(e)},h=function(n){c(n)},l=0,m;l<a.length;l++)m=a[l],Nf(m,g.Sa(f,l),h);
else b(e)})};
Qf=function(a,b){var c=Jf(b,b,void 0);c.u=!0;Pf(a,c);return a};
Sf=function(a,b){return Rf(a,null,b,void 0)};
Tf=function(a,b){if(0==a.o)if(a.A){var c=a.A;if(c.u){for(var d=0,e=null,f=null,h=c.u;h&&(h.u||(d++,h.o==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.o&&1==d?Tf(c,b):(f?(d=f,d.next==c.B&&(c.B=d),d.next=d.next.next):Uf(c),Vf(c,e,3,b)))}a.A=null}else Ff(a,3,b)};
Pf=function(a,b){a.u||2!=a.o&&3!=a.o||Wf(a);a.B?a.B.next=b:a.u=b;a.B=b};
Rf=function(a,b,c,d){var e=Jf(null,null,null);e.o=new Gf(function(f,h){e.A=b?function(l){try{var m=b.call(d,l);f(m)}catch(n){h(n)}}:f;
e.onRejected=c?function(l){try{var m=c.call(d,l);void 0===m&&l instanceof Xf?h(l):f(m)}catch(n){h(n)}}:h});
e.o.A=a;Pf(a,e);return e.o};
Ff=function(a,b,c){0==a.o&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.o=1,Mf(c,a.M,a.N,a)||(a.G=c,a.o=b,a.A=null,Wf(a),3!=b||c instanceof Xf||hba(a,c)))};
Mf=function(a,b,c,d){if(a instanceof Gf)return Pf(a,Jf(b||g.Ka,c||null,d)),!0;if(Ef(a))return a.then(b,c,d),!0;if(g.Pa(a))try{var e=a.then;if(g.Oa(e))return iba(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
iba=function(a,b,c,d,e){function f(m){l||(l=!0,d.call(e,m))}
function h(m){l||(l=!0,c.call(e,m))}
var l=!1;try{b.call(a,h,f)}catch(m){f(m)}};
Wf=function(a){a.F||(a.F=!0,g.Bf(a.I,a))};
Uf=function(a){var b=null;a.u&&(b=a.u,a.u=b.next,b.next=null);a.u||(a.B=null);return b};
Vf=function(a,b,c,d){if(3==c&&b.onRejected&&!b.u)for(;a&&a.C;a=a.A)a.C=!1;if(b.o)b.o.A=null,Yf(b,c,d);else try{b.u?b.A.call(b.context):Yf(b,c,d)}catch(e){Zf.call(null,e)}sf(If,b)};
Yf=function(a,b,c){2==b?a.A.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
hba=function(a,b){a.C=!0;g.Bf(function(){a.C&&Zf.call(null,b)})};
Xf=function(a){Wa.call(this,a)};
g.$f=function(a,b){g.pf.call(this);this.Kd=a||1;this.no=b||g.v;this.ny=(0,g.x)(this.Bd,this);this.vA=(0,g.D)()};
g.ag=function(a,b,c){if(g.Oa(a))c&&(a=(0,g.x)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.x)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.v.setTimeout(a,b||0)};
bg=function(a,b){var c=null;return Sf(new Gf(function(d,e){c=g.ag(function(){d(b)},a);
-1==c&&e(Error("Failed to schedule timer."))}),function(d){g.v.clearTimeout(c);
throw d;})};
dg=function(){this.N=new cg;this.A=new Map;this.I=new Set;this.C=0;this.F=100;this.flushInterval=3E4;this.o=new g.$f(this.flushInterval);this.o.na("tick",this.G,!1,this)};
jba=function(a){for(var b=0;b<a.length;b++)a[b].clear()};
kba=function(){this.o=eg();this.o.u("/client_streamz/youtube/web/network/one_platform_requests",{uj:3,tj:"request_url"})};
lba=function(){this.o=eg();this.o.u("/client_streamz/youtube/web/network/one_platform_redirects",{uj:2,tj:"response_code"},{uj:3,tj:"request_url"},{uj:3,tj:"response_url"})};
mba=function(a,b,c,d){a.o.B("/client_streamz/youtube/web/network/one_platform_redirects",b,c,d)};
nba=function(){this.o=eg();this.o.u("/client_streamz/youtube/web/network/one_platform_request_success",{uj:3,tj:"request_url"})};
oba=function(){this.o=eg();this.o.u("/client_streamz/youtube/web/network/one_platform_request_failed",{uj:2,tj:"response_code"},{uj:3,tj:"request_url"})};
pba=function(a){return(0,g.Ic)(a,function(b){b=b.toString(16);return 1<b.length?b:"0"+b}).join("")};
g.fg=function(a){for(var b=[],c=0,d=0;c<a.length;){var e=a[c++];if(128>e)b[d++]=String.fromCharCode(e);else if(191<e&&224>e){var f=a[c++];b[d++]=String.fromCharCode((e&31)<<6|f&63)}else if(239<e&&365>e){f=a[c++];var h=a[c++],l=a[c++];e=((e&7)<<18|(f&63)<<12|(h&63)<<6|l&63)-65536;b[d++]=String.fromCharCode(55296+(e>>10));b[d++]=String.fromCharCode(56320+(e&1023))}else f=a[c++],h=a[c++],b[d++]=String.fromCharCode((e&15)<<12|(f&63)<<6|h&63)}return b.join("")};
hg=function(a,b,c){this.u=null;this.o=this.A=this.B=0;this.C=!1;a&&gg(this,a,b,c)};
jg=function(a,b,c){if(ig.length){var d=ig.pop();a&&gg(d,a,b,c);return d}return new hg(a,b,c)};
gg=function(a,b,c,d){b=b.constructor===Uint8Array?b:b.constructor===ArrayBuffer?new Uint8Array(b):b.constructor===Array?new Uint8Array(b):b.constructor===String?g.kg(b):new Uint8Array(0);a.u=b;a.B=void 0!==c?c:0;a.A=void 0!==d?a.B+d:a.u.length;a.o=a.B};
lg=function(a){for(var b=128,c=0,d=0,e=0;4>e&&128<=b;e++)b=a.u[a.o++],c|=(b&127)<<7*e;128<=b&&(b=a.u[a.o++],c|=(b&127)<<28,d|=(b&127)>>4);if(128<=b)for(e=0;5>e&&128<=b;e++)b=a.u[a.o++],d|=(b&127)<<7*e+3;if(128>b){a=c>>>0;b=d>>>0;if(d=b&2147483648)a=~a+1>>>0,b=~b>>>0,0==a&&(b=b+1>>>0);a=4294967296*b+(a>>>0);return d?-a:a}a.C=!0};
mg=function(a){var b=a.u;var c=b[a.o+0];var d=c&127;if(128>c)return a.o+=1,d;c=b[a.o+1];d|=(c&127)<<7;if(128>c)return a.o+=2,d;c=b[a.o+2];d|=(c&127)<<14;if(128>c)return a.o+=3,d;c=b[a.o+3];d|=(c&127)<<21;if(128>c)return a.o+=4,d;c=b[a.o+4];d|=(c&15)<<28;if(128>c)return a.o+=5,d>>>0;a.o+=5;128<=b[a.o++]&&128<=b[a.o++]&&128<=b[a.o++]&&128<=b[a.o++]&&a.o++;return d};
ng=function(a){this.o=jg(a,void 0,void 0);this.C=this.o.o;this.u=this.A=-1;this.B=!1};
og=function(a){var b=a.o;(b=b.o==b.A)||(b=a.B)||(b=a.o,b=b.C||0>b.o||b.o>b.A);if(b)return!1;a.C=a.o.o;b=mg(a.o);var c=b&7;if(0!=c&&5!=c&&1!=c&&2!=c&&3!=c&&4!=c)return a.B=!0,!1;a.A=b>>>3;a.u=c;return!0};
pg=function(a){switch(a.u){case 0:if(0!=a.u)pg(a);else{for(a=a.o;a.u[a.o]&128;)a.o++;a.o++}break;case 1:1!=a.u?pg(a):(a=a.o,a.o+=8);break;case 2:if(2!=a.u)pg(a);else{var b=mg(a.o);a=a.o;a.o+=b}break;case 5:5!=a.u?pg(a):(a=a.o,a.o+=4);break;case 3:b=a.A;do{if(!og(a)){a.B=!0;break}if(4==a.u){a.A!=b&&(a.B=!0);break}pg(a)}while(1);break;default:a.B=!0}};
qg=function(a){var b=mg(a.o);a=a.o;var c=a.u,d=a.o,e=d+b;b=[];for(var f="";d<e;){var h=c[d++];if(128>h)b.push(h);else if(192>h)continue;else if(224>h){var l=c[d++];b.push((h&31)<<6|l&63)}else if(240>h){l=c[d++];var m=c[d++];b.push((h&15)<<12|(l&63)<<6|m&63)}else if(248>h){l=c[d++];m=c[d++];var n=c[d++];h=(h&7)<<18|(l&63)<<12|(m&63)<<6|n&63;h-=65536;b.push((h>>10&1023)+55296,(h&1023)+56320)}8192<=b.length&&(f+=String.fromCharCode.apply(null,b),b.length=0)}c=f;if(8192>=b.length)b=String.fromCharCode.apply(null,
b);else{e="";for(f=0;f<b.length;f+=8192)h=qb(b,f,f+8192),e+=String.fromCharCode.apply(null,h);b=e}a.o=d;return c+b};
rg=function(a){var b=mg(a.o);a=a.o;if(0>b||a.o+b>a.u.length)a.C=!0,b=new Uint8Array(0);else{var c=a.u.subarray(a.o,a.o+b);a.o+=b;b=c}return b};
sg=function(){this.o=[]};
tg=function(a,b){for(;127<b;)a.o.push(b&127|128),b>>>=7;a.o.push(b)};
ug=function(a,b){a.o.push(b>>>0&255);a.o.push(b>>>8&255);a.o.push(b>>>16&255);a.o.push(b>>>24&255)};
g.xg=function(a,b){void 0===b&&(b=0);vg();for(var c=wg[b],d=[],e=0;e<a.length;e+=3){var f=a[e],h=e+1<a.length,l=h?a[e+1]:0,m=e+2<a.length,n=m?a[e+2]:0,q=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|n>>6;n&=63;m||(n=64,h||(l=64));d.push(c[q],c[f],c[l]||"",c[n]||"")}return d.join("")};
g.yg=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return g.xg(b,3)};
qba=function(a){var b=[];zg(a,function(c){b.push(c)});
return b};
g.kg=function(a){!g.ne||g.Rd("10");var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;zg(a,function(f){d[e++]=f});
return d.subarray(0,e)};
zg=function(a,b){function c(m){for(;d<a.length;){var n=a.charAt(d++),q=Ag[n];if(null!=q)return q;if(!g.kc(n))throw Error("Unknown base64 encoding at char: "+n);}return m}
vg();for(var d=0;;){var e=c(-1),f=c(0),h=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=h&&(b(f<<4&240|h>>2),64!=l&&b(h<<6&192|l))}};
vg=function(){if(!Ag){Ag={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));wg[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Ag[f]&&(Ag[f]=e)}}}};
Bg=function(){this.A=[];this.u=0;this.o=new sg};
Cg=function(a,b){tg(a.o,8*b+2);var c=a.o.end();a.A.push(c);a.u+=c.length;c.push(a.u);return c};
Dg=function(a,b){var c=b.pop();for(c=a.u+a.o.length()-c;127<c;)b.push(c&127|128),c>>>=7,a.u++;b.push(c);a.u++};
Eg=function(a){for(var b=new Uint8Array(a.u+a.o.length()),c=a.A,d=c.length,e=0,f=0;f<d;f++){var h=c[f];b.set(h,e);e+=h.length}c=a.o.end();b.set(c,e);a.A=[b];return b};
Fg=function(a,b,c){if(null!=c&&null!=c)if(tg(a.o,8*b),a=a.o,0<=c)tg(a,c);else{for(b=0;9>b;b++)a.o.push(c&127|128),c>>=7;a.o.push(1)}};
Ig=function(a,b,c){if(null!=c&&null!=c){tg(a.o,8*b);a=a.o;var d=c;c=0>d;d=Math.abs(d);b=d>>>0;d=Math.floor((d-b)/4294967296);d>>>=0;c&&(d=~d>>>0,b=(~b>>>0)+1,4294967295<b&&(b=0,d++,4294967295<d&&(d=0)));Gg=b;Hg=d;c=Gg;for(b=Hg;0<b||127<c;)a.o.push(c&127|128),c=(c>>>7|b<<25)>>>0,b>>>=7;a.o.push(c)}};
Jg=function(a,b,c){null!=c&&(tg(a.o,8*b+1),a=a.o,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,Gg=b,Hg=c,ug(a,Gg),ug(a,Hg))};
Kg=function(a,b,c){if(null!=c){tg(a.o,8*b+1);a=a.o;var d=c;d=(c=0>d?1:0)?-d:d;if(0===d)Hg=0<1/d?0:2147483648,Gg=0;else if(isNaN(d))Hg=2147483647,Gg=4294967295;else if(1.7976931348623157E308<d)Hg=(c<<31|2146435072)>>>0,Gg=0;else if(2.2250738585072014E-308>d)d/=Math.pow(2,-1074),Hg=(c<<31|d/4294967296)>>>0,Gg=d>>>0;else{var e=d;b=0;if(2<=e)for(;2<=e&&1023>b;)b++,e/=2;else for(;1>e&&-1022<b;)e*=2,b--;d*=Math.pow(2,-b);Hg=(c<<31|b+1023<<20|1048576*d&1048575)>>>0;Gg=4503599627370496*d>>>0}ug(a,Gg);ug(a,
Hg)}};
Lg=function(a,b,c){null!=c&&(tg(a.o,8*b),a.o.o.push(c?1:0))};
Mg=function(a,b,c){if(null!=c){b=Cg(a,b);for(var d=a.o,e=0;e<c.length;e++){var f=c.charCodeAt(e);if(128>f)d.o.push(f);else if(2048>f)d.o.push(f>>6|192),d.o.push(f&63|128);else if(65536>f)if(55296<=f&&56319>=f&&e+1<c.length){var h=c.charCodeAt(e+1);56320<=h&&57343>=h&&(f=1024*(f-55296)+h-56320+65536,d.o.push(f>>18|240),d.o.push(f>>12&63|128),d.o.push(f>>6&63|128),d.o.push(f&63|128),e++)}else d.o.push(f>>12|224),d.o.push(f>>6&63|128),d.o.push(f&63|128)}Dg(a,b)}};
Ng=function(a,b,c,d){null!=c&&(b=Cg(a,b),d(c,a),Dg(a,b))};
Og=function(a,b,c,d){if(null!=c)for(var e=0;e<c.length;e++){var f=Cg(a,b);d(c[e],a);Dg(a,f)}};
Pg=function(){};
Ug=function(a,b,c,d){a.o=null;b||(b=[]);a.F=void 0;a.A=-1;a.Td=b;a:{if(b=a.Td.length){--b;var e=a.Td[b];if(!(null===e||"object"!=typeof e||Array.isArray(e)||Qg&&e instanceof Uint8Array)){a.B=b-a.A;a.u=e;break a}}a.B=Number.MAX_VALUE}a.C={};if(c)for(b=0;b<c.length;b++)e=c[b],e<a.B?(e+=a.A,a.Td[e]=a.Td[e]||Rg):(Sg(a),a.u[e]=a.u[e]||Rg);if(d&&d.length)for(b=0;b<d.length;b++)Tg(a,d[b])};
Sg=function(a){var b=a.B+a.A;a.Td[b]||(a.u=a.Td[b]={})};
Vg=function(a,b){if(b<a.B){var c=b+a.A,d=a.Td[c];return d===Rg?a.Td[c]=[]:d}if(a.u)return d=a.u[b],d===Rg?a.u[b]=[]:d};
rba=function(a){return null==a||a instanceof Uint8Array?a:"string"===typeof a?g.kg(a):null};
Wg=function(a,b){var c=Vg(a,b);return null==c?0:c};
Xg=function(a,b,c){b<a.B?a.Td[b+a.A]=c:(Sg(a),a.u[b]=c);return a};
Yg=function(a,b,c){0!==c?Xg(a,b,c):b<a.B?a.Td[b+a.A]=null:(Sg(a),delete a.u[b]);return a};
Zg=function(a,b,c,d){(c=Tg(a,c))&&c!==b&&void 0!==d&&(a.o&&c in a.o&&(a.o[c]=void 0),Xg(a,c,void 0));Xg(a,b,d)};
Tg=function(a,b){for(var c,d,e=0;e<b.length;e++){var f=b[e],h=Vg(a,f);null!=h&&(c=f,d=h,Xg(a,f,void 0))}return c?(Xg(a,c,d),c):0};
$g=function(a,b,c){a.o||(a.o={});if(!a.o[c]){var d=Vg(a,c);d&&(a.o[c]=new b(d))}return a.o[c]};
bh=function(a,b,c){ah(a,b,c);b=a.o[c];b==Rg&&(b=a.o[c]=[]);return b};
ah=function(a,b,c){a.o||(a.o={});if(!a.o[c]){for(var d=Vg(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.o[c]=e}};
ch=function(a,b,c){a.o||(a.o={});c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=c[e].Td;a.o[b]=c;Xg(a,b,d)};
dh=function(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?dh(d):d)}return b}if(Qg&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?dh(d):d);return b};
eh=function(a){this.o=a||{cookie:""}};
fh=function(a){a=(a.o.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=tc(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
gh=function(a){return a?a.passive&&sba()?a:a.capture||!1:!1};
hh=function(a,b,c,d){return a.addEventListener?(a.addEventListener(b,c,gh(d)),!0):!1};
ih=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,gh(void 0))};
g.lh=function(a){"number"===typeof a?(this.date=jh(a,0,1),kh(this,1)):g.Pa(a)?(this.date=jh(a.getFullYear(),a.getMonth(),a.getDate()),kh(this,a.getDate())):(this.date=new Date((0,g.D)()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),kh(this,a))};
jh=function(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b};
kh=function(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))};
nh=function(a){mh();return hc(a)};
ph=function(){return!oh()&&(Qc("iPod")||Qc("iPhone")||Qc("Android")||Qc("IEMobile"))};
oh=function(){return Qc("iPad")||Qc("Android")&&!Qc("Mobile")||Qc("Silk")};
qh=function(a){try{return!!a&&null!=a.location.href&&Od(a,"foo")}catch(b){return!1}};
rh=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
uba=function(){var a=[];rh(tba,function(b){a.push(b)});
return a};
wba=function(a){return(a=vba.exec(a))&&a[0]||""};
xba=function(){var a=sh;if(!a)return"";var b=/.*[&#?]google_debug(=[^&]*)?(&.*)?$/;try{var c=b.exec(decodeURIComponent(a));if(c)return c[1]&&1<c[1].length?c[1].substring(1):"true"}catch(d){}return""};
zba=function(){var a=g.ue("IFRAME"),b={};(0,g.y)(yba(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b};
g.th=function(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(m){try{l(b.next(m))}catch(n){e(n)}}
function h(m){try{l(b["throw"](m))}catch(n){e(n)}}
function l(m){m.done?d(m.value):(new c(function(n){n(m.value)})).then(f,h)}
l((b=b.apply(a,void 0)).next())})};
uh=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};
vh=function(a,b,c){b instanceof g.Xd?(a.left+=b.x,a.right+=b.x,a.top+=b.y,a.bottom+=b.y):(a.left+=b,a.right+=b,"number"===typeof c&&(a.top+=c,a.bottom+=c));return a};
g.wh=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
xh=function(a,b){return a==b?!0:a&&b?a.left==b.left&&a.width==b.width&&a.top==b.top&&a.height==b.height:!1};
g.zh=function(a,b,c){if("string"===typeof b)(b=yh(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=yh(c,d);f&&(c.style[f]=e)}};
yh=function(a,b){var c=Ah[b];if(!c){var d=od(b);c=d;void 0===a.style[d]&&(d=(g.pe?"Webkit":Bh?"Moz":g.ne?"ms":g.Ch?"O":null)+Naa(d),void 0!==a.style[d]&&(c=d));Ah[b]=c}return c};
g.Dh=function(a,b){var c=a.style[od(b)];return"undefined"!==typeof c?c:a.style[yh(a,b)]||""};
Eh=function(a,b){var c=ce(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""};
Fh=function(a,b){return Eh(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]};
g.Hh=function(a,b,c){if(b instanceof g.Xd){var d=b.x;b=b.y}else d=b,b=c;a.style.left=Gh(d,!1);a.style.top=Gh(b,!1)};
Ih=function(a){return new g.Xd(a.offsetLeft,a.offsetTop)};
Jh=function(a){try{return a.getBoundingClientRect()}catch(b){return{left:0,top:0,right:0,bottom:0}}};
Kh=function(a){if(g.ne&&!g.Sd(8))return a.offsetParent;var b=ce(a),c=Fh(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Fh(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null};
g.Lh=function(a){var b=ce(a),c=new g.Xd(0,0);var d=b?ce(b):document;d=!g.ne||g.Sd(9)||"CSS1Compat"==ee(d).o.compatMode?d.documentElement:d.body;if(a==d)return c;a=Jh(a);b=oe(ee(b).o);c.x=a.left+b.x;c.y=a.top+b.y;return c};
Nh=function(a,b){var c=new g.Xd(0,0),d=qe(ce(a));if(!Od(d,"parent"))return c;var e=a;do{var f=d==b?g.Lh(e):Mh(e);c.x+=f.x;c.y+=f.y}while(d&&d!=b&&d!=d.parent&&(e=d.frameElement)&&(d=d.parent));return c};
g.Ph=function(a,b){var c=Oh(a),d=Oh(b);return new g.Xd(c.x-d.x,c.y-d.y)};
Mh=function(a){a=Jh(a);return new g.Xd(a.left,a.top)};
Oh=function(a){if(1==a.nodeType)return Mh(a);a=a.changedTouches?a.changedTouches[0]:a;return new g.Xd(a.clientX,a.clientY)};
g.Rh=function(a,b,c){if(b instanceof g.Zd)c=b.height,b=b.width;else if(void 0==c)throw Error("missing height argument");g.Qh(a,b);a.style.height=Gh(c,!0)};
Gh=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Qh=function(a,b){a.style.width=Gh(b,!0)};
g.Sh=function(a){var b=Aba;if("none"!=Fh(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a};
Aba=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=g.pe&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=Jh(a),new g.Zd(a.right-a.left,a.bottom-a.top)):new g.Zd(b,c)};
g.Th=function(a,b){a.style.display=b?"":"none"};
Xh=function(){if(Uh&&!qh(Vh)){var a="."+Wh.domain;try{for(;2<a.split(".").length&&!qh(Vh);)Wh.domain=a=a.substr(a.indexOf(".")+1),Vh=window.parent}catch(b){}qh(Vh)||(Vh=window)}return Vh};
Yh=function(a,b,c){a&&null!==b&&b!=b.top&&(b=b.top);try{return(void 0===c?0:c)?(new g.Zd(b.innerWidth,b.innerHeight)).round():le(b||window).round()}catch(d){return new g.Zd(-12245933,-12245933)}};
Zh=function(a,b,c){try{a&&(b=b.top);var d=Yh(a,b,void 0===c?!1:c),e=oe(ee(b.document).o);if(-12245933==d.width){var f=d.width;var h=new uh(f,f,f,f)}else h=new uh(e.y,e.x+d.width,e.y+d.height,e.x);return h}catch(l){return new uh(-12245933,-12245933,-12245933,-12245933)}};
Bba=function(a){var b={};(0,g.y)(a,function(c){var d=c.event,e=b[d];b.hasOwnProperty(d)?null!==e&&(c.u(e)||(b[d]=null)):b[d]=c});
qaa(a,function(c){return null===b[c.event]})};
$h=function(){this.Gb=0;this.o=!1;this.u=-1;this.Lj=!1;this.te=0};
ai=function(){this.u=null;this.o=!1};
bi=function(a){ai.call(this);this.A=a};
ci=function(){ai.call(this)};
di=function(){ai.call(this)};
ei=function(){this.o={};this.u=!0;this.A={}};
fi=function(a,b,c){a.o[b]||(a.o[b]=new bi(c));return a.o[b]};
Cba=function(a){a.o.queryid||(a.o.queryid=new di)};
gi=function(a,b,c){(a=a.o[b])&&a.setValue(c)};
hi=function(a,b){if(Jb(a.A,b))return a.A[b];var c=a.o[b];if(c)return c.getValue()};
ii=function(a){var b={},c=g.Bb(a.o,function(d){return d.o});
g.Ab(c,function(d,e){var f=void 0!==a.A[e]?String(a.A[e]):d.o&&null!==d.u?String(d.u):"";0<f.length&&(b[e]=f)},a);
return b};
Dba=function(a){a=ii(a);var b=[];g.Ab(a,function(c,d){d in Object.prototype||"undefined"!=typeof c&&b.push([d,":",c].join(""))});
return b};
Eba=function(){this.o=this.Bi=null};
ji=function(){};
li=function(){if(!ki())throw Error();};
ki=function(){return!(!mi||!mi.performance)};
ni=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};
oi=function(){};
ri=function(a){a=a||pi();for(var b=new qi(g.v.location.href,g.v,!1),c=null,d=a.length-1,e=d;0<=e;--e){var f=a[e];!c&&Fba.test(f.url)&&(c=f);if(f.url&&!f.Nu){b=f;break}}e=null;f=a.length&&a[d].url;0!=b.depth&&f&&(e=a[d]);return new Gba(b,e,c)};
pi=function(){var a=g.v,b=[],c=null;do{var d=a;if(qh(d)){var e=d.location.href;c=d.document&&d.document.referrer||null}else e=c,c=null;b.push(new qi(e||"",d));try{a=d.parent}catch(f){a=null}}while(a&&d!=a);d=0;for(a=b.length-1;d<=a;++d)b[d].depth=a-d;d=g.v;if(d.location&&d.location.ancestorOrigins&&d.location.ancestorOrigins.length==b.length-1)for(a=1;a<b.length;++a)e=b[a],e.url||(e.url=d.location.ancestorOrigins[a-1]||"",e.Nu=!0);return b};
Gba=function(a,b,c){this.o=a;this.u=b;this.A=c};
qi=function(a,b,c){this.url=a;this.Pd=b;this.Nu=!!c;this.depth=null};
si=function(){this.A="&";this.B=!1;this.u={};this.C=0;this.o=[]};
ti=function(a,b){var c={};c[a]=b;return[c]};
vi=function(a,b,c,d,e){var f=[];rh(a,function(h,l){var m=ui(h,b,c,d,e);m&&f.push(l+"="+m)});
return f.join(b)};
ui=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],h=0;h<a.length;h++)f.push(ui(a[h],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(vi(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))};
wi=function(a,b,c,d){a.o.push(b);a.u[b]=ti(c,d)};
Hba=function(a){var b=1,c;for(c in a.u)b=c.length>b?c.length:b;return 3997-b-a.A.length-1};
xi=function(a,b){this.o=a;this.depth=b};
Jba=function(){function a(l,m){return null==l?m:l}
var b=pi(),c=Math.max(b.length-1,0),d=ri(b);b=d.o;var e=d.u,f=d.A,h=[];f&&h.push(new xi([f.url,f.Nu?2:0],a(f.depth,1)));e&&e!=f&&h.push(new xi([e.url,2],0));b.url&&b!=f&&h.push(new xi([b.url,0],a(b.depth,c)));d=(0,g.Ic)(h,function(l,m){return h.slice(0,h.length-m)});
!b.url||(f||e)&&b!=f||(e=wba(b.url))&&d.push([new xi([e,1],a(b.depth,c))]);d.push([]);return(0,g.Ic)(d,function(l){return Iba(c,l)})};
Iba=function(a,b){(0,g.yi)(b,function(e){return 0<=e.depth});
var c=(0,g.zi)(b,function(e,f){return Math.max(e,f.depth)},-1),d=uaa(c+2);
d[0]=a;(0,g.y)(b,function(e){return d[e.depth+1]=e.o});
return d};
Kba=function(){var a=Jba();return(0,g.Ic)(a,function(b){return ui(b)})};
Ai=function(){this.u=new oi;this.o=ki()?new li:new ji};
Lba=function(){Bi();var a=mi.document;return!!(a&&a.body&&a.body.getBoundingClientRect&&"function"===typeof mi.setInterval&&"function"===typeof mi.clearInterval&&"function"===typeof mi.setTimeout&&"function"===typeof mi.clearTimeout)};
Ci=function(a){Bi();var b=Xh()||mi;b.google_image_requests||(b.google_image_requests=[]);var c=b.document.createElement("img");c.src=a;b.google_image_requests.push(c)};
Di=function(){Bi();return Kba()};
Ei=function(){};
Bi=function(){return Ei.getInstance().getContext()};
Fi=function(a){Ug(this,a,null,null)};
Mba=function(a){this.B=a;this.o=-1;this.u=this.A=0};
Gi=function(a,b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];if(-1<a.o)return b.apply(null,g.la(d));try{return a.o=a.B.o.now(),b.apply(null,g.la(d))}finally{a.A+=a.B.o.now()-a.o,a.o=-1,a.u+=1}}};
Nba=function(a,b){this.u=a;this.A=b;this.o=new Mba(a)};
Ii=function(){this.A=void 0;this.u=this.F=0;this.C=-1;this.ob=new ei;fi(this.ob,"mv",Oba).o=!0;fi(this.ob,"omid",Hi);fi(this.ob,"epoh",Hi).o=!0;fi(this.ob,"epph",Hi).o=!0;fi(this.ob,"umt",Hi).o=!0;fi(this.ob,"phel",Hi).o=!0;fi(this.ob,"phell",Hi).o=!0;fi(this.ob,"oseid",Pba).o=!0;var a=this.ob;a.o.sloi||(a.o.sloi=new ci);a.o.sloi.o=!0;fi(this.ob,"xdi",Hi).o=!0;fi(this.ob,"amp",Hi).o=!0;fi(this.ob,"prf",Hi).o=!0;fi(this.ob,"gtx",Hi).o=!0;fi(this.ob,"mvp_lv",Hi).o=!0;fi(this.ob,"eocm",Hi).o=!0;fi(this.ob,
"rxlist",Hi).o=!0;this.o=new Nba(Bi(),this.ob);this.B=!1};
Qba=function(){var a="https:";mi&&mi.location&&"http:"===mi.location.protocol&&(a="http:");this.u=a;this.o=.01;this.A=Math.random()};
Ji=function(a,b,c,d,e){if((d?a.A:Math.random())<(e||a.o))try{if(c instanceof si)var f=c;else f=new si,rh(c,function(l,m){var n=f,q=n.C++,r=ti(m,l);n.o.push(q);n.u[q]=r});
var h=f.Ec(a.u,"pagead2.googlesyndication.com","/pagead/gen_204?id="+b+"&","");h&&Ci(h)}catch(l){}};
Ki=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};
Li=function(){var a=g.v.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):(0,g.D)()};
Mi=function(){var a=void 0===a?g.v:a;return(a=a.performance)&&a.now?a.now():null};
Rba=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};
Oi=function(){var a=Xh();this.events=[];this.u=a||g.v;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.o=Ni()||(null!=b?b:1>Math.random())};
Qi=function(a){a&&Pi&&Ni()&&(Pi.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),Pi.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))};
Ti=function(){var a=Ri;this.C=Si;this.B="jserror";this.A=!0;this.o=null;this.F=this.u;this.Ka=void 0===a?null:a};
Wi=function(a,b,c,d){return Gi(Ii.getInstance().o.o,function(){try{if(a.Ka&&a.Ka.o){var e=a.Ka.start(b.toString(),3);var f=c();a.Ka.end(e)}else f=c()}catch(m){var h=a.A;try{Qi(e);var l=new Ui(Vi(m));h=a.F(b,l,void 0,d)}catch(n){a.u(217,n)}if(!h)throw m;}return f})()};
Yi=function(a,b,c){var d=Xi;return Gi(Ii.getInstance().o.o,function(e){for(var f=[],h=0;h<arguments.length;++h)f[h-0]=arguments[h];return Wi(d,a,function(){return b.apply(void 0,f)},c)})};
Vi=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};
Ui=function(a){Ki.call(this,Error(a),{message:a})};
Zi=function(){var a=Xh();a&&"undefined"!=typeof a.google_measure_js_timing&&(a.google_measure_js_timing||Ri.disable())};
Sba=function(a){Xi.o=function(b){(0,g.y)(a,function(c){c(b)})}};
$i=function(a,b){return Wi(Xi,a,b,void 0)};
aj=function(a,b){return Yi(a,b,void 0)};
bj=function(a,b,c,d){Xi.u(a,b,c,d)};
cj=function(){return Date.now()-Tba};
Uba=function(){var a=Ii.getInstance().A,b=0<=dj?cj()-dj:-1,c=ej?cj()-fj:-1,d=0<=gj?cj()-gj:-1;if(947190542==a)return 100;if(79463069==a)return 200;a=[2E3,4E3];var e=[250,500,1E3];bj(637,Error(),.001);var f=b;-1!=c&&c<b&&(f=c);for(b=0;b<a.length;++b)if(f<a[b]){var h=e[b];break}void 0===h&&(h=e[a.length]);return-1!=d&&1500<d&&4E3>d?500:h};
hj=function(a){for(var b=0,c=a,d=0;a&&a!=a.parent;)a=a.parent,d++,qh(a)&&(c=a,b=d);return{Pd:c,level:b}};
ij=function(a){var b=a!==a.top,c=a.top===hj(a).Pd,d=-1,e=0;if(b&&c&&a.top.mraid){d=3;var f=a.top.mraid}else d=(f=a.mraid)?b?c?2:1:0:-1;f&&(f.IS_GMA_SDK||(e=2),Eb(Vba,function(h){return"function"===typeof f[h]})||(e=1));
return{Pf:f,compatibility:e,dP:d}};
Wba=function(a){return(a=a.document)&&"function"===typeof a.elementFromPoint};
jj=function(a,b,c,d){var e=void 0===e?!1:e;c=Yi(d,c,void 0);hh(a,b,c,{capture:e})};
kj=function(a,b){var c=Math.pow(10,b);return Math.floor(a*c)/c};
lj=function(a){return new uh(a.top,a.right,a.bottom,a.left)};
mj=function(a){var b=a.top||0,c=a.left||0;return new uh(b,c+(a.width||0),b+(a.height||0),c)};
nj=function(a){return null!=a&&0<=a&&1>=a};
Xba=function(){var a=g.Pc;return a?oj("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(";"),function(b){return sc(a,b)})||sc(a,"OMI/")&&!sc(a,"XiaoMi/")?!0:sc(a,"Presto")&&sc(a,"Linux")&&!sc(a,"X11")&&!sc(a,"Android")&&!sc(a,"Mobi"):!1};
pj=function(){this.A=!qh(mi.top);this.isMobileDevice=oh()||ph();var a=pi();this.domain=0<a.length&&null!=a[a.length-1]&&null!=a[a.length-1].url?g.ud(a[a.length-1].url)||"":"";this.o=new uh(0,0,0,0);this.B=new g.Zd(0,0);this.C=new g.Zd(0,0);this.G=new uh(0,0,0,0);this.F=0;this.I=!1;this.u=!(!mi||!ij(mi).Pf);this.update(mi)};
qj=function(a,b){b&&b.screen&&(a.B=new g.Zd(b.screen.width,b.screen.height))};
rj=function(a,b){var c=a.o?new g.Zd(a.o.qd(),a.o.getHeight()):new g.Zd(0,0);var d=b;d=void 0===d?mi:d;null!==d&&d!=d.top&&(d=d.top);var e=0,f=0;try{var h=d.document,l=h.body,m=h.documentElement;if("CSS1Compat"==h.compatMode&&m.scrollHeight)e=m.scrollHeight!=c.height?m.scrollHeight:m.offsetHeight,f=m.scrollWidth!=c.width?m.scrollWidth:m.offsetWidth;else{var n=m.scrollHeight,q=m.scrollWidth,r=m.offsetHeight,u=m.offsetWidth;m.clientHeight!=r&&(n=l.scrollHeight,q=l.scrollWidth,r=l.offsetHeight,u=l.offsetWidth);
n>c.height?n>r?(e=n,f=q):(e=r,f=u):n<r?(e=n,f=q):(e=r,f=u)}var w=new g.Zd(f,e)}catch(z){w=new g.Zd(-12245933,-12245933)}a.C=w};
sj=function(){var a=pj.getInstance();if(0<a.F||a.I)return!0;a=Bi().u.isVisible();var b=0===ni(Wh);return a||b};
uj=function(a,b){var c=tj(b);return 0===c?0:tj(a)/c};
tj=function(a){return Math.max(a.bottom-a.top,0)*Math.max(a.right-a.left,0)};
Yba=function(a,b){if(!a||!b)return!1;for(var c=0;null!==a&&100>c++;){if(a===b)return!0;try{if(a=g.Be(a)||a){var d=ce(a),e=d&&qe(d),f=e&&e.frameElement;f&&(a=f)}}catch(h){break}}return!1};
Zba=function(a,b,c){if(!a||!b)return!1;b=vh(a.clone(),-b.left,-b.top);a=(b.left+b.right)/2;b=(b.top+b.bottom)/2;var d=Xh();qh(d.top)&&d.top&&d.top.document&&(d=d.top);if(!Wba(d))return!1;a=d.document.elementFromPoint(a,b);if(!a)return!1;b=(b=(b=ce(c))&&b.defaultView&&b.defaultView.frameElement)&&Yba(b,a);d=a===c;a=!d&&a&&He(a,function(e){return e===c});
return!(b||d||a)};
$ba=function(a,b,c,d){return pj.getInstance().A?!1:0>=a.qd()||0>=a.getHeight()?!0:c&&d?$i(208,function(){return Zba(a,b,c)}):!1};
vj=function(a,b,c){var d=new uh(0,0,0,0);this.time=a;this.volume=null;this.A=b;this.o=d;this.u=c};
xj=function(a,b,c,d,e,f,h,l){this.G=a;this.I=b;this.C=c;this.B=d;this.o=e;this.A=f;this.u=h;this.F=l};
yj=function(a){this.A=a;this.u=0;this.o=null};
zj=function(a,b,c){this.Pd=a;this.ba=void 0===c?"na":c;this.B=[];this.fd=!1;this.A=new vj(-1,!0,this);this.o=this;this.G=b;this.M=this.aa=this.I=!1;this.T="uk";this.Nb=!1;this.C=!0};
Bj=function(a,b,c){if(!a.M||(void 0===c?0:c))a.M=!0,a.T=b,a.G=0,a.o!=a||Aj(a)};
Cj=function(a,b){g.fb(a.B,b)||(a.B.push(b),b.al(a.o),b.ni(a.A),b.Ng()&&(a.I=!0))};
Dj=function(a){a=a.o;a.SA();a.RA();var b=pj.getInstance();b.G=Zh(!1,a.Pd,b.isMobileDevice);a.vI();a.A.o=a.Hz()};
Ej=function(a){a.I=a.B.length?oj(a.B,function(b){return b.Ng()}):!1};
Fj=function(a){var b=g.ob(a.B);(0,g.y)(b,function(c){c.ni(a.A)})};
Aj=function(a){var b=g.ob(a.B);(0,g.y)(b,function(c){c.al(a.o)});
a.o!=a||Fj(a)};
Gj=function(a,b,c,d){this.element=a;this.o=new uh(0,0,0,0);this.C=new uh(0,0,0,0);this.u=b;this.ob=c;this.N=d;this.Nb=!1;this.timestamp=-1;this.B=new xj(b.A,this.element,this.o,new uh(0,0,0,0),0,0,cj(),0)};
Hj=function(a){this.Nb=!1;this.o=a;this.B=g.Ka};
Ij=function(a,b,c){this.A=void 0===c?0:c;this.u=a;this.o=null==b?"":b};
aca=function(a){switch(Math.trunc(a.A)){case -16:return-16;case -8:return-8;case 0:return 0;case 8:return 8;case 16:return 16;default:return 16}};
bca=function(a,b){return new Ij(a.u,a.o,a.A+b)};
Jj=function(a,b){return a.A<b.A?!0:a.A>b.A?!1:a.u<b.u?!0:a.u>b.u?!1:typeof a.o<typeof b.o?!0:typeof a.o>typeof b.o?!1:a.o<b.o};
Kj=function(){this.A=0;this.o=[];this.u=!1};
cca=function(a,b){(0,g.y)(b.o,function(c){a.add(c.u,c.o,aca(c))})};
Lj=function(a,b){var c=void 0===c?0:c;var d=void 0===d?!0:d;rh(b,function(e,f){d&&void 0===e||a.add(f,e,c)});
return a};
Mj=function(a){var b=dca;a.u&&(g.wb(a.o,function(c,d){return Jj(d,c)?1:Jj(c,d)?-1:0}),a.u=!1);
return(0,g.zi)(a.o,function(c,d){var e=b(d);return""+c+(""!=c&&""!=e?"&":"")+e},"")};
dca=function(a){var b=a.u;a=a.o;return""===a?b:"boolean"===typeof a?a?b:"":Array.isArray(a)?0===a.length?b:b+"="+a.join():b+"="+(g.fb(["mtos","tos","p"],b)?a:encodeURIComponent(a))};
Oj=function(a){var b=void 0===b?!0:b;this.o=new Kj;void 0!==a&&cca(this.o,a);b&&this.o.add("v",Nj,-16)};
eca=function(a){var b=[],c=[];g.Ab(a,function(d,e){if(!(e in Object.prototype)&&"undefined"!=typeof d){Array.isArray(d)&&(d=d.join(","));var f=[e,"=",d].join("");switch(e){case "adk":case "r":case "tt":case "error":case "mtos":case "tos":case "p":case "bs":b.unshift(f);break;case "req":case "url":case "referrer":case "iframe_loc":c.push(f);break;default:b.push(f)}}});
return b.concat(c)};
Pj=function(){if(Nj&&"unreleased"!==Nj)return Nj};
Qj=function(a){var b=void 0===b?4E3:b;a=a.toString();if(!/&v=[^&]+/.test(a)){var c=Pj();a=c?a+"&v="+encodeURIComponent(c):a}a=a.substring(0,b);Ci(a)};
Rj=function(){this.o=0};
fca=function(a,b,c){(0,g.y)(a.A,function(d){var e=a.o;if(!d.o&&(d.A(b,c),d.B())){d.o=!0;var f=d.u(),h=new Kj;h.add("id","av-js");h.add("type","verif");h.add("vtype",d.C);d=Rj.getInstance();h.add("i",d.o++);h.add("adk",e);Lj(h,f);e=new Oj(h);Qj(e)}})};
Sj=function(){this.u=this.A=this.B=this.o=0};
Tj=function(a){this.u=a=void 0===a?gca:a;this.o=(0,g.Ic)(this.u,function(){return new Sj})};
Vj=function(a,b){return Uj(a,function(c){return c.o},void 0===b?!0:b)};
Xj=function(a,b){return Wj(a,b,function(c){return c.o})};
Yj=function(a,b){return Uj(a,function(c){return c.A},void 0===b?!0:b)};
Zj=function(a,b){return Wj(a,b,function(c){return c.A})};
ak=function(a,b){return Wj(a,b,function(c){return c.u})};
bk=function(a){(0,g.y)(a.o,function(b){b.u=0})};
Uj=function(a,b,c){a=(0,g.Ic)(a.o,function(d){return b(d)});
return c?a:hca(a)};
Wj=function(a,b,c){var d=g.db(a.u,function(e){return b<=e});
return-1==d?0:c(a.o[d])};
hca=function(a){return(0,g.Ic)(a,function(b,c,d){return 0<c?d[c]-d[c-1]:d[c]})};
ck=function(){this.u=new Tj;this.ea=new Sj;this.R=this.G=-1;this.sa=1E3;this.ra=new Tj([1,.9,.8,.7,.6,.5,.4,.3,.2,.1,0]);this.Z=this.T=-1};
dk=function(a,b){return Yj(a.u,void 0===b?!0:b)};
ek=function(a,b,c){g.A.call(this);this.position=ica.clone();this.xq=this.Kp();this.Xu=-2;this.lP=Date.now();this.VD=-1;this.Cg=b;this.jq=null;this.mp=!1;this.fr=null;this.opacity=-1;this.IO=c;this.kE=this.Yu=g.Ka;this.he=new Eba;this.he.Bi=a;this.he.o=a;this.pl=!1;this.pj={Fv:null,Dv:null};this.KD=!0;this.ho=null;this.fl=!1;Ii.getInstance().F++;this.jd=this.iu();this.UD=-1;this.dc=null;a=this.ob=new ei;fi(a,"od",jca);fi(a,"opac",Hi).o=!0;fi(a,"sbeos",Hi).o=!0;fi(a,"prf",Hi).o=!0;fi(a,"mwt",Hi).o=
!0;fi(a,"iogeo",Hi);fi(a,"xefpls",Hi).o=!0;(a=this.he.Bi)&&a.getAttribute&&!/-[a-z]/.test("googleAvInapp")&&(kca&&a.dataset?"googleAvInapp"in a.dataset:a.hasAttribute?a.hasAttribute("data-"+pd()):a.getAttribute("data-"+pd()))&&(pj.getInstance().u=!0);1==this.IO?gi(this.ob,"od",1):gi(this.ob,"od",0)};
fk=function(a,b){if(b!=a.fl){a.fl=b;var c=pj.getInstance();b?c.F++:0<c.F&&c.F--}};
gk=function(a,b){if(a.dc){if(b.getName()===a.dc.getName())return;a.dc.dispose();a.dc=null}var c=b.create(a.he.o,a.ob,a.Ng());if(c=null!=c&&c.ev()?c:null)a.dc=c};
hk=function(a,b,c){if(!a.jq||-1==a.Cg||-1===b.u||-1===a.jq.u)return 0;a=b.u-a.jq.u;return a>c?0:a};
lca=function(a,b,c){if(a.dc){a.dc.ah();var d=a.dc.B,e=d.G,f=e.o;if(null!=d.B){var h=d.C;a.fr=new g.Xd(h.left-f.left,h.top-f.top)}f=a.Qr()?Math.max(d.o,d.A):d.o;h={};null!==e.volume&&(h.volume=e.volume);e=a.Bz(d);a.jq=d;a.la(f,b,c,!1,h,e,d.F)}};
mca=function(a){if(a.mp&&a.ho){var b=1==hi(a.ob,"od"),c=pj.getInstance().o,d=a.ho,e=a.dc?a.dc.getName():"ns",f=new g.Zd(c.qd(),c.getHeight());c=a.Qr();a={gP:e,fr:a.fr,yP:f,Qr:c,Gb:a.jd.Gb,wP:b};if(b=d.u){b.ah();e=b.B;f=e.G.o;var h=null,l=null;null!=e.B&&f&&(h=e.C,h=new g.Xd(h.left-f.left,h.top-f.top),l=new g.Zd(f.right-f.left,f.bottom-f.top));e=c?Math.max(e.o,e.A):e.o;c={gP:b.getName(),fr:h,yP:l,Qr:c,wP:!1,Gb:e}}else c=null;c&&fca(d,a,c)}};
nca=function(a,b,c){b&&(a.Yu=b);c&&(a.kE=c)};
ik=function(){};
kk=function(a){if(a instanceof ik)return a;if("function"==typeof a.Qh)return a.Qh(!1);if(g.Na(a)){var b=0,c=new ik;c.next=function(){for(;;){if(b>=a.length)throw jk;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.lk=function(a,b,c){if(g.Na(a))try{(0,g.y)(a,b,c)}catch(d){if(d!==jk)throw d;}else{a=kk(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==jk)throw d;}}};
oca=function(a){if(g.Na(a))return g.ob(a);a=kk(a);var b=[];g.lk(a,function(c){b.push(c)});
return b};
pca=function(){this.B=this.o=this.A=this.u=this.C=0};
qca=function(a){var b={};var c=(0,g.D)()-a.C;b=(b.ptlt=c,b);(c=a.u)&&(b.pnk=c);(c=a.A)&&(b.pnc=c);(c=a.B)&&(b.pnmm=c);(a=a.o)&&(b.pns=a);return b};
mk=function(){$h.call(this);this.fullscreen=!1;this.volume=void 0;this.paused=!1;this.mediaTime=-1};
nk=function(a){return nj(a.volume)&&.1<=a.volume};
rca=function(){var a={};this.u=(a.vs=[1,0],a.vw=[0,1],a.am=[2,2],a.a=[4,4],a.f=[8,8],a.bm=[16,16],a.b=[32,32],a.avw=[0,64],a.avs=[64,0],a.pv=[256,256],a.gdr=[0,512],a.p=[0,1024],a.r=[0,2048],a.m=[0,4096],a.um=[0,8192],a.ef=[0,16384],a.s=[0,32768],a.pmx=[0,16777216],a);this.o={};for(var b in this.u)0<this.u[b][1]&&(this.o[b]=0);this.A=0};
ok=function(a,b){var c=a.u[b],d=c[1];a.A+=c[0];0<d&&0==a.o[b]&&(a.o[b]=1)};
sca=function(a){return pk(a,g.Hb(a.u))};
pk=function(a,b){var c=0,d;for(d in a.o)g.fb(b,d)&&1==a.o[d]&&(c+=a.u[d][1],a.o[d]=2);return c};
tca=function(a){var b=0,c;for(c in a.o){var d=a.o[c];if(1==d||2==d)b+=a.u[c][1]}return b};
qk=function(){this.o=this.u=0};
rk=function(){ck.call(this);this.A=new Sj;this.ba=this.M=this.U=0;this.I=-1;this.ua=new Sj;this.C=new Sj;this.o=new Tj;this.F=this.B=-1;this.N=new Sj;this.sa=2E3;this.aa=new qk;this.ga=new qk;this.fa=new qk};
sk=function(a,b,c){var d=a.ba;ej||c||-1==a.I||(d+=b-a.I);return d};
uca=function(){this.o=!1};
tk=function(a,b){this.o=!1;this.B=a;this.I=b;this.u=0};
vk=function(a,b){if(a.A(b)){var c=uk(a.I,a.B,b);a.u|=c;return 0==c}return!1};
wk=function(a,b,c,d){Gj.call(this,a,b,c,d)};
xk=function(a,b,c){Gj.call(this,null,a,b,c);this.G=a.isActive();this.F=0};
yk=function(a,b,c,d,e,f){e=void 0===e?null:e;f=void 0===f?[]:f;ek.call(this,b,c,d);this.Nt=0;this.Og={};this.Pc=new rca;this.AE={};this.yd="";this.Hl=null;this.ua=!1;this.o=[];this.Qj=e;this.F=f;this.B=null;this.A=-1;this.ba=this.I=void 0;this.M=this.R=0;this.Z=-1;this.sa=this.ga=!1;this.U=this.G=this.u=this.Yl=this.ra=0;new Tj;this.aa=this.ea=0;this.fa=-1;this.Sc=0;this.N=g.Ka;this.T=[this.Kp()];this.ya=2;this.zk={};this.zk.pause="p";this.zk.resume="r";this.zk.skip="s";this.zk.mute="m";this.zk.unmute=
"um";this.zk.exitfullscreen="ef";this.C=null};
zk=function(a){0!=a.Sc&&(a.Sc=3)};
Ak=function(a){return void 0===a?a:Number(a)?kj(a,3):0};
Bk=function(a,b){var c;null!=b&&b<a.T.length?c=b:c=a.T.length-1;return a.T[c]};
Ck=function(a){var b=!!hi(Ii.getInstance().ob,"umt");return a.I||!b&&!a.ba?0:1};
vca=function(a,b){if(2==a.Sc)var c=0;else-1==a.Cg?c=0:(c=b-a.Cg,c=c>Math.max(1E4,a.A/3)?0:c);var d=a.N(a)||{};d=void 0!==d.currentTime?d.currentTime:a.R;var e=d-a.R,f=0;0<=e?(a.M+=c,a.aa+=Math.max(c-e,0),f=Math.min(e,a.M)):a.ea+=Math.abs(e);0!=e&&(a.M=0);-1==a.fa&&0<e&&(a.fa=0<=gj?cj()-gj:-1);a.R=d;return f};
wca=function(a,b){oj(a.F,function(c){return c.B==b.B})||a.F.push(b)};
Dk=function(a,b,c){return 15E3<=b?!0:a.ga?(void 0===c?0:c)?!0:0<a.A?b>=a.A/2:0<a.Z?b>=a.Z:!1:!1};
xca=function(a){var b=kj(a.jd.Gb,2),c=a.Pc.A,d=a.jd,e=Bk(a),f=Ak(e.B),h=Ak(e.F),l=Ak(d.volume),m=kj(e.G,2),n=kj(e.R,2),q=kj(d.Gb,2),r=kj(e.T,2),u=kj(e.Z,2);d=kj(d.te,2);a=a.hi().clone();a.round();e=dk(e,!1);return{xP:b,bn:c,yq:f,tq:h,om:l,zq:m,uq:n,Gb:q,Aq:r,wq:u,te:d,position:a,Zq:e}};
Fk=function(a,b){Ek(a.o,b,function(){return{xP:0,bn:void 0,yq:-1,tq:-1,om:-1,zq:-1,uq:-1,Gb:-1,Aq:-1,wq:-1,te:-1,position:void 0,Zq:[]}});
a.o[b]=xca(a)};
Ek=function(a,b,c){for(var d=a.length;d<b+1;)a.push(c()),d++};
Ik=function(a,b,c){var d=a.AE[b];if(null!=d)return d;d=yca(a,b);var e=Lb(Gk,function(f){return f==b});
c=Hk(a,d,d,c,zca[Gk[e]]);"fully_viewable_audible_half_duration_impression"==b&&(c.std="csm",c.ic=pk(a.Pc,["gdr"]));return c};
Jk=function(a,b,c){var d=[b];if(a!=b||c!=b)d.unshift(a),d.push(c);return d};
Hk=function(a,b,c,d,e){if(a.pl)return{"if":0};var f=a.hi().clone();f.round();var h=pj.getInstance(),l=Ii.getInstance(),m=a.ke(),n=a.dc?a.dc.getName():"ns",q={};q["if"]=h.A?1:void 0;q.sdk=a.B?a.B:void 0;q.t=a.lP;q.p=[f.top,f.left,f.bottom,f.right];q.tos=Vj(m.u,!1);q.mtos=dk(m);q.mcvt=m.ea.A;q.ps=void 0;f=sk(m,cj(),2==a.Sc);q.vht=f;q.mut=m.ua.A;q.a=Ak(a.jd.volume);q.mv=Ak(m.F);q.fs=a.fl?1:0;q.ft=m.N.o;q.at=m.C.o;q.as=.1<=m.B?1:0;q.atos=Vj(m.o);q.ssb=Vj(m.ra,!1);q.amtos=Yj(m.o);q.uac=a.ra;q.vpt=m.A.o;
"nio"==n&&(q.nio=1,q.avms="nio");q.gmm="4";q.gdr=Dk(a,m.A.o,!0)?1:0;q.efpf=a.ya;if("gsv"==n||"nis"==n)n=a.dc,0<n.F&&(q.nnut=n.F);q.tcm=Ck(a);q.nmt=a.ea;q.bt=a.aa;q.pst=a.fa;q.vpaid=a.I;q.dur=a.A;q.vmtime=a.R;q.is=a.Pc.A;1<=a.o.length&&(q.i0=a.o[0].bn,q.a0=[a.o[0].om],q.c0=[a.o[0].Gb],q.ss0=[a.o[0].te],n=a.o[0].position,q.p0=n?[n.top,n.left,n.bottom,n.right]:void 0);2<=a.o.length&&(q.i1=a.o[1].bn,q.a1=Jk(a.o[1].yq,a.o[1].om,a.o[1].tq),q.c1=Jk(a.o[1].zq,a.o[1].Gb,a.o[1].uq),q.ss1=Jk(a.o[1].Aq,a.o[1].te,
a.o[1].wq),n=a.o[1].position,q.p1=n?[n.top,n.left,n.bottom,n.right]:void 0,q.mtos1=a.o[1].Zq);3<=a.o.length&&(q.i2=a.o[2].bn,q.a2=Jk(a.o[2].yq,a.o[2].om,a.o[2].tq),q.c2=Jk(a.o[2].zq,a.o[2].Gb,a.o[2].uq),q.ss2=Jk(a.o[2].Aq,a.o[2].te,a.o[2].wq),n=a.o[2].position,q.p2=n?[n.top,n.left,n.bottom,n.right]:void 0,q.mtos2=a.o[2].Zq);4<=a.o.length&&(q.i3=a.o[3].bn,q.a3=Jk(a.o[3].yq,a.o[3].om,a.o[3].tq),q.c3=Jk(a.o[3].zq,a.o[3].Gb,a.o[3].uq),q.ss3=Jk(a.o[3].Aq,a.o[3].te,a.o[3].wq),n=a.o[3].position,q.p3=n?[n.top,
n.left,n.bottom,n.right]:void 0,q.mtos3=a.o[3].Zq);q.cs=tca(a.Pc);b&&(q.ic=sca(a.Pc),q.dvpt=m.A.u,q.dvs=ak(m.u,.5),q.dfvs=ak(m.u,1),q.davs=ak(m.o,.5),q.dafvs=ak(m.o,1),c&&(m.A.u=0,bk(m.u),bk(m.o)),a.Nj()&&(q.dtos=m.U,q.dav=m.M,q.dtoss=a.Nt+1,c&&(m.U=0,m.M=0,a.Nt++)),q.dat=m.C.u,q.dft=m.N.u,c&&(m.C.u=0,m.N.u=0));q.ps=[h.C.width,h.C.height];q.bs=[h.o.qd(),h.o.getHeight()];q.scs=[h.B.width,h.B.height];q.dom=h.domain;a.Yl&&(q.vds=a.Yl);if(0<a.F.length||a.Qj)b=g.ob(a.F),a.Qj&&b.push(a.Qj),q.pings=(0,g.Ic)(b,
function(r){return r.toString()});
b=(0,g.Ic)((0,g.Ae)(a.F,function(r){return r.C()}),function(r){return r.getId()});
raa(b);q.ces=b;a.u&&(q.vmer=a.u);a.G&&(q.vmmk=a.G);a.U&&(q.vmiec=a.U);q.avms=a.dc?a.dc.getName():"ns";a.dc&&g.Ub(q,a.dc.di());d?(q.c=kj(a.jd.Gb,2),q.ss=kj(a.jd.te,2)):q.tth=cj()-Kk;q.mc=kj(m.R,2);q.nc=kj(m.G,2);q.mv=Ak(m.F);q.nv=Ak(m.B);q.lte=kj(a.Xu,2);d=Bk(a,e);dk(m);q.qmtos=dk(d);q.qnc=kj(d.G,2);q.qmv=Ak(d.F);q.qnv=Ak(d.B);q.qas=.1<=d.B?1:0;q.qi=a.yd;q.avms||(q.avms="geo");q.psm=m.aa.o;q.psv=m.aa.getValue();q.psfv=m.ga.getValue();q.psa=m.fa.getValue();l=Dba(l.ob);l.length&&(q.veid=l);a.C&&g.Ub(q,
qca(a.C));return q};
yca=function(a,b){if(g.fb(Aca,b))return!0;var c=a.Og[b];return void 0!==c?(a.Og[b]=!0,!c):!1};
Cca=function(){this.o={};var a=qe();Lk(this,a,document);var b=Bca();try{if("1"==b){for(var c=a.parent;c!=a.top;c=c.parent)Lk(this,c,c.document);Lk(this,a.top,a.top.document)}}catch(d){}};
Bca=function(){var a=document.documentElement;try{if(!qh(qe().top))return"2";var b=[],c=qe(a.ownerDocument);for(a=c;a!=c.top;a=a.parent)if(a.frameElement)b.push(a.frameElement);else break;return b&&0!=b.length?"1":"0"}catch(d){return"2"}};
Lk=function(a,b,c){jj(c,"mousedown",function(){return Dca(a)},301);
jj(b,"scroll",function(){return Eca(a)},302);
jj(c,"touchmove",function(){return Fca(a)},303);
jj(c,"mousemove",function(){return Gca(a)},304);
jj(c,"keydown",function(){return Hca(a)},305)};
Dca=function(a){g.Ab(a.o,function(b){1E5<b.A||++b.A})};
Eca=function(a){g.Ab(a.o,function(b){1E5<b.o||++b.o})};
Fca=function(a){g.Ab(a.o,function(b){1E5<b.o||++b.o})};
Hca=function(a){g.Ab(a.o,function(b){1E5<b.u||++b.u})};
Gca=function(a){g.Ab(a.o,function(b){1E5<b.B||++b.B})};
g.Nk=function(a){var b=[];Mk(new Ica,a,b);return b.join("")};
Ica=function(){};
Mk=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Mk(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ok(d,c),c.push(":"),Mk(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ok(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
Ok=function(a,b){b.push('"',a.replace(Jca,function(c){var d=Pk[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Pk[c]=d);return d}),'"')};
Qk=function(){this.o=[];this.u=[]};
Rk=function(a,b){return g.cb(a.o,function(c){return c.yd==b})};
Sk=function(a,b){return b?g.cb(a.o,function(c){return c.he.Bi==b}):null};
Kca=function(a,b){return g.cb(a.u,function(c){return 2==c.rg()&&c.yd==b})};
Uk=function(){var a=Tk;return 0==a.o.length?a.u:0==a.u.length?a.o:g.nb(a.u,a.o)};
Vk=function(a,b){var c=1==b.rg()?a.o:a.u,d=g.bb(c,function(e){return e==b});
return-1!=d?(c.splice(d,1),b.dc&&b.dc.un(),b.dispose(),!0):!1};
Lca=function(a){var b=Tk;if(Vk(b,a)){switch(a.rg()){case 0:var c=function(){return null};
case 2:c=function(){return Kca(b,a.yd)};
break;case 1:c=function(){return Rk(b,a.yd)}}for(var d=c();d;d=c())Vk(b,d)}};
Mca=function(a,b){var c=Tk,d=(0,g.Ae)(a,(void 0===b?0:b)?function(e){return!Rk(c,e.yd)}:function(e){return!Sk(c,e.he.Bi)});
c.o.push.apply(c.o,g.la(d))};
Wk=function(a){var b=Tk,c=[];(0,g.y)(a,function(d){oj(b.o,function(e){return e.he.Bi===d.he.Bi&&e.yd===d.yd})||(b.o.push(d),c.push(d))})};
Xk=function(){this.o=this.u=null};
Yk=function(a,b){function c(d,e){b(d,e)}
if(null==a.u)return!1;a.o=g.cb(a.u,function(d){return null!=d&&d.GA()});
a.o&&(a.o.init(c)?Dj(a.o.o):b(a.o.o.Uk(),a.o));return null!=a.o};
Zk=function(a){a=Nca(a);Hj.call(this,a.length?a[a.length-1]:new zj(mi,0));this.A=a;this.u=null};
Nca=function(a){if(!a.length)return[];a=(0,g.Ae)(a,function(c){return null!=c&&c.TA()});
for(var b=1;b<a.length;b++)Cj(a[b-1],a[b]);return a};
$k=function(a,b,c,d){Gj.call(this,a,b,c,d);this.M=this.I=null};
al=function(a,b){try{if(b.length){a.I||(a.I=cj());var c=Oca(b),d=Nh(a.element,a.u.o.Pd),e=d.x,f=d.y;a.o=new uh(Math.round(f),Math.round(e)+c.boundingClientRect.width,Math.round(f)+c.boundingClientRect.height,Math.round(e));var h=lj(c.intersectionRect);a.C=vh(h,a.o.left-h.left,a.o.top-h.top)}}catch(l){a.un(),bj(299,l)}};
Oca=function(a){return(0,g.zi)(a,function(b,c){return b.time>c.time?b:c},a[0])};
bl=function(a,b,c,d){$k.call(this,a,b,c,d);this.F=this.G=this.A=null};
cl=function(a){return a.A&&a.A.takeRecords?a.A.takeRecords():[]};
Qca=function(a){if(!a.element)return!1;var b=a.element,c=a.u.o.Pd,d=Ii.getInstance().o.o;a.A=new c.IntersectionObserver(Gi(d,function(e){return al(a,e)}),Pca);
d=Gi(d,function(){a.A.unobserve(b);a.A.observe(b);al(a,cl(a))});
c.ResizeObserver?(a.G=new c.ResizeObserver(d),a.G.observe(b)):c.MutationObserver&&(a.F=new g.v.MutationObserver(d),a.F.observe(b,{attributes:!0,childList:!0,characterData:!0,subtree:!0}));a.A.observe(b);al(a,cl(a));return!0};
dl=function(){var a=/Chrome\/(\d+)/.exec(g.Pc);return a?parseFloat(a[1]):NaN};
el=function(){var a=/\sCobalt\/(\S+)\s/.exec(g.Pc);if(!a)return NaN;var b=[];a=g.p(a[1].split("."));for(var c=a.next();!c.done;c=a.next())c=parseInt(c.value,10),0<=c&&b.push(c);return parseFloat(b.join("."))};
gl=function(){return fl("android")&&fl("chrome")&&!(fl("trident/")||fl("edge/"))&&!fl("cobalt")};
hl=function(){return fl("armv7")||fl("aarch64")||fl("android")};
g.il=function(){return fl("cobalt")};
jl=function(){return fl("cobalt")&&fl("appletv")};
kl=function(){return fl("(ps3; leanback shell)")||fl("ps3")&&g.il()};
ll=function(){return fl("(ps4; leanback shell)")||fl("ps4")&&g.il()};
g.ml=function(){return g.il()&&(fl("ps4 vr")||fl("ps4 pro vr"))};
nl=function(){var a=/WebKit\/([0-9]+)/.exec(g.Pc);return!!(a&&600<=parseInt(a[1],10))};
ol=function(){var a=/WebKit\/([0-9]+)/.exec(g.Pc);return!!(a&&602<=parseInt(a[1],10))};
pl=function(){return fl("iemobile")||fl("windows phone")&&fl("edge")};
rl=function(){return ql&&fl("applewebkit")&&!fl("version")&&(!fl("safari")||fl("gsa/"))};
sl=function(){return fl("smart-tv")&&fl("samsung")};
fl=function(a){var b=g.Pc;return b?0<=b.toLowerCase().indexOf(a):!1};
tl=function(a){a=void 0===a?mi:a;Hj.call(this,new zj(a,2))};
vl=function(){var a=ul();zj.call(this,mi.top,a,"geo")};
ul=function(){Ii.getInstance();var a=pj.getInstance();return a.A||a.u?0:2};
wl=function(){};
xl=function(){this.done=!1;this.o={AF:0,Xx:0,yU:0,Vy:0,Fu:-1,VF:0,UF:0,WF:0};this.C=null;this.F=!1;this.u=null;this.G=0;this.A=new yj(this)};
zl=function(){var a=yl;a.F||(a.F=!0,Rca(a,function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];return a.B.apply(a,g.la(c))}),a.B())};
Sca=function(){wl.getInstance();var a=Xk.getInstance();null!=a.o&&a.o.o?Dj(a.o.o):pj.getInstance().update(mi)};
Al=function(a,b,c){if(!a.done&&(a.A.cancel(),0!=b.length)){a.u=null;try{Sca();var d=cj(),e=Ii.getInstance();e.C=d;if(null!=Xk.getInstance().o)for(e=0;e<b.length;e++)lca(b[e],d,c);else Ji(Si,"",{strategy_not_selected:1,bin:e.u},!0,void 0);for(d=0;d<b.length;d++)mca(b[d]);++a.o.Vy;Tca()}finally{c?(0,g.y)(b,function(f){f.jd.Gb=0}):a.A.schedule()}}};
Rca=function(a,b){if(!a.C){var c=Yi(142,b,void 0);Bi();var d;Wh.visibilityState?d="visibilitychange":Wh.mozVisibilityState?d="mozvisibilitychange":Wh.webkitVisibilityState&&(d="webkitvisibilitychange");d&&hh(Wh,d,c,{capture:!1})&&(a.C=c)}};
Bl=function(){var a=Xk.getInstance();if(null!=a.o){var b=a.o;(0,g.y)(Uk(),function(c){return gk(c,b)})}};
Tca=function(){var a=Ii.getInstance();hi(a.ob,"llp")};
Cl=function(a,b){var c=a.G;ej&&(c+=b-fj);return c};
Uca=function(a){var b=yl;a=void 0===a?function(){return{}}:a;
Xi.B="av-js";Si.o=.01;Sba([function(c){var d=Ii.getInstance(),e={};e=(e.bin=d.u,e.type="error",e);d=ii(d.ob);if(!b.u){var f=mi.document,h=0<=dj?cj()-dj:-1,l=cj();-1==b.o.Fu&&(h=l);var m=pj.getInstance(),n=Ii.getInstance(),q=ii(n.ob),r=Uk();try{if(0<r.length){var u=m.o;u&&(q.bs=[u.qd(),u.getHeight()]);var w=m.C;w&&(q.ps=[w.width,w.height]);mi.screen&&(q.ss=[mi.screen.width,mi.screen.height])}else q.url=encodeURIComponent(mi.location.href.substring(0,512)),f.referrer&&(q.referrer=encodeURIComponent(f.referrer.substring(0,
512)));q.tt=h;q.pt=dj;q.bin=n.u;void 0!==mi.google_osd_load_pub_page_exp&&(q.olpp=mi.google_osd_load_pub_page_exp);q.deb=[1,b.o.AF,b.o.Xx,b.o.Vy,b.o.Fu,0,b.A.u,b.o.VF,b.o.UF,b.o.WF].join("-");q.tvt=Cl(b,l);m.u&&(q.inapp=1);if(null!==mi&&mi!=mi.top){0<r.length&&(q.iframe_loc=encodeURIComponent(mi.location.href.substring(0,512)));var z=m.G;q.is=[z.qd(),z.getHeight()]}}catch(B){q.error=1}b.u=q}u=g.Rb(b.u);w=Ii.getInstance().o;1==hi(w.A,"prf")?(z=new Fi,f=w.o,h=0,-1<f.o&&(h=f.B.o.now()-f.o),z=Yg(z,1,
f.A+h),f=w.o,z=Yg(z,5,-1<f.o?f.u+1:f.u),z=Yg(z,2,w.u.o.A()),z=Yg(z,3,w.u.o.u()),z=Yg(z,4,w.u.o.o()),w={},f=new Bg,h=Vg(z,1),h=null==h?h:+h,h=null==h?0:h,0!==h&&Kg(f,1,h),h=Wg(z,2),0!==h&&Ig(f,2,h),h=Wg(z,3),0!==h&&Ig(f,3,h),h=Wg(z,4),0!==h&&Ig(f,4,h),h=Wg(z,5),0!==h&&Fg(f,5,h),z=Eg(f),w=(w.pf=g.xg(z),w)):w={};g.Ub(u,w);g.Ub(c,e,d,u,a());if(e=Pj())d={},g.Ub(c,(d.v=encodeURIComponent(e),d))}])};
Vca=function(){var a=Dl||mi;if(!a)return"";var b=[];if(!a.location||!a.location.href)return"";b.push("url="+encodeURIComponent(a.location.href.substring(0,512)));a.document&&a.document.referrer&&b.push("referrer="+encodeURIComponent(a.document.referrer.substring(0,512)));return b.join("&")};
El=function(a){return function(b){return void 0===b[a]?0:b[a]}};
Gl=function(){var a=[0,2,4];return function(b){b=b.tos;if(Array.isArray(b)){for(var c=Array(b.length),d=0;d<b.length;d++)c[d]=0<d?c[d-1]+b[d]:b[d];return void 0!==a?Fl(c,a):c}}};
Hl=function(a,b,c,d){c=void 0===c?!0:c;d=void 0===d?function(){return!0}:d;
return function(e){var f=e[a];if(Array.isArray(f)&&d(e))return Fl(f,b,c)}};
Il=function(a,b){return function(c){return b(c)?c[a]:void 0}};
Jl=function(a){return function(b){for(var c=0;c<a.length;c++)if(a[c]===b.e||void 0===a[c]&&!b.hasOwnProperty("e"))return!0;return!1}};
Fl=function(a,b,c){return void 0===c||c?(0,g.Ae)(a,function(d,e){return g.fb(b,e)}):(0,g.Ic)(b,function(d,e,f){return a.slice(0<e?f[e-1]+1:0,d+1).reduce(function(h,l){return h+l},0)})};
Ml=function(a,b){var c={sv:"867",cb:"j"};c.nas=Tk.o.length;c.msg=a;if(void 0!==b){var d=Kl(b);d&&(c.e=Ll[d])}return c};
Nl=function(a){return ic(a,"custom_metric_viewable")};
Kl=function(a){var b=Nl(a)?"custom_metric_viewable":a.toLowerCase();return Lb(Gk,function(c){return c==b})};
Wca=function(){this.o=void 0;this.u=!1;this.A=0;this.B=-1;this.C="tos"};
Yca=function(a){try{var b=a.split(",");return b.length>g.Hb(Xca).length?null:(0,g.zi)(b,function(c,d){var e=d.toLowerCase().split("=");if(2!=e.length||void 0===Ol[e[0]]||!Ol[e[0]](e[1]))throw Error("Entry ("+e[0]+", "+e[1]+") is invalid.");c[e[0]]=e[1];return c},{})}catch(c){return null}};
Zca=function(a,b){if(void 0==a.o)return 0;switch(a.C){case "mtos":return a.u?Zj(b.o,a.o):Zj(b.u,a.o);case "tos":return a.u?Xj(b.o,a.o):Xj(b.u,a.o)}return 0};
Pl=function(a,b,c,d){tk.call(this,b,d);this.G=a;this.F=c};
Ql=function(a){tk.call(this,"fully_viewable_audible_half_duration_impression",a)};
Rl=function(a,b){tk.call(this,a,b)};
Sl=function(){this.u=this.B=this.F=this.C=this.A=this.o=""};
$ca=function(){};
Tl=function(a,b,c,d,e){var f={};if(void 0!==a)if(null!=b)for(var h in b){var l=b[h];h in Object.prototype||null!=l&&(f[h]="function"===typeof l?l(a):a[l])}else g.Ub(f,a);void 0!==c&&g.Ub(f,c);a=Mj(Lj(new Kj,f));0<a.length&&void 0!==d&&void 0!==e&&(e=e(a),a+="&"+d+"="+e);return a};
Ul=function(){};
Vl=function(a,b,c){xk.call(this,a,b,c)};
Wl=function(a){a=void 0===a?mi:a;Hj.call(this,new zj(a,2))};
Xl=function(a,b,c){xk.call(this,a,b,c)};
Yl=function(a){a=void 0===a?mi:a;Hj.call(this,new zj(a,2))};
Zl=function(){zj.call(this,mi,2,"mraid");this.U=0;this.N=this.R=!1;this.F=null;this.u=ij(this.Pd);this.A.o=new uh(0,0,0,0);this.Z=!1};
$l=function(a,b,c){a.Vi("addEventListener",b,c)};
cm=function(a){Ii.getInstance().B=!!a.Vi("isViewable");$l(a,"viewableChange",ada);"loading"===a.Vi("getState")?$l(a,"ready",am):bm(a)};
bm=function(a){"string"===typeof a.u.Pf.AFMA_LIDAR?(a.R=!0,bda(a)):(a.u.compatibility=3,a.F="nc",Bj(a,"w"))};
bda=function(a){a.N=!1;var b=1==hi(Ii.getInstance().ob,"rmmt"),c=!!a.Vi("isViewable");(b?!c:1)&&Bi().setTimeout(aj(524,function(){a.N||(dm(a),bj(540,Error()),a.F="mt",Bj(a,"w"))}),500);
cda(a);$l(a,a.u.Pf.AFMA_LIDAR,em)};
cda=function(a){var b=1==hi(Ii.getInstance().ob,"sneio"),c=void 0!==a.u.Pf.AFMA_LIDAR_EXP_1,d=void 0!==a.u.Pf.AFMA_LIDAR_EXP_2;(b=b&&d)&&(a.u.Pf.AFMA_LIDAR_EXP_2=!0);c&&(a.u.Pf.AFMA_LIDAR_EXP_1=!b)};
dm=function(a){a.Vi("removeEventListener",a.u.Pf.AFMA_LIDAR,em);a.R=!1};
fm=function(a,b){if("loading"===a.Vi("getState"))return new g.Zd(-1,-1);var c=a.Vi(b);if(!c)return new g.Zd(-1,-1);var d=parseInt(c.width,10);c=parseInt(c.height,10);return isNaN(d)||isNaN(c)?new g.Zd(-1,-1):new g.Zd(d,c)};
am=function(){try{var a=Zl.getInstance();a.Vi("removeEventListener","ready",am);bm(a)}catch(b){bj(541,b)}};
em=function(a,b){try{var c=Zl.getInstance();c.N=!0;var d=a?new uh(a.y,a.x+a.width,a.y+a.height,a.x):new uh(0,0,0,0);var e=cj(),f=sj();var h=new vj(e,f,c);h.o=d;h.volume=b;c.ni(h)}catch(l){bj(542,l)}};
ada=function(a){var b=Ii.getInstance(),c=Zl.getInstance();a&&!b.B&&(b.B=!0,c.Z=!0,c.F&&Bj(c,"w",!0))};
gm=function(){this.fd=!1;this.o=null;this.A=new Ul;this.u=null;var a={};this.G=(a.start=this.nH,a.firstquartile=this.iH,a.midpoint=this.kH,a.thirdquartile=this.oH,a.complete=this.gH,a.pause=this.Pv,a.resume=this.BD,a.skip=this.mH,a.viewable_impression=this.ii,a.mute=this.Vl,a.unmute=this.Vl,a.fullscreen=this.jH,a.exitfullscreen=this.hH,a.fully_viewable_audible_half_duration_impression=this.ii,a.measurable_impression=this.ii,a.abandon=this.Pv,a.engagedview=this.ii,a.impression=this.ii,a.creativeview=
this.ii,a.progress=this.Vl,a.custom_metric_viewable=this.ii,a.bufferstart=this.Pv,a.bufferfinish=this.BD,a);a={};this.M=(a.overlay_resize=this.lH,a.abandon=this.yu,a.close=this.yu,a.collapse=this.yu,a.overlay_unmeasurable_impression=function(b){return Ik(b,"overlay_unmeasurable_impression",sj())},a.overlay_viewable_immediate_impression=function(b){return Ik(b,"overlay_viewable_immediate_impression",sj())},a.overlay_unviewable_impression=function(b){return Ik(b,"overlay_unviewable_impression",sj())},
a.overlay_viewable_end_of_session_impression=function(b){return Ik(b,"overlay_viewable_end_of_session_impression",sj())},a);
Ii.getInstance().u=3;dda(this);this.B=!1};
hm=function(a,b,c,d){b=a.Sn(null,d,!0,b);b.B=c;Mca([b],a.B);return b};
eda=function(a,b,c){Bba(b);var d=a.u;(0,g.y)(b,function(e){var f=(0,g.Ic)(e.o,function(h){var l=Yca(h);if(null==l)h=null;else if(h=new Wca,null!=l.visible&&(h.o=l.visible/100),null!=l.audible&&(h.u=1==l.audible),null!=l.time){var m="mtos"==l.timetype?"mtos":"tos",n=jc(l.time,"%")?"%":"ms";l=parseInt(l.time,10);"%"==n&&(l/=100);"ms"==n?(h.A=l,h.B=-1):(h.A=-1,h.B=l);h.C=void 0===m?"tos":m}return h});
oj(f,function(h){return null==h})||wca(c,new Pl(e.id,e.event,f,d))})};
fda=function(a){a=a.u;return[new Rl("viewable_impression",a),new Ql(a)]};
gda=function(){var a=[];pj.getInstance();var b=Ii.getInstance();a.push(vl.getInstance());hi(b.ob,"mvp_lv")&&a.push(Zl.getInstance());b=[new Wl,new Yl];b.push(new Zk(a));b.push(new tl(mi));return b};
hda=function(a){if(!a.fd){a.fd=!0;try{var b=cj(),c=Ii.getInstance(),d=pj.getInstance();dj=b;c.A=79463069;"o"!==a.o&&(Dl=hj(mi).Pd);if(Lba()){yl.o.Xx=0;yl.o.Fu=cj()-b;var e=gda(),f=Xk.getInstance();f.u=e;Yk(f,function(){im()})?yl.done||(Bl(),Cj(f.o.o,a),zl()):d.A?im():zl()}else jm=!0}catch(h){throw Tk.reset(),h;
}}};
lm=function(a){yl.A.cancel();km=a;yl.done=!0};
mm=function(a){if(a.o)return a.o;var b=Xk.getInstance().o;if(b)switch(b.getName()){case "nis":a.o="n";break;case "gsv":a.o="m"}a.o||(a.o="h");return a.o};
nm=function(a,b,c){if(null==a.u)return b.Yl|=4,!1;a=uk(a.u,c,b);b.Yl|=a;return 0==a};
im=function(){var a=[new tl(mi)],b=Xk.getInstance();b.u=a;Yk(b,function(){lm("i")})?yl.done||(Bl(),zl()):lm("i")};
om=function(a,b,c){if(!b.ua){var d=Ik(b,"start",sj());a=a.A.o(d).o;var e={id:"lidarv"};e.r=c;e.v="867v";wd(a,function(f,h){return e[f]="mtos"==f||"tos"==f?h:encodeURIComponent(h)});
c=Vca();wd(c,function(f,h){return e[f]=encodeURIComponent(h)});
c="//pagead2.googlesyndication.com/pagead/gen_204?"+Mj(Lj(new Kj,e));Qj(c);b.ua=!0}};
pm=function(a,b,c){Al(yl,[a],!sj());Fk(a,c);4!=c&&Ek(a.T,c,a.Kp);return Ik(a,b,sj())};
dda=function(a){Uca(function(){var b=qm();null!=a.o&&(b.sdk=a.o);var c=Xk.getInstance();null!=c.o&&(b.avms=c.o.getName());return b})};
ida=function(a,b,c,d){if(a.B)var e=Rk(Tk,b);else e=Sk(Tk,c),null!==e&&e.yd!==b&&(a.Bm(e),e=null);e||(b=a.Sn(c,cj(),!1,b),0==Tk.u.length&&(Ii.getInstance().A=79463069),Wk([b]),e=b,e.B=mm(a),d&&(e.Hl=d));return e};
jda=function(a,b){b.G=0;for(var c in rm)null==a[c]&&(b.G|=rm[c]);sm(a,"currentTime");sm(a,"duration")};
kda=function(a){(0,g.y)(Tk.o,function(b){3==b.Sc&&a.Bm(b)})};
sm=function(a,b){var c=a[b];void 0!==c&&0<c&&(a[b]=Math.floor(1E3*c))};
qm=function(){var a=pj.getInstance(),b={};return b.sv="867",b["if"]=a.A?"1":"0",b.nas=String(Tk.o.length),b};
tm=function(a){return!a||"function"!==typeof a||0>String(Function.prototype.toString).indexOf("[native code]")?!1:0<=String(a).indexOf("[native code]")&&!0||!1};
vm=function(a){return!!(1<<a&um)};
pda=function(){try{lda()}catch(d){}var a="a=1&b="+um+"&",b=[],c=99;(0,g.y)(mda,function(d,e){var f=!1;try{f=d(mi)}catch(h){}b[e/32>>>0]|=f<<e%32});
(0,g.y)(b,function(d,e){a+=String.fromCharCode(c+e)+"="+(d>>>0).toString(16)+"&"});
c=105;(0,g.y)(nda,function(d){var e="false";try{e=d(mi)}catch(f){}a+=String.fromCharCode(c++)+"="+e+"&"});
(0,g.y)(oda,function(d){var e="";try{e=g.yg(d(mi))}catch(f){}a+=String.fromCharCode(c++)+"="+e+"&"});
return a.slice(0,-1)};
lda=function(){if(!wm){var a=function(){xm=!0;mi.document.removeEventListener("webdriver-evaluate",a,!0)};
mi.document.addEventListener("webdriver-evaluate",a,!0);var b=function(){ym=!0;mi.document.removeEventListener("webdriver-evaluate-response",b,!0)};
mi.document.addEventListener("webdriver-evaluate-response",b,!0);wm=!0}};
zm=function(){this.u=-1};
Am=function(){this.u=64;this.o=Array(4);this.C=Array(this.u);this.B=this.A=0;this.reset()};
Bm=function(a,b,c){c||(c=0);var d=Array(16);if("string"===typeof b)for(var e=0;16>e;++e)d[e]=b.charCodeAt(c++)|b.charCodeAt(c++)<<8|b.charCodeAt(c++)<<16|b.charCodeAt(c++)<<24;else for(e=0;16>e;++e)d[e]=b[c++]|b[c++]<<8|b[c++]<<16|b[c++]<<24;b=a.o[0];c=a.o[1];e=a.o[2];var f=a.o[3];var h=b+(f^c&(e^f))+d[0]+3614090360&4294967295;b=c+(h<<7&4294967295|h>>>25);h=f+(e^b&(c^e))+d[1]+3905402710&4294967295;f=b+(h<<12&4294967295|h>>>20);h=e+(c^f&(b^c))+d[2]+606105819&4294967295;e=f+(h<<17&4294967295|h>>>15);
h=c+(b^e&(f^b))+d[3]+3250441966&4294967295;c=e+(h<<22&4294967295|h>>>10);h=b+(f^c&(e^f))+d[4]+4118548399&4294967295;b=c+(h<<7&4294967295|h>>>25);h=f+(e^b&(c^e))+d[5]+1200080426&4294967295;f=b+(h<<12&4294967295|h>>>20);h=e+(c^f&(b^c))+d[6]+2821735955&4294967295;e=f+(h<<17&4294967295|h>>>15);h=c+(b^e&(f^b))+d[7]+4249261313&4294967295;c=e+(h<<22&4294967295|h>>>10);h=b+(f^c&(e^f))+d[8]+1770035416&4294967295;b=c+(h<<7&4294967295|h>>>25);h=f+(e^b&(c^e))+d[9]+2336552879&4294967295;f=b+(h<<12&4294967295|
h>>>20);h=e+(c^f&(b^c))+d[10]+4294925233&4294967295;e=f+(h<<17&4294967295|h>>>15);h=c+(b^e&(f^b))+d[11]+2304563134&4294967295;c=e+(h<<22&4294967295|h>>>10);h=b+(f^c&(e^f))+d[12]+1804603682&4294967295;b=c+(h<<7&4294967295|h>>>25);h=f+(e^b&(c^e))+d[13]+4254626195&4294967295;f=b+(h<<12&4294967295|h>>>20);h=e+(c^f&(b^c))+d[14]+2792965006&4294967295;e=f+(h<<17&4294967295|h>>>15);h=c+(b^e&(f^b))+d[15]+1236535329&4294967295;c=e+(h<<22&4294967295|h>>>10);h=b+(e^f&(c^e))+d[1]+4129170786&4294967295;b=c+(h<<
5&4294967295|h>>>27);h=f+(c^e&(b^c))+d[6]+3225465664&4294967295;f=b+(h<<9&4294967295|h>>>23);h=e+(b^c&(f^b))+d[11]+643717713&4294967295;e=f+(h<<14&4294967295|h>>>18);h=c+(f^b&(e^f))+d[0]+3921069994&4294967295;c=e+(h<<20&4294967295|h>>>12);h=b+(e^f&(c^e))+d[5]+3593408605&4294967295;b=c+(h<<5&4294967295|h>>>27);h=f+(c^e&(b^c))+d[10]+38016083&4294967295;f=b+(h<<9&4294967295|h>>>23);h=e+(b^c&(f^b))+d[15]+3634488961&4294967295;e=f+(h<<14&4294967295|h>>>18);h=c+(f^b&(e^f))+d[4]+3889429448&4294967295;c=
e+(h<<20&4294967295|h>>>12);h=b+(e^f&(c^e))+d[9]+568446438&4294967295;b=c+(h<<5&4294967295|h>>>27);h=f+(c^e&(b^c))+d[14]+3275163606&4294967295;f=b+(h<<9&4294967295|h>>>23);h=e+(b^c&(f^b))+d[3]+4107603335&4294967295;e=f+(h<<14&4294967295|h>>>18);h=c+(f^b&(e^f))+d[8]+1163531501&4294967295;c=e+(h<<20&4294967295|h>>>12);h=b+(e^f&(c^e))+d[13]+2850285829&4294967295;b=c+(h<<5&4294967295|h>>>27);h=f+(c^e&(b^c))+d[2]+4243563512&4294967295;f=b+(h<<9&4294967295|h>>>23);h=e+(b^c&(f^b))+d[7]+1735328473&4294967295;
e=f+(h<<14&4294967295|h>>>18);h=c+(f^b&(e^f))+d[12]+2368359562&4294967295;c=e+(h<<20&4294967295|h>>>12);h=b+(c^e^f)+d[5]+4294588738&4294967295;b=c+(h<<4&4294967295|h>>>28);h=f+(b^c^e)+d[8]+2272392833&4294967295;f=b+(h<<11&4294967295|h>>>21);h=e+(f^b^c)+d[11]+1839030562&4294967295;e=f+(h<<16&4294967295|h>>>16);h=c+(e^f^b)+d[14]+4259657740&4294967295;c=e+(h<<23&4294967295|h>>>9);h=b+(c^e^f)+d[1]+2763975236&4294967295;b=c+(h<<4&4294967295|h>>>28);h=f+(b^c^e)+d[4]+1272893353&4294967295;f=b+(h<<11&4294967295|
h>>>21);h=e+(f^b^c)+d[7]+4139469664&4294967295;e=f+(h<<16&4294967295|h>>>16);h=c+(e^f^b)+d[10]+3200236656&4294967295;c=e+(h<<23&4294967295|h>>>9);h=b+(c^e^f)+d[13]+681279174&4294967295;b=c+(h<<4&4294967295|h>>>28);h=f+(b^c^e)+d[0]+3936430074&4294967295;f=b+(h<<11&4294967295|h>>>21);h=e+(f^b^c)+d[3]+3572445317&4294967295;e=f+(h<<16&4294967295|h>>>16);h=c+(e^f^b)+d[6]+76029189&4294967295;c=e+(h<<23&4294967295|h>>>9);h=b+(c^e^f)+d[9]+3654602809&4294967295;b=c+(h<<4&4294967295|h>>>28);h=f+(b^c^e)+d[12]+
3873151461&4294967295;f=b+(h<<11&4294967295|h>>>21);h=e+(f^b^c)+d[15]+530742520&4294967295;e=f+(h<<16&4294967295|h>>>16);h=c+(e^f^b)+d[2]+3299628645&4294967295;c=e+(h<<23&4294967295|h>>>9);h=b+(e^(c|~f))+d[0]+4096336452&4294967295;b=c+(h<<6&4294967295|h>>>26);h=f+(c^(b|~e))+d[7]+1126891415&4294967295;f=b+(h<<10&4294967295|h>>>22);h=e+(b^(f|~c))+d[14]+2878612391&4294967295;e=f+(h<<15&4294967295|h>>>17);h=c+(f^(e|~b))+d[5]+4237533241&4294967295;c=e+(h<<21&4294967295|h>>>11);h=b+(e^(c|~f))+d[12]+1700485571&
4294967295;b=c+(h<<6&4294967295|h>>>26);h=f+(c^(b|~e))+d[3]+2399980690&4294967295;f=b+(h<<10&4294967295|h>>>22);h=e+(b^(f|~c))+d[10]+4293915773&4294967295;e=f+(h<<15&4294967295|h>>>17);h=c+(f^(e|~b))+d[1]+2240044497&4294967295;c=e+(h<<21&4294967295|h>>>11);h=b+(e^(c|~f))+d[8]+1873313359&4294967295;b=c+(h<<6&4294967295|h>>>26);h=f+(c^(b|~e))+d[15]+4264355552&4294967295;f=b+(h<<10&4294967295|h>>>22);h=e+(b^(f|~c))+d[6]+2734768916&4294967295;e=f+(h<<15&4294967295|h>>>17);h=c+(f^(e|~b))+d[13]+1309151649&
4294967295;c=e+(h<<21&4294967295|h>>>11);h=b+(e^(c|~f))+d[4]+4149444226&4294967295;b=c+(h<<6&4294967295|h>>>26);h=f+(c^(b|~e))+d[11]+3174756917&4294967295;f=b+(h<<10&4294967295|h>>>22);h=e+(b^(f|~c))+d[2]+718787259&4294967295;e=f+(h<<15&4294967295|h>>>17);h=c+(f^(e|~b))+d[9]+3951481745&4294967295;a.o[0]=a.o[0]+b&4294967295;a.o[1]=a.o[1]+(e+(h<<21&4294967295|h>>>11))&4294967295;a.o[2]=a.o[2]+e&4294967295;a.o[3]=a.o[3]+f&4294967295};
Cm=function(){this.u=null};
Dm=function(a){return function(b){var c=new Am;c.update(b+a);return pba(c.digest()).slice(-8)}};
Em=function(a,b){this.u=a;this.A=b};
uk=function(a,b,c){var d=a.o(c);if("function"===typeof d){var e={};e=(e.sv="867",e.cb="j",e.e=qda(b),e);var f=Ik(c,b,sj());g.Ub(e,f);c.AE[b]=f;a=2==c.rg()?eca(e).join("&"):a.A.o(e).o;try{return d(c.yd,a,b),0}catch(h){return 2}}else return 1};
qda=function(a){var b=Nl(a)?"custom_metric_viewable":a;a=Lb(Gk,function(c){return c==b});
return Ll[a]};
Fm=function(a,b,c){Em.call(this,a,b);this.B=c};
Gm=function(){gm.call(this);this.F=null;this.C=!1;this.I={};this.A=new Cm};
rda=function(a,b,c){c=c.opt_configurable_tracking_events;null!=a.u&&Array.isArray(c)&&eda(a,c,b)};
sda=function(a,b,c){var d=Rk(Tk,b);d||(d=c.opt_nativeTime||-1,d=hm(a,b,mm(a),d),c.opt_osdId&&(d.Hl=c.opt_osdId));return d};
tda=function(a,b,c){var d=Rk(Tk,b);d||(d=hm(a,b,"n",c.opt_nativeTime||-1));return d};
uda=function(a,b){var c=Rk(Tk,b);c||(c=hm(a,b,"h",-1));return c};
vda=function(a){Ii.getInstance();switch(mm(a)){case "b":return"ytads.bulleit.triggerExternalActivityEvent";case "n":return"ima.bridge.triggerExternalActivityEvent";case "h":case "m":case "ml":return"ima.common.triggerExternalActivityEvent"}return null};
Im=function(a,b,c,d){c=void 0===c?{}:c;var e={};g.Ub(e,{opt_adElement:void 0,opt_fullscreen:void 0},c);if(e.opt_bounds)return a.A.o(Ml("ol",d));if(void 0!==d)if(void 0!==Kl(d))if(jm)b=Ml("ue",d);else if(hda(a),"i"==km)b=Ml("i",d),b["if"]=0;else if(b=a.Np(b,e))if(a.B&&3==b.Sc)b="stopped";else{b:{"i"==km&&(b.pl=!0,a.ow());c=e.opt_fullscreen;void 0!==c&&fk(b,!!c);var f;if(c=!pj.getInstance().u)(c=sc(g.Pc,"CrKey")||sc(g.Pc,"PlayStation")||sc(g.Pc,"Roku")||Xba()||sc(g.Pc,"Xbox"))||(c=g.Pc,c=sc(c,"AppleTV")||
sc(c,"Apple TV")||sc(c,"CFNetwork")||sc(c,"tvOS")),c||(c=g.Pc,c=sc(c,"sdk_google_atv_x86")||sc(c,"Android TV")),c=!c;c&&(Bi(),c=0===ni(Wh));if(f=c){switch(b.rg()){case 1:om(a,b,"pv");break;case 2:a.gw(b)}lm("pv")}c=d.toLowerCase();if(!f&&g.fb(wda,c)&&0==b.Sc){"i"!=km&&(yl.done=!1);f=void 0!==e?e.opt_nativeTime:void 0;gj=f="number"===typeof f?f:cj();b.mp=!0;var h=sj();b.Sc=1;b.Og={};b.Og.firstquartile=!1;b.Og.midpoint=!1;b.Og.thirdquartile=!1;b.Og.complete=!1;b.Og.pause=!1;b.Og.skip=!1;b.Og.viewable_impression=
!1;b.Nt=0;h||(b.ke().I=f);Al(yl,[b],!h)}0!=b.Sc&&g.fb(xda,c)&&!b.pl&&b.Qj&&(f=b.Qj,f.o||(f.o=vk(f,b)));(f=b.zk[c])&&ok(b.Pc,f);switch(b.rg()){case 1:var l=Nl(c)?a.G.custom_metric_viewable:a.G[c];break;case 2:l=a.M[c]}if(l&&(d=l.call(a,b,e,d),void 0!==d)){e=Ml(void 0,c);g.Ub(e,d);d=e;break b}d=void 0}3==b.Sc&&(a.B?b.dc&&b.dc.un():a.Bm(b));b=d}else b=Ml("nf",d);else b=void 0;else jm?b=Ml("ue"):(b=a.Np(b,e))?(d=Ml(),g.Ub(d,Hk(b,!0,!1,!1)),b=d):b=Ml("nf");return"string"===typeof b?a.B&&"stopped"===b?
Hm:a.A.o(void 0):a.A.o(b)};
Jm=function(a){return Ii.getInstance(),"h"!=mm(a)&&mm(a),!1};
Km=function(a){var b={};return b.viewability=a.o,b.googleViewability=a.A,b.moatInit=a.C,b.moatViewability=a.F,b.integralAdsViewability=a.B,b.doubleVerifyViewability=a.u,b};
Lm=function(a,b,c){c=void 0===c?{}:c;a=Im(Gm.getInstance(),b,c,a);return Km(a)};
Mm=function(a,b){b=void 0===b?!1:b;var c=Gm.getInstance().Np(a,{});c?zk(c):b&&(c=Gm.getInstance().Sn(null,cj(),!1,a),c.Sc=3,Wk([c]))};
Nm=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
yda=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=n=0}
function b(r){for(var u=h,w=0;64>w;w+=4)u[w/4]=r[w]<<24|r[w+1]<<16|r[w+2]<<8|r[w+3];for(w=16;80>w;w++)r=u[w-3]^u[w-8]^u[w-14]^u[w-16],u[w]=(r<<1|r>>>31)&4294967295;r=e[0];var z=e[1],B=e[2],E=e[3],F=e[4];for(w=0;80>w;w++){if(40>w)if(20>w){var G=E^z&(B^E);var S=1518500249}else G=z^B^E,S=1859775393;else 60>w?(G=z&B|E&(z|B),S=2400959708):(G=z^B^E,S=3395469782);G=((r<<5|r>>>27)&4294967295)+G+F+S+u[w]&4294967295;F=E;E=B;B=(z<<30|z>>>2)&4294967295;z=r;r=G}e[0]=e[0]+r&4294967295;e[1]=e[1]+z&4294967295;e[2]=
e[2]+B&4294967295;e[3]=e[3]+E&4294967295;e[4]=e[4]+F&4294967295}
function c(r,u){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var w=[],z=0,B=r.length;z<B;++z)w.push(r.charCodeAt(z));r=w}u||(u=r.length);w=0;if(0==n)for(;w+64<u;)b(r.slice(w,w+64)),w+=64,q+=64;for(;w<u;)if(f[n++]=r[w++],q++,64==n)for(n=0,b(f);w+64<u;)b(r.slice(w,w+64)),w+=64,q+=64}
function d(){var r=[],u=8*q;56>n?c(l,56-n):c(l,64-(n-56));for(var w=63;56<=w;w--)f[w]=u&255,u>>>=8;b(f);for(w=u=0;5>w;w++)for(var z=24;0<=z;z-=8)r[u++]=e[w]>>z&255;return r}
for(var e=[],f=[],h=[],l=[128],m=1;64>m;++m)l[m]=0;var n,q;a();return{reset:a,update:c,digest:d,dG:function(){for(var r=d(),u="",w=0;w<r.length;w++)u+="0123456789ABCDEF".charAt(Math.floor(r[w]/16))+"0123456789ABCDEF".charAt(r[w]%16);return u}}};
zda=function(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],(0,g.y)(d,function(l){e.push(l)}),Om(e.join(" "));
var f=[],h=[];(0,g.y)(c,function(l){h.push(l.key);f.push(l.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.gb(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.y)(d,function(l){e.push(l)});
a=Om(e.join(" "));a=[c,a];g.gb(h)||a.push(h.join(""));return a.join("_")};
Om=function(a){var b=yda();b.update(a);return b.dG().toLowerCase()};
g.Pm=function(a){var b=Nm(String(g.v.location.href)),c;(c=g.v.__SAPISID||g.v.__APISID||g.v.__OVERRIDE_SID)?c=!0:(c=new eh(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.v.__SAPISID:g.v.__APISID,c||(c=new eh(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(g.v.location.href);return d&&c&&b?[b,zda(Nm(d),c,a||null)].join(" "):
null}return null};
Qm=function(){this.u=64;this.o=[];this.F=[];this.G=[];this.C=[];this.C[0]=128;for(var a=1;a<this.u;++a)this.C[a]=0;this.B=this.A=0;this.reset()};
Rm=function(a,b,c){c||(c=0);var d=a.G;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.o[0];c=a.o[1];var h=a.o[2],l=a.o[3],m=a.o[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=l^c&(h^l);var n=1518500249}else f=c^h^l,n=1859775393;else 60>e?(f=c&h|l&(c|h),n=2400959708):
(f=c^h^l,n=3395469782);f=(b<<5|b>>>27)+f+m+n+d[e]&4294967295;m=l;l=h;h=(c<<30|c>>>2)&4294967295;c=b;b=f}a.o[0]=a.o[0]+b&4294967295;a.o[1]=a.o[1]+c&4294967295;a.o[2]=a.o[2]+h&4294967295;a.o[3]=a.o[3]+l&4294967295;a.o[4]=a.o[4]+m&4294967295};
g.Sm=function(a,b){this.u={};this.o=[];this.dj=this.A=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof g.Sm)for(c=a.bf(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])};
Um=function(a){if(a.A!=a.o.length){for(var b=0,c=0;b<a.o.length;){var d=a.o[b];Tm(a.u,d)&&(a.o[c++]=d);b++}a.o.length=c}if(a.A!=a.o.length){var e={};for(c=b=0;b<a.o.length;)d=a.o[b],Tm(e,d)||(a.o[c++]=d,e[d]=1),b++;a.o.length=c}};
Tm=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.Vm=function(a,b){this.o=this.I=this.C="";this.B=null;this.F=this.u="";this.G=!1;var c;a instanceof g.Vm?(this.G=void 0!==b?b:a.G,g.Wm(this,a.C),this.I=a.I,g.Xm(this,a.o),g.Ym(this,a.B),this.u=a.u,Zm(this,a.A.clone()),this.F=a.F):a&&(c=String(a).match(sd))?(this.G=!!b,g.Wm(this,c[1]||"",!0),this.I=$m(c[2]||""),g.Xm(this,c[3]||"",!0),g.Ym(this,c[4]),this.u=$m(c[5]||"",!0),Zm(this,c[6]||"",!0),this.F=$m(c[7]||"")):(this.G=!!b,this.A=new an(null,this.G))};
g.Wm=function(a,b,c){a.C=c?$m(b,!0):b;a.C&&(a.C=a.C.replace(/:$/,""))};
g.Xm=function(a,b,c){a.o=c?$m(b,!0):b};
g.Ym=function(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.B=b}else a.B=null};
Zm=function(a,b,c){b instanceof an?(a.A=b,Ada(a.A,a.G)):(c||(b=bn(b,Bda)),a.A=new an(b,a.G))};
g.cn=function(a){return a instanceof g.Vm?a.clone():new g.Vm(a,void 0)};
$m=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""};
bn=function(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,Cda),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null};
Cda=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)};
an=function(a,b){this.u=this.o=null;this.A=a||null;this.B=!!b};
dn=function(a){a.o||(a.o=new g.Sm,a.u=0,a.A&&wd(a.A,function(b,c){a.add(id(b),c)}))};
fn=function(a,b){dn(a);b=en(a,b);return Tm(a.o.u,b)};
g.gn=function(a,b,c){a.remove(b);0<c.length&&(a.A=null,a.o.set(en(a,b),g.ob(c)),a.u=a.u+c.length)};
en=function(a,b){var c=String(b);a.B&&(c=c.toLowerCase());return c};
Ada=function(a,b){b&&!a.B&&(dn(a),a.A=null,a.o.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),g.gn(this,e,c))},a));
a.B=b};
jn=function(a){if(g.kc(g.ld(a)))return!1;if(0<=a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&"))return!0;try{var b=new g.Vm(a)}catch(c){return null!=g.cb(hn,function(d){return 0<a.search(d)})}return b.F.match(Dda)?!0:null!=g.cb(hn,function(c){return null!=a.match(c)})};
g.kn=function(a,b){return a.replace(Eda,function(c,d){try{var e=null!==b&&d in b?b[d]:void 0;if(null==e)return c;e=e.toString();if(""==e||!g.kc(g.ld(e)))return encodeURIComponent(e).replace(/%2C/g,",")}catch(f){}return c})};
ln=function(a){Ug(this,a,Fda,null)};
mn=function(a){Ug(this,a,null,null)};
Hda=function(a,b){var c=bh(a,mn,1);0<c.length&&Og(b,1,c,Gda)};
Gda=function(a,b){var c=Vg(a,1);null!=c&&Kg(b,1,c);c=Vg(a,2);null!=c&&Ig(b,2,c)};
nn=function(a){Ug(this,a,Ida,null)};
on=function(a){Ug(this,a,null,Jda)};
pn=function(a){Ug(this,a,null,null)};
qn=function(a){Ug(this,a,null,null)};
rn=function(a){Ug(this,a,Kda,null)};
tn=function(a){Ug(this,a,null,sn)};
vn=function(a){Ug(this,a,null,un)};
Nda=function(a,b){var c=$g(a,pn,1);null!=c&&Ng(b,1,c,Lda);c=$g(a,qn,2);null!=c&&Ng(b,2,c,Mda)};
Lda=function(a,b){var c=Vg(a,1);null!=c&&Mg(b,1,c);c=Vg(a,2);null!=c&&Mg(b,2,c);c=Vg(a,3);null!=c&&Lg(b,3,c)};
Mda=function(a,b){var c=Vg(a,1);null!=c&&Mg(b,1,c);c=Vg(a,2);null!=c&&Mg(b,2,c);c=Vg(a,3);null!=c&&Fg(b,3,c);c=Vg(a,4);null!=c&&Lg(b,4,c)};
Qda=function(a,b){var c=bh(a,tn,1);0<c.length&&Og(b,1,c,Oda);c=$g(a,vn,2);null!=c&&Ng(b,2,c,Pda)};
Oda=function(a,b){var c=Vg(a,1);null!=c&&Mg(b,1,c);c=Vg(a,2);null!=c&&Fg(b,2,c);c=Vg(a,3);null!=c&&Lg(b,3,c)};
Pda=function(a,b){var c=Vg(a,1);null!=c&&Ig(b,1,c);c=Vg(a,2);null!=c&&Kg(b,2,c);c=$g(a,ln,3);null!=c&&Ng(b,3,c,Hda)};
wn=function(){this.u=[];this.o=-1};
Rda=function(a){-1==a.o&&(a.o=(0,g.zi)(a.u,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.o};
g.xn=function(a,b,c){g.A.call(this);this.o=null;this.B=!1;this.F=a;this.C=c;this.u=b||window;this.A=(0,g.x)(this.Jz,this)};
yn=function(a){a=a.u;return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||null};
zn=function(a){a=a.u;return a.cancelAnimationFrame||a.cancelRequestAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||null};
g.H=function(a,b,c){g.A.call(this);this.o=a;this.Kd=b||0;this.u=c;this.A=(0,g.x)(this.Kz,this)};
g.An=function(a){a.stop();a.Kz()};
Bn=function(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""};
Cn=function(a){return a.classList?a.classList:Bn(a).match(/\S+/g)||[]};
Dn=function(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)};
g.En=function(a,b){return a.classList?a.classList.contains(b):g.fb(Cn(a),b)};
g.I=function(a,b){if(a.classList)a.classList.add(b);else if(!g.En(a,b)){var c=Bn(a);Dn(a,c+(0<c.length?" "+b:b))}};
g.Fn=function(a,b){if(a.classList)(0,g.y)(b,function(f){g.I(a,f)});
else{var c={};(0,g.y)(Cn(a),function(f){c[f]=!0});
(0,g.y)(b,function(f){c[f]=!0});
var d="",e;for(e in c)d+=0<d.length?" "+e:e;Dn(a,d)}};
g.Gn=function(a,b){a.classList?a.classList.remove(b):g.En(a,b)&&Dn(a,(0,g.Ae)(Cn(a),function(c){return c!=b}).join(" "))};
g.Hn=function(a,b){a.classList?(0,g.y)(b,function(c){g.Gn(a,c)}):Dn(a,(0,g.Ae)(Cn(a),function(c){return!g.fb(b,c)}).join(" "))};
g.J=function(a,b,c){c?g.I(a,b):g.Gn(a,b)};
g.In=function(){g.pf.call(this);this.o=0;this.endTime=this.startTime=null};
Sda=function(a,b){Array.isArray(b)||(b=[b]);var c=(0,g.Ic)(b,function(d){return"string"===typeof d?d:d.property+" "+d.duration+"s "+d.timing+" "+d.delay+"s"});
g.zh(a,"transition",c.join(","))};
Jn=function(a,b,c,d,e){g.In.call(this);this.A=a;this.F=b;this.I=c;this.B=d;this.G=Array.isArray(e)?e:[e]};
Kn=function(a,b,c,d){return new Jn(a,b,{opacity:c},{opacity:d},{property:"opacity",duration:b,timing:"ease-in",delay:0})};
Uda=function(a){a=tc(a);if(""==a)return null;var b=String(a.substr(0,4)).toLowerCase();if(0==("url("<b?-1:"url("==b?0:1))return!a.endsWith(")")||1<(a?a.split("(").length-1:0)||a&&a.split(")"),null;if(0<a.indexOf("(")){if(/"|'/.test(a))return null;b=/([\-\w]+)\(/g;for(var c;c=b.exec(a);)if(!(c[1].toLowerCase()in Tda))return null}return a};
Ln=function(a){var b=g.v.CSSStyleDeclaration;return b&&b.prototype&&b.prototype[a]||null};
Mn=function(a,b,c,d){if(a)return a.apply(b,d);if(g.ne&&10>document.documentMode){if(!b[c].call)throw Error("IE Clobbering detected");}else if("function"!=typeof b[c])throw Error("Clobbering detected");return b[c].apply(b,d)};
Zda=function(a){if(!a)return Lc;var b=document.createElement("div").style,c=Vda(a);(0,g.y)(c,function(d){var e=g.pe&&d in Wda?d:d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,"");ic(e,"--")||ic(e,"var")||(d=Mn(Xda,a,a.getPropertyValue?"getPropertyValue":"getAttribute",[d])||"",d=Uda(d),null!=d&&Mn(Yda,b,b.setProperty?"setProperty":"setAttribute",[e,d]))});
return Kaa(b.cssText||"")};
Vda=function(a){g.Na(a)?a=g.ob(a):(a=g.Hb(a),g.kb(a,"cssText"));return a};
g.Rn=function(a){var b,c=b=0,d=!1;a=a.split($da);for(var e=0;e<a.length;e++){var f=a[e];g.Nn.test(f)?(b++,c++):aea.test(f)?d=!0:bea.test(f)?c++:cea.test(f)&&(d=!0)}b=0==c?d?1:0:.4<b/c?-1:1;return-1==(0==b?null:b)?"rtl":"ltr"};
g.Sn=function(a,b,c,d,e,f,h,l){this.o=a;this.C=b;this.A=c;this.F=d;this.B=e;this.G=f;this.u=h;this.I=l};
g.Tn=function(a,b){if(0==b)return a.o;if(1==b)return a.u;var c=g.Vd(a.o,a.A,b),d=g.Vd(a.A,a.B,b),e=g.Vd(a.B,a.u,b);c=g.Vd(c,d,b);d=g.Vd(d,e,b);return g.Vd(c,d,b)};
g.Un=function(a,b,c){this.B=a;this.C=b;this.o=this.A=a;this.F=c||0};
g.Vn=function(a){a.o=Math.min(a.C,2*a.o);a.A=Math.min(a.C,a.o+(a.F?Math.round(a.F*(Math.random()-.5)*2*a.o):0));a.u++};
Wn=function(a,b){this.start=a<b?a:b;this.end=a<b?b:a};
Xn=function(a){return(a=a.exec(g.Pc))?a[1]:""};
Yn=function(a){return 0<=g.vc(dea,a)};
g.Zn=function(a){g.A.call(this);this.C=1;this.A=[];this.B=0;this.o=[];this.u={};this.F=!!a};
eea=function(a,b,c){g.Bf(function(){a.apply(b,c)})};
g.$n=function(a){this.o=a};
ao=function(a){this.o=a};
bo=function(a){this.data=a};
co=function(a){return void 0===a||a instanceof bo?a:new bo(a)};
eo=function(a){this.o=a};
g.fo=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.D)()||!!b&&b>(0,g.D)()};
g.go=function(a){this.o=a};
fea=function(){};
ho=function(){};
io=function(a){this.o=a};
jo=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.o=a};
ko=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.o=a};
lo=function(a,b){this.u=a;this.o=b+"::"};
g.mo=function(a){var b=new jo;return b.isAvailable()?a?new lo(b,a):b:null};
no=function(a,b){this.o=a;this.u=b};
oo=function(a){this.o=[];if(a)a:{if(a instanceof oo){var b=a.bf();a=a.Sd();if(0>=this.o.length){for(var c=this.o,d=0;d<b.length;d++)c.push(new no(b[d],a[d]));break a}}else b=g.Hb(a),a=g.Gb(a);for(d=0;d<b.length;d++)g.po(this,b[d],a[d])}};
g.po=function(a,b,c){var d=a.o;d.push(new no(b,c));b=d.length-1;a=a.o;for(c=a[b];0<b;)if(d=b-1>>1,a[d].o>c.o)a[b]=a[d],b=d;else break;a[b]=c};
g.qo=function(){oo.call(this)};
ro=function(){};
so=function(a){Ug(this,a,gea,null)};
to=function(a){Ug(this,a,null,null)};
hea=function(a,b){for(;og(b)&&4!=b.u;)switch(b.A){case 1:var c=rg(b);Xg(a,1,c);break;case 2:c=rg(b);Xg(a,2,c);break;case 3:c=rg(b);Xg(a,3,c);break;case 4:c=rg(b);Xg(a,4,c);break;case 5:c=mg(b.o);Xg(a,5,c);break;default:pg(b)}return a};
iea=function(a){a=a.split("");var b=[function(c,d){for(var e=64,f=[];++e-f.length-32;)switch(e){case 94:case 95:case 96:break;case 123:e-=76;case 92:case 93:continue;case 58:e=44;case 91:break;case 46:e=95;default:f.push(String.fromCharCode(e))}c.forEach(function(h,l,m){this.push(m[l]=f[(f.indexOf(h)-f.indexOf(this[l])+l-32+e--)%f.length])},d.split(""))},
null,function(c,d){d=(d%c.length+c.length)%c.length;var e=c[0];c[0]=c[d];c[d]=e},
-1112823358,1067108294,a,1922497994,-818377694,function(c,d){d=(d%c.length+c.length)%c.length;var e=c[0];c[0]=c[d];c[d]=e},
1022009149,function(c){c.reverse()},
-2076298215,-1940495968,740376713,339644326,1585637445,-2080729657,-326079478,665513644,-10261860,1276028289,a,function(c,d){for(d=(d%c.length+c.length)%c.length;d--;)c.unshift(c.pop())},
234748442,"k42SV",function(c,d){d=(d%c.length+c.length)%c.length;c.splice(0,1,c.splice(d,1,c[0])[0])},
function(c,d){d=(d%c.length+c.length)%c.length;c.splice(d,1)},
75357412,1376084631,-2077686177,-1258681152,-796841309,function(c,d){d=(d%c.length+c.length)%c.length;c.splice(-d).reverse().forEach(function(e){c.unshift(e)})},
function(c,d){for(var e=64,f=[];++e-f.length-32;){switch(e){case 91:e=44;continue;case 123:e=65;break;case 65:e-=18;continue;case 58:e=96;continue;case 46:e=95}f.push(String.fromCharCode(e))}c.forEach(function(h,l,m){this.push(m[l]=f[(f.indexOf(h)-f.indexOf(this[l])+l-32+e--)%f.length])},d.split(""))},
-1388249836,-920228897,324121553,1343949121,null,null,-1484772668,621129865,a,function(c){for(var d=c.length;d;)c.push(c.splice(--d,1)[0])},
1995266353,1090766505,-843030239,"Eb8OUiM",-1869943458,-937546585];b[1]=b;b[38]=b;b[39]=b;b[25](b[39],b[31]);b[43](b[21]);b[26](b[42],b[11]);b[22](b[42],b[17]);b[32](b[38],b[40]);b[7](b[20],b[46]);b[42](b[21]);b[35](b[28],b[44]);b[37](b[20],b[22]);b[4](b[38],b[35]);b[48](b[29],b[18]);b[37](b[23],b[43]);b[37](b[23],b[3]);b[37](b[7],b[14]);b[49](b[11],b[42]);b[25](b[46],b[15]);b[26](b[13],b[48]);b[18](b[9],b[27]);b[25](b[30],b[21]);b[49](b[42],b[33]);b[26](b[12],b[16]);b[41](b[12]);b[6](b[37],b[32]);
b[11](b[37],b[13]);b[1](b[14],b[42]);b[34](b[35],b[40]);b[3](b[48]);b[9](b[31],b[45]);b[9](b[31],b[0]);b[25](b[2],b[21]);b[49](b[33],b[36]);b[6](b[16],b[30]);b[49](b[29],b[20]);b[32](b[45],b[28]);b[13](b[45],b[3]);b[13](b[16],b[18]);b[34](b[45]);b[32](b[16],b[1]);b[32](b[29],b[24]);return a.join("")};
vo=function(a){var b=arguments,c=uo;1<b.length?c[b[0]]=b[1]:1===b.length&&Object.assign(c,b[0])};
g.K=function(a,b){return a in uo?uo[a]:b};
wo=function(a){return g.K(a,void 0)};
xo=function(a){var b=uo.EXPERIMENT_FLAGS;return b?b[a]:void 0};
g.zo=function(a){a=yo(a);return"string"===typeof a&&"false"===a?!1:!!a};
Ao=function(a,b){var c=yo(a);return void 0===c&&void 0!==b?b:Number(c||0)};
yo=function(a){var b=g.K("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:g.K("EXPERIMENT_FLAGS",{})[a]};
Bo=function(){var a=[],b=g.K("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=g.K("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a};
Do=function(a,b,c){a&&(a.dataset?a.dataset[Co(b)]=String(c):a.setAttribute("data-"+b,c))};
Eo=function(a){return a?a.dataset?a.dataset[Co("loaded")]:a.getAttribute("data-loaded"):null};
Co=function(a){return Fo[a]||(Fo[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))};
jea=function(a){Go.forEach(function(b){return b(a)})};
Ho=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.L(b),jea(b)}}:a};
g.L=function(a,b,c,d){var e=g.Ja("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=g.K("ERRORS",[]),e.push([a,"ERROR",b,c,d]),vo("ERRORS",e))};
g.Io=function(a){var b=g.Ja("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=g.K("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),vo("ERRORS",b))};
g.Jo=function(a,b){"function"===typeof a&&(a=Ho(a));return window.setTimeout(a,b)};
Ko=function(a,b){"function"===typeof a&&(a=Ho(a));return window.setInterval(a,b)};
g.Lo=function(a){window.clearTimeout(a)};
g.Qo=function(a,b,c){var d=g.Mo();if(d){var e=d.subscribe(a,function(){var f=arguments;var h=function(){No[e]&&b.apply&&"function"==typeof b.apply&&b.apply(c||window,f)};
try{g.Oo[a]?h():g.Jo(h,0)}catch(l){g.L(l)}},c);
No[e]=!0;Po[a]||(Po[a]=[]);Po[a].push(e);return e}return 0};
kea=function(a){var b=g.Qo("watchAdsInit",function(c){a.apply(void 0,arguments);g.Ro(b)},void 0);
return b};
g.Ro=function(a){var b=g.Mo();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),(0,g.y)(a,function(c){b.unsubscribeByKey(c);delete No[c]}))};
g.So=function(a,b){var c=g.Mo();return c?c.publish.apply(c,arguments):!1};
Uo=function(a){var b=g.Mo();if(b)if(b.clear(a),a)To(a);else for(var c in Po)To(c)};
g.Mo=function(){return g.v.ytPubsubPubsubInstance};
To=function(a){Po[a]&&(a=Po[a],(0,g.y)(a,function(b){No[b]&&delete No[b]}),a.length=0)};
g.Vo=function(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(lea,""),c=c.replace(mea,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else nea(a,b,c)};
nea=function(a,b,c){c=void 0===c?null:c;var d=Wo(a),e=document.getElementById(d),f=e&&Eo(e),h=e&&!f;f?b&&b():(b&&(f=g.Qo(d,b),b=""+g.Ra(b),Xo[b]=f),h||(e=oea(a,d,function(){Eo(e)||(Do(e,"loaded","true"),g.So(d),g.Jo(g.Sa(Uo,d),0))},c)))};
oea=function(a,b,c,d){d=void 0===d?null:d;var e=g.ue("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);fd(e,nh(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e};
Wo=function(a){var b=document.createElement("a");g.dd(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+md(a)};
Zo=function(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=Yo+"VisibilityState";if(b in a)return a[b]};
$o=function(a,b){var c;oj(a,function(d){c=b[d];return!!c});
return c};
ap=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in pea||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.o=a.pageX;this.u=a.pageY}}catch(e){}};
bp=function(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.o=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.u=a.clientY+b}};
qea=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Lb(cp,function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,h=g.Pa(e[4])&&g.Pa(d)&&g.Qb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||h)})};
g.fp=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=qea(a,b,c,d);if(e)return e;e=++dp.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var h=f?function(l){l=new ap(l);if(!He(l.relatedTarget,function(m){return m==a},!0))return l.currentTarget=a,l.type=b,c.call(a,l)}:function(l){l=new ap(l);
l.currentTarget=a;return c.call(a,l)};
h=Ho(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ep()||"boolean"===typeof d?a.addEventListener(b,h,d):a.addEventListener(b,h,!!d.capture)):a.attachEvent("on"+b,h);cp[e]=[a,b,c,h,d];return e};
rea=function(a,b){var c=document.body||document;return g.fp(c,"click",function(d){var e=He(d.target,function(f){return f===c||b(f)},!0);
e&&e!==c&&!e.disabled&&(d.currentTarget=e,a.call(e,d))})};
g.gp=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.y)(a,function(b){if(b in cp){var c=cp[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ep()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete cp[b]}}))};
g.hp=function(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a};
ip=function(a){a=a||window.event;var b;a.composedPath&&"function"===typeof a.composedPath?b=a.composedPath():b=a.path;return b&&b.length?b[0]:g.hp(a)};
jp=function(a){a=a||window.event;var b=a.relatedTarget;b||("mouseover"==a.type?b=a.fromElement:"mouseout"==a.type&&(b=a.toElement));return b};
kp=function(a){a=a||window.event;var b=a.pageX,c=a.pageY;document.body&&document.documentElement&&("number"!==typeof b&&(b=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft),"number"!==typeof c&&(c=a.clientY+document.body.scrollTop+document.documentElement.scrollTop));return new g.Xd(b,c)};
g.lp=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.mp=function(a){a=a||window.event;return!1===a.returnValue||a.iA&&a.iA()};
g.np=function(a){a=a||window.event;return a.keyCode?a.keyCode:a.which};
sea=function(a){return rea(a,function(b){return g.En(b,"ytp-ad-has-logging-urls")})};
g.op=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.fp(a,b,function(){g.gp(e);c.apply(a,arguments)},d)};
pp=function(a){for(var b in cp)cp[b][0]==a&&g.gp(b)};
qp=function(a){this.M=a;this.o=null;this.B=0;this.F=null;this.C=0;this.u=[];for(a=0;4>a;a++)this.u.push(0);this.A=0;this.I=g.fp(window,"mousemove",(0,g.x)(this.R,this));this.N=Ko((0,g.x)(this.G,this),25)};
tea=function(){};
sp=function(a,b){return rp(a,0,b)};
g.tp=function(a,b){return rp(a,1,b)};
up=function(){};
g.vp=function(){return!!g.Ja("yt.scheduler.instance")};
rp=function(a,b,c){isNaN(c)&&(c=void 0);var d=g.Ja("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):g.Jo(a,c||0)};
g.wp=function(a){if(!isNaN(a)){var b=g.Ja("yt.scheduler.instance.cancelJob");b?b(a):g.Lo(a)}};
xp=function(a){var b=g.Ja("yt.scheduler.instance.setPriorityThreshold");b&&b(a)};
Ap=function(){var a={},b=void 0===a.tH?!0:a.tH;a=void 0===a.uO?!1:a.uO;if(null==g.Ja("_lact",window)){var c=parseInt(g.K("LACT"),10);c=isFinite(c)?(0,g.D)()-Math.max(c,0):-1;g.Ha("_lact",c,window);g.Ha("_fact",c,window);-1==c&&yp();g.fp(document,"keydown",yp);g.fp(document,"keyup",yp);g.fp(document,"mousedown",yp);g.fp(document,"mouseup",yp);b&&(a?g.fp(window,"touchmove",function(){zp("touchmove",200)},{passive:!0}):(g.fp(window,"resize",function(){zp("resize",200)}),g.fp(window,"scroll",function(){zp("scroll",
200)})));
new qp(function(){zp("mouse",100)});
g.fp(document,"touchstart",yp,{passive:!0});g.fp(document,"touchend",yp,{passive:!0})}};
zp=function(a,b){Bp[a]||(Bp[a]=!0,g.tp(function(){yp();Bp[a]=!1},b))};
yp=function(){null==g.Ja("_lact",window)&&(Ap(),g.Ja("_lact",window));var a=(0,g.D)();g.Ha("_lact",a,window);-1==g.Ja("_fact",window)&&g.Ha("_fact",a,window);(a=g.Ja("ytglobal.ytUtilActivityCallback_"))&&a()};
Cp=function(){var a=g.Ja("_lact",window),b;null==a?b=-1:b=Math.max((0,g.D)()-a,0);return b};
Kp=function(){g.Lo(Dp);g.Lo(Ep);Ep=0;Fp&&Fp.isReady()?(Gp(Hp),"log_event"in Ip&&Gp(Object.entries(Ip.log_event)),Hp.clear(),delete Ip.log_event):Jp()};
Jp=function(){g.zo("web_gel_timeout_cap")&&!Ep&&(Ep=g.Jo(Kp,6E4));g.Lo(Dp);var a=g.K("LOGGING_BATCH_TIMEOUT",Ao("web_gel_debounce_ms",1E4));g.zo("shorten_initial_gel_batch_timeout")&&Lp&&(a=uea);Dp=g.Jo(Kp,a)};
Gp=function(a){var b=Fp,c=Math.round((0,g.M)());a=g.p(a);for(var d=a.next();!d.done;d=a.next()){var e=g.p(d.value);d=e.next().value;var f=e.next().value;e=g.Sb(g.Mp(b.oe||g.Np()));e.events=f;(f=Op[d])&&vea(e,d,f);delete Op[d];wea(e,c);g.Pp(b,"log_event",e,{retry:!0,onSuccess:function(){Qp=Math.round((0,g.M)()-c)}});
Lp=!1}};
wea=function(a,b){a.requestTimeMs=String(b);g.zo("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=g.K("EVENT_ID",void 0);if(c){var d=g.K("BATCH_CLIENT_COUNTER",void 0)||0;!d&&g.zo("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Rp/2));d++;d>Rp&&(d=1);vo("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Sp&&Qp&&g.zo("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Sp,roundtripMs:String(Qp)});Sp=
c;Qp=0}};
vea=function(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]};
g.Vp=function(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||(0,g.M)());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:Cp())};g.zo("log_sequence_info_on_gel_web")&&d.qk&&(a=e.context,b=d.qk,Tp[b]=b in Tp?Tp[b]+1:0,a.sequence={index:Tp[b],groupKey:b},d.kG&&delete Tp[d.qk]);d=d.Kk;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Op[d.token]=a,a=d.token);d=Hp.get(a)||[];Hp.set(a,d);d.push(e);c&&(Fp=new c);c=Ao("web_logging_max_batch")||
100;e=(0,g.M)();d.length>=c?Kp():10<=e-Up&&(Jp(),Up=e)};
Wp=function(){return g.Ja("yt.ads.biscotti.lastId_")||""};
Xp=function(a){g.Ha("yt.ads.biscotti.lastId_",a,void 0)};
Yp=function(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=id(e[0]||""),h=id(e[1]||"");f in b?Array.isArray(b[f])?pb(b[f],h):b[f]=[b[f],h]:b[f]=h}catch(m){if("q"!=e[0]){var l=Error("Error decoding URL component");l.params={key:e[0],value:e[1]};g.L(l)}}}return b};
Zp=function(a){var b=[];g.Ab(a,function(c,d){var e=hd(d),f;Array.isArray(c)?f=c:f=[c];(0,g.y)(f,function(h){""==h?b.push(e):b.push(e+"="+hd(h))})});
return b.join("&")};
$p=function(a){"?"==a.charAt(0)&&(a=a.substr(1));return Yp(a)};
aq=function(a){a=a.split(",");return a=a.map(function(b){return $p(b)})};
g.bq=function(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),$p(1<a.length?a[1]:a[0])):{}};
g.dq=function(a,b){return cq(a,b||{},!0)};
eq=function(a,b){return cq(a,b||{},!1)};
cq=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=$p(e[1]||"");for(var f in b)if(c||!Jb(e,f))e[f]=b[f];return g.Ed(a,e)+d};
fq=function(a){if(!b)var b=window.location.href;var c=g.td(1,a),d=g.ud(a);c&&d?(a=a.match(sd),b=b.match(sd),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?g.ud(b)==d&&(Number(g.td(4,b))||null)==(Number(g.td(4,a))||null):!0;return a};
gq=function(a){a||(a=document.location.href);a=g.td(1,a);return null!==a&&"https"==a};
hq=function(a){a=g.ud(a);a=null!==a?a.split(".").reverse():null;return null===a?!1:"com"==a[0]&&a[1].match(/^youtube(?:kids|-nocookie)?$/)?!0:!1};
kq=function(a){var b=iq;a=void 0===a?Wp():a;b=Object.assign(jq(b),xea(b));b.ca_type="image";a&&(b.bid=a);return b};
jq=function(a){var b={};b.dt=yea;b.flash="0";a:{try{var c=a.o.top.location.href}catch(f){a=2;break a}a=c?c===a.u.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?mi:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!mi.navigator&&"unknown"!==typeof mi.navigator.javaEnabled&&!!mi.navigator.javaEnabled&&mi.navigator.javaEnabled();mi.screen&&(b.u_h=mi.screen.height,b.u_w=mi.screen.width,b.u_ah=mi.screen.availHeight,b.u_aw=mi.screen.availWidth,b.u_cd=
mi.screen.colorDepth);mi.navigator&&mi.navigator.plugins&&(b.u_nplug=mi.navigator.plugins.length);mi.navigator&&mi.navigator.mimeTypes&&(b.u_nmime=mi.navigator.mimeTypes.length);return b};
xea=function(a){var b=a.o;try{var c=b.screenX;var d=b.screenY}catch(m){}try{var e=b.outerWidth;var f=b.outerHeight}catch(m){}try{var h=b.innerWidth;var l=b.innerHeight}catch(m){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,h,l];c=Yh(!1,a.o.top);d={};e=new wn;g.v.SVGElement&&g.v.document.createElementNS&&e.set(0);f=zba();f["allow-top-navigation-by-user-activation"]&&e.set(1);f["allow-popups-to-escape-sandbox"]&&e.set(2);g.v.crypto&&g.v.crypto.subtle&&
e.set(3);g.v.TextDecoder&&g.v.TextEncoder&&e.set(4);e=Rda(e);return d.bc=e,d.bih=c.height,d.biw=c.width,d.brdim=b.join(),d.vis=ni(a.u),d.wgl=!!mi.WebGLRenderingContext,d};
zea=function(){if(!lq)return null;var a=lq();return"open"in a?a:null};
g.nq=function(a){switch(mq(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
mq=function(a){return a&&"status"in a?a.status:-1};
Aea=function(a,b){b=void 0===b?{}:b;var c=fq(a),d=g.zo("web_ajax_ignore_global_headers_if_set"),e;for(e in oq){var f=g.K(oq[e]);!f||!c&&!pq(a,e)||d&&void 0!==b[e]||(b[e]=f)}if(c||pq(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||pq(a,"X-YouTube-Time-Zone"))&&(d="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=d);if(c||pq(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=Zp(kq(void 0));
return b};
qq=function(a,b){var c=g.ud(a),d=rd(g.td(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=$p(b),f={};(0,g.y)(Bea,function(h){e[h]&&(f[h]=e[h])});
return eq(a,f)};
pq=function(a){return g.ud(a)?!1:!0};
Cea=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=rq(a,b);var d=sq(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(h){if(!e){e=!0;f&&g.Lo(f);var l=h.ok,m=function(n){n=n||{};var q=b.context||g.v;l?b.onSuccess&&b.onSuccess.call(q,n,h):b.onError&&b.onError.call(q,n,h);b.xd&&b.xd.call(q,n,h)};
"JSON"==(b.format||"JSON")&&(l||400<=h.status&&500>h.status)?h.json().then(m,function(){m(null)}):m(null)}});
b.cC&&0<b.timeout&&(f=g.Jo(function(){e||(e=!0,g.Lo(f),b.cC.call(b.context||g.v))},b.timeout))}else g.tq(a,b)};
g.tq=function(a,b){var c=b.format||"JSON";a=rq(a,b);var d=sq(a,b),e=!1,f=uq(a,function(m){if(!e){e=!0;l&&g.Lo(l);var n=g.nq(m),q=null,r=400<=m.status&&500>m.status,u=500<=m.status&&600>m.status;if(n||r||u)q=Dea(a,c,m,b.VT);if(n)a:if(m&&204==m.status)n=!0;else{switch(c){case "XML":n=0==parseInt(q&&q.return_code,10);break a;case "RAW":n=!0;break a}n=!!q}q=q||{};r=b.context||g.v;n?b.onSuccess&&b.onSuccess.call(r,m,q):b.onError&&b.onError.call(r,m,q);b.xd&&b.xd.call(r,m,q)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
if(b.Qe&&0<b.timeout){var h=b.Qe;var l=g.Jo(function(){e||(e=!0,f.abort(),g.Lo(l),h.call(b.context||g.v,f))},b.timeout)}return f};
rq=function(a,b){b.aU&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=g.K("XSRF_FIELD_NAME",void 0),d=b.Ue;d&&(d[c]&&delete d[c],a=g.dq(a,d));return a};
sq=function(a,b){var c=g.K("XSRF_FIELD_NAME",void 0),d=g.K("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.Eb,h=wo("XSRF_FIELD_NAME"),l;b.headers&&(l=b.headers["Content-Type"]);b.Vt||g.ud(a)&&!b.withCredentials&&g.ud(a)!=document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.Eb&&b.Eb[h]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=$p(e),g.Ub(e,f),e=b.UC&&"JSON"==b.UC?JSON.stringify(e):g.Cd(e));f=e||f&&!g.Nb(f);!vq&&f&&"POST"!=b.method&&(vq=!0,g.L(Error("AJAX request with postData should use POST")));
return e};
Dea=function(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(h){throw d=Error("Error reading responseText"),d.params=a,g.Io(d),h;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Eea(a):null)e={},(0,g.y)(a.getElementsByTagName("*"),function(h){e[h.tagName]=Fea(h)})}d&&wq(e);
return e};
wq=function(a){if(g.Pa(a))for(var b in a)"html_content"==b||jc(b,"_html")?a[b]=g.bd(g.bc("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):wq(a[b])};
Eea=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
Fea=function(a){var b="";(0,g.y)(a.childNodes,function(c){b+=c.nodeValue});
return b};
g.xq=function(a,b){b.method="POST";b.Eb||(b.Eb={});g.tq(a,b)};
uq=function(a,b,c,d,e,f,h){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&Ho(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=zea();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;g.zo("debug_forward_web_query_parameters")&&(a=qq(a,window.location.search));m.open(c,a,!0);f&&(m.responseType=f);h&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Aea(a,e))for(var n in e)m.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
m.send(d);return m};
Gea=function(){for(var a={},b=g.p(Object.entries($p(g.K("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=g.p(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a};
yq=function(){return"INNERTUBE_API_KEY"in uo&&"INNERTUBE_API_VERSION"in uo};
g.Np=function(){return{innertubeApiKey:g.K("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.K("INNERTUBE_API_VERSION",void 0),eA:g.K("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),kl:g.K("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.K("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),an:g.K("INNERTUBE_CONTEXT_HL",void 0),Zm:g.K("INNERTUBE_CONTEXT_GL",void 0),Zp:g.K("INNERTUBE_HOST_OVERRIDE",void 0)||"",gA:!!g.K("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),xH:!!g.K("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1)}};
Hea=function(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||g.K("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.iy||g.K("AUTHORIZATION"))||(a?b="Bearer "+g.Ja("gapi.auth.getToken")().RT:b=g.Pm([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=g.K("SESSION_INDEX",0),g.zo("pageid_as_header_web")&&(d["X-Goog-PageId"]=g.K("DELEGATED_SESSION_ID")));return d};
g.Mp=function(a){a={client:{hl:a.an,gl:a.Zm,clientName:a.kl,clientVersion:a.innertubeContextClientVersion,configInfo:a.eA}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=g.K("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=Bo();0<b.length&&(a.request={internalExperimentFlags:b});g.K("DELEGATED_SESSION_ID")&&!g.zo("pageid_as_header_web")&&(a.user={onBehalfOfUser:g.K("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,Gea());return{context:a}};
Iea=function(a){a=Object.assign({},a);delete a.Authorization;var b=g.Pm();if(b){var c=new Qm;c.update(wo("INNERTUBE_API_KEY"));c.update(b);a.hash=g.xg(c.digest(),3)}b=new Qm;b.update(JSON.stringify(a,Object.keys(a).sort()));a=b.digest();b="";for(c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b};
g.Aq=function(a,b,c,d,e){g.zq.set(""+a,b,{BA:c,path:"/",domain:void 0===d?"youtube.com":d,PO:void 0===e?!1:e})};
Bq=function(a,b){return g.zq.get(""+a,b)};
Cq=function(){};
Dq=function(){Cq.o||(Cq.o=new Cq);return Cq.o};
Eq=function(){var a={},b=g.Pm([]);b&&(a.Authorization=b,a["X-Goog-AuthUser"]=g.K("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in uo||(a["X-Origin"]=window.location.origin),g.zo("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in uo&&(a["X-Goog-PageId"]=g.K("DELEGATED_SESSION_ID")));return Kf(a)};
Fq=function(){var a=Error.call(this,"Transaction was aborted");this.message=a.message;"stack"in a&&(this.stack=a.stack);Object.setPrototypeOf(this,Fq.prototype)};
Gq=function(a){return a instanceof DOMException?"VersionError"===a.name:"DOMError"in self&&a instanceof DOMError?"VersionError"===a.name:a instanceof Object&&"message"in a?"An attempt was made to open a database using a lower version than the existing version."===a.message:!1};
Hq=function(a){return new Gf(function(b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){a.removeEventListener("success",e);a.removeEventListener("error",d)}
a.addEventListener("success",e);a.addEventListener("error",d)})};
Iq=function(a){this.o=a};
Kq=function(a,b,c){a=a.o.transaction(b,void 0===c?"readonly":c);return new Jq(a)};
Lq=function(a){this.o=a};
Jq=function(a){var b=this;this.o=a;this.u=new Map;this.done=new Gf(function(c,d){b.o.addEventListener("complete",function(){c()});
b.o.addEventListener("error",function(){d(b.o.error)});
b.o.addEventListener("abort",function(){d(new Fq)})})};
Mq=function(a,b){var c=a.o.objectStore(b),d=a.u.get(c);d||(d=new Lq(c),a.u.set(c,d));return d};
Nq=function(a){this.o=a};
Oq=function(a,b){this.request=a;this.o=b};
Pq=function(a){return Hq(a).then(function(b){return null===b?null:new Oq(a,b)})};
Jea=function(a,b,c){function d(){q||(q=new Iq(f.result));return q}
var e=Jq;var f=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,l=c.blocking,m=c.o,n=c.upgrade,q;n&&f.addEventListener("upgradeneeded",function(r){if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var u=d(),w=new e(f.transaction);n(u,r.oldVersion,r.newVersion,w)});
h&&f.addEventListener("blocked",function(){h()});
return Hq(f).then(function(r){l&&r.addEventListener("versionchange",function(){l(d())});
m&&r.addEventListener("close",function(){m()});
return d()})};
Qq=function(a,b,c){c=void 0===c?{}:c;return Jea(a,b,c)};
Kea=function(){return g.th(this,function b(){var c,d,e;return g.za(b,function(f){switch(f.o){case 1:if(ql&&nl()&&!ol()&&!g.zo("ytidb_allow_on_ios_safari_v8_and_v9")||!self.indexedDB)return f["return"](!1);sa(f,2,3);e=!1;return g.ra(f,Qq("yt-idb-test-do-not-use",void 0,{blocking:function(){e=!0;c&&(c.close(),c=void 0)}}),5);
case 5:return c=f.u,g.ra(f,Qq("yt-idb-test-do-not-use",c.o.version+1),6);case 6:return d=f.u,d.close(),d=void 0,f["return"](e);case 3:baa(f);if(c)try{c.close()}catch(h){}if(d)try{d.close()}catch(h){}caa(f);break;case 2:return ua(f),f["return"](!1)}})})};
Sq=function(){return void 0!==Rq?Kf(Rq):new Gf(function(a){Kea().then(function(b){Rq=b;a(b)})})};
Nea=function(){return void 0!==Tq?Kf(Tq):Sq().then(function(a){if(!a)return!1;var b=g.p(Lea);for(a=b.next();!a.done;a=b.next())if(!IDBObjectStore.prototype[a.value])return!1;b=g.p(Mea);for(a=b.next();!a.done;a=b.next())if(!IDBIndex.prototype[a.value])return!1;return IDBObjectStore.prototype.getKey?!0:!1}).then(function(a){return Tq=a})};
Vq=function(){function a(b){b.close();Uq=void 0}
Uq||(Uq=Sf(Qq("YtIdbMeta",1,{blocking:a,upgrade:function(b,c){1>c&&b.createObjectStore("databases",{keyPath:"actualName"})}}),function(b){return Gq(b)?Qq("YtIdbMeta",void 0,{blocking:a}):Lf(b)}));
return Uq};
Oea=function(a){return Vq().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn:1)return c=Mq(Kq(b,["databases"],"readwrite"),"databases"),Hq(c.o.put(a,void 0))})})};
Pea=function(a){return Vq().then(function(b){return b["delete"]("databases",a)})};
Qea=function(a){try{var b={actualName:"LogsDataBase",publicName:"LogsDataBase",userIdentifier:void 0,signedIn:!1}}catch(c){return Lf(c)}return Sf(Oea(b).then(function(){return a(b)}),function(c){return Sf(Pea(b.actualName),function(){}).then(function(){return Lf(c)})})};
Wq=function(a,b){b=void 0===b?{}:b;return Qea(function(c){return Qq(c.actualName,a,b)})};
Yq=function(){return g.th(this,function b(){return g.za(b,function(c){if(!Xq)try{Xq=Wq(1,{upgrade:function(d,e){1>e&&(d.createObjectStore("LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).o.createIndex("newRequest",["status","authHash","timestamp"],{unique:!1}),d.createObjectStore("sapisid"))}})}catch(d){if(!Gq(d))return g.L(d),c["return"](Promise.reject(d));
Xq=Wq()}return c["return"](Xq)})})};
Rea=function(a){return g.th(this,function c(){var d,e,f,h,l;return g.za(c,function(m){switch(m.o){case 1:return g.ra(m,Yq(),2);case 2:return d=m.u,e=Mq(Kq(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),g.ra(m,Zq(),3);case 3:return f=m.u,h=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:f}),g.ra(m,e.add(h),4);case 4:return l=m.u,m["return"](l)}})})};
Sea=function(){return g.th(this,function b(){var c,d,e,f,h,l,m,n;return g.za(b,function(q){switch(q.o){case 1:return g.ra(q,Zq(),2);case 2:return c=q.u,d=["NEW",c,0],e=["NEW",c,(0,g.M)()],f=IDBKeyRange.bound(d,e),g.ra(q,Yq(),3);case 3:h=q.u;l=Kq(h,["LogsRequestsStore"],"readwrite");var r=Mq(l,"LogsRequestsStore").index("newRequest").o.openCursor(f,"prev");r=Pq(r);return g.ra(q,r,4);case 4:m=q.u;n=void 0;if(null===m||void 0===m||!m.getValue()){q.Gc(5);break}n=m.getValue();n.status="QUEUED";return g.ra(q,
m.update(n),5);case 5:return q["return"](n)}})})};
Tea=function(a){return g.th(this,function c(){var d,e,f;return g.za(c,function(h){switch(h.o){case 1:return g.ra(h,Yq(),2);case 2:return d=h.u,e=Mq(Kq(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),g.ra(h,e.get(a),3);case 3:return f=h.u,f.status="QUEUED",g.ra(h,Hq(e.o.put(f,void 0)),4);case 4:return h["return"](f)}})})};
Uea=function(a){return g.th(this,function c(){var d,e,f;return g.za(c,function(h){switch(h.o){case 1:return g.ra(h,Yq(),2);case 2:return d=h.u,e=Mq(Kq(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),g.ra(h,e.get(a),3);case 3:f=h.u;if(!f){h.Gc(4);break}f.status="NEW";f.sendCount+=1;return g.ra(h,Hq(e.o.put(f,void 0)),4);case 4:return h["return"](f)}})})};
Vea=function(){return g.th(this,function b(){var c,d;return g.za(b,function(e){if(1==e.o)return g.ra(e,Yq(),2);if(3!=e.o)return c=e.u,g.ra(e,c.count("LogsRequestsStore"),3);d=e.u;return e["return"](!d)})})};
$q=function(a){return g.th(this,function c(){var d;return g.za(c,function(e){if(1==e.o)return g.ra(e,Yq(),2);d=e.u;return e["return"](d["delete"]("LogsRequestsStore",a))})})};
Zq=function(){return g.th(this,function b(){var c;return g.za(b,function(d){if(1==d.o)return g.ra(d,Eq(Dq()),2);c=d.u;return d["return"](Iea(c))})})};
ar=function(){this.B=0;this.o=window.navigator.onLine;Wea(this);Xea(this)};
br=function(){ar.o||(ar.o=new ar);return ar.o};
er=function(a){var b=cr,c=dr;Yea(a);(new Gf(function(d){a.u=d})).then(function(){b();
c&&(a.A=c)})};
Xea=function(a){window.addEventListener("online",function(){a.o=!0;a.u&&a.u()})};
Wea=function(a){window.addEventListener("offline",function(){a.o=!1;a.A&&a.A()})};
Yea=function(a){a.B||(a.C(),window.navigator.onLine&&a.u&&a.u())};
hr=function(a,b){b=void 0===b?{}:b;fr().then(function(c){if(c&&!g.zo("networkless_bypass_write")){var d={url:a,options:b,timestamp:(0,g.M)(),status:"NEW",sendCount:0};Rea(d).then(function(e){d.id=e;e=br();e.o?gr(d):er(e)})["catch"](function(){gr(d);
g.L(Error("Networkless Logging: Log request setting to indexedDB failed."))})}else g.tq(a,b)})};
cr=function(){ir||(ir=g.tp(function(){gr();ir=0;cr()},Zea))};
dr=function(){g.wp(ir);ir=0};
gr=function(a){g.th(this,function c(){var d=this,e,f,h,l;return g.za(c,function(m){switch(m.o){case 1:e=d;if(!a)return g.ra(m,Sea(),6);if(!a.id){m.Gc(3);break}return g.ra(m,Tea(a.id),5);case 5:a=m.u;m.Gc(3);break;case 6:if(a=m.u){m.Gc(3);break}return g.ra(m,Vea(),8);case 8:return(f=m.u)&&dr(),m["return"]();case 3:if($ea(a))h=a.options.onError?a.options.onError:function(){},l=a.options.onSuccess?a.options.onSuccess:function(){},a.options.onError=function(n,q){return g.th(e,function u(){return g.za(u,
function(w){if(1==w.o)return a&&a.id?a.sendCount<afa?g.ra(w,Uea(a.id),6):g.ra(w,$q(a.id),2):w.Gc(2);
2!=w.o&&(ir||er(br()),h(n,q));h(n,q);w.o=0})})},a.options.onSuccess=function(n,q){return g.th(e,function u(){return g.za(u,function(w){if(1==w.o)return a&&a.id?g.ra(w,$q(a.id),2):w.Gc(2);
l(n,q);w.o=0})})},g.tq(a.url,a.options);
else if(g.Io(Error("Networkless Logging: Stored logs request expired age limit")),a.id)return g.ra(m,$q(a.id),0);m.Gc(0)}})})};
$ea=function(a){a=a.timestamp;return 2592E6<=(0,g.M)()-a?!1:!0};
fr=function(){return g.zo("networkless_logging")?2===Ao("networkless_ytidb_version")?Nea():Sq():Kf(!1)};
jr=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(g.la(c))};
g.kr=function(a){this.oe=null;a?this.oe=a:yq()&&(this.oe=g.Np())};
g.Pp=function(a,b,c,d){!g.K("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&g.Io(new jr("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady())throw a=new jr("innertube xhrclient not ready",b,c,d),g.L(a),a.o=0,a;var e={headers:{"Content-Type":"application/json"},method:"POST",Eb:c,UC:"JSON",Qe:function(){d.Qe()},
cC:d.Qe,onSuccess:function(l,m){if(d.onSuccess)d.onSuccess(m)},
nU:function(l){if(d.onSuccess)d.onSuccess(l)},
onError:function(l,m){if(d.onError)d.onError(m)},
mU:function(l){if(d.onError)d.onError(l)},
timeout:d.timeout,withCredentials:!0};c="";var f=a.oe.Zp;f&&(c=f);f=Hea(a.oe.gA||!1,c,d);Object.assign(e.headers,f);e.headers.Authorization&&!c&&(e.headers["x-origin"]=window.location.origin);b="/youtubei/"+a.oe.innertubeApiVersion+"/"+b;f={alt:"json"};a.oe.xH&&e.headers.Authorization||(f.key=a.oe.innertubeApiKey);var h=g.dq(""+c+b,f);fr().then(function(){try{g.zo("use_fetch_for_op_xhr")?Cea(h,e):g.zo("networkless_gel")&&d.retry?(e.method="POST",hr(h,e)):g.xq(h,e)}catch(l){if("InvalidAccessError"==
l.name)g.Io(Error("An extension is blocking network request."));else throw l;}})};
g.lr=function(a,b,c){c=void 0===c?{}:c;var d=g.kr;g.K("ytLoggingEventsDefaultDisabled",!1)&&g.kr==g.kr&&(d=null);g.Vp(a,b,d,c)};
bfa=function(a){g.mr(a)};
g.nr=function(a){g.mr(a,"WARNING")};
g.mr=function(a,b){var c=void 0===c?{}:c;c.name=g.K("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=g.K("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var d=c||{};c=void 0===b?"ERROR":b;c=void 0===c?"ERROR":c;var e=void 0===e?!1:e;if(a){if(g.zo("console_log_js_exceptions")){var f=[];f.push("Name: "+a.name);f.push("Message: "+a.message);a.hasOwnProperty("params")&&f.push("Error Params: "+JSON.stringify(a.params));f.push("File name: "+a.fileName);f.push("Stacktrace: "+a.stack);window.console.log(f.join("\n"),
a)}if((window&&window.yterr||e)&&!(5<=or)&&0!==a.o){var h=Yaa(a);e=h.message||"Unknown Error";f=h.name||"UnknownError";var l=h.lineNumber||"Not available",m=h.fileName||"Not available";h=h.stack||a.u||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var n=0,q=0;q<a.args.length;q++){var r=a.args[q],u="params."+q;n+=u.length;if(r)if(Array.isArray(r))for(var w=d,z=0;z<r.length&&!(r[z]&&(n+=pr(z,r[z],u,w),500<n));z++);else if("object"===typeof r)for(w in w=void 0,z=d,r){if(r[w]&&
(n+=pr(w,r[w],u,z),500<n))break}else d[u]=String(JSON.stringify(r)).substring(0,500),n+=d[u].length;else d[u]=String(JSON.stringify(r)).substring(0,500),n+=d[u].length;if(500<=n)break}else if(a.hasOwnProperty("params")&&a.params)if(r=a.params,"object"===typeof a.params)for(q in u=0,r){if(r[q]&&(n="params."+q,w=String(JSON.stringify(r[q])).substr(0,500),d[n]=w,u+=n.length+w.length,500<u))break}else d.params=String(JSON.stringify(r)).substr(0,500);d={message:e,name:f,lineNumber:l,fileName:m,stack:h,
params:d};e=Number(a.columnNumber);isNaN(e)||(d.lineNumber=d.lineNumber+":"+e);e=g.p(cfa);for(f=e.next();!f.done;f=e.next())if(f=f.value,f.Ov[d.name])for(m=g.p(f.Ov[d.name]),l=m.next();!l.done;l=m.next())if(h=l.value,l=d.message.match(h.Sf)){d.params["error.original"]=l[0];m=h.groups;h={};for(q=0;q<m.length;q++)h[m[q]]=l[q+1],d.params["error."+m[q]]=l[q+1];d.message=f.DA(h);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(d);if(!(qr.has(d.message)||0<=d.stack.indexOf("/YouTubeCenter.js")||
0<=d.stack.indexOf("/mytube.js"))){if(g.zo("kevlar_gel_error_routing")){f=c;l={stackTrace:d.stack};d.fileName&&(l.filename=d.fileName);e=d.lineNumber&&d.lineNumber.split?d.lineNumber.split(":"):[];0!==e.length&&(1!==e.length||isNaN(Number(e[0]))?2!==e.length||isNaN(Number(e[0]))||isNaN(Number(e[1]))||(l.lineNumber=Number(e[0]),l.columnNumber=Number(e[1])):l.lineNumber=Number(e[0]));e={level:"ERROR_LEVEL_UNKNOWN",message:d.message};"ERROR"===f?e.level="ERROR_LEVEL_ERROR":"WARNING"===f&&(e.level="ERROR_LEVEL_WARNNING");
f={isObfuscated:!0,browserStackInfo:l};l={pageUrl:window.location.href,kvPairs:[]};if(m=d.params)for(h=g.p(Object.keys(m)),q=h.next();!q.done;q=h.next())q=q.value,l.kvPairs.push({key:"client."+q,value:String(m[q])});g.lr("clientError",{errorMetadata:l,stackTrace:f,logMessage:e});Kp()}e=d.params||{};c={Ue:{a:"logerror",t:"jserror",type:d.name,msg:d.message.substr(0,250),line:d.lineNumber,level:c,"client.name":e.name},Eb:{url:g.K("PAGE_NAME",window.location.href),file:d.fileName},method:"POST"};e.version&&
(c["client.version"]=e.version);if(c.Eb){d.stack&&(c.Eb.stack=d.stack);f=g.p(Object.keys(e));for(l=f.next();!l.done;l=f.next())l=l.value,c.Eb["client."+l]=e[l];if(e=g.K("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=g.p(Object.keys(e)),l=f.next();!l.done;l=f.next())l=l.value,c.Eb[l]=e[l];e=g.K("SERVER_NAME",void 0);f=g.K("SERVER_VERSION",void 0);e&&f&&(c.Eb["server.name"]=e,c.Eb["server.version"]=f)}g.tq(g.K("ECATCHER_REPORT_HOST","")+"/error_204",c);qr.add(d.message);or++}}}};
pr=function(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length};
rr=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,g.la(c))};
sr=function(){this.yc=!1;this.o=null};
tr=function(a,b,c,d){if(d)try{a.o=new window.botguard.bg(b,c?function(){return c(b)}:g.Ka)}catch(e){g.nr(e)}else{try{a.o=new window.botguard.bg(b)}catch(e){g.nr(e)}c&&c(b)}};
dfa=function(a){var b=ur;a=void 0===a?{}:a;return b.o?Promise.race([new Promise(function(c,d){setTimeout(d,Ao("botguard_async_snapshot_timeout_ms",3E3),null)}),
new Promise(function(c){b.o.invoke(function(d){return c(d)},!0,a)})]):Promise.resolve(null)};
wr=function(){if(!g.zo("disable_ad_status_on_html5_clients")&&(!g.zo("condition_ad_status_fetch_on_consent_cookie_html5_clients")||Bq("CONSENT","").startsWith("YES+"))&&"1"!=g.Ib(g.K("PLAYER_CONFIG",{}),"args","privembed")){var a=function(){vr=!0;"google_ad_status"in window?vo("DCLKSTAT",1):vo("DCLKSTAT",2)};
g.Vo("//static.doubleclick.net/instream/ad_status.js",a);efa.push(g.tp(function(){if(!(vr||"google_ad_status"in window)){if(a){var b=""+g.Ra(a);(b=Xo[b])&&g.Ro(b)}vr=!0;vo("DCLKSTAT",3)}},5E3))}};
g.xr=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&!g.il()?a&&(a=g.zc(g.Cc(a)),"about:invalid#zClosurez"===a?a="":(a=g.Xc(Zc(a)).toString(),a=hd(g.Nk(a))),g.kc(a)||(a=g.te("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),ce(a).body.appendChild(a))):e?uq(a,b,"POST",e,d):g.K("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?uq(a,b,"GET","",d):ffa(a,b)||gfa(a,b))};
ffa=function(a,b){if(!xo("web_use_beacon_api_for_ad_click_server_pings"))return!1;if(xo("use_sonic_js_library_for_v4_support")){a:{try{var c=new laa({url:a});if(c.A&&c.u||c.B){var d=rd(g.td(5,a));var e=!(!d||!d.endsWith("/aclk")||"1"!==Id(a,"ri"));break a}}catch(f){}e=!1}if(!e)return!1}else if(e=rd(g.td(5,a)),!e||-1==e.indexOf("/aclk")||"1"!==Id(a,"ae")||"1"!==Id(a,"act"))return!1;return yr(a)?(b&&b(),!0):!1};
zr=function(a,b,c){c=void 0===c?"":c;yr(a,c)?b&&b():g.xr(a,b,void 0,void 0,c)};
yr=function(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1};
gfa=function(a,b){var c=new Image,d=""+hfa++;Ar[d]=c;c.onload=c.onerror=function(){b&&Ar[d]&&b();delete Ar[d]};
c.src=a};
Cr=function(a,b){var c=g.Rb(b),d;return Sf(new Gf(function(e,f){c.onSuccess=function(h){g.nq(h)?e(h):f(new Br("Request failed, status="+mq(h),"net.badstatus",h))};
c.onError=function(h){f(new Br("Unknown request error","net.unknown",h))};
c.Qe=function(h){f(new Br("Request timed out","net.timeout",h))};
d=g.tq(a,c)}),function(e){e instanceof Xf&&d.abort();
return Lf(e)})};
g.Dr=function(a,b,c,d){function e(h,l,m){return Sf(h,function(n){return 0>=l||403===mq(n.Xj)?Lf(new Br("Request retried too many times","net.retryexhausted",n.Xj)):f(m).then(function(){return e(Cr(a,b),l-1,Math.pow(2,c-l+1)*m)})})}
function f(h){return new Gf(function(l){setTimeout(l,h)})}
return e(Cr(a,b),c-1,d)};
Br=function(a,b,c){Wa.call(this,a+", errorCode="+b);this.errorCode=b;this.Xj=c;this.name="PromiseAjaxError"};
Er=function(){this.u=0;this.o=null};
Fr=function(a){var b=new Er;a=void 0===a?null:a;b.u=2;b.o=void 0===a?null:a;return b};
Gr=function(a){var b=new Er;a=void 0===a?null:a;b.u=1;b.o=void 0===a?null:a;return b};
Ir=function(a){Wa.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Hr;this.isTimeout=a instanceof Br&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Xf};
Hr=function(){Wa.call(this,"Biscotti ID is missing from server")};
ifa=function(){if(g.zo("disable_biscotti_fetch_on_html5_clients"))return Lf(Error("Fetching biscotti ID is disabled."));if(g.zo("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!Bq("CONSENT","").startsWith("YES+"))return Lf(Error("User has not consented - not fetching biscotti id."));if("1"===g.Ib(g.K("PLAYER_CONFIG",{}),"args","privembed"))return Lf(Error("Biscotti ID is not available in private embed mode"));Jr||(Jr=Sf(Cr("//googleads.g.doubleclick.net/pagead/id",Kr).then(Lr),function(a){return Mr(2,
a)}));
return Jr};
Lr=function(a){a=a.responseText;if(!ic(a,")]}'"))throw new Hr;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Hr;a=a.id;Xp(a);Jr=Gr(a);Nr(18E5,2);return a};
Mr=function(a,b){var c=new Ir(b);Xp("");Jr=Fr(c);0<a&&Nr(12E4,a-1);throw c;};
Nr=function(a,b){g.Jo(function(){Sf(Cr("//googleads.g.doubleclick.net/pagead/id",Kr).then(Lr,function(c){return Mr(b,c)}),g.Ka)},a)};
Or=function(){try{var a=g.Ja("yt.ads.biscotti.getId_");return a?a():ifa()}catch(b){return Lf(b)}};
Pr=function(a){jfa||g.lr("adsClientStateChange",{adsClientEvent:{eventType:a}})};
Rr=function(){this.o=g.K("ALT_PREF_COOKIE_NAME","PREF");var a=Bq(this.o);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Qr[d]=c.toString())}}};
Tr=function(a,b){return!!((Sr("f"+(Math.floor(b/31)+1))||0)&1<<b%31)};
Ur=function(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);};
Vr=function(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);};
Sr=function(a){a=void 0!==Qr[a]?Qr[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null};
mfa=function(){var a=void 0===a?window.location.href:a;if(g.zo("kevlar_disable_theme_param"))return null;var b=rd(g.td(5,a));if(kfa(b))return"USER_INTERFACE_THEME_DARK";a=g.bq(a).theme;return lfa.get(a)||null};
kfa=function(a){var b=nfa.map(function(c){return c.toLowerCase()});
return!g.zo("disable_dark_fashion_destination_launch")&&b.some(function(c){return a.toLowerCase().startsWith(c)})?!0:!1};
Wr=function(a){if(a.requestFullscreen)a=a.requestFullscreen(void 0);else if(a.webkitRequestFullscreen)a=a.webkitRequestFullscreen();else if(a.mozRequestFullScreen)a=a.mozRequestFullScreen();else if(a.msRequestFullscreen)a=a.msRequestFullscreen();else if(a.webkitEnterFullscreen)a=a.webkitEnterFullscreen();else return Promise.reject(Error("Fullscreen API unavailable"));return a instanceof Promise?a:Promise.resolve()};
Zr=function(a){var b;Xr()?Yr()==a&&(b=document):b=a;return b&&(a=$o(["exitFullscreen","webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen"],b))?(b=a.call(b),b instanceof Promise?b:Promise.resolve()):Promise.resolve()};
$r=function(a){return g.cb(["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],function(b){return"on"+b.toLowerCase()in a})};
ofa=function(){var a=document;return g.cb(["fullscreenerror","webkitfullscreenerror","mozfullscreenerror","MSFullscreenError"],function(b){return"on"+b.toLowerCase()in a})};
Xr=function(){return!!$o(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],document)};
Yr=function(a){a=void 0===a?!1:a;var b=$o(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],document);if(a)for(;b&&b.shadowRoot;)b=b.shadowRoot.fullscreenElement;return b?b:null};
g.as=function(a){g.A.call(this);this.F=[];this.fa=a||this};
bs=function(a,b,c,d){for(var e=0;e<c.length;e++)a.L(b,c[e],d)};
g.cs=function(a){for(;a.F.length;){var b=a.F.pop();b.target.removeEventListener(b.name,b.jb)}};
g.N=function(a){a=void 0===a?!1:a;g.A.call(this);this.Si=new g.Zn(a);g.C(this,this.Si)};
ds=function(a,b,c){for(var d in b)a.subscribe(d,b[d],c)};
es=function(a,b,c){for(var d in b)a.unsubscribe(d,b[d],c)};
g.gs=function(a,b,c,d){g.N.call(this);this.A=!!b;this.F=a;this.M=c||a;this.I=!!d;this.o=new g.as(this);g.C(this,this.o);this.C=this.G=null;this.B=this.u=!1;b&&(g.pe&&a.setAttribute("draggable","true"),a.style.touchAction="none");fs(this)};
hs=function(a,b,c){a.o.L(a.M,b,c,void 0,!a.A)};
fs=function(a){a.C=null;a.G=null;hs(a,is("over"),a.DB);hs(a,"touchstart",a.Tw);a.A&&hs(a,is("down"),a.pK)};
js=function(a,b){for(var c=0;c<b.changedTouches.length;c++){var d=b.changedTouches[c];if(d.identifier==a.G)return d}return null};
is=function(a){return window.navigator.msPointerEnabled?"MSPointer"+a.charAt(0).toUpperCase()+a.substr(1):"mouse"+a};
ks=function(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||g.Rb(b);this.assets=a.assets||{};this.attrs=a.attrs||g.Rb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
pfa=function(a){a instanceof ks||(a=new ks(a));return a};
ms=function(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(e){}a=Array(16);for(b=0;16>b;b++){c=(0,g.D)();for(var d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(ls)for(b=1,c=0;c<ls.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^ls.charCodeAt(c),b++;return a};
ns=function(){for(var a=ms(),b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")};
g.os=function(){return(0,g.Ic)(ms(),function(a){return(a&15).toString(16)}).join("")};
cg=function(){};
ps=function(a){this.o=a};
g.qs=function(a){return new ps({trackingParams:a})};
rfa=function(a){var b=qfa++;return new ps({veType:a,veCounter:b,elementIndex:void 0,dataElement:void 0,youtubeData:void 0})};
rs=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
ts=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
us=function(a){return g.K(ts(void 0===a?0:a),void 0)};
g.vs=function(a){a=us(void 0===a?0:a);var b;a?b=new ps({veType:a,youtubeData:void 0}):b=null;return b};
ws=function(){var a=g.K("csn-to-ctt-auth-info");a||(a={},vo("csn-to-ctt-auth-info",a));return a};
g.xs=function(a){a=void 0===a?0:a;var b=g.K(rs(a));if(!b&&!g.K("USE_CSN_FALLBACK",!0))return null;b||0!=a||(g.zo("kevlar_client_side_screens")||g.zo("c3_client_side_screens")?b="UNDEFINED_CSN":b=g.K("EVENT_ID"));return b?b:null};
sfa=function(a,b,c){var d=ws();(c=g.xs(c))&&delete d[c];b&&(d[a]=b)};
g.ys=function(a){return ws()[a]};
As=function(a,b,c,d){c=void 0===c?0:c;if(a!==g.K(rs(c))||b!==g.K(ts(c)))if(sfa(a,d,c),vo(rs(c),a),vo(ts(c),b),0==c||g.zo("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&g.Vp("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:zs,clientScreenNonce:a},g.kr)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()};
Bs=function(a,b){this.version=a;this.args=b};
Cs=function(a,b){this.topic=a;this.o=b};
Es=function(a,b){var c=Ds();c&&c.publish.call(c,a.toString(),a,b)};
tfa=function(a,b,c){var d=Ds();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,h){var l=g.Ja("ytPubsub2Pubsub2SkipSubKey");l&&l==e||(l=function(){if(Fs[e])try{if(h&&a instanceof Cs&&a!=f)try{var m=a.o,n=h;if(!n.args||!n.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!m.dj){var q=new m;m.dj=q.version}var r=m.dj}catch(u){}if(!r||n.version!=r)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{h=Reflect.construct(m,
g.ob(n.args))}catch(u){throw u.message="yt.pubsub2.Data.deserialize(): "+u.message,u;}}catch(u){throw u.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+u.message,u;}b.call(c||window,h)}catch(u){g.L(u)}},Gs[a.toString()]?g.vp()?g.tp(l):g.Jo(l,0):l())});
Fs[e]=!0;Hs[a.toString()]||(Hs[a.toString()]=[]);Hs[a.toString()].push(e);return e};
Js=function(a,b,c){var d=tfa(a,function(e){b.apply(c,arguments);Is(d)},c);
return d};
Is=function(a){var b=Ds();b&&("number"===typeof a&&(a=[a]),(0,g.y)(a,function(c){b.unsubscribeByKey(c);delete Fs[c]}))};
Ds=function(){return g.Ja("ytPubsub2Pubsub2Instance")};
Ks=function(a){Bs.call(this,1,arguments);this.csn=a};
g.Ms=function(a,b,c,d){c={csn:b,parentVe:c.getAsJson(),childVes:(0,g.Ic)(d,function(f){return f.getAsJson()})};
d=g.p(d);for(var e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(g.Nb(e)||!e.trackingParams&&!e.veType)&&g.nr(Error("Child VE logged with no data"));d={Kk:g.ys(b),qk:b};"UNDEFINED_CSN"==b?g.Ls("visualElementAttached",c,d):a?g.Vp("visualElementAttached",c,a,d):g.lr("visualElementAttached",c,d)};
g.Ns=function(a,b){var c=g.zo("use_default_events_client")?void 0:g.kr,d={csn:a,ve:b.getAsJson(),eventType:1},e={Kk:g.ys(a),qk:a};"UNDEFINED_CSN"==a?g.Ls("visualElementShown",d,e):c?g.Vp("visualElementShown",d,c,e):g.lr("visualElementShown",d,e)};
Os=function(a,b,c){var d="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";c={csn:b,ve:c.getAsJson(),gestureType:d};d={Kk:g.ys(b),qk:b};"UNDEFINED_CSN"==b?g.Ls("visualElementGestured",c,d):a?g.Vp("visualElementGestured",c,a,d):g.lr("visualElementGestured",c,d)};
g.Ls=function(a,b,c){Ps.push({payloadName:a,payload:b,options:c});Qs||(Qs=Js(ufa,vfa))};
vfa=function(a){if(Ps){for(var b=g.p(Ps),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,g.Vp(c.payloadName,c.payload,null,c.options));Ps.length=0}Qs=0};
g.Rs=function(a,b,c){g.Ms(g.zo("use_default_events_client")?void 0:g.kr,a,b,[c])};
g.Ss=function(a,b){Os(g.zo("use_default_events_client")?void 0:g.kr,a,b)};
eg=function(){if(!Ts){Ts=new dg;var a=Ao("client_streamz_web_flush_count",-1);-1!==a&&(Ts.F=a)}return Ts};
g.Ws=function(a,b,c){var d=c&&0<c?c:0;c=d?(0,g.D)()+1E3*d:0;if((d=d?(0,g.Us)():Vs())&&window.JSON){"string"!==typeof b&&(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}};
g.Xs=function(a){var b=Vs(),c=(0,g.Us)();if(!b&&!c||!window.JSON)return null;try{var d=b.get(a)}catch(e){}if("string"!==typeof d)try{d=c.get(a)}catch(e){}if("string"!==typeof d)return null;try{d=JSON.parse(d,void 0)}catch(e){}return d};
g.Ys=function(a){try{var b=Vs(),c=(0,g.Us)();b&&b.remove(a);c&&c.remove(a)}catch(d){}};
g.Zs=function(){return g.Xs("yt-remote-session-screen-id")};
bt=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!$s(a)||c.some(function(e){return!$s(e)}))throw Error("Only objects may be merged.");
c=g.p(c);for(d=c.next();!d.done;d=c.next())at(a,d.value);return a};
at=function(a,b){for(var c in b)if($s(b[c])){if(c in a&&!$s(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});at(a[c],b[c])}else if(ct(b[c])){if(c in a&&!ct(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);dt(a[c],b[c])}else a[c]=b[c];return a};
dt=function(a,b){for(var c=g.p(b),d=c.next();!d.done;d=c.next())d=d.value,$s(d)?a.push(at({},d)):ct(d)?a.push(dt([],d)):a.push(d);return a};
$s=function(a){return"object"===typeof a&&!Array.isArray(a)};
ct=function(a){return"object"===typeof a&&Array.isArray(a)};
wfa=function(a,b){this.ids=a;this.o=b};
et=function(a,b,c,d,e,f,h,l,m){this.duration=c;this.endTime=b+c;this.ingestionTime=d;this.Sa=a;this.u=e;this.startTime=b;this.o=h||0;this.range=f||null;this.pending=l||!1;this.A=void 0===m?null:m};
g.ft=function(){this.segments=[]};
gt=function(a,b){if(b>a.ub())a.segments=[];else{var c=g.bb(a.segments,function(d){return d.Sa>=b},a);
0<c&&a.segments.splice(0,c)}};
ht=function(a,b,c,d,e){e=void 0===e?!1:e;this.data=a;this.offset=b;this.size=c;this.type=d;this.o=e?0:8;this.dataOffset=this.offset+this.o;this.u=e};
it=function(a){var b=a.data.getUint8(a.offset+a.o);a.o+=1;return b};
jt=function(a){var b=a.data.getUint16(a.offset+a.o);a.o+=2;return b};
kt=function(a){var b=a.data.getInt32(a.offset+a.o);a.o+=4;return b};
lt=function(a){var b=a.data.getUint32(a.offset+a.o);a.o+=4;return b};
mt=function(a){var b=a.data;var c=a.offset+a.o;b=4294967296*b.getUint32(c)+b.getUint32(c+4);a.o+=8;return b};
nt=function(a,b){b=void 0===b?NaN:b;if(isNaN(b))var c=a.size;else for(c=a.o;c<a.size&&a.data.getUint8(a.offset+c)!=b;)++c;var d=new Uint8Array(a.data.buffer,a.offset+a.o+a.data.byteOffset,c-a.o);a.o=Math.min(c+1,a.size);return String.fromCharCode.apply(String,d)};
xfa=function(a){this.data=new DataView(new ArrayBuffer(a));this.o=0};
ot=function(a,b,c,d){(new Uint8Array(a.data.buffer,a.o,d)).set(new Uint8Array(b.buffer,c+b.byteOffset,d));a.o+=d};
pt=function(a,b,c,d,e,f){this.startSecs=a;this.durationSecs=b;this.context=c;this.identifier=d;this.event=e;this.o=f};
rt=function(a,b){this.o=a;this.uri=b||"http://youtube.com/streaming/metadata/segment/102015";this.u=qt(this,"Sequence-Number");this.G=qt(this,"Segment-Count");this.I=this.o["Segment-Durations-Ms"]||"";this.ingestionTime=qt(this,"Ingestion-Walltime-Us")/1E6;this.A=(qt(this,"First-Frame-Time-Us")+qt(this,"First-Frame-Uncertainty-Us"))/1E6;this.lf=qt(this,"Target-Duration-Us")/1E6;this.F="T"==this.o["Stream-Finished"];this.B="T"==this.o.Streamable;this.cryptoPeriodIndex=qt(this,"Crypto-Period-Index");
this.C=qt(this,"Crypto-Period-Seconds")};
tt=function(a){return parseInt(a.o["Start-Media-Time-Us"],10)/1E6||0};
qt=function(a,b){return parseInt(a.o[b],10)||0};
yfa=function(a,b){this.o=a;this.duration=b};
ut=function(a,b,c,d,e){this.u=a||0;this.pitch=b||0;this.yaw=c||0;this.roll=d||0;this.o=e;e.getUint32(4)};
vt=function(a){var b={};a=a.split("\r\n");for(var c=0;c<a.length;c++){if(0===a[c].length)return b;var d=a[c].match(/([^:]+):\s+([\S\s]+)/);null!=d&&(b[d[1]]=d[2])}return null};
xt=function(a,b){var c=g.wt(a,0,1952868452),d=g.wt(a,0,1953658222);if(c&&d){c.skip(1);var e=it(c)<<16|jt(c);c.skip(4);e&1&&c.skip(8);e&2&&c.skip(4);if(e&8){e=c.o;var f=lt(c);c.data.setUint32(c.offset+e,1<b?Math.ceil(f*b):Math.floor(f*b))}d.skip(1);c=it(d)<<16|jt(d);if(c&256){e=c&1;f=c&4;var h=c&512,l=c&1024,m=c&2048;c=lt(d);e&&d.skip(4);f&&d.skip(4);e=(h?4:0)+(l?4:0)+(m?4:0);for(f=0;f<c;f++)h=d.o,l=lt(d),d.data.setUint32(d.offset+h,1<b?Math.ceil(l*b):Math.floor(l*b)),d.skip(e)}}};
At=function(a){a=new DataView(a.buffer,a.byteOffset,a.byteLength);return(a=g.wt(a,0,1836476516))?zt(a):NaN};
zfa=function(a){var b=g.wt(a,0,1937011556);if(!b)return null;b=Bt(a,b.dataOffset+8,1635148593);if(!b)return null;var c=Bt(a,b.dataOffset+78,1936995172),d=Bt(a,b.dataOffset+78,1937126244);if(!d)return null;b=null;if(c)switch(c.skip(4),it(c)){default:b=0;break;case 1:b=2;break;case 2:b=1;break;case 3:b=255}var e=c=null,f=null;if(d=Bt(a,d.dataOffset,1886547818)){var h=Bt(a,d.dataOffset,1886546020),l=Bt(a,d.dataOffset,2037673328);if(!l&&(l=Bt(a,d.dataOffset,1836279920),!l))return null;h&&(h.skip(4),c=
kt(h)/65536,f=kt(h)/65536,e=kt(h)/65536);a=new DataView(l.data.buffer,l.dataOffset,l.size-8);return new ut(b,c,f,e,a)}return null};
Bt=function(a,b,c){for(;Ct(a,b);){var d=Dt(a,b);if(d.type==c)return d;b+=d.size}return null};
g.wt=function(a,b,c){for(;Ct(a,b);){var d=Dt(a,b);if(d.type==c)return d;b=Et(d.type)?b+8:b+d.size}return null};
Ft=function(a){if(a.data.getUint8(a.dataOffset)){var b=a.data;a=a.dataOffset+4;return 4294967296*b.getUint32(a)+b.getUint32(a+4)}return a.data.getUint32(a.dataOffset+4)};
Dt=function(a,b){var c=a.getUint32(b),d=a.getUint32(b+4);return new ht(a,b,c,d)};
zt=function(a){var b=a.data.getUint8(a.dataOffset)?20:12;return a.data.getUint32(a.dataOffset+b)};
Gt=function(a){a=new ht(a.data,a.offset,a.size,a.type,a.u);var b=it(a);a.skip(7);var c=lt(a);if(0==b){b=lt(a);var d=lt(a)}else b=mt(a),d=mt(a);a.skip(2);for(var e=jt(a),f=[],h=[],l=0;l<e;l++){var m=lt(a);f.push(m);h.push(lt(a));a.skip(4)}return{Zr:c,gG:b,ez:d,ew:f,Vr:h}};
Ct=function(a,b){if(8>a.byteLength-b)return!1;var c=a.getUint32(b);if(8>c||a.byteLength-b<c)return!1;c=a.getUint32(b+4);if(1635148593==c||1635148611==c||1937126244==c||1936995172==c)return!0;for(c=4;8>c;c++){var d=a.getInt8(b+c);if(97>d||122<d)return!1}return!0};
Et=function(a){return 1701082227==a||1836019558==a||1836019574==a||1835297121==a||1835626086==a||1937007212==a||1953653094==a||1953653099==a||1836475768==a};
Ht=function(a){a.skip(4);var b=nt(a,0),c=nt(a,0),d=lt(a),e=lt(a),f=lt(a),h=lt(a),l=nt(a);return{OO:b,value:c,Zr:d,rU:e,ZT:f,id:h,EA:l,offset:a.offset}};
It=function(a,b){for(var c=Bt(a,0,b);c;)c.markAsSkip(),c=Bt(a,c.offset+c.size,b)};
Jt=function(a,b){for(var c=0,d=[];Ct(a,c);){var e=Dt(a,c);e.type==b&&d.push(e);c=Et(e.type)?c+8:c+e.size}return d};
Afa=function(a,b){var c=g.wt(a,0,1937011556),d=g.wt(a,0,1953654136);if(!c||!d||2<=a.getUint32(c.offset+12))return null;var e=new DataView(b.buffer,b.byteOffset,b.length),f=g.wt(e,0,1937011556);if(!f)return null;d=e.getUint32(f.dataOffset+8);var h=e.getUint32(f.dataOffset+12);if(1701733217!=h&&1701733238!=h)return null;h=new xfa(a.byteLength+d);ot(h,a,0,c.offset+12);h.data.setInt32(h.o,2);h.o+=4;ot(h,a,c.offset+16,c.size-16);ot(h,e,e.byteOffset+f.dataOffset+8,d);ot(h,a,c.offset+c.size,a.byteLength-
(c.offset+c.size));c=g.p([1836019574,1953653099,1835297121,1835626086,1937007212,1937011556]);for(e=c.next();!e.done;e=c.next())e=g.wt(a,0,e.value),h.data.setUint32(e.offset,e.size+d);if(Kt)return h.data;d=g.wt(h.data,0,1953654136);h.data.setUint32(d.offset+16,2);return h.data};
Lt=function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b};
Mt=function(a){return String.fromCharCode.apply(null,a)};
Nt=function(a,b){this.u=a;this.o=0;this.A=b||0};
Ot=function(a){return a.o>=a.u.byteLength};
Ut=function(a,b,c){var d=new Nt(c);if(!Pt(d,a))return!1;d=Qt(d);if(!Rt(d,b))return!1;for(a=0;b;)b>>>=8,a++;b=d.A+d.o;var e=St(d,!0);d=a+(d.A+d.o-b)+e;d=9<d?Tt(d-9,8):Tt(d-2,1);a=b-a;c.setUint8(a++,236);for(b=0;b<d.length;b++)c.setUint8(a++,d[b]);return!0};
Bfa=function(a){var b=new Nt(a);Vt(b);if(Pt(b,[408125543,374648427,174,224]))b=Qt(b);else return null;for(var c=a=null;!Ot(b);){var d=St(b,!1);if(21432==d)switch(Wt(b)){default:a=0;break;case 1:a=1;break;case 3:a=2;break;case 15:a=255}else 30320==d?c=Qt(b):Xt(b)}if(!c)return null;for(var e,f=d=b=null;!Ot(c);)switch(St(c,!1)){case 30321:if(3!=Wt(c))return null;break;case 30324:b=Yt(c);break;case 30323:f=Yt(c);break;case 30325:d=Yt(c);break;case 30322:e=St(c,!0);e=Zt(c,e);e=new DataView(e.buffer,e.byteOffset,
e.byteLength);break;default:Xt(c)}return e?new ut(a,b,f,d,e):null};
Qt=function(a){var b=St(a,!0),c=a.u.byteOffset+a.o;c=new DataView(a.u.buffer,c,Math.min(b,a.u.buffer.byteLength-c));c=new Nt(c,a.A+a.o);a.o+=b;return c};
Wt=function(a){for(var b=St(a,!0),c=$t(a),d=1;d<b;d++)c=256*c+$t(a);return c};
Yt=function(a){var b=St(a,!0),c=0;4==b?c=a.u.getFloat32(a.o):8==b&&(c=a.u.getFloat64(a.o));a.o+=b;return c};
au=function(a){var b=St(a,!0);return Mt(Zt(a,b))};
$t=function(a){return a.u.getUint8(a.o++)};
St=function(a,b){var c=$t(a);if(1==c){for(var d=c=0;7>d;d++)c=256*c+$t(a);return c}d=128;for(var e=0;6>e&&d>c;e++)c=256*c+$t(a),d*=128;return b?c-d:c};
Xt=function(a){var b=St(a,!0);a.o+=b};
Vt=function(a){var b=a.o;a.o=0;var c=!1;try{Rt(a,440786851)&&(a.o=0,Rt(a,408125543)&&(c=!0))}catch(d){if(d instanceof RangeError)a.o=0,c=!1,g.Io(d);else throw d;}a.o=b;return c};
Cfa=function(a){if(!Rt(a,440786851,!0))return null;var b=a.o;St(a,!1);var c=St(a,!0)+a.o-b;a.o=b+c;if(!Rt(a,408125543,!1))return null;St(a,!0);if(!Rt(a,357149030,!0))return null;var d=a.o;St(a,!1);var e=St(a,!0)+a.o-d;a.o=d+e;if(!Rt(a,374648427,!0))return null;var f=a.o;St(a,!1);var h=St(a,!0)+a.o-f,l=new Uint8Array(c+12+e+h),m=new DataView(l.buffer);l.set(new Uint8Array(a.u.buffer,a.u.byteOffset+b,c));m.setUint32(c,408125543);m.setUint32(c+4,33554431);m.setUint32(c+8,4294967295);l.set(new Uint8Array(a.u.buffer,
a.u.byteOffset+d,e),c+12);l.set(new Uint8Array(a.u.buffer,a.u.byteOffset+f,h),c+12+e);return l};
bu=function(a){var b=a.o,c={Iw:1E6,Jw:1E9,duration:0,lw:0,Wn:0};if(!Rt(a,408125543))return a.o=b,null;c.lw=St(a,!0);c.Wn=a.A+a.o;if(Rt(a,357149030))for(var d=Qt(a);!Ot(d);){var e=St(d,!1);2807729==e?c.Iw=Wt(d):2807730==e?c.Jw=Wt(d):17545==e?c.duration=Yt(d):Xt(d)}else return a.o=b,null;a.o=b;return c};
du=function(a,b,c){var d=a.o,e=[];if(!Rt(a,475249515))return a.o=d,null;for(var f=Qt(a);Rt(f,187);){var h=Qt(f);if(Rt(h,179)){var l=Wt(h);if(Rt(h,183)){h=Qt(h);for(var m=b;Rt(h,241);)m=Wt(h)+b;e.push({oj:m,jp:l})}}}if(0<e.length&&c==e[0].oj)for(cu&&g.Io(Error("opus_oboe")),b=0;b<e.length;b++)e[b].oj+=1;a.o=d;return e};
eu=function(a){var b=a.o;a.o=0;var c=1E6;Pt(a,[408125543,357149030,2807729])&&(c=Wt(a));a.o=b;return c};
Dfa=function(a,b){var c=a.o;a.o=0;if(160!=a.u.getUint8(a.o)&&!fu(a)||!Rt(a,160))return a.o=c,NaN;St(a,!0);var d=a.o;if(!Rt(a,161))return a.o=c,NaN;St(a,!0);$t(a);var e=$t(a)<<8|$t(a);a.o=d;if(!Rt(a,155))return a.o=c,NaN;d=Wt(a);a.o=c;return(e+d)*b/1E9};
fu=function(a){if(!gu(a)||!Rt(a,524531317))return!1;St(a,!0);return!0};
gu=function(a){if(Vt(a)){if(!Rt(a,408125543))return!1;St(a,!0)}return!0};
Pt=function(a,b){for(var c=0;c<b.length;c++){if(!Rt(a,b[c]))return!1;c!=b.length-1&&St(a,!0)}return!0};
Rt=function(a,b,c){c=void 0===c?!1:c;if(Ot(a))return!1;for(var d=a.o;St(a,!1)!=b;)if(Xt(a),d=a.o,Ot(a))return!1;c&&(a.o=d);return!0};
Tt=function(a,b){b||(b=Math.ceil(Math.log(a+2)/Math.log(2)/7));for(var c=1<<8-b,d=[];d.length<b-1;)d.unshift(a%256),a=Math.floor(a/256);d.unshift(a|c);return d};
Zt=function(a,b){var c=new Uint8Array(a.u.buffer,a.u.byteOffset+a.o,b);a.o+=b;return c};
hu=function(a,b){this.start=a;this.end=b;this.length=b-a+1};
iu=function(a){a=a.split("-");var b=Number(a[0]),c=Number(a[1]);return isNaN(b)||isNaN(c)?null:2===a.length&&(a=new hu(b,c),!isNaN(a.start)&&!isNaN(a.end)&&!isNaN(a.length)&&0<a.length)?a:null};
ju=function(a,b){return new hu(a,a+b-1)};
lu=function(a,b,c,d,e,f,h,l,m,n,q){this.o=b;this.range=c;this.type=a;this.I="";this.u=-1;this.I=d;this.u=0<=e?e:-1;this.startTime=f||0;this.duration=h||0;this.A=l||0;this.Wa=0<=m?m:this.range?this.range.length:NaN;this.C=!!n;a=this.range?this.A+this.Wa==this.range.length:void 0===q?!!this.Wa:q;this.B=a;this.range?(this.G=this.startTime+this.duration*this.A/this.range.length,this.M=this.duration*this.Wa/this.range.length,this.F=this.G+this.M):ku(this);this.N=[]};
ku=function(a){a.G=a.startTime;a.M=a.duration;a.F=a.G+a.M};
Efa=function(a,b,c){var d=!(!b||b.o!=a.o||b.type!=a.type||b.u!=a.u);return c?d&&!!b&&(a.range&&b.range?b.range.end==a.range.end:b.range==a.range)&&b.A+b.Wa==a.A+a.Wa:d};
mu=function(a){return 1==a.type||2==a.type};
nu=function(a){return 3==a.type||6==a.type};
ou=function(a,b){return a.o==b.o?a.range&&b.range?a.range.start+a.A+a.Wa==b.range.start+b.A:a.u==b.u?a.A+a.Wa==b.A:a.u+1==b.u&&0==b.A&&a.B:!1};
pu=function(a,b){return ou(a,b)||Wd(a.F,b.G)||a.u+1==b.u&&0==b.A&&a.B?!0:!1};
qu=function(a){return a.u+(a.B?1:0)};
Ffa=function(a){1==a.length||(0,g.yi)(a,function(c){return!!c.range});
for(var b=1;b<a.length;b++);b=a[a.length-1];return new hu(a[0].range.start+a[0].A,b.range.start+b.A+b.Wa-1)};
tu=function(a){a=ru(a);var b="";g.Ab(a,function(c,d){b+=d+"="+c+","});
return b.slice(0,-1)};
ru=function(a){var b={};b.itag=uu(a.o.info);b.type=a.type;b.seg=String(a.u);a.range&&(b.range=""+(a.range.start+a.A)+"-"+(a.range.start+a.A+a.Wa-1));b.time=""+a.G.toFixed(1)+"-"+(a.G+a.M).toFixed(1);b.off=String(a.A);b.len=String(a.Wa);a.B&&(b.end="1");a.C&&(b.eos="1");return b};
vu=function(a,b){var c=b.u;a.I="updateWithEmsg";a.u=c;b.F&&(a.C=b.F)};
wu=function(a,b){var c=b.Sa;a.I="updateWithSegmentInfo";a.u=c;if(a.startTime!=b.startTime||a.duration!=b.duration)a.startTime=b.startTime,a.duration=b.duration,ku(a)};
xu=function(a){var b=this;a=void 0===a?[]:a;this.o=[];this.A=this.u=0;this.B=void 0;this.totalLength=0;a.forEach(function(c){b.append(c)})};
yu=function(a,b){if(0===a.o.length)return!1;var c=a.o[a.o.length-1];return c&&c.buffer===b.buffer&&c.byteOffset+c.length===b.byteOffset};
zu=function(a,b){for(var c=g.p(b.o),d=c.next();!d.done;d=c.next())a.append(d.value)};
Au=function(a){a.B=void 0;a.u=0;a.A=0};
Bu=function(a,b,c){a.isFocused(b);return b-a.A+c<=a.o[a.u].length};
Cu=function(a){if(!a.B){var b=a.o[a.u];a.B=new DataView(b.buffer,b.byteOffset,b.length)}return a.B};
Du=function(a,b,c){b=void 0===b?0:b;c=void 0===c?-1:c;if(!a.totalLength)return new DataView(new ArrayBuffer(0));0>c&&(c=a.totalLength-b);a.focus(b);if(!Bu(a,b,c)){var d=a.u,e=a.A;a.focus(b+c-1);e=new Uint8Array(a.A+a.o[a.u].length-e);for(var f=0,h=d;h<=a.u;h++)e.set(a.o[h],f),f+=a.o[h].length;a.o.splice(d,a.u-d+1,e);Au(a);a.focus(b)}d=a.o[a.u];return new DataView(d.buffer,d.byteOffset+b-a.A,c)};
Eu=function(a,b,c){a=Du(a,void 0===b?0:b,void 0===c?-1:c);return new Uint8Array(a.buffer,a.byteOffset,a.byteLength)};
Fu=function(a){a=Eu(a,0,-1);var b=new Uint8Array(a.length);b.set(a);return b};
Gu=function(a,b){a.focus(b);return a.o[a.u][b-a.A]};
Hu=function(a,b){a.focus(b);return Bu(a,b,4)?Cu(a).getUint32(b-a.A):256*(256*(256*Gu(a,b)+Gu(a,b+1))+Gu(a,b+2))+Gu(a,b+3)};
Iu=function(a,b,c){this.info=a;this.o=b instanceof xu?b:new xu([b]);this.o.getLength();this.A=c;this.u=null;this.B=-1;this.C=0};
Ju=function(a){return Du(a.o)};
Ku=function(a,b){if(1!=a.info.o.info.containerType||0!=a.info.A||!a.info.B)return!0;for(var c=Ju(a),d=0,e=0;d+4<c.byteLength;){e=c.getUint32(d);if(!e)return!1;d+=e}return d!==c.byteLength?(b&&(b.lastboxlen=e.toString(),4<=c.byteLength&&(b.lastbytes=c.getUint32(c.byteLength-4).toString()),b.boxlen=d.toString(),b.bytelen=c.byteLength.toString()),!1):!0};
Lu=function(a,b,c){var d;if(!(d=!ou(a.info,b.info)||a.info.B)){if(c=void 0===c?!1:c)c=b.o,c=!(c.o.length?yu(a.o,c.o[0]):1);d=c}if(d)return null;c=new lu(a.info.type,a.info.o,a.info.range,a.info.I,a.info.u,a.info.startTime,a.info.duration,a.info.A,a.info.Wa,a.info.C,a.info.B);d=b.info;c.Wa+=d.Wa;c.range&&(c.M+=d.M);c.F=d.F;c.B=d.B;c.C=c.C||d.C;d=new xu;zu(d,a.o);zu(d,b.o);c=new Iu(c,d,a.A);c.u=b.u||a.u;if(a=c.info.range)a=c.o,a=!(1===a.o.length&&0<a.o[0].byteOffset);a&&(c.A=!1);return c};
Nu=function(a){g.Mu(a.info.o.info)||a.info.o.info.Kc();if(-1!=a.B)return a.B;if(a.u&&tt(a.u))return a.B=tt(a.u),a.B;if(g.Mu(a.info.o.info)){var b=Ju(a);for(var c=a.info.o.o,d=NaN,e=NaN,f=0;Ct(b,f);){var h=Dt(b,f);1936286840==h.type?e=h.data.getUint32(h.dataOffset+8):1836476516==h.type?e=zt(h):1952867444==h.type&&isNaN(d)&&(d=Ft(h));f=Et(h.type)?f+8:f+h.size}!e&&c&&(e=At(c));b=d/e}else b=new Nt(Ju(a)),c=a.A?b:new Nt(new DataView(a.info.o.o.buffer)),d=eu(c),c=b.o,b.o=0,fu(b)?Rt(b,231)?(d=Wt(b)*d/1E9,
b.o=c,b=d):(b.o=c,b=NaN):(b.o=c,b=NaN);a.B=b||a.info.G;return a.B};
Pu=function(a,b){0<a.C&&(b-=a.C);var c=Nu(a)+b;Ou(a,c);a.C=b};
Ou=function(a,b){g.Mu(a.info.o.info)||a.info.o.info.Kc();a.B=b;if(g.Mu(a.info.o.info)){for(var c=Ju(a),d=a.info.o.o,e=NaN,f=NaN,h=0;Ct(c,h);){var l=Dt(c,h);isNaN(e)&&(1936286840==l.type?e=l.data.getUint32(l.dataOffset+8):1836476516==l.type&&(e=zt(l)));if(1952867444==l.type){!e&&d&&(e=At(d));var m=Ft(l);isNaN(f)&&(f=Math.round(b*e)-m);m+=f;if(l.data.getUint8(l.dataOffset)){var n=l.data,q=l.dataOffset+4;n.setUint32(q,Math.floor(m/4294967296));n.setUint32(q+4,m&4294967295)}else l.data.setUint32(l.dataOffset+
4,m)}h=Et(l.type)?h+8:h+l.size}return!0}c=new Nt(Ju(a));e=a.A?c:new Nt(new DataView(a.info.o.o.buffer));d=b;f=eu(e);e=c.o;c.o=0;if(fu(c)&&Rt(c,231))if(h=St(c,!0),d=Math.floor(1E9*d/f),Math.ceil(Math.log(d)/Math.log(2)/8)>h)c=!1;else{for(f=h-1;0<=f;f--)c.u.setUint8(c.o+f,d&255),d>>>=8;c.o=e;c=!0}else c=!1;return c};
Qu=function(a){g.Mu(a.info.o.info)||a.info.o.info.Kc();if(a.u&&6==a.info.type)return a.u.lf;if(g.Mu(a.info.o.info)){var b=Ju(a);var c=0;b=Jt(b,1936286840);b=g.p(b);for(var d=b.next();!d.done;d=b.next())d=Gt(d.value),c+=d.Vr[0]/d.Zr;c=c||NaN;if(!(0<=c))a:{c=Ju(a);b=a.info.o.o;d=0;for(var e,f=0;Ct(c,d);){var h=Dt(c,d);if(1836476516==h.type)e=zt(h);else if(1836019558==h.type){!e&&b&&(e=At(b));if(!e){c=NaN;break a}var l=Bt(h.data,h.dataOffset,1953653094),m=e,n=Bt(l.data,l.dataOffset,1952868452);l=Bt(l.data,
l.dataOffset,1953658222);var q=kt(n);kt(n);q&2&&kt(n);n=q&8?kt(n):0;var r=kt(l),u=r&1;q=r&4;var w=r&256,z=r&512,B=r&1024;r&=2048;var E=lt(l);u&&kt(l);q&&kt(l);for(var F=u=0;F<E;F++){var G=w?kt(l):n;z&&kt(l);q&&0==F||!B||kt(l);r&&kt(l);u+=G}f+=u/m}d=Et(h.type)?d+8:d+h.size}c=f||NaN}}else e=new Nt(Ju(a)),c=a.A?e:new Nt(new DataView(a.info.o.o.buffer)),c=Dfa(e,eu(c));return c||a.info.M};
Ru=function(a){var b=Ju(a);var c=(c=g.wt(b,0,1936286840))?c.data.getUint32(c.dataOffset+8):NaN;isNaN(c)&&(a=a.info.o.o,c=(b=g.wt(b,0,1836476516))?zt(b):a?At(a):NaN);return c};
Su=function(a){if(!a.u){g.Mu(a.info.o.info)||a.info.o.info.Kc();if(g.Mu(a.info.o.info)){var b=Ju(a),c=Bt(b,0,1701671783);if(c){var d=Ht(c);var e=d.OO;d=vt(d.EA);if(b=Bt(b,c.offset+c.size,1701671783)){b=Ht(b);for(var f in b)if(c=vt(b.EA),d&&c)for(var h in c)d[h]=c[h]}e=d?new rt(d,e):null}else e=null}else{e=new Nt(Ju(a));f=e.o;e.o=0;d=h=null;if(Pt(e,[408125543,307544935,29555,26568]))for(b=Qt(e);!Ot(b);)c=St(b,!1),17543==c?d=vt(au(b)):17827==c?h=au(b):Xt(b);e.o=f;e=d?new rt(d,h):null}a.u=e}};
Tu=function(){this.o=!1;this.u=0;this.Dd=!1};
Uu=function(a,b){var c=void 0===b?{}:b,d=void 0===c.hasSubfragmentedFmp4?!1:c.hasSubfragmentedFmp4;c=void 0===c.dl?!1:c.dl;var e=new Tu;e.o=a.ha("html5_streaming_xhr_no_mp4_holdback_chunk");e.u=g.O(a.experiments,"html5_time_based_consolidation_ms");e.Dd=d||c;return e};
Gfa=function(a,b){this.experimentIds=a?a.split(","):[];this.flags=Yp(b||"");var c={};(0,g.y)(this.experimentIds,function(d){c[d]=!0});
this.experiments=c};
g.P=function(a,b){return"true"===a.flags[b]};
g.O=function(a,b){return Number(a.flags[b])||0};
g.Vu=function(a,b){var c=a.flags[b];return c?c.toString():""};
g.Wu=function(){this.B=new Tu;this.CE=this.zE=!1;this.hq=2;this.F=20971520;this.I=8388608;this.C=120;this.za=3145728;this.Z=62914560;this.Ba=10485760;this.dr=this.Ea=0;this.M=NaN;this.Xg=0;this.Ph=this.Rx=2;this.Ce=3;this.rx=2;this.aa=2097152;this.ox=1048576;this.ga=!1;this.N=1800;this.Xd=5;this.ae=10;this.U=15;this.Lc=1;this.o=1.15;this.u=1.05;this.CD=!0;this.ea=!1;this.vx=.8;this.Mo=this.bb=!1;this.Da=6;this.lp=this.ua=!1;this.Wg=.5;this.We=0;this.Nh=this.gb=!1;this.ce=this.Zd=0;this.Kx=2;this.Qa=
5E3;this.de=0;this.Lo=6;this.ra=!1;this.R=.5;this.tb=2;this.kb=this.Gx=0;this.Hx=1.5;this.Ix=this.Ug=.5;this.zd=15;this.Yp=1;this.yx=this.SD=this.Oa=!1;this.gq=0;this.Jo=this.ih=this.Dx=this.mx=this.Qo=this.NE=this.FE=this.hE=!1;this.ee=0;this.zx=this.tp=this.Bx=this.Hc=!1;this.Cd=0;this.be=this.ba=this.DE=this.Qi=this.T=this.Cb=this.Ha=this.Dp=this.Tx=this.Be=this.fa=this.Ex=this.Ae=this.Ax=!1;this.Io=!0;this.Ve=!1;this.A="";this.sF=1048576;this.No=this.mD=this.Pb=this.G=!1;this.Yd=46800;this.Va=
this.Go=this.Oh=this.Mc=this.ya=!1;this.Lx=!0;this.sa=this.km=this.nx=this.xx=this.Vg=this.jm=this.fj=this.Cx=!1;this.lc=0;this.Ho=!1;this.er=0;this.Ko="";this.rD=this.im=!1};
Hfa=function(a,b){1080<b.Ca().Qb&&!a.zE&&(a.F=36700160,a.I=5242880,a.za=10485760,a.aa=4194304,a.zE=!0);2160<b.Ca().Qb&&!a.CE&&(a.F=104857600,a.M=13107200,a.CE=!0);a.ox=Math.max(65536,Math.min(a.aa,5*b.o))};
Ifa=function(){this.A=this.o=this.u=this.started=this.B=0};
Xu=function(a,b){a[b]||(a[b]=new Ifa);return a[b]};
Zu=function(a){a=a.split("");Yu.QC(a,39);Yu.oN(a,77);Yu.QC(a,20);return a.join("")};
$u=function(a,b,c,d){!a&&(void 0===c?0:c)&&g.nr(Error("Player URL validator detects invalid url. "+(void 0===d?"":d)+": "+b));return a};
av=function(a,b){return b&&b.test(a)?!0:!1};
cv=function(a){return(a=bv&&bv.exec(a))?a[0]:""};
dv=function(a){var b=void 0===b?!1:b;return $u(av(a,Jfa),a,b,"Trusted Stream URL")};
g.ev=function(a){var b=void 0===b?!1:b;return $u(av(a,Kfa),a,b,"Trusted Image URL")};
fv=function(a){var b=void 0===b?!1:b;return $u(av(a,Lfa),a,b,"Trusted Promoted Video Domain URL")};
Nfa=function(a){var b=void 0===b?!1:b;return $u(av(a,Mfa),a,b,"Drm Licensor URL")};
gv=function(a,b){b=void 0===b?!1:b;return $u(av(a,Ofa),a,b,"Captions URL")};
hv=function(a){a=new g.Vm(a);g.Wm(a,document.location.protocol);g.Xm(a,document.location.hostname);document.location.port&&g.Ym(a,document.location.port);return a.toString()};
iv=function(a){a=new g.Vm(a);g.Wm(a,document.location.protocol);return a.toString()};
jv=function(a){this.u=a;this.B=this.path=this.A="";this.o={};this.url=""};
lv=function(a){kv(a);return a.B};
mv=function(a){kv(a);return"local"===a.A};
nv=function(a){kv(a);return g.Db(a.o,function(b){return null!==b})};
ov=function(a){kv(a);if("/videoplayback"!==a.path){var b=a.clone();b.set("playerfallback","1");return b}var c=a.Ec();b=new g.Vm(c);var d=a.get("fvip");a=decodeURIComponent(a.get("mn")||"").split(",");if(d&&a&&1<a.length&&a[1])return c=b.o.replace(/^[^.]*/,""),g.Xm(b,"r"+d+"---"+a[1]+c),b=new jv(b.toString()),b.set("fallback_count","1"),b;d=b.o.match("\\.a1\\.googlevideo\\.com$");b.o.match("\\.googlevideo\\.com$")?(g.Xm(b,"redirector.googlevideo.com"),c=b.toString()):b.o.match("r[1-9].*\\.c\\.youtube\\.com$")?
(g.Xm(b,"www.youtube.com"),c=b.toString()):c=hv(c);b=new jv(c);b.set("cmo=pf","1");d&&b.set("cmo=td","a1.googlevideo.com");return b};
kv=function(a){if(a.u){if(!dv(a.u)&&!a.u.startsWith("local"))throw Error("Untrusted URL: "+a.u);var b=g.cn(a.u);a.A=b.C;a.B=b.o+(null!=b.B?":"+b.B:"");var c=b.u;if(c.startsWith("/videoplayback"))a.path="/videoplayback",c=c.substr(14);else if(c.startsWith("/initplayback"))a.path="/initplayback",c=c.substr(13);else if(c.startsWith("/api/manifest")){var d=c.indexOf("/",12),e=c.indexOf("/",d+1);0<d&&0<e?(a.path=c.substr(0,e),c=c.substr(e+1)):(a.path=c,c="")}else a.path=c,c="";d=a.o;a.o=pv(c);g.Ta(a.o,
qv(b.A.toString()));g.Ta(a.o,d);"index.m3u8"===a.o.file&&(delete a.o.file,a.path+="/file/index.m3u8");a.u="";a.url=""}};
Pfa=function(a){kv(a);var b=a.A+(a.A?"://":"//")+a.B+a.path;if(nv(a)){var c=[];g.Ab(a.o,function(d,e){null!==d&&c.push(e+"="+d)});
b+="?"+c.join("&")}return b};
pv=function(a){a=a.split("/");var b=0;a[0]||b++;for(var c={};b<a.length;b+=2)a[b]&&rv(c,a[b],a[b+1]);return c};
qv=function(a){a=a.split("&");for(var b={},c=0;c<a.length;c++){var d=a[c],e=d.indexOf("=");0<e?rv(b,d.substr(0,e),d.substr(e+1)):d&&(b[d]="")}return b};
rv=function(a,b,c){if("cmo"===b){var d;0<=(d=c.indexOf("="))?(b="cmo="+c.substr(0,d),c=c.substr(d+1)):0<=(d=c.indexOf("%3D"))&&(b="cmo="+c.substr(0,d),c=c.substr(d+3))}a[b]=c};
tv=function(a){this.uf=a;this.o={};this.url=""};
uv=function(a,b){var c=b.indexOf("?");if(0<c){var d=qv(b.substr(c+1));g.Ab(d,function(e,f){this.set(f,e)},a);
b=b.substr(0,c)}c=pv(b);g.Ab(c,function(e,f){this.set(f,e)},a)};
Qfa=function(a){var b=a.uf.Ec(),c=[];g.Ab(a.o,function(e,f){c.push(f+"="+e)});
if(!c.length)return b;var d=c.join("&");a=nv(a.uf)?"&":"?";return b+a+d};
vv=function(a,b){var c=new jv(b),d=c.get("req_id");d&&a.set("req_id",d);g.Ab(a.o,function(e,f){c.set(f,null)});
return c};
Rfa=function(a){this.B=a.clone();this.o=a;this.A=null;this.C=this.u=0};
xv=function(a,b,c){var d=Xu(c,lv(a.o));if(d.u>=b.Kx||1<=d.o)if(a=wv(a),c=Xu(c,lv(a)),c.u+c.o<=d.u+d.o)return!0;return!1};
Sfa=function(a,b){var c=b?wv(a):a.o;return new tv(c)};
wv=function(a){a.A||(a.A=ov(a.B));return a.A};
yv=function(a){return 1<a.u?a.C+1E3*Math.pow(1.6,a.u-1)<(0,g.M)():!0};
g.zv=function(a,b,c){b.uf===a.o&&(a.o=vv(b,c));b.uf===a.A&&(a.A=vv(b,c))};
Av=function(a,b){this.u=a[0].o.u;this.A=b||"";this.C="";this.o=a;this.range=this.o[0].range&&0<this.o[0].Wa?Ffa(this.o):null;this.B=this.Id=NaN;this.F=this.requestId=null};
Bv=function(a){return!mu(a.o[a.o.length-1])};
Cv=function(a){return 4==a.o[a.o.length-1].type};
g.Dv=function(a,b,c,d){if(a.C){var e=new tv(new jv(a.C));a.A&&uv(e,a.A)}else/http[s]?:\/\//.test(a.A)?e=new tv(new jv(a.A)):(b=null===a.F?xv(a.u,b,c):a.F,e=Sfa(a.u,b),a.A&&uv(e,a.A));(d=d||a.range)&&e.set("range",d.toString());a.requestId&&e.set("req_id",a.requestId);isNaN(a.Id)||e.set("headm",a.Id.toString());isNaN(a.B)||e.set("mffa",a.B+"ms");a.G&&g.Ab(a.G,function(f,h){e.set(h,f)});
return e};
Ev=function(a){if(a.range)return a.range.length;a=a.o[0];return Math.round(a.M*a.o.info.o)};
Tfa=function(a,b,c){return a.range?new hu(a.range.start+b,a.range.end):ju(b,c)};
Fv=function(a,b,c){this.sampleRate=a||0;this.o=b||0;this.spatialAudioType=c||0};
Iv=function(a,b,c,d,e,f,h,l,m,n){this.width=a;this.height=b;this.isAccelerated=!1;this.quality=f||Gv(a,b);this.Qb=g.Hv[this.quality];this.fps=c||0;this.stereoLayout=!e||null!=d&&0!==d&&1!==d?0:e;this.projectionType=d?2===d&&2===e?3:d:0;(a=h)||(a=g.Hv[this.quality],0===a?a="Auto":(b=this.fps,c=this.projectionType,a=a.toString()+(2===c||3===c||4===c?"s":"p")+(55<b?"60":49<b?"50":39<b?"48":"")));this.qualityLabel=a;this.o=l||"";this.primaries=m||"";this.streamType=n||0};
Jv=function(a){return 1280<=a.width||720<=a.height};
Kv=function(a){return"smpte2084"===a.o||"arib-std-b67"===a.o};
Gv=function(a,b){for(var c=Math.max(a,b),d=Math.min(a,b),e=Lv[0],f=0;f<Lv.length;f++){var h=Lv[f],l=g.Hv[h];if(c>=1.3*Math.floor(16*l/9)||d>=1.3*l)return e;e=h}return"tiny"};
Nv=function(a,b,c,d,e,f,h,l,m){this.id=a;this.mimeType=b;this.audio=void 0===c?null:c;this.video=void 0===d?null:d;this.Db=void 0===e?null:e;this.Qc=void 0===f?null:f;this.captionTrack=void 0===m?null:m;this.A=!0;this.containerType=Mv(b);this.o=h||0;this.u=l||0;this.sb=Ufa[uu(this)]||""};
uu=function(a){return a.id.split(";",1)[0]};
Ov=function(a){return"9"===a.sb||"("===a.sb||"9h"===a.sb||"(h"===a.sb};
Pv=function(a){return"9h"===a.sb||"(h"===a.sb};
g.Mu=function(a){return 1===a.containerType};
Qv=function(a){return"application/x-mpegURL"===a.mimeType};
Rv=function(a){return/(opus|vorbis|mp4a|dtse|ac-3|ec-3)/.test(a)};
Sv=function(a){return a.includes("vtt")||a.includes("text/mp4")};
Mv=function(a){return 0<=a.indexOf("/mp4")?1:0<=a.indexOf("/webm")?2:0<=a.indexOf("/x-flv")?3:0<=a.indexOf("/vtt")?4:0};
Tv=function(a,b,c,d,e){var f=new Fv;b in g.Hv||(b="small");d&&e?(e=Number(e),d=Number(d)):(e=g.Hv[b],d=Math.round(16*e/9));d=new Iv(d,e,0,null,void 0,b,void 0,void 0,void 0);a=unescape(a.replace(/&quot;/g,'"'));return new Nv(c,a,f,d)};
Uv=function(a,b,c,d){this.info=b;this.initRange=c||null;this.indexRange=d||null;this.o=null;this.C=!1;this.F=null;this.M=0;this.u=new Rfa(a);this.B=null;this.N=NaN;this.A=null};
Vv=function(a,b,c,d,e,f){f=void 0===f?0:f;Uv.call(this,a,b,d);this.index=e||new g.ft;this.lf=f;this.R=c;this.I=!0;if(this.G=!c)this.C=!0};
Wv=function(){return!("function"!==typeof window.fetch||!window.ReadableStream)};
Xv=function(a){if(a.Mm())return!1;a=a.Uc("content-type");return"audio/mp4"===a||"video/mp4"===a||"video/webm"===a};
Yv=function(a){return a.B.Dd||a.B.Dd?a.ea&&Wv()?3:2:a.ih?-1:1};
Zv=function(a){var b=void 0===a?{}:a;a=void 0===b.lf?0:b.lf;var c=void 0===b.gy?!1:b.gy,d=void 0===b.Wy?0:b.Wy,e=void 0===b.Tc?0:b.Tc,f=void 0===b.Ne?Infinity:b.Ne,h=void 0===b.CA?0:b.CA;b=void 0===b.ff?!1:b.ff;this.segments=[];this.o=a;this.A=d;this.u=c;this.B=this.F=-1;this.I=e;this.N=f;this.G=null;this.M=h;this.C=b};
aw=function(a,b,c){b=$v(a,b);return 0<=b&&(c||!a.segments[b].pending)};
$v=function(a,b){return vb(a.segments,function(c){return b-c.Sa})};
bw=function(a,b,c){c=void 0===c?{}:c;Vv.call(this,a,b,"",void 0,void 0,c.lf||0);this.index=new Zv(c)};
Vfa=function(a,b,c,d,e){this.Sa=a;this.startSecs=b;this.durationSecs=c;this.o=d||NaN;this.u=e||NaN};
cw=function(a,b,c){for(;a;a=a.parentNode)if(a.attributes&&(!c||a.nodeName===c)){var d=a.getAttribute(b);if(d)return d}return""};
dw=function(a,b){for(var c=a;c;c=c.parentNode){var d=c.getElementsByTagName(b);if(0<d.length)return d[0]}return null};
ew=function(a){if(!a)return 0;var b=a.match(/PT(([0-9]*)H)?(([0-9]*)M)?(([0-9.]*)S)?/);return b?3600*(Number(b[2])|0)+60*(Number(b[4])|0)+(Number(b[6])|0):Number(a)|0};
fw=function(a){return a.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})$/)?a+"Z":a};
gw=function(){this.o=[];this.u=null;this.C=0;this.B=[];this.A=!1;this.F="";this.G=0};
Wfa=function(a){var b=a.B;a.B=[];return b};
Xfa=function(){this.B=[];this.o=null;this.u={};this.A={}};
aga=function(a,b,c){var d=[];b=Array.from(b.getElementsByTagName("SegmentTimeline"));b=g.p(b);for(var e=b.next();!e.done;e=b.next()){e=e.value;var f=e.parentNode.parentNode,h=null;"Period"==f.nodeName?h=Yfa(a):"AdaptationSet"==f.nodeName?h=Zfa(a,f.attributes.id?f.attributes.id.value:f.attributes.mimetype.value):"Representation"==f.nodeName&&(h=$fa(a,f.attributes.id.value));if(null==h)return;h.update(e,c);pb(d,Wfa(h))}pb(a.B,d);saa(a.B,function(l){return 1E3*l.startSecs+l.o})};
cga=function(a){a.o&&(a.o.o=[]);g.Ab(a.u,function(b){b.o=[]});
g.Ab(a.A,function(b){b.o=[]})};
Yfa=function(a){a.o||(a.o=new gw);return a.o};
Zfa=function(a,b){a.u[b]||(a.u[b]=new gw);return a.u[b]};
$fa=function(a,b){a.A[b]||(a.A[b]=new gw);return a.A[b]};
hw=function(a,b,c,d,e){Uv.call(this,a,b,d||void 0,e||void 0);this.index=new g.ft;this.G=c};
iw=function(a,b,c){var d=a.index.ku(b),e=a.index.wd(b),f=a.index.getDuration(b),h;c?f=h=0:0<a.info.o&&(h=a.info.o*f);c=b==a.index.ub()&&0<h;a=new lu(3,a,null,"otfCreateRequestInfoForSegment",b,e,f,0,h,c);return new Av([a],d)};
dga=function(a,b){if(!a.index.Rb()){for(var c=[],d=b.G,e=b.I.split(",").filter(function(r){return 0<r.length}),f=0,h=0,l=0,m=/^(\d+)/,n=/r=(\d+)/,q=0;q<d;q++){if(0>=l)if(l=e.shift(),h=(h=m.exec(l))?+h[1]/1E3:0)l=(l=n.exec(l))?+l[1]:0,l+=1;
else return;c.push(new et(q,f,h,NaN,"sq/"+(q+1)));f+=h;l--}a.index.append(c)}};
g.jw=function(){this.o=0;this.u=new Float64Array(128);this.A=new Float64Array(128);this.C=1;this.B=!1};
kw=function(a){a.u.length<a.o+1&&a.resize(2*a.u.length)};
lw=function(a,b,c,d,e,f){Uv.call(this,a,b,c||void 0,d||void 0);this.I=null;this.index=new g.jw;this.G=e;this.lastModified=f};
mw=function(a,b,c,d){for(var e=[];b<=a.index.ub();b++){var f=a.index,h=b;f=ju(f.Sq(h),h+1<f.o||f.B?f.u[h+1]-f.u[h]:-1);h=a.index.wd(b);var l=a.index.getDuration(b),m=Math.max(0,c-f.start),n=Math.min(f.end+1,c+d)-(f.start+m),q=b==a.index.ub()&&m+n==f.length;e.push(new lu(3,a,f,"getRequestInfoForRange_",b,h,l,m,n,q));if(f.start+m+n>=c+d)break}return new Av(e)};
nw=function(){this.length=1};
ow=function(){this.buffered=new nw};
ega=function(a,b){return pw(function(c,d){return g.Dr(c,d,4,1E3)},a,b)};
g.qw=function(a){var b;a.responseType&&"text"!==a.responseType?"arraybuffer"===a.responseType&&(b=Mt(new Uint8Array(a.response))):b=a.responseText;return!b||2048<b.length?"":0===b.indexOf("https://")?b:""};
pw=function(a,b,c){b.match(fga);return a(b,c).then(function(d){var e=g.qw(d);return e?pw(a,e,c):d})};
gga=function(a,b,c,d){this.displayName=a;this.vssId=b;this.languageCode=c;this.kind=void 0===d?"":d};
rw=function(a,b,c){this.name=a;this.id=b;this.isDefault=c};
tw=function(a,b,c){a=void 0===a?"":a;b=void 0===b?null:b;c=void 0===c?!1:c;g.N.call(this);this.ba=this.duration=0;this.ff=this.G=this.isLive=this.B=!1;this.Ne=this.Tc=0;this.isOtf=this.Bg=!1;this.T=(0,g.M)();this.M=Infinity;this.o={};this.sourceUrl=a||"";this.I=this.Z=0;this.F=null;this.sa=!!b&&g.P(b,"html5_live_nonzero_first_segment_start_time");this.u=!1;this.U=[];this.ra=!!b&&g.P(b,"html5_live_self_init_segments");this.C=null;this.ua=c;this.ga=!b||!g.P(b,"html5_manifest_without_credentials");this.N=
0;this.aa=!!b&&g.P(b,"disable_html5_manifest_namespace_redux");this.ea="";this.R=NaN;this.fa=b&&g.P(b,"disable_html5_duration_caching")?Infinity:10;this.Ah=this.Pj=this.A=0};
uw=function(a){return g.Db(a.o,function(b){return!!b.info.Qc})};
hga=function(a){return g.Db(a.o,function(b){return Sv(b.info.mimeType)})};
iga=function(a){return Eb(a.o,function(b){return b.info.video?b.yr():!0})};
vw=function(a){return g.Db(a.o,function(b){return mv(b.u.o)})};
ww=function(a,b){a.o[b.info.id]=b};
jga=function(a,b,c,d){c=void 0===c?0:c;var e=new tw("",d,!1);e.duration=c||0;(0,g.y)(a,function(f){var h=xw(f,b,e.duration),l=iu(f.init),m=iu(f.index),n=parseInt(f.clen,10),q=yw(f.url,f.sp,f.s,d);f=parseInt(f.lmt,10);q&&ww(e,new lw(q,h,l,m,n,f))});
return e};
kga=function(a,b,c,d){c=void 0===c?0:c;var e=new tw("",d,!1);e.duration=c||0;(0,g.y)(a,function(f){var h=xw(f,b,e.duration),l=yw(f.url,f.sp,f.s,d);if(!g.Mu(h)){var m=d&&g.P(d,"html5_manifestless_vp9_otf"),n=d&&g.P(d,"html5_otf_webm_audio_killswitch");if(!m||!h.isVideo()&&n)return}l&&(h.video&&3==h.video.streamType?ww(e,new hw(l,h,"sq/0",null,null)):(m=iu(f.init),f=iu(f.index),ww(e,new hw(l,h,"",m,f))))});
e.isOtf=!0;return e};
lga=function(a,b,c,d){var e=new tw("",d,!0);(0,g.y)(a,function(f){var h=xw(f,c),l=yw(f.url,f.sp,f.s,d),m=parseInt(f.target_duration_sec,10)||5;f=parseInt(f.max_dvr_duration_sec,10)||14400;var n=parseInt(l.get("mindsq"),10)||parseInt(l.get("min_sq"),10)||0,q=parseInt(l.get("maxdsq"),10)||parseInt(l.get("max_sq"),10)||Infinity;e.Tc=e.Tc||n;e.Ne=e.Ne||q;var r=!Sv(h.mimeType),u=d&&g.O(d,"html5_manifestless_max_segment_history");l&&ww(e,new bw(l,h,{lf:m,gy:r,Wy:f,Tc:n,Ne:q,CA:u,ff:b}))});
e.B=!b;e.Bg=!0;e.u=!0;e.isLive=!b;e.ff=b;e.G=!!e.Tc&&!!e.Ne&&isFinite(e.Ne);return e};
xw=function(a,b,c){c=void 0===c?0:c;var d=a.type;var e=a.itag;var f=a.xtags;f&&(e=a.itag+";"+f);var h=null;f=null;if(/(vp9|vp09|vp8|avc1|av01)/.test(d)){h=(a.size||"640x360").split("x");h=new Iv(+h[0],+h[1],+a.fps,+a.projection_type,+a.stereo_layout,void 0,a.quality_label,a.eotf,a.primaries,+a.stream_type);var l=h;null===zw&&(zw=window.MediaSource&&MediaSource.isTypeSupported&&MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.16.09"')&&!MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.99.99"'));
if((zw||Aw)&&('video/webm; codecs="vp9"'==d||'video/webm; codecs="vp9.2"'==d)){var m="00",n="08",q="01",r="01",u="01";'video/webm; codecs="vp9.2"'==d&&(m="02",n="10","bt2020"===l.primaries&&(u=q="09"),"smpte2084"==l.o&&(r="16"),"arib-std-b67"==l.o&&(r="18"));d=["vp09",m,"51",n,"01",q,r,u].join(".");Bw&&(d+=".00");d='video/webm; codecs="'+d+'"'}}m=l=null;Rv(d)&&(l=new Fv(+a.audio_sample_rate||void 0,+a.audio_channels||0,+a.spatial_audio_type),a.name&&(m=new rw(a.name,a.audio_track_id,"1"==a.isDefault)));
a.caption_display_name&&a.caption_vss_id&&a.caption_language_code&&(f=new gga(a.caption_display_name,a.caption_vss_id,a.caption_language_code,a.caption_kind));n=parseInt(a.bitrate,10)/8;q=parseInt(a.clen,10);c=c&&q?q/c:0;q=null;if(b&&a.drm_families)for(q={},a=g.p(a.drm_families.split(",")),r=a.next();!r.done;r=a.next())r=r.value,q[r]=b[r];return new Nv(e,d,l,h,m,q,n,c,f)};
mga=function(a){return oj(a,function(b){return 3==+b.stream_type})?3:0};
Cw=function(a,b){return a.F?qb(a.F.B,b):a.U.length?qb(a.U,b):[]};
yw=function(a,b,c,d){b=void 0===b?"":b;c=void 0===c?"":c;a=new jv(a);a.set("alr","yes");c&&(c=Zu(decodeURIComponent(c)),a.set(b,encodeURIComponent(c)));d&&g.P(d,"html5_enable_hancedenay_iphersay")&&(d=a.get("n"))&&(d=iea(d),a.set("n",d));return a};
Fw=function(a,b){var c=cw(b,"id");c=c.replace(":",";");var d=cw(b,"mimeType"),e=cw(b,"codecs");d=e?d+'; codecs="'+e+'"':d;e=parseInt(cw(b,"bandwidth"),10)/8;var f=parseInt(dw(b,"BaseURL").getAttribute(Dw(a,"contentLength")),10);f=a.duration&&f?f/a.duration:0;var h=null;if(/(vp9|vp09|vp8|avc1|av01)/.test(d)){h=parseInt(cw(b,"width"),10);var l=parseInt(cw(b,"height"),10),m=parseInt(cw(b,"frameRate"),10),n=nga(cw(b,Dw(a,"projectionType")));a:switch(cw(b,Dw(a,"stereoLayout"))){case "layout_left_right":var q=
1;break a;case "layout_top_bottom":q=2;break a;default:q=0}cw(b,"video_level");h=new Iv(h,l,m,n,q,void 0,void 0,void 0,void 0)}m=l=null;if(Rv(d))if(l=parseInt(cw(b,"audioSamplingRate"),10),m=parseInt(cw(b.getElementsByTagName("AudioChannelConfiguration")[0],"value"),10),n=oga(cw(b,Dw(a,"spatialAudioType"))),l=new Fv(l,m,n),m=cw(b,"lang")||"und",n=dw(b,"Role")){var r=cw(n,"value")||"";Jb(Ew,r)?(n=m+"."+Ew[r],q="main"==r,m=cw(b,Dw(a,"langName"))||m+" - "+r,m=new rw(m,n,q)):m=null}else m=null;q=null;
if(n=dw(b,"ContentProtection"))if(g.il())if((q=n.attributes.schemeIdUri)&&"http://youtube.com/drm/2012/10/10"==q.value)for(q={},n=n.firstChild;null!=n;n=n.nextSibling)"yt:SystemURL"==n.nodeName&&(q[n.attributes.type.value]=n.textContent.trim());else q=null;else if((q=n.attributes.schemeIdUri)&&"http://youtube.com/drm/2012/10/10"==q.textContent)for(q={},n=n.firstChild;null!=n;n=n.nextSibling)"SystemURL"==n.localName&&"http://youtube.com/yt/2012/10/10"==n.namespaceURI&&(q[n.attributes.type.textContent]=
n.textContent.trim());else q=null;return new Nv(c,d,l,h,m,q,e,f)};
nga=function(a){switch(a){case "equirectangular":return 2;case "equirectangular_threed_top_bottom":return 3;case "mesh":return 4;case "rectangular":return 1;default:return 0}};
oga=function(a){switch(a){case "spatial_audio_type_ambisonics_5_1":return 1;case "spatial_audio_type_ambisonics_quad":return 2;case "spatial_audio_type_foa_with_non_diegetic":return 3;default:return 0}};
Gw=function(a,b){b=void 0===b?"":b;a.I=1;a.T=(0,g.M)();return Sf(ega(b||a.sourceUrl,{format:"RAW",method:"GET",withCredentials:a.ga}).then((0,g.x)(a.TG,a)),(0,g.x)(a.VG,a))};
pga=function(a,b,c){return Gw(new tw(a,b,c),a)};
qga=function(a,b,c){var d=a.getAttribute("media"),e=null;c||(a=a.getAttribute("mediaRange"),null!=a&&(c=a.split("-"),0<=parseInt(c[1],10)?e=iu(a):d=d+"?range="+a));return new et(b.Sa,b.startSecs,b.durationSecs,b.o,d,e,b.u)};
Hw=function(a){return a.isLive&&(0,g.M)()-a.T>=a.M};
Iw=function(a){var b=a.M;isFinite(b)&&(Hw(a)?a.refresh():(b=Math.max(0,a.T+b-(0,g.M)()),a.C||(a.C=new g.H(a.refresh,b,a),g.C(a,a.C)),a.C.start(b)))};
rga=function(a){a=a.o;for(var b in a){var c=a[b].index;if(c.Rb())return c.ub()+1}return 0};
Jw=function(a){return a.Pj&&a.A?a.Pj-a.A:0};
Kw=function(a){if(!isNaN(a.R))return a.R;var b=a.o,c;for(c in b){var d=b[c].index;if(d.Rb()){b=0;for(c=d.Df();c<=d.ub();c++)b+=d.getDuration(c);b/=d.Wk();b=.5*Math.round(b/.5);d.Wk()>a.fa&&(a.R=b);return b}if(a.isLive&&(d=b[c],d.lf))return d.lf}return NaN};
Lw=function(a,b){for(var c in a.o){var d=a.o[c].index;if(d.Rb()){var e=d.Ef(b),f=d.xv(e);if(f)return f+b-d.wd(e)}}return NaN};
sga=function(a,b){var c=Mb(a.o,function(e){return e.index.Rb()});
if(!c)return NaN;c=c.index;var d=c.Ef(b);return c.wd(d)==b?b:d<c.ub()?c.wd(d+1):NaN};
tga=function(a,b){g.Ab(a.o,function(c){g.Ab(b,function(d,e){var f=c.u;f.o.set(e,d);f.B.set(e,d);f.A&&f.A.set(e,d)})})};
Dw=function(a,b){return a.aa?"yt:"+b:a.ea+":"+b};
uga=function(a){return g.cb(Object.values(a.o),function(b){return b.info.Qc&&b.info.video?480<b.info.video.Qb&&"H"==b.info.sb:!1})};
Mw=function(){var a=g.Ja("yt.player.utils.videoElement_");a||(a=g.ue("VIDEO"),g.Ha("yt.player.utils.videoElement_",a,void 0));return a};
Nw=function(a){var b=Mw();return!!(b&&b.canPlayType&&b.canPlayType(a))};
Pw=function(a){if(/opus/.test(a)&&(g.Ow&&!Yn("38")||g.Ow&&fl("crkey")))return!1;if(window.MediaSource&&window.MediaSource.isTypeSupported)return window.MediaSource.isTypeSupported(a);if(/webm/.test(a)&&!ll())return!1;'audio/mp4; codecs="mp4a.40.2"'===a&&(a='video/mp4; codecs="avc1.4d401f"');return!!Nw(a)};
vga=function(a){try{var b=Pw('video/mp4; codecs="avc1.42001E"')||Pw('video/webm; codecs="vp9"');return(Pw('audio/mp4; codecs="mp4a.40.2"')||Pw('audio/webm; codecs="opus"'))&&(b||!a)||Nw('video/mp4; codecs="avc1.42001E, mp4a.40.2"')?null:"fmt.noneavailable"}catch(c){return"html5.missingapi"}};
Qw=function(){var a=Mw();return!!a.webkitSupportsPresentationMode&&"function"===typeof a.webkitSetPresentationMode};
Rw=function(){return"pictureInPictureEnabled"in window.document&&!!window.document.pictureInPictureEnabled};
Sw=function(){var a=Mw();try{var b=a.muted;a.muted=!b;return a.muted!==b}catch(c){}return!1};
Tw=function(a,b){this.o=a;this.u=void 0===b?!1:b;this.A=!1};
Uw=function(a,b){this.o=a;this.u=b;this.A=0;Object.defineProperty(this,"timestampOffset",{get:this.CP,set:this.GP});Object.defineProperty(this,"buffered",{get:this.AP})};
wga=function(){this.length=0};
Vw=function(a){this.activeSourceBuffers=this.sourceBuffers=[];this.o=a;this.u=NaN;this.A=0;Object.defineProperty(this,"duration",{get:this.BP,set:this.FP});Object.defineProperty(this,"readyState",{get:this.DP});this.o.addEventListener("webkitsourceclose",(0,g.x)(this.EP,this),!0)};
Ww=function(a,b){return{start:function(c){return a[c]},
end:function(c){return b[c]},
length:a.length}};
Xw=function(a,b,c){b=void 0===b?",":b;c=void 0===c?a?a.length:0:c;var d=[];if(a)for(c=Math.max(a.length-c,0);c<a.length;c++)d.push(a.start(c).toFixed(3)+"-"+a.end(c).toFixed(3));return d.join(b)};
Yw=function(a,b){if(!a)return-1;try{for(var c=0;c<a.length;c++)if(a.start(c)<=b&&a.end(c)>=b)return c}catch(d){}return-1};
Zw=function(a,b){return 0<=Yw(a,b)};
$w=function(a,b){if(!a)return NaN;var c=Yw(a,b);return 0<=c?a.end(c):NaN};
ax=function(a){return a&&a.length?a.end(a.length-1):NaN};
bx=function(a,b){var c=$w(a,b);return 0<=c?c-b:0};
cx=function(a,b,c){for(var d=[],e=[],f=0;f<a.length;f++)a.end(f)<b||a.start(f)>c||(d.push(Math.max(b,a.start(f))-b),e.push(Math.min(c,a.end(f))-b));return Ww(d,e)};
dx=function(a,b,c){this.errorCode=a;this.o=b;this.details=c||{}};
ex=function(a){var b;for(b in a)if(a.hasOwnProperty(b)){var c=(""+a[b]).replace(/[:,=]/g,"_");var d=(d?d+";":"")+b+"."+c}return d||""};
fx=function(a){var b=void 0===b?!1:b;if(a instanceof dx)return a;a=a&&a instanceof Error?a:Error(""+a);b?g.mr(a):g.nr(a);return new dx(b?"player.fatalexception":"player.exception",b,{name:""+a.name,message:""+a.message})};
gx=function(a,b,c,d){g.N.call(this);var e=this;this.o=a;this.N=b;this.u=d||null;this.M=c;this.R=this.B=this.F=null;this.G=0;this.C=function(f){return e.S(f.type,e)};
this.supports(3)&&(this.o.addEventListener("updateend",this.C),this.o.addEventListener("error",this.C));this.T=0;this.I=Ww([],[]);this.A=!1};
hx=function(a,b,c,d){g.N.call(this);var e=this;this.o=a;this.M={error:function(){!e.ia()&&e.isActive()&&e.S("error",e)},
updateend:function(){!e.ia()&&e.isActive()&&e.S("updateend",e)}};
ds(this.o,this.M);this.u=b;this.I=c;this.F=0;this.C=Infinity;this.B=0;this.G=this.A=d};
ix=function(a,b){b=void 0===b?!1:b;g.A.call(this);this.C=new g.as(this);g.C(this,this.C);this.u=this.o=null;this.A=a;var c=this.A;c=c.SJ?c.o.webkitMediaSourceURL:window.URL.createObjectURL(c);this.nn=new Tw(c,!0);this.F=b;this.B=null;bs(this.C,this.A,["sourceopen","webkitsourceopen"],this.FN);bs(this.C,this.A,["sourceclose","webkitsourceclose"],this.EN)};
xga=function(a,b){jx(a)?g.Bf(function(){return b(a)}):a.B=b};
kx=function(a,b){try{a.A.duration=b}catch(c){}};
yga=function(a,b,c,d){c=new gx("fakesb"==c?new ow:a.A.addSourceBuffer(c),Mv(c),!1);var e=Mv(b);d&&(b=lx(b));b=new gx("fakesb"==b?new ow:a.A.addSourceBuffer(b),e,!0,d);a.o=c;a.u=b;g.C(a,c);g.C(a,b)};
mx=function(a){return!!a.o||!!a.u};
jx=function(a){try{return"open"==a.A.readyState}catch(b){return!1}};
nx=function(a){try{return"closed"==a.A.readyState}catch(b){return!0}};
ox=function(){return!(!window.MediaSource||!window.MediaSource.isTypeSupported)};
px=function(a){return a.o?!!a.o.supports(0):ox()};
qx=function(a,b,c,d){if(!a.o||!a.u)return null;var e=a.o.isView()?a.o.o:a.o,f=a.u.isView()?a.u.o:a.u,h=new ix(a.A,!0);h.nn=a.nn;e=new hx(e,b,c,d);b=new hx(f,b,c,d);h.o=e;h.u=b;g.C(h,e);g.C(h,b);jx(a)||a.o.Pr(a.o.Ib());return h};
rx=function(a,b,c){this.experiments=a;this.R=b;this.T=void 0===c?!1:c;this.C=!!g.Ja("cast.receiver.platform.canDisplayType");this.B={};this.G=!1;this.I=new Set;this.F=!0;this.u=!g.P(this.experiments,"html5_disable_protected_hdr");this.A=!1;this.N=g.P(this.experiments,"html5_disable_vp9_encrypted");a=g.P(this.experiments,"html5_vp9_bsf_when_needed");b=g.P(this.experiments,"html5_vp9_bsf_always");(a||b)&&Pw('video/mp4; codecs="vp09.00.51.08.01.01.01.01.00"')?b?a=!0:(b=Pw('video/webm; codecs="vp09.00.51.08.01.01.01.01.00"'),
a=a&&!b):a=!1;this.M=a;a=g.Ja("cast.receiver.platform.getValue");this.o=!this.C&&a&&a("max-video-resolution-vpx")||null};
zga=function(a,b){var c=uu(b);if("0"===c)return!0;var d=b.mimeType;if(g.P(a.experiments,"html5_disable_codec_on_platform_errors")){if(a.I.has(b.sb))return!1}else if("1"===b.sb&&a.G)return!1;var e;if(e=b.video&&(Kv(b.video)||"bt2020"===b.video.primaries)){a:if(sx(a,tx.EOTF))var f=!0;else{try{if(ux&&g.Ow&&3E3>window.screen.width*window.devicePixelRatio){f=!1;break a}}catch(m){}f=24<window.screen.pixelDepth&&window.matchMedia&&window.matchMedia("(color-gamut: p3)").matches}e=!f}if(e||"338"===c&&!(g.Ow?
Yn(53):g.vx&&Yn(64)))return!1;e={};b.video&&(b.video.width&&(e[tx.WIDTH.name]=b.video.width),b.video.height&&(e[tx.HEIGHT.name]=b.video.height),b.video.fps&&(e[tx.FRAMERATE.name]=b.video.fps),b.video.o&&(e[tx.EOTF.name]=b.video.o),b.o&&(e[tx.BITRATE.name]=8*b.o),"("===b.sb&&(e[tx.CRYPTOBLOCKFORMAT.name]="subsample"),2===b.video.projectionType||3===b.video.projectionType||4===b.video.projectionType)&&(e[tx.DECODETOTEXTURE.name]="true");b.audio&&b.audio.o&&(e[tx.CHANNELS.name]=b.audio.o);a.A&&Ov(b)&&
(e[tx.EXPERIMENTAL.name]="allowed");f=g.p(Object.keys(tx));for(var h=f.next();!h.done;h=f.next()){h=tx[h.value];var l;if(l=e[h.name])(l=h===tx.EOTF&&0<b.mimeType.indexOf("vp09.02"))||(l=b,l=g.P(a.experiments,"html5_ignore_h264_framerate_cap")&&h===tx.FRAMERATE&&("H"===l.sb||"h"===l.sb)),l=!(l||h===tx.DECODETOTEXTURE&&!g.P(a.experiments,"html5_decode_to_texture_cap"));if(l)if(sx(a,h))if(a.o){if(a.o[h.name]<e[h.name])return!1}else d=d+"; "+h.name+"="+e[h.name];else if(Pv(b)&&h===tx.EOTF)return!1}!g.P(a.experiments,
"disable_html5_cast_hdcp_filter2")&&a.C&&b.video&&1080<b.video.Qb&&b.Qc&&(d+="; hdcp=2.2");return"227"===c&&!g.P(a.experiments,"html5_enable_1080p_hq_cenc")||("585"===c||"588"===c||"583"===c||"586"===c||"584"===c||"587"===c||"591"===c||"592"===c)&&!g.P(a.experiments,"html5_enable_new_hvc_enc")?!1:a.isTypeSupported(d)};
wx=function(){var a=gl()&&!Yn(29),b=fl("google tv")&&fl("chrome")&&!Yn(30),c=jl();return a||b||c?!1:!!(window.MediaSource||window.WebKitMediaSource||window.HTMLMediaElement&&HTMLMediaElement.prototype.webkitSourceAddId)};
g.xx=function(a,b){b=void 0===b?!1:b;return wx()&&a.isTypeSupported('audio/mp4; codecs="mp4a.40.2"')||!b&&a.canPlayType(Mw(),"application/x-mpegURL")?!0:!1};
sx=function(a,b){b.name in a.B||(a.B[b.name]=Aga(a,b));return a.B[b.name]};
Aga=function(a,b){if(a.o)return!!a.o[b.name];if(b===tx.BITRATE&&g.P(a.experiments,"html5_ignore_bad_bitrates")&&a.isTypeSupported('video/webm; codecs="vp9"; width=3840; height=2160; bitrate=2000000')&&!a.isTypeSupported('video/webm; codecs="vp9"; width=3840; height=2160; bitrate=20000000'))return!1;if(b===tx.AV1_CODECS)return a.isTypeSupported("video/mp4; codecs="+b.valid)&&!a.isTypeSupported("video/mp4; codecs="+b.invalid);if(b.video){var c='video/webm; codecs="vp9"';a.isTypeSupported(c)||(c='video/mp4; codecs="avc1.4d401e"')}else c=
'audio/webm; codecs="opus"',a.isTypeSupported(c)||(c='audio/mp4; codecs="mp4a.40.2"');return a.isTypeSupported(c+"; "+b.name+"="+b.valid)&&!a.isTypeSupported(c+"; "+b.name+"="+b.invalid)};
Bga=function(a){return g.yx||sl()&&!a?!1:!0};
zx=function(a){this.lh=a};
Ax=function(a,b,c){if(c)return Fr();var d={};c=Mw();b=g.p(b);for(var e=b.next();!e.done;e=b.next())if(e=e.value,a.canPlayType(c,e.je().mimeType)){var f=e.lh.Ca().quality;if(!d[f]||d[f].je().Kc())d[f]=e}var h=[];d.auto&&h.push(d.auto);(0,g.y)(Lv,function(l){(l=d[l])&&h.push(l)});
return h.length?Gr(h):Fr()};
Bx=function(a,b,c,d){this.u=a||0;this.o=b||0;this.A=c;this.reason=d};
Cx=function(a,b){return a.u==b.u&&a.o==b.o&&a.A==b.A&&a.reason==b.reason};
Dx=function(a,b,c,d){return new Bx(g.Hv[a]||0,g.Hv[b]||0,c,d)};
Ex=function(a){var b=g.Hv.auto;return a.u==b&&a.o==b};
Gx=function(a,b){if(b.A&&Ex(b))return Fx;if(b.A||Ex(a))return b;if(a.A||Ex(b))return a;var c=a.u&&b.u?Math.max(a.u,b.u):a.u||b.u,d=a.o&&b.o?Math.min(a.o,b.o):a.o||b.o;c=Math.min(c,d);return c==a.u&&d==a.o?a:new Bx(c,d,!1,d==a.o?a.reason:b.reason)};
Hx=function(a){var b=a.o||a.u;return Mb(Cga,function(c){return g.Hv[c]==b})||"auto"};
Ix=function(a,b){var c=g.Hv[b];return a.u<=c&&(!a.o||a.o>=c)};
Jx=function(){g.N.call(this);this.o={}};
Dga=function(){this.o=0};
Ega=function(a,b){this.o=new Uint8Array(a.buffer,0,16);this.u=new Uint8Array(a.buffer,16);this.encryptedClientKey=b};
Kx=function(a){try{return g.kg(a)}catch(b){return null}};
Fga=function(a){try{var b=JSON.parse(a)}catch(e){}if(b){a=b.clientKey?Kx(b.clientKey):null;var c=b.encryptedClientKey?Kx(b.encryptedClientKey):null,d=b.keyExpiresInSeconds?1E3*Number(b.keyExpiresInSeconds)+(0,g.M)():null;a&&c&&d&&(this.o=new Ega(a,c));b.onesieUstreamerConfig&&(this.onesieUstreamerConfig=Kx(b.onesieUstreamerConfig));this.baseUrl=b.baseUrl}};
Gga=function(){var a=g.Xs("yt-player-volume")||{},b=a.volume;return{volume:isNaN(b)?100:g.Td(Math.floor(b),0,100),muted:!!a.muted}};
Lx=function(a){g.Ws("yt-player-bandwidth",a,2592E3)};
Mx=function(a){if(a=void 0===a?0:a)try{var b=JSON.parse(window.localStorage["yt-player-quality"]);if((0,g.M)()-b.creation>1E3*a)return"auto"}catch(c){}return g.Xs("yt-player-quality")||"auto"};
Nx=function(a,b){var c="";49<b?c="p60":32<b&&(c="p48");return a+c};
Ox=function(){return g.Xs("yt-player-performance-cap")||{}};
Px=function(a){g.Ws("yt-player-watch-later-pending",a)};
Qx=function(){return g.Xs("yt-player-headers-readable")||!1};
Rx=function(a){g.Ws("yt-player-playback-on-reload",a)};
Sx=function(){try{return+(window.localStorage&&window.localStorage["yt-player-av1-pref"])||0}catch(a){return 0}};
Tx=function(a){this.u=this.B=0;this.alpha=Math.exp(Math.log(.5)/a)};
Vx=function(a,b,c,d){c=void 0===c?.5:c;d=void 0===d?0:d;this.resolution=b;this.valueIndex=0;this.B=!1;this.F=!0;this.u=Math.round(a*this.resolution);this.values=Array(this.u);for(a=0;a<this.u;a++)this.values[a]=Infinity;this.I=Ux(this);this.C=c;this.G=d};
Ux=function(a){for(var b=Array(a.u),c=0;c<a.u;c++)b[c]=c;return b};
Wx=function(a,b){if(!a.B&&0===a.valueIndex)return 0;a.F&&(g.wb(a.I,function(c,d){return a.values[c]-a.values[d]}),a.F=!1);
return a.values[a.I[Math.round(b*((a.B?a.u:a.valueIndex)-1))]]||0};
Hga=function(a){var b=new Dga;this.policy=a;this.N=b;this.I=this.R=0;this.B=-1;this.F=this.G=Xx();this.C=new Vx(4,1,.6,.4);this.o=new Vx(10,1,.5,.4);this.u=a.u?new Tx(a.o):new Vx(a.o,20,.5,.4);this.M=new Vx(5,1,.25);this.A=new Vx(30,1,.5);a=g.Xs("yt-player-bandwidth")||{};this.u.A(this.policy.B,0<a.byterate?a.byterate:this.policy.A);0<a.delay&&this.C.A(1,Math.min(+a.delay,2));0<a.stall&&this.o.A(1,+a.stall);0<a.init&&(this.F=Math.min(a.init,this.F));this.B=Xx()};
Yx=function(a,b,c,d,e,f){f=void 0===f?!1:f;a.M.A(b,c/b);f||(a.G=Xx());e||a.A.A(1,b-d)};
Zx=function(a){a=a.C.o();a=isNaN(a)?.5:a;return a=Math.min(a,5)};
$x=function(a,b,c){isNaN(c)||(a.I+=c);isNaN(b)||(a.R+=b)};
ay=function(a){a=a.u.o();return 0<a?a:1};
by=function(a){var b=ay(a);b=1/((a.o.o()||0)+1/b);a=a.M.o();return Math.max(b,0<a?a:1)};
cy=function(a){return{delay:Zx(a),stall:a.o.o()||0,byterate:ay(a),init:a.F}};
dy=function(a){-1<a.B&&3E4<Xx()-a.B&&(Lx(cy(a)),a.B=Xx())};
ey=function(a){return 4E3<=Xx()-a.G};
Iga=function(){this.o=17;this.A=13E4;this.B=.5;this.u=!1};
Q=function(a,b){return void 0===b||null===b?a:"1"===b||!0===b||1===b||"True"===b?!0:!1};
fy=function(a,b,c){for(var d in c)if(c[d]==b)return c[d];return a};
gy=function(a,b){return void 0===b||null===b?a:Number(b)};
hy=function(a,b){return void 0===b||null===b?a:b.toString()};
iy=function(a,b){if(b){if("fullwidth"===a)return Infinity;if("fullheight"===a)return 0}if(a){var c=a.match(Jga);if(c){var d=Number(c[2]);c=Number(c[1]);if(!isNaN(d)&&!isNaN(c)&&0<d)return c/d}}return NaN};
jy=function(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||g.zo("parse_video_id_from_serialized_player_response_killswitch")||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null};
Iy=function(a,b){g.A.call(this);a=a?g.Rb(a):{};this.lc=this.Qa="";this.We=hy("",a.csp_nonce);this.experiments=new Gfa(b?b.serializedExperimentIds:a.fexp,b?b.serializedExperimentFlags:a.fflags);this.Cd=b?b.serializedForcedExperimentIds:a.forced_experiments||void 0;this.ha("web_player_deprecated_uvr_killswitch");try{var c=document.location.toString()}catch(m){c=""}this.Mc=c;this.Zd=(c=window.location.ancestorOrigins)?Array.from(c):[];this.u=Q(!1,a.is_embed);this.deviceParams={};b&&b.device?(c=b.device,
c.brand&&(this.deviceParams.cbrand=c.brand),c.browser&&(this.deviceParams.cbr=c.browser),c.browserVersion&&(this.deviceParams.cbrver=c.browserVersion),this.deviceParams.c=c.interfaceName||"WEB",this.deviceParams.cver=c.interfaceVersion||"html5",c.interfaceTheme&&(this.deviceParams.ctheme=c.interfaceTheme),this.deviceParams.cplayer=c.interfacePlayerType||"UNIPLAYER",c.model&&(this.deviceParams.cmodel=c.model),c.network&&(this.deviceParams.cnetwork=c.network),c.os&&(this.deviceParams.cos=c.os),c.osVersion&&
(this.deviceParams.cosver=c.osVersion),c.platform&&(this.deviceParams.cplatform=c.platform)):(this.deviceParams.c=a.c||"web",this.deviceParams.cver=a.cver||"html5",this.deviceParams.cplayer="UNIPLAYER");this.loaderUrl=this.u||"TVHTML5_SIMPLY_EMBEDDED_PLAYER"==this.deviceParams.c&&a.loaderUrl?hy("",a.loaderUrl):this.Mc;this.A=av(this.loaderUrl,Kga);c=this.loaderUrl;var d=void 0===d?!1:d;this.lp=$u(av(c,Lga),c,d,"Trusted Ad Domain URL");this.fa=Q(!1,a.privembed);this.protocol=0==this.Mc.indexOf("http:")?
"http":"https";this.I=cv((b?b.customBaseYoutubeUrl:a.BASE_YT_URL)||"")||cv(this.Mc)||this.protocol+"://www.youtube.com/";d=b?b.eventLabel:a.el;c="detailpage";"adunit"==d?c=this.u?"embedded":"detailpage":"embedded"==d||this.A?c=fy(c,d,Mga):d&&(c="embedded");this.ba=c;Ap();d=null;c=b?b.playerStyle:a.ps;var e=g.fb(ky,c);!c||e&&!this.A||(d=c);this.playerStyle=d;this.N=(this.C=g.fb(ky,this.playerStyle))&&"area120-boutique"!=this.playerStyle&&"play"!=this.playerStyle&&"jamboard"!=this.playerStyle;this.Qo=
!this.N;this.R=Q(!1,a.disableplaybackui);this.Va=(!this.R||!this.ha("web_player_disable_ui_speed_killswitch"))&&(Mw().defaultPlaybackRate?ly||g.my||ny?g.vx&&Yn("20")||g.Ow&&Yn("4")||g.Ch&&Yn("11")||ol():!(g.Ch&&!fl("chrome")||ly||fl("android")||fl("silk")):!1);this.o=Q("blazer"==this.playerStyle,a.is_html5_mobile_device||b&&b.isMobileDevice);this.o?d=!0:(d=parseInt((0,g.D)()/1E3,10),c=Rr.getInstance(),d=this.ha("block_desktop_background_playback_with_mobile_cookie")&&c&&d>parseInt(c.get("dhmu",d.toString()),
10));this.No=d;this.Da="3"==this.controlsType||this.o||Q(!1,a.use_media_volume);this.T=Sw();this.gq=g.oy;this.Xg=Q(!1,a.opt_out_deprecation);this.ga=Q(!1,a.pfp_chazal_ui);var f;b?void 0!=b.hideInfo&&(f=!b.hideInfo):f=a.showinfo;this.Ph=g.py(this)&&!this.Xg||Q(!qy(this)&&!ry(this)&&!this.C,f);this.Nh=b?!!b.mobileIphoneSupportsInlinePlayback:Q(!1,a.playsinline);f=this.o&&sy&&0<ty&&2.3>=ty;d=b?b.useNativeControls:a.use_native_controls;c=this.o;d=uy(this)||!f&&Q(c,d)?"3":"1";this.controlsType="0"!=(b?
b.controlsType:a.controls)?d:"0";this.tb=this.o;this.color=fy("red",a.color,Nga);this.Dp="3"==this.controlsType||Q(!1,a.modestbranding)&&"red"==this.color;this.ya=!this.u;this.fj=(d=!this.ya&&!ry(this)&&!this.N&&!this.C&&!qy(this))&&!this.Dp&&"1"==this.controlsType;this.Oa=g.vy(this)&&d&&"0"==this.controlsType&&!this.fj;this.er=this.Yp=f;this.im=wy&&!g.Rd(601)?!1:!0;this.Mo=this.u||!1;this.za=ry(this)?"":(this.loaderUrl||a.post_message_origin||"").substring(0,128);this.widgetReferrer=hy("",a.widget_referrer);
this.zd=(!this.A||Q(!0,a.enablecastapi))&&"1"==this.controlsType&&!this.o&&(ry(this)||g.vy(this)||g.yy(this))&&!g.zy(this)&&!Ay(this);this.dr=Rw()||Qw();f=b?!!b.supportsAutoplayOverride:Q(!1,a.autoplayoverride);this.Be=!this.o&&!fl("nintendo wiiu")&&!fl("nintendo 3ds")||f;f=this.ha("embeds_enable_muted_autoplay")&&g.py(this);this.Ce=(b?!!b.enableMutedAutoplay:Q(!1,a.mutedautoplay)||f)&&f&&this.T&&!uy(this);f=(ry(this)||qy(this))&&"blazer"==this.playerStyle;this.Xd=b?!!b.disableFullscreen:!Q(!0,a.fs);
this.ra=!this.Xd&&(f||Xr());this.Ho=this.ha("uniplayer_block_pip")&&(gl()&&Yn(58)&&!(g.my&&fl("version/"))||ql);f=g.py(this)&&!this.Xg;var h;b?void 0!=b.disableRelatedVideos&&(h=!b.disableRelatedVideos):h=a.rel;this.Ha=f||Q(!this.C,h);this.de=Q(!1,a.co_rel);this.F=g.my&&fl("version/")&&0<ty&&4.4>=ty?"_top":"_blank";this.kb=g.yy(this);this.ce="blazer"==this.playerStyle;switch(this.playerStyle){case "blogger":h="bl";break;case "gmail":h="gm";break;case "books":h="gb";break;case "docs":h="gd";break;
case "duo":h="gu";break;case "google-live":h="gl";break;case "google-one":h="go";break;case "play":h="gp";break;case "chat":h="hc";break;case "hangouts-meet":h="hm";break;case "photos-edu":case "picasaweb":h="pw";break;default:h="yt"}this.U=h;this.Bc=hy("",a.authuser);var l;b?void 0!=b.disableWatchLater&&(l=!b.disableWatchLater):l=a.showwatchlater;this.Zi=(this.u&&!this.fa||!!this.Bc)&&Q(!this.N,this.A?l:void 0);this.Lc=b?!!b.disableKeyboardControls:Q(!1,a.disablekb);this.loop=Q(!1,a.loop);this.pageId=
hy("",a.pageid);this.hq=Q(!0,a.canplaylive);this.yg=Q(!1,a.livemonitor);this.disableSharing=Q(this.C,b?b.disableSharing:a.ss);(l=a.video_container_override)?(h=l.split("x"),2!==h.length?l=null:(l=Number(h[0]),h=Number(h[1]),l=isNaN(l)||isNaN(h)||0>=l*h?null:new g.Zd(l,h))):l=null;this.jm=l;this.mute=b?!!b.startMuted:Q(!1,a.mute);this.ee=!this.mute&&Q("0"!=this.controlsType,a.store_user_volume);l=b?b.annotationsLoadPolicy:a.iv_load_policy;this.annotationsLoadPolicy="3"==this.controlsType?3:fy(void 0,
l,By);this.captionsLanguagePreference=b?b.captionsLanguagePreference||"":hy("",a.cc_lang_pref);l=fy(2,a.cc_load_policy,By);"3"==this.controlsType&&2==l&&(l=3);this.Uh=l;this.ae=b?b.hl||"en_US":hy("en_US",a.hl);this.region=b?b.contentRegion||"US":hy("US",a.cr);this.hostLanguage=b?b.hostLanguage||"en":hy("en",a.host_language);this.Go=!this.fa&&Math.random()<g.O(this.experiments,"web_player_api_logging_fraction");this.ea=!this.fa;this.Ug=new Set;this.deviceHasDisplay=Q(!0,a.deviceHasDisplay);this.si=
gy(this.si,a.ismb);l=a;g.Vu(this.experiments,"html5_qoe_intercept")?l=g.Vu(this.experiments,"html5_qoe_intercept"):this.Qo?(l=l.vss_host||"s.youtube.com",this.ha("www_for_videostats")&&"s.youtube.com"==l&&(l=Cy(this.I)||"www.youtube.com")):l="video.google.com";this.km=l;this.Od(a,!0);this.M=new Jx;g.C(this,this.M);this.G=this.o&&!this.ha("enable_svg_mode_on_embed_mobile");l=b?b.innertubeApiKey:hy("",a.innertube_api_key);h=b?b.innertubeApiVersion:hy("",a.innertube_api_version);f=b?b.innertubeContextClientVersion:
hy("",a.innertube_context_client_version);this.Z={innertubeApiKey:wo("INNERTUBE_API_KEY")||l,innertubeApiVersion:wo("INNERTUBE_API_VERSION")||h,eA:g.K("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),kl:this.deviceParams.c,innertubeContextClientVersion:wo("INNERTUBE_CONTEXT_CLIENT_VERSION")||f,an:this.hostLanguage,Zm:this.region,Zp:wo("INNERTUBE_HOST_OVERRIDE")||"",gA:!!g.K("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};this.Oh=void 0!=window.WebKitPlaybackTargetAvailabilityEvent;this.B=new rx(this.experiments,this.ha("html5_force_hfr_support")?
!0:Dy(this)||kl()||ll()||Ey(this),g.Ow&&g.Rd(56)||g.vx&&g.Rd(54)||Ey(this));l=this.si;h=this.experiments;f=new Iga;g.Fy(this)&&(f.u=!0,f.B=.1);g.P(h,"html5_ewma_bandwidth_estimator")&&(f.u=!0);g.P(h,"html5_pctile_bandwidth_estimator")&&(f.u=!1);l&&(f.A=l/8);f.o=g.O(h,"html5_bandwidth_window_size")||f.o;this.schedule=new Hga(f);this.enableSafetyMode=Q(!1,a.enable_safety_mode);this.Cb=Q(this.R?!1:ry(this)&&"blazer"!=this.playerStyle,a.allow_autonav);this.sendVisitorIdHeader=b?!!b.sendVisitorIdHeader:
Q(!1,a.send_visitor_id_header);this.gb=!1;this.be=Fx;this.Ba=(0,g.M)();this.ua=0;this.Ze=!1;this.Jo=Q(!1,"docs"==this.playerStyle?a.disable_native_context_menu:void 0);this.Lo=Dy(this)&&this.ha("enable_skip_intro_button");this.embedConfig=hy("",a.embed_config);this.Vg=!1;this.Yd=Q(!1,a.full_window);this.Ko=Q(!1,a.embedding_app);this.Ea=!g.Gy(this)&&!Hy(this)&&!g.zy(this)&&!Ay(this)&&!0;this.livingRoomAppMode=a.living_room_app_mode;this.transparentBackground=b?!!b.transparentBackground:Q(!1,a.transparent_background);
this.useFastSizingOnWatchDefault=Q(!0,b?b.useFastSizingOnWatchDefault:a.use_fast_sizing_on_watch_default);this.showMiniplayerButton=b?!!b.showMiniplayerButton:Q(!1,a.show_miniplayer_button);this.externalFullscreen=b?!!b.externalFullscreen:Q(!1,a.external_fullscreen);this.showMiniplayerUiWhenMinimized=b?!!b.showMiniplayerUiWhenMinimized:Q(!1,a.use_miniplayer_ui);this.showBackButton=Q(!1,a.showbackbutton);this.bb=!1;this.tp=1E-4>Math.random();this.Ae=a.onesie_hot_config?new Fga(a.onesie_hot_config):
void 0;this.isTectonic=!!a.isTectonic};
Jy=function(a,b){return!a.C&&gl()&&Yn(55)&&"3"==a.controlsType&&!b};
g.Ky=function(a){a=Cy(a.I);return"www.youtube-nocookie.com"==a?"www.youtube.com":a};
g.Ly=function(a){return g.zy(a)?"music.youtube.com":g.Ky(a)};
My=function(a,b,c){return a.protocol+"://i1.ytimg.com/vi/"+b+"/"+(c||"hqdefault.jpg")};
Ny=function(a){return ry(a)&&!g.Gy(a)};
uy=function(a){return wy&&!a.Nh||fl("nintendo wiiu")||fl("nintendo 3ds")?!0:!1};
Ay=function(a){return"area120-boutique"==a.playerStyle};
g.zy=function(a){return"music-embed"==a.playerStyle};
g.Fy=function(a){return/^TVHTML5/.test(a.deviceParams.c)?!0:"TV"==a.deviceParams.cplatform};
Ey=function(a){return"CHROMECAST ULTRA/STEAK"==a.deviceParams.cmodel||"CHROMECAST/STEAK"==a.deviceParams.cmodel};
g.Oy=function(){return 1<window.devicePixelRatio?window.devicePixelRatio:1};
Dy=function(a){return"web"==a.deviceParams.c.toLowerCase().substr(0,3)};
g.Py=function(a){return"WEB"==a.deviceParams.c.toUpperCase()};
Hy=function(a){return"WEB_KIDS"==a.deviceParams.c};
g.Gy=function(a){return"WEB_UNPLUGGED"==a.deviceParams.c};
Qy=function(a){return"TVHTML5_UNPLUGGED"==a.deviceParams.c};
g.Ry=function(a){return g.Gy(a)||"TV_UNPLUGGED_CAST"==a.deviceParams.c||Qy(a)};
Sy=function(a){return"WEB_REMIX"==a.deviceParams.c};
g.Ty=function(a){return"WEB_EMBEDDED_PLAYER"==a.deviceParams.c};
g.Wy=function(a){return(a.deviceHasDisplay&&g.Ow&&!ql&&"3"!==a.controlsType?g.my?a.u&&g.Rd(51):!0:!1)||(a.deviceHasDisplay&&g.vx&&!ql&&"3"!==a.controlsType?g.my?a.u&&g.Rd(48):g.Rd(38):!1)||(a.deviceHasDisplay&&g.Ch&&!ql&&"3"!==a.controlsType?g.my?a.u&&g.Rd(37):g.Rd(27):!1)||a.deviceHasDisplay&&g.Uy&&!pl()&&g.Rd(11)||a.deviceHasDisplay&&g.Vy&&g.Rd("604.4")};
Xy=function(a){if(g.vy(a)&&sy)return!1;if(g.vx){if(!g.Rd(47)||!g.Rd(52)&&g.Rd(51))return!1}else if(g.Vy)return!1;return window.AudioContext||window.webkitAudioContext?!0:!1};
ry=function(a){return"detailpage"==a.ba};
g.vy=function(a){return"embedded"==a.ba};
g.Yy=function(a){return"leanback"==a.ba};
qy=function(a){return"adunit"==a.ba||"gvn"==a.playerStyle};
g.yy=function(a){return"profilepage"==a.ba};
g.py=function(a){return a.u&&g.vy(a)&&!qy(a)&&!a.C};
Zy=function(a){if(!a.aa)return"";var b=a.aa.split("/");if(5==b.length)return a=b[b.length-1].split("="),a[1]="s20-c",b[b.length-1]=a.join("="),b.join("/");if(8==b.length)return b.splice(7,0,"s20-c"),b.join("/");if(9==b.length)return b[7]+="-s20-c",b.join("/");g.nr(new jr("Profile image not a FIFE URL.",a.aa));return a.aa};
g.$y=function(a){var b=g.Ly(a);!a.ha("yt_embeds_disable_new_error_lozenge_url")&&Oga.includes(b)&&(b="www.youtube.com");return a.protocol+"://"+b};
Cy=function(a){var b=g.ud(a);return(a=Number(g.td(4,a))||null)?b+":"+a:b};
az=function(a,b,c,d){this.videoId=a;this.status=b;this.isBackground=c;this.o=void 0===d?!1:d};
g.cz=function(a,b,c){this.start=a;this.end=b;this.active=!0;this.color="";this.B=Pga++;a=c||{};this.id=a.id||"";this.priority=a.priority||7;this.visible=a.visible||!1;this.style=a.style||bz.AD_MARKER;this.namespace=a.namespace||"";if(b=a.color)b=b.toString(16),this.color="#"+Array(7-b.length).join("0")+b;this.tooltip=a.tooltip;this.icons=a.icons?a.icons.filter(function(d){return(0,g.yi)(d.thumbnails,function(e){return g.ev(e.url)})}):null;
this.visible=this.visible;this.style=this.style;this.start=this.start};
dz=function(a){return-0x8000000000000===a?"BEFORE_MEDIA_START":0===a?"MEDIA_START":0x7ffffffffffff===a?"MEDIA_END":0x8000000000000===a?"AFTER_MEDIA_END":a.toString()};
Qga=function(a,b){switch(a.style){case bz.CHAPTER_MARKER:return b?8:5;case bz.AD_MARKER:return 6;case bz.TIME_MARKER:return Number.POSITIVE_INFINITY;default:return 0}};
g.ez=function(a,b){return a.start-b.start||a.priority-b.priority||a.B-b.B};
g.fz=function(a){return"crn_"+a};
Rga=function(){this.U=this.ba=this.u=this.B=this.A=this.F=this.G=this.R=this.N=!1;this.T=!0;this.C=0;this.aa=!1;this.Z=Infinity;this.M=!1;this.ea=!0;this.I=!1;this.o={}};
Sga=function(a){if(a.R)return["f"];var b="19 9h 9 h 8 (h ( H *".split(" ");a.aa&&b.unshift("1");a.u&&b.unshift("h");return b};
Tga=function(a){var b=["o","a","v","A","V"];a.F&&(b=["m","M"].concat(b));a.A&&(b=["mac3","MAC3"].concat(b));a.B&&(b=["meac3","MEAC3"].concat(b));a.N&&(b=["so","sa"].concat(b));a.ba&&b.unshift("a");a.G&&b.unshift("ah");return b};
gz=function(a,b){b=void 0===b?{}:b;if(sx(a.B,tx.AV1_CODECS)&&sx(a.B,tx.HEIGHT)&&sx(a.B,tx.BITRATE))return b.isCapabilityUsable=!0,8192;try{var c=Sx();if(c)return b.localPref=c}catch(e){}c=g.O(a.experiments,"html5_av1_thresh");var d=g.O(a.experiments,"html5_av1_thresh_lcc");d&&2>=navigator.hardwareConcurrency&&(c=d);(d=g.O(a.experiments,"html5_av1_thresh_hcc"))&&4<navigator.hardwareConcurrency&&(c=d);b.coreCount=navigator.hardwareConcurrency;(d=g.O(a.experiments,"html5_av1_thresh_arm"))&&hl()&&(b.isArm=
!0,c=d);if(d=+Ox()[Nx("1",30)]||0)b.perfCap30=d,c=Math.min(c,d);if(d=+Ox()[Nx("1",60)]||0)b.perfCap60=d,c=Math.min(c,d);return b.av1Threshold=c};
hz=function(a,b){this.id=a;this.Db=b;this.captionTracks=[];this.xp=this.Mt=this.o=null;this.xt="UNKNOWN"};
iz=function(a,b,c){this.videoInfos=a;this.u=b||null;this.audioTracks=[];this.A=c||null;if(this.u)for(a=new Set,b=g.p(this.u),c=b.next();!c.done;c=b.next())if(c=c.value,c.Db&&!a.has(c.Db.id)){var d=new hz(c.id,c.Db);a.add(c.Db.id);this.audioTracks.push(d)}};
jz=function(a,b,c,d){this.flavor=a;this.o=b;this.A=c;this.experiments=d;this.u={};this.Af=this.keySystemAccess=null;this.qp=this.rp=-1;this.uo=null;this.B="";this.C=!!d&&g.P(d,"edge_nonprefixed_eme");this.B=d?g.Vu(d,"html5_hdcp_probing_stream_url"):""};
lz=function(a){return a.C?!1:!a.keySystemAccess&&!!kz()&&"com.microsoft.playready"===a.o};
mz=function(a){return"com.microsoft.playready"===a.o};
nz=function(a){return g.yx&&"com.microsoft.playready"===a.o&&!!navigator.requestMediaKeySystemAccess};
oz=function(a){return!a.keySystemAccess&&!!kz()&&"com.apple.fps.1_0"===a.o};
pz=function(a){return"fairplay"===a.flavor};
kz=function(){var a=window,b=a.MSMediaKeys;nl()&&!b&&(b=a.WebKitMediaKeys);return b&&b.isTypeSupported?b:null};
qz=function(a){if(!navigator.requestMediaKeySystemAccess)return!1;if(g.Ow&&!g.il())return Yn("45");if(g.yx||g.ne)return g.P(a,"edge_nonprefixed_eme");if(g.vx)return Yn("47");if(g.Vy){var b=g.O(a,"html5_safari_desktop_eme_min_version");if(b)return Yn(b)}return!g.P(a,"html5_disable_nonprefixed_eme_for_other")};
Uga=function(a,b,c){var d=jl(),e=d?["com.youtube.fairplay"]:["com.widevine.alpha"];b&&(e.unshift("com.youtube.widevine.l3"),d&&c&&e.unshift("com.youtube.widevine.forcehdcp"));return d?e:a?[].concat(g.la(e),g.la(rz.playready)):[].concat(g.la(rz.playready),g.la(e))};
sz=function(a,b,c){var d={},e;for(e in c.o){var f=c.o[e],h=uu(f.info);""==f.info.sb||("304"==h||"266"==h)&&a.T||a.U&&"h"==f.info.sb&&f.info.video&&1080<f.info.video.Qb||!zga(b,f.info)||"(h"==f.info.sb&&!b.u||(h="MAC3"==f.info.sb||"MEAC3"==f.info.sb||"M"==f.info.sb,c.isLive&&h&&!a.I||(d[f.info.sb]=d[f.info.sb]||[],d[f.info.sb].push(f.info)))}c=g.p(Object.keys(d));for(e=c.next();!e.done;e=c.next())e=e.value,d[e]&&d[e][0].isVideo()&&(d[e]=Vga(a,d[e]),d[e]=Wga(b,d[e]));return g.Bb(d,function(l){return!!l.length})};
Xga=function(a,b,c){var d={};g.Ab(b,function(e,f){var h=e.filter(function(l){var m;if(m=l.Qc&&c&&l.Qc[c.flavor]&&c.u[l.mimeType])(l="("!=l.sb&&"(h"!=l.sb)||(l=(sx(a,tx.CRYPTOBLOCKFORMAT)||a.T)&&!a.N),m=l;return m?!0:!1});
h.length&&(d[f]=h)});
return d};
Zga=function(a,b,c,d,e){function f(u){return!!h[u]}
e=void 0===e?!1:e;var h=sz(a,b,c),l=h["9h"]?"9h":"9";if(0<a.C&&h[l]&&h["1"]){if(e){e=h["1"];var m=h[l]}else{var n=Math.min(a.C,tz(h["1"])),q=tz(h[l]),r=function(u){return u<=n||u>q};
e=h["1"].filter(function(u){return r(u.Ca().Qb)});
e.length&&(a.o.highestAv1Resolution=e[e.length-1].Ca().Qb);m=h[l].filter(function(u){return!r(u.Ca().Qb)});
m.length&&(a.o.higestVp9Resolution=m[m.length-1].Ca().Qb)}e=m.concat(e);e.length&&(h["19"]=e)}uw(c)&&(h=Xga(b,h,d));b=Sga(a);d=Tga(a);b=g.cb(b,f);d=g.cb(d,f);if(!b||!d)return Fr();a.ea&&"1"==b&&h[l]&&(e=tz(h["1"]),tz(h[l])>e&&(b=l));"9"==b&&h.h&&(l=tz(h["9"]),tz(h.h)>1.5*l&&(b="h"),c.Bg&&!Bga(a.M)&&(b="h"));a=h[b];c=h[d];if(!a.length)return Fr();uz(a,c);return Gr(new iz(a,c,Yga(h,b,d)))};
Yga=function(a,b,c){var d=a.h;"f"==b&&(d=a[b]);var e=a.a;b=a[b]!=d;a=a[c]!=e;return d&&e&&(b||a)?(uz(d,e),new iz(d,e)):null};
uz=function(a,b){g.wb(a,function(c,d){return d.Ca().height*d.Ca().width-c.Ca().height*c.Ca().width||d.o-c.o});
g.wb(b,function(c,d){return d.o-c.o})};
Wga=function(a,b){var c=(0,g.zi)(b,function(d,e){return 32<e.Ca().fps?Math.min(d,e.Ca().width):d},Infinity);
Infinity>c&&(b=a.F&&(a.R||sx(a,tx.FRAMERATE))?(0,g.Ae)(b,function(d){return 32<d.Ca().fps||d.Ca().width<c}):(0,g.Ae)(b,function(d){return!(32<d.Ca().fps)}));
kl()&&(b=(0,g.Ae)(b,function(d){return"299"!=uu(d)}));
return b};
Vga=function(a,b){return b=(0,g.Ae)(b,function(c){return c.Ca().Qb<=a.Z})};
tz=function(a){return(0,g.zi)(a,function(b,c){return Math.max(b,c.Ca().Qb)},0)};
vz=function(a,b,c,d){g.A.call(this);this.o=[];this.u={};this.B={};this.F=null;this.C=b;this.G=!1;this.A=[];this.I=d;$ga(this,a,!c)};
$ga=function(a,b,c){for(var d in b)for(var e=g.p(b[d]),f=e.next();!f.done;f=e.next())if(f=f.value,f.Qc)for(var h in f.Qc){var l=h;if(rz[l])for(var m=g.p(rz[l]),n=m.next();!n.done;n=m.next())n=n.value,a.u[n]=a.u[n]||new jz(l,n,f.Qc[l],a.C),a.B[l]=a.B[l]||{},a.B[l][f.mimeType]=!0}jl()&&(a.u["com.youtube.fairplay"]=new jz("fairplay","com.youtube.fairplay","",a.C),a.B.fairplay={"audio/mp4":!0,"video/mp4":!0});a.o=Uga(c,a.I,g.Vu(a.C,"html5_hdcp_probing_stream_url")).filter(function(q){return!!a.u[q]})};
wz=function(a){if(!a.ia())if(0==a.o.length)a.F(a.A);else{var b=a.o[0],c=a.u[b],d={initDataTypes:["cenc","webm"],audioCapabilities:[],videoCapabilities:[]};mz(c)&&(d.initDataTypes=["keyids","cenc"]);for(var e in a.B[c.flavor]){var f=0==e.indexOf("audio/"),h=f?d.audioCapabilities:d.videoCapabilities;"widevine"!=c.flavor||a.G?h.push({contentType:e}):f?h.push({contentType:e,robustness:"SW_SECURE_CRYPTO"}):(h.push({contentType:e,robustness:"HW_SECURE_ALL"}),h.push({contentType:e,robustness:"SW_SECURE_DECODE"}))}navigator.requestMediaKeySystemAccess(b,
[d]).then(Ho((0,g.x)(a.N,a,c)),Ho((0,g.x)(a.M,a)))}};
aha=function(a,b){function c(f){b.u[f.contentType]=!0}
if(mz(b)){var d=Mw(),e;for(e in a.B[b.flavor])b.u[e]=!!d.canPlayType(e)}else d=b.keySystemAccess.getConfiguration(),d.audioCapabilities&&d.audioCapabilities.forEach(c),d.videoCapabilities&&d.videoCapabilities.forEach(c)};
cha=function(a){if(kz()&&g.Vy)a.A.push(new jz("fairplay","com.apple.fps.1_0","",a.C));else{var b=bha(),c=g.cb(a.o,function(d){var e=a.u[d],f=!1,h=!1,l;for(l in a.B[e.flavor])b(l,d)&&(e.u[l]=!0,f=f||0==l.indexOf("audio/"),h=h||0==l.indexOf("video/"));return f&&h});
c&&a.A.push(a.u[c]);a.o=[]}a.F(a.A)};
bha=function(){var a=kz();if(a){var b=a.isTypeSupported;return function(c,d){return b(d,c)}}return(a=Mw())&&(a.addKey||a.webkitAddKey)?(0,g.x)(a.canPlayType,a):function(){return!1}};
dha=function(a,b,c){this.A=a;this.u=b;this.cpn=c;this.B=0;this.o=""};
xz=function(a,b,c){a.cpn&&(b=g.Ed(b,{cpn:a.cpn}));c&&(b=g.Ed(b,{oU:c}));return b};
yz=function(a,b){var c=a.itag.toString();null!==b&&(c+=b.itag.toString());return c};
eha=function(a,b,c){var d="#EXT-X-MEDIA:TYPE=AUDIO,",e="YES",f="audio";if(b.Db){f=b.Db;var h=f.getId().split(".")[0];h&&(d+='LANGUAGE="'+h+'",');a.o||f.getIsDefault()||(e="NO");f=f.getName()}h="";null!==c&&(h=c.itag.toString());a=xz(a,b.url,h);return d=d+('NAME="'+f+'",DEFAULT='+(e+',AUTOSELECT=YES,GROUP-ID="'))+(yz(b,c)+'",URI="'+(a+'"'))};
fha=function(a){for(var b=[],c=[],d=g.p(a.u),e=d.next();!e.done;e=d.next())e=e.value,e.bitrate<=a.B?b.push(e):c.push(e);b.sort(function(f,h){return h.bitrate-f.bitrate});
c.sort(function(f,h){return f.bitrate-h.bitrate});
a.u=b.concat(c)};
gha=function(a,b,c,d,e,f,h,l,m,n){this.itag=a;this.url=b;this.codecs=c;this.width=d;this.height=e;this.fps=f;this.bitrate=h;this.Db=void 0===n?null:n;this.audioItag=l||null;this.Qc=m||""};
zz=function(a){var b={};a=g.p(a);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=c.type.match(/codecs="([^"]*)"/);d=d?d[1]:"";var e=null;c.audio_track_id&&(e=new rw(c.name,c.audio_track_id,!!c.is_default));c=new gha(c.itag,c.url,d,+c.width,+c.height,+c.fps,+c.bitrate,c.audio_itag,c.drm_families,e);b[c.itag]=b[c.itag]||[];b[c.itag].push(c)}return b};
Az=function(a,b,c){this.lh=a;this.u=b;this.o=null;this.A=c};
iha=function(a,b,c,d,e){if(!(ql||nl()||jl()))return Fr();var f=hha(c),h=zz(c);if(!h)return Fr();c={};var l=(c.fairplay="https://youtube.com/api/drm/fps?ek=uninitialized",c),m;c=[];var n=[],q=[],r=g.O(a.experiments,"html5_hls_min_video_height"),u;for(u in h)if(!g.P(a.experiments,"html5_disable_drm_hfr_1080")||"383"!=u&&"373"!=u){var w=g.p(h[u]);for(m=w.next();!m.done;m=w.next()){var z=m.value;if(z.width){if(!(z.height<r)){var B=h[z.audioItag];if(B&&(c.push(z),m="fairplay"==z.Qc?l:null,q.push(Bz(B,
[z],e,z.itag,z.width,z.height,z.fps,f,void 0,void 0,m)),!E||z.width*z.height*z.fps>E.width*E.height*E.fps))var E=z}}else n.push(z)}}m=q.reduce(function(F,G){return G.lh.en()&&F},!0)?l:null;
d=Math.max(d,g.O(a.experiments,"html5_hls_initial_bitrate"));E=E||{};q.push(Bz(n,c,e,"93",void 0===E.width?0:E.width,void 0===E.height?0:E.height,void 0===E.fps?0:E.fps,f,"auto",d,m));return Ax(a.B,q,Jy(a,b))};
Bz=function(a,b,c,d,e,f,h,l,m,n,q){d=new Nv(d,"application/x-mpegURL",new Fv,new Iv(e,f,h,null,void 0,m),void 0,q);a=new dha(a,b,c);a.B=n?n:1369843;return new Az(d,a,l)};
hha=function(a){a=g.p(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.url&&(b=b.url.split("expire/"),!(1>=b.length)))return+b[1].split("/")[0];return NaN};
Dz=function(){return Aa(function(a){Cz||(Cz=new Promise(function(b,c){var d=indexedDB.open("yt-player-local-media",3);d.onerror=function(e){"VersionError"==e.target.error.name?(e=indexedDB.open("yt-player-local-media"),e.onsuccess=function(f){return void b(f.target.result)},e.onerror=c):c()};
d.onsuccess=function(e){var f=e.target.result;f.onversionchange=function(){f.close();Cz=null};
b(f)};
d.onupgradeneeded=function(e){var f=e.target.result;2>e.oldVersion&&(f.createObjectStore("index"),f.createObjectStore("media"));3>e.oldVersion&&f.createObjectStore("metadata")}}));
return a["return"](Cz)})};
Ez=function(a,b){var c,d;return Aa(function(e){c=IDBKeyRange.bound(b+"|",b+"~");d=a.objectStore("index").getAll(c);return e["return"](new Promise(function(f,h){d.onsuccess=function(l){return void f(l.target.result.join(","))};
d.onerror=h}))})};
jha=function(){var a;return Aa(function(b){if(1==b.o)return Cz?g.ra(b,Cz,3):b.Gc(2);2!=b.o&&(a=b.u,a.close(),Cz=null);return b["return"](new Promise(function(c,d){var e=indexedDB.deleteDatabase("yt-player-local-media");e.onsuccess=function(){return void c()};
e.onerror=function(){return void d()}}))})};
Fz=function(a,b){var c,d,e,f;return Aa(function(h){if(1==h.o)return g.ra(h,Dz(),2);c=h.u;d=["index","media"];b&&d.push("metadata");e=c.transaction(d,"readwrite");f=IDBKeyRange.bound(a+"|",a+"~");e.objectStore("index")["delete"](f);e.objectStore("media")["delete"](f);b&&e.objectStore("metadata")["delete"](a);return h["return"](new Promise(function(l,m){e.oncomplete=function(){return void l()};
e.onabort=m}))})};
Hz=function(a){if(!Gz||(void 0===a?0:a)){a=window.localStorage["yt-player-lv"];try{Gz=JSON.parse(a||"{}")}catch(b){Gz={}}}return Gz};
Iz=function(){var a=JSON.stringify(Gz);window.localStorage["yt-player-lv"]=a};
Jz=function(a){return Hz()[a]||0};
kha=function(){var a=Hz();return Object.keys(a)};
Kz=function(a){var b=Hz();return Object.keys(b).filter(function(c){return b[c]===a})};
Lz=function(a,b){var c=Hz(!0);b!==c[a]&&(0!==b?c[a]=b:delete c[a],Iz())};
nha=function(){var a,b,c,d;return Aa(function(e){switch(e.o){case 1:return g.ra(e,Dz(),2);case 2:return a=e.u,b=a.transaction(["index","media"],"readwrite"),g.ra(e,lha(b),3);case 3:c=e.u;d=Hz(!0);var f=Object.assign({},d),h=Object.assign({},c),l;for(l in f)h[l]?(4!==f[l]&&(f[l]=h[l]),delete h[l]):3!==f[l]&&2!==f[l]&&(f[l]=4);Object.assign(f,h);Gz=f;Iz();JSON.stringify(Gz);return g.ra(e,mha(b),4);case 4:return e["return"](Gz)}})};
lha=function(a){var b;return Aa(function(c){b=a.objectStore("index").openCursor();return c["return"](new Promise(function(d,e){var f={};b.onsuccess=function(h){if(h=h.target.result){var l=h.key.match(/^([\w\-_]+)\|(a|v)$/);if(l){var m=l[1];l=l[2];f[m]=f[m]||{};f[m][l]=Mz(h.value)}else a.objectStore("index")["delete"](h.key);h["continue"]()}else{h={};for(m in f)l=f[m].v,h[m]=f[m].a&&l?1:2;d(h)}};
b.onerror=e}))})};
mha=function(a){var b=Gz,c;return Aa(function(d){c=a.objectStore("media").openKeyCursor();return d["return"](new Promise(function(e,f){c.onsuccess=function(h){h=h.target.result;if(!h)return e();var l=h.key.match(/^([\w\-_]+)\|(\d+)\|(\d+)$/);l&&b[l[1]]||a.objectStore("media")["delete"](h.key);h["continue"]()};
c.onerror=f}))})};
oha=function(a,b){var c,d;Aa(function(e){if(1==e.o)return g.ra(e,Dz(),2);c=e.u;d=c.transaction(["metadata"],"readwrite");d.objectStore("metadata").put(b,a);return e["return"](new Promise(function(f,h){d.oncomplete=function(){return void f()};
d.onabort=h}))})};
Oz=function(a,b,c,d,e){var f,h,l,m,n,q,r,u;return Aa(function(w){if(1==w.o)return f=Jz(a),4===f?w["return"](Promise.resolve(4)):g.ra(w,Dz(),2);h=w.u;void 0!==d&&void 0!==e?(l=h.transaction(["index","media"],"readwrite"),m=""+a+"|"+b.id+"|"+d,l.objectStore("media").put(e,m)):l=h.transaction(["index"],"readwrite");n=Nz(a,b.isVideo());q=Nz(a,!b.isVideo());l.objectStore("index").put(c,n);u=(r=Mz(c))?l.objectStore("index").get(q):null;return w["return"](new Promise(function(z,B){l.oncomplete=function(){var E=
Jz(a);4!==E&&r&&u&&Mz(u.result)&&(E=1,Lz(a,E));z(E)};
l.onabort=function(E){var F=Jz(a);4===F?z(F):(Lz(a,4),B(E))}}))})};
Pz=function(a){return!!a&&1===Jz(a)};
pha=function(a){var b,c;return Aa(function(d){if(1==d.o)return g.ra(d,Dz(),2);b=d.u;c=b.transaction("index");return d["return"](Ez(c,a))})};
qha=function(a,b,c){var d,e,f,h;return Aa(function(l){if(1==l.o)return g.ra(l,Dz(),2);d=l.u;e=d.transaction("media");f=""+a+"|"+b+"|"+c;h=e.objectStore("media").get(f);return l["return"](new Promise(function(m,n){e.oncomplete=function(){return void m(h.result)};
e.onabort=n}))})};
rha=function(a){var b,c;return Aa(function(d){if(1==d.o)return g.ra(d,Dz(),2);b=d.u;c=b.transaction(["index","metadata"]);return d["return"](Qz(c,a))})};
sha=function(){var a,b;return Aa(function(c){if(1==c.o)return g.ra(c,Dz(),2);a=c.u;b=a.transaction(["index","metadata"]);return c["return"](Promise.all(kha().map(function(d){return Qz(b,d)})))})};
Qz=function(a,b){var c,d,e,f,h,l,m,n;return Aa(function(q){if(1==q.o)return c=tha(a.objectStore("metadata").get(b)),g.ra(q,Ez(a,b),2);if(3!=q.o){d=q.u;e={videoId:b,totalSize:0,downloadedSize:0,status:Jz(b),details:null};if(!d.length)return q["return"](e);f=aq(d);h=g.p(f);for(l=h.next();!l.done;l=h.next())m=l.value,e.totalSize+=parseInt(m.mket,10)*parseInt(m.avbr,10),e.downloadedSize+=m.hasOwnProperty("dlt")?(parseInt(m.dlt,10)||0)*parseInt(m.avbr,10):parseInt(m.mket,10)*parseInt(m.avbr,10);n=e;return g.ra(q,
c,3)}n.details=q.u||null;return q["return"](e)})};
Rz=function(a){return Aa(function(b){Lz(a,0);return b["return"](Fz(a,!0))})};
uha=function(){return Aa(function(a){delete window.localStorage["yt-player-lv"];Gz=null;return a["return"](jha())})};
Mz=function(a){return!!a&&-1==a.indexOf("dlt")};
Nz=function(a,b){return""+a+"|"+(b?"v":"a")};
tha=function(a){return new Promise(function(b,c){a.onsuccess=function(){return void b(a.result)};
a.onerror=c})};
Sz=function(a,b){this.lh=a;this.o=b};
Tz=function(a,b){this.lh=a;this.o=b};
vha=function(a){var b=[];(0,g.y)(a,function(c){if(c.url){var d=Tv(c.type,"medium","0");b.push(new Tz(d,c.url))}});
return b};
g.Uz=function(a){a=void 0===a?{}:a;this.languageCode=a.languageCode||"";this.languageName=a.languageName||null;this.kind=a.kind||"";this.name=a.name||null;this.id=a.id||null;this.o=a.is_servable||!1;this.isTranslateable=a.is_translateable||!1;this.url=a.url||null;this.vssId=a.vss_id||"";this.isDefault=a.is_default||!1;this.translationLanguage=a.translationLanguage||null};
g.Vz=function(a){var b=a.languageName||"",c=[b];"asr"===a.kind&&-1===b.indexOf("(")&&c.push(" (Automatic Captions)");a.name&&c.push(" - "+a.name);a.translationLanguage&&c.push(" >> "+a.translationLanguage.languageName);return c.join("")};
wha=function(a){return navigator.mediaCapabilities?Wz(a.videoInfos).then(function(){return a},function(){return a}):Gr(a)};
Wz=function(a){var b=navigator.mediaCapabilities;if(!b)return Gr(a);var c=a.map(function(d){return b&&b.decodingInfo({type:"media-source",video:d.video?{contentType:d.mimeType,width:d.video.width||640,height:d.video.height||360,bitrate:8*d.o||1E6,framerate:d.video.fps||30}:null})});
return gba(c).then(function(d){for(var e=0;e<d.length;e++)a[e].A=d[e].smooth;return a},function(){return a})};
Yz=function(a){for(var b={},c=g.p(Object.keys(Xz)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[Xz[d]];e&&(b[d]=e)}return b};
Zz=function(a,b){for(var c={},d=g.p(Object.keys(Xz)),e=d.next();!e.done;e=d.next()){e=e.value;var f=b?b+e:e;f=a[f+"_webp"]||a[f];g.ev(f)&&(c[Xz[e]]=f)}return c};
bA=function(a){var b={};if(!a||!a.thumbnails)return b;a=a.thumbnails.filter(function(l){return!!l.url});
a.sort(function(l,m){return l.width-m.width||l.height-m.height});
for(var c=g.p(Object.keys($z)),d=c.next();!d.done;d=c.next()){var e=Number(d.value);d=$z[e];for(var f=g.p(a),h=f.next();!h.done;h=f.next())if(h=h.value,h.width>=e){e=aA(h.url);g.ev(e)&&(b[d]=e);break}}(a=a.pop())&&1280<=a.width&&(a=aA(a.url),g.ev(a)&&(b["maxresdefault.jpg"]=a));return b};
aA=function(a){return a.startsWith("//")?"https:"+a:a};
g.R=function(a){if(a.simpleText)return a.simpleText;if(a.runs){var b=[];a=g.p(a.runs);for(var c=a.next();!c.done;c=a.next())c=c.value,c.text&&b.push(c.text);return b.join("")}return""};
g.cA=function(a){if(a.simpleText)return a=document.createTextNode(a.simpleText),a;var b=[];if(a.runs)for(var c=0;c<a.runs.length;c++){var d=a.runs[c];d.text&&b.push(xha(d))}return 1==b.length?b[0]:g.te("SPAN",null,b)};
xha=function(a){var b=null,c=a.text;a.bold&&(b=g.te("B",null,b||c));a.italics&&(b=g.te("I",null,b||c));a.strikethrough&&(b=g.te("STRIKE",null,b||c));a.navigationEndpoint&&a.navigationEndpoint.urlEndpoint&&(a=a.navigationEndpoint.urlEndpoint,b=g.te("A",null,b||c),g.dd(b,a.url),"TARGET_NEW_WINDOW"==a.target&&(b.target="_blank"));return b||g.te("SPAN",null,c)};
dA=function(a){return a&&a.baseUrl||""};
eA=function(a){a=g.bq(a);for(var b in a){var c=a[b];a[b]=Array.isArray(c)?c[0]:c}return a};
zha=function(a,b){for(var c=g.p(b),d=c.next();!d.done;d=c.next())if(d=d.value.playerAnnotationsUrlsRenderer){d.adsOnly&&(a.Oo=!0);d.allowInPlaceSwitch&&(a.kt=!0);if(c=d.loadPolicy)a.annotationsLoadPolicy=yha[c];if(c=d.invideoUrl)a.Xe=iv(c);a.fq=!0;break}};
fA=function(a,b){a.botguardData=b.playerAttestationRenderer.botguardData;var c=b.playerAttestationRenderer.challenge;null!=c&&(a.tf=c)};
Aha=function(a,b){a.captionTracks=[];if(b.captionTracks)for(var c=g.p(b.captionTracks),d=c.next();!d.done;d=c.next()){d=d.value;var e=gA(d.baseUrl);if(!e)return;d=new g.Uz({is_translateable:!!d.isTranslatable,languageCode:d.languageCode,languageName:d.name&&g.R(d.name),url:e,vss_id:d.vssId,kind:d.kind});a.captionTracks.push(d)}a.vt=b.audioTracks||[];a.ry=b.defaultAudioTrackIndex||0;a.sy=b.translationLanguages?(0,g.Ic)(b.translationLanguages,function(f){return{languageCode:f.languageCode,languageName:g.R(f.languageName)}}):
[];
a.Zo=!!b.contribute&&!!b.contribute.captionsMetadataRenderer};
Bha=function(a,b,c){var d=b.errorScreen;if(!(d&&(d.playerLegacyDesktopYpcOfferRenderer||d.playerLegacyDesktopYpcTrailerRenderer||d.ypcTrailerRenderer)||c&&c.isUpcoming||["OK","LIVE_STREAM_OFFLINE","FULLSCREEN_ONLY"].includes(b.status))){a.errorCode="150";if(c=d&&d.playerErrorMessageRenderer){if(d=c.reason)a.errorReason=g.R(d);if(c=c.subreason)a.ai=g.R(c),a.yp=c}else a.errorReason=b.reason||null;c=b.status;"LOGIN_REQUIRED"==c?a.errorDetail="1":"CONTENT_CHECK_REQUIRED"==c?a.errorDetail="2":"AGE_CHECK_REQUIRED"==
c?(b=(b=b.errorScreen)&&b.playerKavRenderer,a.errorDetail=b&&b.kavUrl?"4":"3"):a.errorDetail=b.isBlockedInRestrictedMode?"5":"0"}};
Cha=function(a,b){var c=b.heartbeatToken;c&&(a.drmSessionId=b.drmSessionId||"",a.heartbeatToken=c,a.Wz=parseInt(b.intervalMilliseconds,10),a.Xz=parseInt(b.maxRetries,10),a.Yz=!!b.softFailOnError,a.fA=!!b.useInnertubeHeartbeatsForDrm,a.yo=!0)};
Dha=function(a,b){for(var c=g.p(b),d=c.next();!d.done;d=c.next()){d=d.value;var e=d.interstitials.map(function(l){var m=l.unserializedPlayerResponse;if(m&&!a.ha("web_player_unserialized_interstitial_killswitch"))return{is_yto_interstitial:!0,raw_player_response:m};if(l=l.playerVars)return Object.assign({is_yto_interstitial:!0},$p(l))});
e=g.p(e);for(var f=e.next();!f.done;f=e.next())switch(f=f.value,d.podConfig.playbackPlacement){case "INTERSTITIAL_PLAYBACK_PLACEMENT_PRE":a.interstitials=a.interstitials.concat({time:0,playerVars:f,ys:5});break;case "INTERSTITIAL_PLAYBACK_PLACEMENT_POST":a.interstitials=a.interstitials.concat({time:0x7ffffffffffff,playerVars:f,ys:6});break;case "INTERSTITIAL_PLAYBACK_PLACEMENT_INSERT_AT_VIDEO_TIME":var h=parseInt(d.podConfig.timeToInsertAtMillis,10);a.interstitials=a.interstitials.concat({time:h,
playerVars:f,ys:0==h?5:7})}}};
Eha=function(a,b){var c=b.find(function(d){return!(!d||!d.tooltipRenderer)});
c&&(a.tooltipRenderer=c.tooltipRenderer)};
hA=function(a,b){b.subscribeCommand&&(a.subscribeCommand=b.subscribeCommand);b.unsubscribeCommand&&(a.unsubscribeCommand=b.unsubscribeCommand);b.addToWatchLaterCommand&&(a.addToWatchLaterCommand=b.addToWatchLaterCommand);b.removeFromWatchLaterCommand&&(a.removeFromWatchLaterCommand=b.removeFromWatchLaterCommand);b.getSharePanelCommand&&(a.getSharePanelCommand=b.getSharePanelCommand)};
Fha=function(a,b){var c=b.playerLegacyMulticameraRenderer;c&&(c=c.metadataList)&&(a.EB=c,a.hj=aq(c))};
Gha=function(a,b){var c=b.playerControlsOverlayRenderer;if(c){var d=c.controlBgHtml;null!=d?(a.yf=d,a.fc=!0):(a.yf="",a.fc=!1);c.mutedAutoplay?(c=c.mutedAutoplay.playerMutedAutoplayOverlayRenderer)&&c.endScreen&&(c=c.endScreen.playerMutedAutoplayEndScreenRenderer)&&c.text&&(a.GB=g.R(c.text)):a.mutedAutoplay=!1}};
Hha=function(a,b){var c=b.backgroundability;c&&c.backgroundabilityRenderer.backgroundable&&(a.backgroundable=!0);if(c=b.contextParams)a.contextParams=c;(c=b.pictureInPicture)&&c.pictureInPictureRenderer.playableInPip&&(a.pipable=!0);b.playableInEmbed&&(a.allowEmbed=!0);var d=b.ypcClickwrap;d&&(c=d.playerLegacyDesktopYpcClickwrapRenderer,d=d.ypcRentalActivationRenderer,c?(a.wo=c.durationMessage||"",a.dm=!0):d&&(c=d.durationMessage,a.wo=c?g.R(c):"",a.dm=!0))};
Iha=function(a,b,c){var d=dA(b.googleRemarketingUrl);d&&(a.googleRemarketingUrl=d);if(d=dA(b.youtubeRemarketingUrl))a.youtubeRemarketingUrl=d;if(d=dA(b.ptrackingUrl)){d=eA(d);var e=d.oid;e&&(a.OC=e);if(e=d.pltype)a.PC=e;if(e=d.ptchn)a.NC=e;if(d=d.ptk)a.xr=encodeURIComponent(d)}if(d=dA(b.ppvRemarketingUrl))a.ppvRemarketingUrl=d;if(d=dA(b.qoeUrl)){d=g.bq(d);for(var f in d)e=d[f],d[f]=Array.isArray(e)?e.join(","):e;if(f=d.cat)a.Pn=f;if(f=d.live)a.Wu=f}if(f=dA(b.remarketingUrl)){a.remarketingUrl=f;d=
eA(f);d.foc_id&&(a.dd.focEnabled=!0);if(d=d.data)a.dd.rmktEnabled=!0,d.engaged&&(a.dd.engaged="1");d=a.dd;e=f.match(sd);d.baseUrl=qd(e[1],null,e[3],e[4])+rd(g.td(5,f))}if(f=dA(b.videostatsPlaybackUrl)){f=eA(f);if(d=f.adformat)c.adformat=d;if(c=f.autoplay)a.Pi="1"==c;if(c=f.autonav)a.Jj="1"==c;if(c=f.delay)a.xf=g.nd(c);if(c=f.ei)a.eventId=c;"adunit"==f.el&&(a.Pi=!0);if(c=f.feature)a.Rn=c;if(c=f.list)a.playlistId=c;if(c=f.of)a.Nv=c;if(c=f.osid)a.osid=c;if(c=f.referrer)a.referrer=c;if(c=f.sdetail)a.Fr=
c;if(c=f.sourceid)a.sU=c;if(c=f.ssrt)a.bo="1"==c;if(c=f.subscribed)a.subscribed="1"==c,a.dd.subscribed=c;if(c=f.uga)a.userGenderAge=c;if(c=f.upt)a.ls=c;if(c=f.vm)a.videoMetadata=c}b.promotedPlaybackTracking&&(b=b.promotedPlaybackTracking,b.startUrls&&(a.Ar=b.startUrls[0],a.Br=b.startUrls),b.firstQuartileUrls&&(a.Wv=b.firstQuartileUrls[0],a.Xv=b.firstQuartileUrls),b.secondQuartileUrls&&(a.Yv=b.secondQuartileUrls[0],a.Zv=b.secondQuartileUrls),b.thirdQuartileUrls&&(a.bw=b.thirdQuartileUrls[0],a.cw=b.thirdQuartileUrls),
b.completeUrls&&(a.Uv=b.completeUrls[0],a.Vv=b.completeUrls))};
Jha=function(a,b,c){b=g.p(b);for(var d=b.next();!d.done;d=b.next())if(d=d.value)if(d=d.playerLegacyDesktopWatchAdsRenderer)if(d=d.playerAdParams){"1"==d.autoplay&&(a.Pi=!0);a.adSafetyReason=d.encodedAdSafetyReason||null;void 0!=d.showContentThumbnail&&(a.co=!!d.showContentThumbnail);c.enabled_engage_types=d.enabledEngageTypes;break}};
Kha=function(a,b){var c=b.manifestlessWindowedLiveConfig;if(c){var d=parseInt(c.minDvrSequence,10),e=parseInt(c.maxDvrSequence,10),f=parseInt(c.minDvrMediaTimeMs,10);c=parseInt(c.maxDvrMediaTimeMs,10);d&&(a.Tc=d);f&&(a.Ah=f/1E3);e&&(a.Ne=e);c&&(a.Pj=c/1E3)}if(d=b.daiConfig)if(d.enableDai&&(a.ac=!0),d=d.enableServerStitchedDai)a.enableServerStitchedDai=d;if(d=b.audioConfig)e=d.loudnessDb,null!=e&&(a.Tn=e),d.audioMuted&&(a.kj=!0),d.muteOnStart&&(a.kj=!0);(d=b.playbackEndConfig)&&(d=d.endSeconds)&&a.mutedAutoplay&&
(a.endSeconds=d);if(d=b.fairPlayConfig){if(e=d.certificate)a.Af=Kx(e);e=parseInt(d.keyRotationPeriodMs,10);0<e&&(a.rp=e);d=parseInt(d.keyPrefetchMarginMs,10);0<d&&(a.qp=d)}if(d=b.playbackStartConfig){a.Rv=parseInt(d.startSeconds,10);if(e=d.liveUtcStartSeconds)a.liveUtcStartSeconds=parseInt(e,10);if(d=d.startPosition){if(e=d.utcTimeMillis)a.liveUtcStartSeconds=.001*parseInt(e,10);if(d=d.streamTimeMillis)a.Ur=.001*parseInt(d,10)}}else if(d=b.skippableSegmentsConfig){if(e=d.introSkipDurationMs)a.Gu=
parseInt(e,10)/1E3;if(d=d.outroSkipDurationMs)a.Mv=parseInt(d,10)/1E3}if(e=b.skippableIntroConfig)d=parseInt(e.startMs,10),e=parseInt(e.endMs,10),isNaN(d)||isNaN(e)||(a.Hj=d,a.ti=e);if(d=b.streamSelectionConfig)a.si=parseInt(d.maxBitrate,10);(d=b.visualizerConfig)&&d.isVisualizerEligible&&(a.isVisualizerEligible=!0);if(d=b.vrConfig)a.Mj="1"==d.partialSpherical;if(d=b.webDrmConfig){d.skipWidevine&&(a.LD=!0);if(e=d.widevineServiceCert)a.uo=Kx(e);d.useCobaltWidevine&&(a.useCobaltWidevine=!0);d.startWithNoQualityConstraint&&
(a.Dm=!0)}if(d=b.mediaCommonConfig)if(d=d.dynamicReadaheadConfig)a.maxReadAheadMediaTimeMs=d.maxReadAheadMediaTimeMs||NaN,a.minReadAheadMediaTimeMs=d.minReadAheadMediaTimeMs||NaN,a.readAheadGrowthRateMs=d.readAheadGrowthRateMs||NaN};
Rha=function(a,b,c){var d=b.adaptiveFormats;if(d){var e=[];d=g.p(d);for(var f=d.next();!f.done;f=d.next()){var h=f.value;f=h.indexRange;var l=h.initRange;f={itag:h.itag,url:h.url,index:f?f.start+"-"+f.end:"0-0",bitrate:h.bitrate,init:l?l.start+"-"+l.end:"0-0",type:h.mimeType,clen:h.contentLength,lmt:h.lastModified,xtags:h.xtags};if(l=h.audioTrack){var m=l.displayName;m&&(f.name=m,f.audio_track_id=l.id,l.audioIsDefault&&(f.isDefault="1"))}if(l=h.captionTrack)f.caption_display_name=l.displayName,f.caption_vss_id=
l.vssId,f.caption_language_code=l.languageCode,f.caption_kind=l.kind;(l=h.cipher||h.signatureCipher)?(l=$p(l),f.sp=l.sp,f.s=l.s,f.url=l.url):f.url=h.url;l=h.width;m=h.height;null!=l&&null!=m&&(f.size=l+"x"+m);(l=h.fps)&&(f.fps=l);(l=h.type)&&(f.stream_type=Lha[l]);(l=h.projectionType)&&(f.projection_type=Mha[l]);(l=h.stereoLayout)&&(f.stereo_layout=Nha[l]);(l=h.spatialAudioType)&&(f.spatial_audio_type=Oha[l]);if(m=h.drmFamilies){l=[];m=g.p(m);for(var n=m.next();!n.done;n=m.next())l.push(iA[n.value]);
f.drm_families=l.join(",")}(l=h.qualityLabel)&&(f.quality_label=l);(l=h.targetDurationSec)&&(f.target_duration_sec=l);(l=h.maxDvrDurationSec)&&(f.max_dvr_duration_sec=l);(l=h.audioSampleRate)&&(f.audio_sample_rate=l);(l=h.audioChannels)&&(f.audio_channels=l);if(h=h.colorInfo)(l=h.primaries)&&(l=Pha[l])&&(f.primaries=l),(h=h.transferCharacteristics)&&(h=Qha[h])&&(f.eotf=h);e.push(g.Cd(f))}a.adaptiveFormats=e.join(",")}if(d=b.formats){e=[];h=g.p(d);for(f=h.next();!f.done;f=h.next())f=f.value,e.push(f.itag+
"/"+f.width+"x"+f.height);a.cu=e.join(",");e=[];d=g.p(d);for(f=d.next();!f.done;f=d.next()){h=f.value;f={itag:h.itag,type:h.mimeType,quality:h.quality};(l=h.url)&&(f.url=l);if(h=h.cipher||h.signatureCipher)h=$p(h),f.sp=h.sp,f.s=h.s,f.url=h.url;e.push(g.Cd(f))}a.so=e.join(",")}if(f=b.hlsFormats){e={};if(c&&(c=c.audioPairingConfig)&&c.pairs)for(c=g.p(c.pairs),d=c.next();!d.done;d=c.next())d=d.value,e[d.videoItag]=d.audioItag;c={};d=g.p(f);for(h=d.next();!h.done;h=d.next())h=h.value,c[h.itag]=h.bitrate;
d=[];f=g.p(f);for(h=f.next();!h.done;h=f.next()){l=h.value;h={itag:l.itag,type:l.mimeType,url:l.url,bitrate:l.bitrate,width:l.width,height:l.height,fps:l.fps};if(m=l.audioTrack)if(n=m.displayName)h.name=n,h.audio_track_id=m.id,m.audioIsDefault&&(h.is_default="1");if(l.drmFamilies){m=[];n=g.p(l.drmFamilies);for(var q=n.next();!q.done;q=n.next())m.push(iA[q.value]);h.drm_families=m.join(",")}l=e[l.itag];m=c[l];l&&m&&(h.audio_itag=l,h.bitrate+=m);d.push(g.Cd(h))}a.hlsFormats=d.join(",")}if((e=b.licenseInfos)&&
0<e.length){c={};e=g.p(e);for(d=e.next();!d.done;d=e.next())f=d.value,d=f.drmFamily,f=f.url,d&&f&&(c[iA[d]]=f);a.Qc=c}if(c=b.drmParams)a.drmParams=c;if(c=b.dashManifestUrl)a.Ge=g.Ed(c,{cpn:a.clientPlaybackNonce});if(c=b.hlsManifestUrl)a.hlsvp=c;if(b=b.probeUrl)a.probeUrl=iv(g.Ed(b,{cpn:a.clientPlaybackNonce}))};
Sha=function(a,b,c){var d=b.videoId;d&&(a.videoId=d,c.video_id||(c.video_id=d));a.ha("web_player_uid_killswitch")||(d=b.channelId)&&(a.dd.uid=d.substr(2));if(d=b.title)a.title=d,c.title||(c.title=d);if(d=b.lengthSeconds)a.lengthSeconds=parseInt(d,10),c.length_seconds||(c.length_seconds=d);if(d=b.keywords)a.keywords=jA(d);if(d=b.channelId)a.jg=d,c.ucid||(c.ucid=d);if(d=b.viewCount)a.qD=parseInt(d,10);if(d=b.author)a.author=d,c.author||(c.author=d);if(c=b.shortDescription)a.shortDescription=c;if(c=
b.isCrawlable)a.isListed=c;if(c=b.musicVideoType)a.musicVideoType=c;c=b.isLive;null!=c&&(a.xa=c);if(c||b.isUpcoming)a.isPremiere=!b.isLiveContent;if(b=b.thumbnail)a.dg=bA(b)};
Tha=function(a,b){if(b.playerLegacyDesktopYpcTrailerRenderer){var c=b.playerLegacyDesktopYpcTrailerRenderer;a.Gs=c.trailerVideoId||"";var d=(d=b.playerLegacyDesktopYpcTrailerRenderer.ypcTrailer)&&d.ypcTrailerRenderer}else if(b.playerLegacyDesktopYpcOfferRenderer)c=b.playerLegacyDesktopYpcOfferRenderer;else if(b.ypcTrailerRenderer){d=b.ypcTrailerRenderer;var e=d.fullVideoMessage;a.xo=e?g.R(e):""}c&&(a.Bs=c.itemTitle||"",c.itemUrl&&(a.Cs=c.itemUrl),c.itemBuyUrl&&(a.zs=c.itemBuyUrl),a.As=c.itemThumbnail||
"",a.Es=c.offerHeadline||"",a.zo=c.offerDescription||"",a.Fs=c.offerId||"",a.Ds=c.offerButtonText||"",a.jx=c.offerButtonFormattedText||null,a.Ao=c.overlayDurationMsec||NaN,a.xo=c.fullVideoMessage||"",a.Bk=!0);d&&((c=d.unserializedPlayerResponse)?a.em={raw_player_response:c}:(c=d.playerVars,a.em=c?$p(c):null),a.Bk=!0)};
Vha=function(a,b,c,d){b.isLiveDefaultBroadcast&&(a.isLiveDefaultBroadcast=!0);b.isUpcoming&&(a.isUpcoming=!0);if(b.isPostLiveDvr)a.ff=!0;else{var e=!1;if(a.yg)a.allowLiveDvr=kA(!0),a.xa=!0;else if(b.isLive){d.livestream="1";a.allowLiveDvr=kA(!!b.isLiveDvrEnabled);a.jf=27;b.isLowLatencyLiveStream&&(a.isLowLatencyLiveStream=!0);if(e=b.latencyClass)a.latencyClass=Uha[e]||"UNKNOWN";a.Fm=!0;if(b=b.liveChunkReadahead)a.liveChunkReadahead=b;if(c=c&&c.livePlayerConfig)if(c.hasSubfragmentedFmp4&&(a.hasSubfragmentedFmp4=
!0),c.hasSubfragmentedWebm&&(a.dl=!0),c.defraggedFromSubfragments&&(a.defraggedFromSubfragments=!0),c=c.liveExperimentalContentId)a.liveExperimentalContentId=parseInt(c,10);e=!0}else b.isUpcoming&&(e=!0);e&&(a.xa=!0,d.adformat&&"8"!=d.adformat.split("_")[1]||(a.ha("live_fresca_v2")?a.kd.push("heartbeat"):(a.Ap=!0,a.kd.push("fresca"))),a.yo=!0,a.np=!0)}};
lA=function(a,b){Bs.call(this,1,arguments)};
mA=function(a,b){Bs.call(this,1,arguments);this.o=a};
Wha=function(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}};
oA=function(a){var b=nA(a);if(b.aft)return b.aft;a=g.K((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN};
pA=function(a){return!!g.Ja("yt.timing."+(a||"")+"pingSent_")};
qA=function(a,b){g.Ha("yt.timing."+(b||"")+"pingSent_",a,void 0)};
sA=function(a){return g.Ja("ytcsi."+(a||"")+"data_")||rA(a)};
tA=function(a){a=sA(a);a.info||(a.info={});return a.info};
nA=function(a){a=sA(a);a.tick||(a.tick={});return a.tick};
uA=function(a){var b=sA(a).nonce;b||(b=ns(),sA(a).nonce=b);return b};
rA=function(a){var b={tick:{},info:{}};g.Ha("ytcsi."+(a||"")+"data_",b,void 0);return b};
wA=function(a){var b=nA(a||""),c=oA(a);c&&!vA&&(Es(Xha,new lA(Math.round(c-b._start),a)),vA=!0)};
xA=function(){var a=g.Ja("ytcsi.debug");a||(a=[],g.Ha("ytcsi.debug",a,void 0),g.Ha("ytcsi.reference",{},void 0));return a};
zA=function(a){a=a||"";var b=yA();if(b[a])return b[a];var c=xA(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d};
yA=function(){var a=g.Ja("ytcsi.reference");if(a)return a;xA();return g.Ja("ytcsi.reference")};
AA=function(){this.o=0};
BA=function(){AA.o||(AA.o=new AA);return AA.o};
DA=function(a,b){CA[b]=CA[b]||{count:0};var c=CA[b];c.count++;c.time=(0,g.M)();a.o||(a.o=sp(function(){var d=(0,g.M)(),e;for(e in CA)CA[e]&&6E4<d-CA[e].time&&delete CA[e];a&&(a.o=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new jr("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||g.nr(c)),!0):!1};
EA=function(a){return!!g.K("FORCE_CSI_ON_GEL",!1)||g.zo("csi_on_gel")||!!sA(a).useGel};
FA=function(a){a=sA(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel};
GA=function(a){rA(a);Yha();qA(!1,a);a||(g.K("TIMING_ACTION")&&vo("PREVIOUS_ACTION",g.K("TIMING_ACTION")),vo("TIMING_ACTION",""))};
LA=function(a,b,c){c=c?c:a;HA(c);var d=c||"",e=yA();e[d]&&delete e[d];var f=xA(),h={timerName:d,info:{},tick:{},span:{}};f.push(h);e[d]=h;zA(c||"").info.actionType=a;GA(c);sA(c).useGel=!0;vo(c+"TIMING_AFT_KEYS",b);vo(c+"TIMING_ACTION",a);IA("c",c);if(EA(c)){a={actionType:JA[wo((c||"")+"TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN",previousAction:JA[wo("PREVIOUS_ACTION")]||"LATENCY_ACTION_UNKNOWN"};if(b=g.xs())a.clientScreenNonce=b;b=uA(c);BA().info(a,b)}g.Ha("ytglobal.timing"+(c||"")+"ready_",!0,void 0);
KA(c)};
IA=function(a,b){MA("yt_sts",a,b);NA("_start",void 0,b)};
MA=function(a,b,c){if(null!==b)if(tA(c)[a]=b,EA(c)){var d=b;b=FA(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in OA){b=OA[a];g.fb(Zha,b)&&(d=!!d);a in PA&&"string"===typeof d&&(d=PA[a]+d.toUpperCase());a=d;d=b.split(".");for(var h=e={},l=0;l<d.length-1;l++){var m=d[l];h[m]={};h=h[m]}h[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;b=bt({},e)}else g.fb($ha,a)||g.nr(new jr("Unknown label logged with GEL CSI",
a)),b=void 0;b&&QA(b,c)}else zA(c||"").info[a]=b};
QA=function(a,b){if(EA(b)){var c=zA(b||"");bt(c.info,a);c=FA(b);"gelInfos"in c||(c.gelInfos={});bt(c.gelInfos,a);c=uA(b);BA().info(a,c)}};
NA=function(a,b,c){var d=nA(c);if(g.zo("use_first_tick")&&RA(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;SA.mark&&(ic(e,"mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),SA.mark(e))}e=b||(0,g.M)();d[a]=e;e=FA(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||(0,g.M)();if(EA(c)){zA(c||"").tick[a]=b||(0,g.M)();e=uA(c);if("_start"===a){var f=BA();DA(f,"baseline_"+e)||g.lr("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else BA().tick(a,e,b);wA(c);e=!0}else e=!1;e||(KA(c),zA(c||"").tick[a]=b||(0,g.M)());
return d[a]};
TA=function(a){var b="above_the_fold";SA&&SA.measure&&(ic(b,"measure_")||(b="measure_"+b),a?SA.measure(b,a):SA.measure(b))};
RA=function(a,b){var c=nA(b);return a in c};
UA=function(a){RA("_start","video_to_ad")&&!RA(a,"video_to_ad")&&NA(a,void 0,"video_to_ad")};
KA=function(a){if(!pA(a)){var b=g.K((a||"")+"TIMING_ACTION",void 0),c=nA(a);if(g.Ja("ytglobal.timing"+(a||"")+"ready_")&&b&&RA("_start")&&oA(a))if(wA(a),a)VA(a);else{b=!0;var d=g.K("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in c)){b=!1;break}b&&VA(a)}}};
aia=function(){switch(Zo()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}};
VA=function(a){if(!EA(a)){var b=nA(a),c=tA(a),d=b._start,e=g.K("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:g.K((a||"")+"TIMING_ACTION",void 0)},h=c.srt;void 0!==b.srt&&delete c.srt;b.aft=oA(a);var l=nA(a),m=l.pbr,n=l.vc;l=l.pbs;m&&n&&l&&m<n&&n<l&&tA(a).yt_pvis&&"youtube"===e&&(MA("yt_lt","hot_bg",a),e=b.vc,m=b.pbs,delete b.aft,c.aft=Math.round(m-e));for(var q in c)"_"!==q.charAt(0)&&(f[q]=c[q]);b.ps=(0,g.M)();q={};e=[];for(var r in b)"_"!==r.charAt(0)&&(m=Math.round(b[r]-d),q[r]=m,e.push(r+"."+
m));f.rt=e.join(",");b=!!c.ap;g.zo("debug_csi_data")&&(c=g.Ja("yt.timing.csiData"),c||(c=[],g.Ha("yt.timing.csiData",c,void 0)),c.push({page:location.href,time:new Date,args:f}));c="";for(var u in f)f.hasOwnProperty(u)&&(c+="&"+u+"="+f[u]);f="/csi_204?"+c.substring(1);window.navigator&&window.navigator.sendBeacon&&b?zr(f):g.xr(f);qA(!0,a);Es(WA,new mA(q.aft+(Number(h)||0),a))}};
HA=function(a){if(EA(a))RA("_start",a)&&NA("aa",void 0,a);else if(!pA(a)){var b=g.K("CSI_SERVICE_NAME","youtube");g.K((a||"")+"TIMING_ACTION",void 0)&&b&&(NA("aa",void 0,a),MA("ap",1,a),MA("yt_fss","c",a),VA(a))}};
bia=function(a){if(a=a.commonConfig)this.url=a.url,this.urlQueryOverride=a.urlQueryOverride,a.ustreamerConfig&&(this.ustreamerConfig=Kx(a.ustreamerConfig))};
XA=function(a){g.N.call(this);this.o=null;this.A=new g.qo;this.o=null;this.F=new Set;this.crossOrigin=a||""};
$A=function(a,b,c){c=YA(a,c);for(var d,e;0<=c;c--)if(d=a.levels[c],e=Math.floor(b/(d.columns*d.rows)),!d.Rb(e)){d=a;var f=c,h=f+"-"+e;d.F.has(h)||(d.F.add(h),g.po(d.A,f,{xA:f,zB:e}))}ZA(a)};
ZA=function(a){if(!a.o&&!a.A.isEmpty()){var b=a.A.remove();a.o=cia(a,b)}};
cia=function(a,b){var c=document.createElement("img");a.crossOrigin&&(c.crossOrigin=a.crossOrigin);c.src=a.levels[b.xA].Ec(b.zB);c.onload=function(){var d=b.xA,e=b.zB;null!==a.o&&(a.o.onload=null,a.o=null);d=a.levels[d];d.loaded.add(e);ZA(a);var f=d.columns*d.rows;e*=f;d=Math.min(e+f-1,d.fu()-1);e=[e,d];a.S("l",e[0],e[1])};
return c};
g.aB=function(a,b,c,d){this.level=a;this.C=b;this.loaded=new Set;this.level=a;this.C=b;a=c.split("#");this.width=Math.floor(Number(a[0]));this.height=Math.floor(Number(a[1]));this.A=Math.floor(Number(a[2]));this.columns=Math.floor(Number(a[3]));this.rows=Math.floor(Number(a[4]));this.o=Math.floor(Number(a[5]));this.B=a[6];this.signature=a[7];this.videoLength=d};
bB=function(a,b,c,d,e){d=void 0===d?!1:d;e=void 0===e?!1:e;XA.call(this,c);this.isLive=d;this.G=!!e;this.levels=this.u(a,b);this.B=new Map;1<this.levels.length&&this.levels[0].isDefault()&&this.levels.splice(0,1)};
cB=function(a,b,c){return(a=a.levels[b])?a.Pq(c):-1};
YA=function(a,b){var c=a.B.get(b);if(c)return c;c=a.levels.length;for(var d=0;d<c;d++)if(a.levels[d].qd()>=b)return a.B.set(b,d),d;a.B.set(b,c-1);return c-1};
dB=function(a,b,c,d){c=c.split("#");c=[c[1],c[2],0,c[3],c[4],-1,c[0],""].join("#");g.aB.call(this,a,b,c,0);this.u=null;this.F=d?3:0};
eB=function(a,b,c,d){bB.call(this,a,0,void 0,b,!(void 0===d||!d));for(a=0;a<this.levels.length;a++)this.levels[a].YA(c)};
g.gB=function(a,b){g.N.call(this);this.Xa=a;this.adModule=!1;this.nm=this.adaptiveFormats="";this.Qc=null;this.drmParams="";this.allowEmbed=!0;this.allowLiveDvr=this.backgroundable=!1;this.Xe="";this.kt=this.Oo=!1;this.rA=null;this.kj=this.dm=this.Bk=this.yo=this.Ap=this.fq=!1;this.Tn=NaN;this.author="";this.Xh=0;this.To=this.Sy=this.wt=!1;this.clientScreenNonce=this.clientPlaybackNonce=this.videoCountText=this.channelBanner=this.dh=this.rm="";this.contentCheckOk=!1;this.xf=0;this.np=this.Fm=!1;this.endSeconds=
0;this.Af=null;this.cu="";this.yc=!1;this.si=this.il=0;this.jt=this.pipable=this.Jj=!1;this.MC=0;this.xa=this.yg=this.isPrivate=this.isListed=this.Ku=this.mutedAutoplay=this.Pi=!1;this.Wu="";this.isLowLatencyLiveStream=this.isLivingRoomDeeplink=this.isLiveDefaultBroadcast=this.cq=this.gn=this.ff=!1;this.latencyClass="UNKNOWN";this.enableServerStitchedDai=this.ac=this.isMdxPlayback=this.isUpcoming=this.isPremiere=!1;this.mdxControlMode=null;this.isPharma=!1;this.Lg=0;this.reloadReason="";this.Qu=this.oA=
this.wh=!1;this.keywords={};this.Kf="";this.iq=0;this.ro=!1;this.liveChunkReadahead=NaN;this.lq=0;this.sl=null;this.mn=this.lengthSeconds=0;this.playerParams=this.musicVideoType=null;this.paygated=!1;this.kd=[];this.Md=void 0;this.racyCheckOk=!1;this.Mr=0;this.Aa=null;this.autonavState=1;this.shortDescription="";this.Ze=this.Cw=!1;this.Ur=this.ri=this.startSeconds=0;this.us=this.oy=this.xE=Fx;this.Rl=this.suggestions=null;this.Gw=!1;this.hlsFormats=this.so=this.expandedSubtitle=this.Im=this.subtitle=
this.title="";this.mq=this.Tr=this.Zl=this.Fh=this.kf=this.Xn=this.Xp=null;this.Kh="vvt";this.gd=!1;this.jx=null;this.GE="";this.Ao=NaN;this.Gs=this.Cs=this.Bs=this.As=this.zs=this.Fs=this.xo=this.Es=this.zo=this.Ds="";this.em=null;this.xD=!1;this.dd={};this.clipStart=0;this.clipEnd=Infinity;this.heartbeatToken="";this.Xz=this.Wz=NaN;this.nk=this.hn=this.jj=this.fA=this.Yz=!1;this.co=!0;this.dg={};this.captionTracks=[];this.vt=[];this.ry=0;this.sy=[];this.Zo=!1;this.Am=new hz("und",new rw("Default",
"und",!0));this.Ru=0;this.kc=null;this.Ll=[];this.hj=[];this.ex=this.Qn="";this.slotPosition=-1;this.breakType=0;this.Rg=this.Ia=this.Em=this.jh=null;this.Pt=!1;this.Zc=null;this.Ju=this.Dm=this.useCobaltWidevine=this.LD=this.Mj=this.uh=!1;this.ti=this.Hj=NaN;this.defraggedFromSubfragments=this.dl=this.hasSubfragmentedFmp4=!1;this.liveExperimentalContentId=NaN;this.Qi=this.gx=this.Ak=!1;this.interstitials=[];this.fc=this.Lu=!1;this.Pn=this.GB=this.yf="";this.isVisualizerEligible=!1;this.ur=null;this.Fb=
"";this.Ag=this.dA=!1;this.EB=this.wo="";this.Rv=this.Mv=this.Gu=this.readAheadGrowthRateMs=this.minReadAheadMediaTimeMs=this.maxReadAheadMediaTimeMs=NaN;this.showShareButton=!0;this.fo=!1;this.Ql=this.Zi=!0;this.errorDetail=this.userGenderAge="";this.Kw=this.Lw=this.getSharePanelCommand=this.removeFromWatchLaterCommand=this.addToWatchLaterCommand=this.unsubscribeCommand=this.subscribeCommand=this.contextParams=this.ai=this.errorReason=this.errorCode=null;this.gp=this.fp="";this.Ik=void 0;this.ha("web_player_ux_module_wait")&&
this.Xa.Ea&&this.kd.push("ux");this.Rt=this.Pk=!1;this.Ah=this.Pj=this.Ne=this.Tc=0;this.ln=this.fetchType=null;this.TC={};fB(this,b)};
iB=function(a,b){a.au=hy(a.au,b.fflags);var c=b.iv_invideo_url;c&&(a.Xe=iv(c));a.Oo=Q(a.Oo,b.iv_ads_only);a.kt=Q(a.kt,b.iv_allow_in_place_switch);a.isPharma=Q(a.isPharma,b.is_pharma);a.author=hy(a.author,b.author);a.rm=gA(b.ttsurl)||a.rm;a.wt=Q(a.wt,b.cc_asr);a.dh=hy(a.dh,b.channel_path);a.channelBanner=hy(a.channelBanner,b.channel_banner);a.videoCountText=hy(a.videoCountText,b.video_count_text);a.autonavState=fy(a.autonavState,b.autonav_state,dia);a.clientPlaybackNonce=hy(a.clientPlaybackNonce,b.cpn);
a.subscribed=Q(a.subscribed,b.subscribed);a.qD=gy(a.qD,b.view_count);a.shortViewCount=hy(a.shortViewCount,b.short_view_count_text);a.title=hy(a.title,b.title);a.subtitle=hy(a.subtitle,b.subtitle);a.Im=hy(a.Im,b.expanded_title);a.expandedSubtitle=hy(a.expandedSubtitle,b.expanded_subtitle);a.nm=hy(a.nm,b.aria_label);a.ypcPreview=hy(a.ypcPreview,b.ypc_preview);a.kx=hy(a.kx,b.ypc_origin);a.gd=Q(a.gd,b.ypc_is_premiere_trailer);a.wo=hy(a.wo,b.ypc_clickwrap_message);a.paygated=Q(a.paygated,b.paygated);a.xD=
Q(a.xD,b.requires_purchase);a.showShareButton=!Q(!a.showShareButton,b.ss);a.Zi=Q(a.Zi,b.showwatchlater);a.Ql=Q(a.Ql,b.shownotifybutton);a.fo=Q(a.fo,b.copy_share);if(c=b.keywords)a.keywords=jA(c.split(","));if(c=b.rvs)a.suggestions=aq(c);a.contentCheckOk=Q(a.contentCheckOk,b.cco);a.racyCheckOk=Q(a.racyCheckOk,b.rco);a.isLivingRoomDeeplink=Q(a.isLivingRoomDeeplink,b.is_living_room_deeplink);a.oauthToken=hy(a.oauthToken,b.oauth_token);a.Kf=hy(a.Kf,b.kpt);a.visitorData=hy(a.visitorData,b.visitor_data);
if(c=b.session_data)a.Ac=Yp(c);if(c=b.endscreen_autoplay_session_data)a.Zy=Yp(c);a.pp=hy(a.pp,b.endscreen_ad_tracking_data);a.BE=Q(a.BE,b.wait_for_vast_info_cards_xml);a.Ew=Q(a.Ew,b.suppress_creator_endscreen);a.nA=Q(a.nA,b.is_trueview_action);a.aE=hy(a.aE,b.tracking_list);a.fp=hy(a.fp,b.clip);a.gp=hy(a.gp,b.clipt);hB(a,b)};
fB=function(a,b){b=b||{};var c=b.errordetail;null!=c&&(a.errorDetail=c);c=b.errorcode;null!=c?a.errorCode=c:"fail"==b.status&&(a.errorCode="150");c=b.reason;null!=c&&(a.errorReason=c);c=b.subreason;null!=c&&(a.ai=c);a.clientPlaybackNonce||(a.clientPlaybackNonce=b.cpn||ns());a.yg=Q(a.Xa.yg,b.livemonitor);c=b.raw_embedded_player_response;if(!c){var d=b.embedded_player_response;d&&(c=JSON.parse(d))}c&&(a.jh=c);a.jh&&((c=a.jh.videoFlags)&&c.playableInEmbed&&(a.allowEmbed=!0),(c=a.jh.embedPreview)&&eia(a,
b,c),a.jh.playabilityStatus&&(a.Em=a.jh.playabilityStatus,fia(a)),(c=a.jh.attestation)&&fA(a,c));c=b.raw_player_response;c||(d=b.player_response)&&(c=JSON.parse(d));c&&(a.Ia=c);if(a.Ia){(c=a.Ia.annotations)&&zha(a,c);(c=a.Ia.attestation)&&fA(a,c);(c=a.Ia.heartbeatParams)&&Cha(a,c);(c=a.Ia.messages)&&Eha(a,c);(c=a.Ia.multicamera)&&Fha(a,c);(c=a.Ia.overlay)&&Gha(a,c);if(c=a.Ia.playabilityStatus)Hha(a,c),(d=c.errorScreen)&&Tha(a,d);(d=a.Ia.playbackTracking)&&Iha(a,d,b);(d=a.Ia.playerAds)&&Jha(a,d,b);
(d=a.Ia.playerConfig)&&Kha(a,d);var e=a.Ia.streamingData;e&&Rha(a,e,d||null);if(e=a.Ia.trackingParams)a.Gf=e;if(e=a.Ia.videoDetails)if(Sha(a,e,b),Vha(a,e,d||null,b),d=e.isPrivate)a.isPrivate=Q(a.isPrivate,d);c&&Bha(a,c,e||null);(c=a.Ia.interstitialPods)&&Dha(a,c);a.Xe&&a.eventId&&(a.Xe=eq(a.Xe,{ei:a.eventId}));(c=a.Ia.captions)&&c.playerCaptionsTracklistRenderer&&Aha(a,c.playerCaptionsTracklistRenderer);a.Ik=a.Ia.clipConfig;a.Ik&&null!=a.Ik.startTimeMs&&(a.Rv=.001*parseInt(a.Ik.startTimeMs,10));a.ha("web_player_include_innertube_commands")&&
a.Ia&&a.Ia.playerConfig&&a.Ia.playerConfig.webPlayerConfig&&a.Ia.playerConfig.webPlayerConfig.webPlayerActionsPorting&&hA(a,a.Ia.playerConfig.webPlayerConfig.webPlayerActionsPorting)}jB(a,b);b.queue_info&&(a.queueInfo=b.queue_info);c=b.hlsdvr;null!=c&&(a.allowLiveDvr=kA("1"==c));a.adQueryId=b.ad_query_id||null;a.adSafetyReason||(a.adSafetyReason=b.encoded_ad_safety_reason||null);a.FF=b.agcid||null;a.Yx=b.ad_id||null;a.dy=b.ad_sys||null;a.Yy=b.encoded_ad_playback_context||null;a.kj=Q(a.kj,b.infringe||
b.muted);a.authKey=b.authkey;a.Bc=b.authuser;a.mutedAutoplay=Q(a.mutedAutoplay,b&&b.playmuted)&&a.ha("embeds_enable_muted_autoplay");a.Fm=Q(a.Fm,b.enable_cardio);a.np=Q(a.np,b.enable_cardio_before_playback);a.endSeconds=gy(a.endSeconds,a.Mv||b.end||b.endSeconds);a.Gf=hy(a.Gf,b.itct);a.Ku=Q(a.Ku,b.noiba);a.cq=Q(a.cq,b.is_live_destination);a.xa=Q(a.xa,b.live_playback);a.isMdxPlayback=Q(a.isMdxPlayback,b.mdx);if(c=b.mdx_control_mode)a.mdxControlMode="number"===typeof c?c:g.nd(c);a.Ju=Q(a.Ju,b.is_inline_playback_no_ad);
a.Lg=gy(a.Lg,b.reload_count);a.reloadReason=hy(a.reloadReason,b.reload_reason);a.co=Q(a.co,b.show_content_thumbnail);a.Qu=Q(a.Qu,b.utpsa);a.Gw=Q(a.Gw,b.third_party_remapped_ad);a.cycToken=b.cyc||null;a.WD=b.tkn||null;c=Zz(b);0<Object.keys(c).length&&(a.dg=c);a.ye=hy(a.ye,b.vvt);a.mdxEnvironment=hy(a.mdxEnvironment,b.mdx_environment);a.yK=b.osig;a.eventId||(a.eventId=b.eventid);a.osid||(a.osid=b.osid);a.playlistId=hy(a.playlistId,b.list);a.ZC=b.pyv_view_beacon_url;a.cD=b.pyv_quartile25_beacon_url;
a.dD=b.pyv_quartile50_beacon_url;a.eD=b.pyv_quartile75_beacon_url;a.bD=b.pyv_quartile100_beacon_url;if(c=b.remarketing_url)a.remarketingUrl=c;if(c=b.ppv_remarketing_url)a.ppvRemarketingUrl=c;c=b.session_data;!a.sD&&c&&(a.sD=Yp(c).feature);a.Iu=1==gy(a.Iu?1:0,b.is_fling);a.vnd=gy(a.vnd,b.vnd);a.Sk=hy(a.Sk,b.force_ads_url);a.Mg=hy(a.Mg,b.ctrl);a.Vf=hy(a.Vf,b.ytr);a.wm=b.ytrcc;a.uD=b.ytrexp;a.Qn=hy(a.Qn,b.adformat);a.ex=hy(a.ex,b.attrib);a.slotPosition=gy(a.slotPosition,b.slot_pos);a.breakType=b.break_type;
a.bo=Q(a.bo,b.ssrt);a.videoId=jy(b)||a.videoId;a.lg=hy(a.lg,b.vss_credentials_token);a.Kh=hy(a.Kh,b.vss_credentials_token_type);a.Ak=Q(a.Ak,b.audio_only);a.gx=Q(a.gx,b.aac_high);a.Qi=Q(a.Qi,b.prefer_low_quality_audio);a.Pn=hy(a.Pn,b.qoe_cat);a.Pk=Q(a.Pk,b.download_media);a.Rt=Q(a.Rt,b.download_media_in_bg);a.Ag=Q(a.Ag,b.prefer_gapless);gia(a.Ia)&&(a.adModule=!0,a.kd.push("ad"));if(c=b.adaptive_fmts)a.adaptiveFormats=c;if(c=b.allow_embed)a.allowEmbed="1"==c;if(c=b.backgroundable)a.backgroundable="1"==
c;if(c=b.autonav)a.Jj="1"==c;if(c=b.autoplay)a.Pi="1"==c;if(c=b.iv_load_policy)a.annotationsLoadPolicy=fy(a.annotationsLoadPolicy,c,By);if(c=b.cc_lang_pref)a.captionsLanguagePreference=hy(c,a.captionsLanguagePreference);if(c=b.cc_load_policy)a.Uh=fy(a.Uh,c,By);if(c=b.cached_load)a.To=Q(a.To,c);"0"==b.dash&&(a.Sy=!0);if(c=b.dashmpd)a.Ge=g.Ed(c,{cpn:a.clientPlaybackNonce});if(c=b.delay)a.xf=g.nd(c);c=a.Mv||b.end;void 0!=c&&(a.clipEnd=gy(a.clipEnd,c));if(c=b.fmt_list)a.cu=c;b.fresca_preroll&&a.kd.push("fresca");
b.heartbeat_preroll&&a.kd.push("heartbeat");a.il=-Math.floor(10*Math.random());a.mn=-Math.floor(40*Math.random());if(c=b.is_listed)a.isListed=Q(a.isListed,c);if(c=b.is_private)a.isPrivate=Q(a.isPrivate,c);if(c=b.pipable)a.pipable=Q(a.pipable,c);a.jt=a.pipable&&a.Xa.dr;a.Cw=a.jt&&(!a.Xa.showMiniplayerButton||a.ha("web_player_pip"));if(c=b.paid_content_overlay_duration_ms)a.MC=g.nd(c);if(c=b.paid_content_overlay_text)a.nO=c;if(c=b.url_encoded_fmt_stream_map)a.so=c;if(c=b.hls_formats)a.hlsFormats=c;
if(c=b.hlsvp)a.hlsvp=c;if(c=b.length_seconds)a.lengthSeconds="string"===typeof c?g.nd(c):c;if(c=b.live_start_walltime)a.lq="number"===typeof c?c:g.nd(c);if(c=b.live_manifest_duration)a.sl="number"===typeof c?c:g.nd(c);if(c=b.player_params)a.playerParams=c;if(c=b.partnerid)a.jf=gy(a.jf,c);if(c=b.probe_url)a.probeUrl=iv(g.Ed(c,{cpn:a.clientPlaybackNonce}));if(c=b.profile_picture)a.Md=hy(c,a.Md);(c=b.pyv_billable_url)&&fv(c)&&(a.Nn=c);(c=b.pyv_conv_url)&&fv(c)&&(a.aD=c);hB(a,b);0<a.startSeconds||(a.startSeconds=
gy(a.startSeconds,a.Rv||a.Gu||b.start||b.startSeconds),a.ri=a.startSeconds);c=b.live_utc_start;null!=c&&(a.liveUtcStartSeconds=parseInt(c,10));if(c=b.utc_start_millis)a.liveUtcStartSeconds=.001*parseInt(c,10);if(c=b.stream_time_start_millis)a.Ur=.001*parseInt(c,10);c=a.Gu||b.start;void 0==c||"1"==b.resume||a.xa||(a.clipStart=gy(a.clipStart,c));if(c=b.url_encoded_third_party_media)a.Rl=aq(c);if(c=b.ypc_offer_button_formatted_text)d=JSON.parse(c),a.jx=null!=d?d:null,a.GE=c;if(c=b.ypc_offer_button_text)a.Ds=
c;if(c=b.ypc_offer_description)a.zo=c;if(c=b.ypc_offer_headline)a.Es=c;if(c=b.ypc_full_video_message)a.xo=c;if(c=b.ypc_offer_id)a.Fs=c;if(c=b.ypc_buy_url)a.zs=c;if(c=b.ypc_item_thumbnail)a.As=c;if(c=b.ypc_item_title)a.Bs=c;if(c=b.ypc_item_url)a.Cs=c;if(c=b.ypc_vid)a.Gs=c;b.ypc_overlay_timeout&&(a.Ao=parseInt(b.ypc_overlay_timeout,10));if(c=b.ypc_trailer_player_vars)a.em=$p(c);if(c=b.ypc_original_itct)a.HP=c;a.jg=hy(a.jg,b.ucid);(0,g.y)("baseUrl uid oeid ieid ppe engaged subscribed".split(" "),function(f){b[f]&&
(this.dd[f]=b[f])},a);
a.dd.focEnabled=Q(a.dd.focEnabled,b.focEnabled);a.dd.rmktEnabled=Q(a.dd.rmktEnabled,b.rmktEnabled);a.Tr=b.storyboard_spec||null;a.mq=b.live_storyboard_spec||null;a.rA=b.iv_endscreen_url||null;a.fq=Q(a.fq,b.iv3_module);a.Ap=Q(a.Ap,b.fresca_module);a.yo=Q(a.yo,b.ypc_license_checker_module);a.Bk=Q(a.Bk,b.ypc_module);a.dm=Q(a.dm,b.ypc_clickwrap_module);a.Bk&&a.kd.push("ypc");a.dm&&a.kd.push("ypc_clickwrap");a.TC={video_id:b.video_id,eventid:b.eventid,cbrand:b.cbrand,cbr:b.cbr,cbrver:b.cbrver,c:b.c,cver:b.cver,
ctheme:b.ctheme,cplayer:b.cplayer,cmodel:b.cmodel,cnetwork:b.cnetwork,cos:b.cos,cosver:b.cosver,cplatform:b.cplatform,user_age:b.user_age,user_display_image:b.user_display_image,user_display_name:b.user_display_name,user_gender:b.user_gender,csi_page_type:b.csi_page_type,csi_service_name:b.csi_service_name,enablecsi:b.enablecsi,enabled_engage_types:b.enabled_engage_types};iB(a,b);kB(a)?hia(a):iia(a);if(c=b.adpings)a.Zx=c?$p(c):null;if(c=b.feature)a.Rn=c;if(c=b.referrer)a.referrer=c;a.clientScreenNonce=
hy(a.clientScreenNonce,b.csn);a.Mr=gy(a.Mr,b.root_ve_type);a.iq=gy(a.iq,b.kids_age_up_mode);void 0!=b.kids_app_info&&(a.kidsAppInfo=b.kids_app_info);a.ro=Q(a.ro,b.upg_content_filter_mode);if(c=b.unplugged_location_info)a.Zc=c;if(c=b.unplugged_partner_opt_out)a.Ul=hy("",c);a.Pt=Q(a.Pt,b.disable_watch_next);a.cn=hy(a.cn,b.internal_ip_override);a.Lu=!!b.is_yto_interstitial;(a.interstitials.length||a.Lu)&&a.kd.push("yto")};
jB=function(a,b){var c=b.raw_watch_next_response;if(!c){var d=b.watch_next_response;d&&(c=JSON.parse(d))}if(c){a.Rg=c;c=a.Rg.contents;var e;if(c){if(e=c.singleColumnWatchNextResults){var f=gy(0,b.autoplay_count);if(e.autoplay&&e.autoplay.autoplay&&!e.playlist){var h=e.autoplay.autoplay.sets;e={};d={};var l=null;if(h){for(var m=g.p(h),n=m.next();!n.done;n=m.next())if((n=n.value.autoplayVideoRenderer)&&n.compactVideoRenderer){l=n.compactVideoRenderer;break}if(h=h[0].autoplayVideo)(h=h.clickTrackingParams)&&
(e.itct=h),e.autonav="1",e.playnext=String(f)}else e.feature="related-auto";if(l){d.autonav="1";d.video_id=l.videoId;if(f=l.shortBylineText)d.author=g.R(f);if(f=l.title)d.title=g.R(f)}d.endscreen_autoplay_session_data=g.Cd(e);a.suggestions=[d]}}e=c.twoColumnWatchNextResults}c=a.Rg.playerOverlays;if(c&&(d=c.playerOverlayRenderer)){if(f=d.endScreen)if(f=f.watchNextEndScreenRenderer)var q=f.results;if(f=d.videoDetails){var r=f.embeddedPlayerOverlayVideoDetailsRenderer;if(f=f.musicEmbeddedPlayerOverlayVideoDetailsRenderer)a.Zt=
f.title,a.Yt=f.byline}if(f=d.actions)for(f=g.p(f),l=f.next();!l.done;l=f.next())l=l.value,l.likeButtonRenderer&&(a.likeButtonRenderer=l.likeButtonRenderer);if(f=d.decoratedPlayerBarRenderer)if(f=f.decoratedPlayerBarRenderer)if(f.playerBar&&(l=f.playerBar.chapteredPlayerBarRenderer)&&l.chapters&&(a.By=l.chapters),f.playerBarActionButton&&(f=f.playerBarActionButton))a.qO=f.buttonRenderer;g.vy(a.Xa)&&(a.Zi=!!d.addToMenu);lB(a,d.shareButton)}!q&&e&&(d=e.endScreen&&e.endScreen.endScreen)&&(q=d.results);
e&&(d=e.desktopOverlay&&e.desktopOverlay.desktopOverlayConfigRenderer)&&(d.suppressShareButton&&(a.showShareButton=!1),d.suppressWatchLaterButton&&(a.Zi=!1));r&&mB(a,b,r);if(q){r=e||null;e=c||null;c=gy(0,b.autoplay_count);d=[];l=!0;q=g.p(q);for(f=q.next();!f.done;f=q.next()){m=f.value;h=void 0;f=null;if(m.endScreenVideoRenderer){m=m.endScreenVideoRenderer;n=m.title;f={id:m.videoId,length_seconds:m.lengthInSeconds};var u=m.shortBylineText;u&&(f.author=g.R(u));if(u=m.shortViewCountText)f.short_view_count_text=
g.R(u);n&&(f.title=g.R(n),(n=n.accessibility)&&(n=n.accessibilityData)&&n.label&&(f.aria_label=n.label));if(n=m.navigationEndpoint)h=n.clickTrackingParams;if(n=m.thumbnailOverlays)for(n=g.p(n),u=n.next();!u.done;u=n.next())if((u=u.value.thumbnailOverlayTimeStatusRenderer)&&"LIVE"==u.style){f.live_playback="1";break}m=bA(m.thumbnail);m=Yz(m);m.iurlmq&&(m={iurlmq:m.iurlmq,iurlhq:m.iurlmq});Object.assign(f,m)}else if(m.endScreenPlaylistRenderer){m=m.endScreenPlaylistRenderer;h=m.navigationEndpoint;if(!h)continue;
f=h.watchEndpoint;if(!f)continue;f=f.videoId;f={list:m.playlistId,video_id:f,playlist_length:m.videoCount,thumbnail_ids:f};if(n=m.title)f.playlist_title=g.R(n);if(n=m.shortBylineText)f.playlist_author=g.R(n);h=h.clickTrackingParams;m=bA(m.thumbnail);Object.assign(f,Yz(m))}f&&(f.session_data=g.Cd({itct:h}),l?(l={autonav:1,playnext:c},f.list&&(l.autoplay="1"),r?(h=r.autoplay)&&(h=h.autoplay)&&(h=h.sets)&&(h=h[0])&&(h=h.autoplayVideo)&&(h=h.clickTrackingParams)&&(l.itct=h):e&&(h=e.playerOverlayAutoplayRenderer)&&
(h=h.nextButton)&&(h=h.buttonRenderer)&&(h=h.navigationEndpoint)&&h.clickTrackingParams&&(l.itct=h.clickTrackingParams),l.itct||(l.feature="related-auto"),f.endscreen_autoplay_session_data=g.Cd(l),d.splice(0,0,f),l=!1):d.push(f))}a.suggestions=d}a.Rg.currentVideoThumbnail&&(a.dg=bA(a.Rg.currentVideoThumbnail))}};
gia=function(a){if(!a||!a.adPlacements)return!1;a=g.p(a.adPlacements);for(var b=a.next();!b.done;b=a.next())if(b=b.value.adPlacementRenderer,null!=b&&"AD_PLACEMENT_KIND_START"==(b.config&&b.config.adPlacementConfig&&b.config.adPlacementConfig.kind))return!0;return!1};
pB=function(a){var b=a.Ag,c=!!a.ka&&(a.ka.xh()||a.ka.yh()||a.ka.rh()),d=a.Xa,e=!!a.ka&&a.ka.Bg,f=nB(a),h=a.gx;a.isAd();var l=a.isOtf(),m=oB(a,"html5_samsung_vp9_live"),n=new Rga;n.R=f;n.G=h&&d.A;fl("windows nt 5.1")&&!g.vx&&(n.u=!0);c&&sy&&6>=ty&&(n.u=!0);if(f=c)f=d.ha("disable_html5_ambisonic_audio")||!(g.Wy(d)||d.ha("html5_enable_spherical")||d.ha("html5_enable_spherical3d"))?!1:Xy(d);f&&(n.N=!0);b&&(n.u=!0,n.ba=!0);l&&!g.P(d.experiments,"html5_otf_prefer_vp9")&&(n.u=!0);sx(d.B,tx.CHANNELS)&&(g.P(d.experiments,
"html5_enable_aac51")&&(n.F=!0),g.P(d.experiments,"html5_enable_ac3")&&(n.A=!0),g.P(d.experiments,"html5_enable_eac3")&&(n.B=!0));!g.P(d.experiments,"html5_kaios_hd_killswitch")&&ny&&(n.Z=480);if(e||c)n.T=!1;n.U=!1;b=gz(d,n.o);0<b&&2160>b&&window.SourceBuffer&&SourceBuffer.prototype.changeType&&(n.o.supportsChangeType=!0,n.C=b);2160<=b&&(n.aa=!0);Sx()&&(n.o.serveVp9OverAv1IfHigherRes=!1,n.ea=!1);n.M=m;/^av/.test(a.clientPlaybackNonce)&&a.S("ctmp","av1",ex(n.o));jl()&&a.Ia&&a.Ia.playerConfig&&a.Ia.playerConfig.webPlayerConfig&&
a.Ia.playerConfig.webPlayerConfig.useCobaltTvosDogfoodFeatures&&(n.A=!0,n.B=!0);a.xa&&(m=a.ac&&a.Xa.ha("html5_enable_audio_51_for_live_dai"),a=!a.ac&&a.Xa.ha("html5_enable_audio_51_for_live_non_dai"),n.I=m||a);return n};
iia=function(a){qB(a)?a.jj=!0:!rB(a,a.adaptiveFormats)&&a.Ge&&(a.jj=!0)};
uB=function(a,b){var c;(c=!b)||(c=!(!sB(a)&&a.adaptiveFormats));if(c)return null;oB(a,"html5_enable_cobalt_experimental_vp9_decoder")&&(Aw=!0);c=tB(b);var d=a.Qc;var e=a.lengthSeconds,f=a.xa,h=a.ff,l=a.Xa.experiments,m=mga(c);d=f||h?lga(c,h,d,l):3==m?kga(c,d,e,l):jga(c,d,e,l);0<c.length&&(c=c[0],c.url&&c.sp&&c.s&&(c=yw(c.url,c.sp,c.s,a.Xa.experiments),c=parseInt(c.get("max_sq"),10)||Infinity,isFinite(c)&&(a.gn=!0)));if(c=d.u)c=!(a.ha("html5_manifestless_vp9")||a.ha("html5_manifestless_vp9_normal_latency")&&
(!a.isLowLatencyLiveStream||"NORMAL"==a.latencyClass)||!jia(d));return c?(d.dispose(),null):d};
rB=function(a,b){var c=uB(a,b);if(!c)return!1;vB(a,c);return!0};
sB=function(a){return jl()&&!wB(a)};
wB=function(a){return oB(a,"html5_enable_tvos_dash_dogfood")||a.ha("html5_enable_tvos_dash")&&MediaSource.isTypeSupported('audio/webm; codecs="opus"')};
hia=function(a){sB(a)&&(a.xa&&a.Ge?a.jj=!0:a.Af&&(a.hn=!0))};
jia=function(a){return a.u&&Pw('video/webm; codecs="vp9"')&&g.Db(a.o,function(b){return Ov(b.info)})};
xB=function(a){return!(!a.ka||!a.ka.u)};
zB=function(a){if(!Wv())return!1;if(a.ha("html5_streaming_debug"))return!0;if(g.yx)return!1;if(g.il()){var b=el();if(16<=b&&17>b)return!1}return!xB(a)||"ULTRALOW"!=a.latencyClass&&21530001!=yB(a)?window.AbortController?a.ha("html5_streaming_xhr")||a.ha("html5_streaming_xhr_manifestless")&&xB(a)?!0:!1:!1:!0};
AB=function(a){var b=xB(a),c=zB(a);return(a.hasSubfragmentedFmp4||a.dl)&&b?c&&Wv()?3:2:a.defraggedFromSubfragments&&b?-1:1};
yB=function(a){return a.isLowLatencyLiveStream&&void 0!=a.ka&&5<=Kw(a.ka)?21530001:a.liveExperimentalContentId};
kB=function(a){return jl()&&wB(a)?!1:!wx()||a.Sy?!0:!1};
kia=function(a){a.yc=!0;a.jj=!1;if(!a.Ge&&qB(a))pha(a.videoId).then(function(d){var e;a:{if(e=uB(a,a.adaptiveFormats))if(d=uB(a,d)){for(var f in d.o){var h=d.o[f],l=e.o[f];if(!l||h.lastModified<l.lastModified){BB(a,!0);a.ln=new az(a.videoId,2,!1,!0);d.dispose();vB(a,e);e=void 0;break a}}e.dispose();vB(a,d)}else vB(a,e);e=void 0}return e},function(){return rB(a,a.adaptiveFormats)}).then(function(){return CB(a)});
else{dv(a.Ge)||g.nr(new jr("DASH MPD Origin invalid: ",a.Ge));var b=a.Ge,c=g.O(a.Xa.experiments,"dash_manifest_version")||4;b=g.Ed(b,{mpd_version:c});a.isLowLatencyLiveStream&&"NORMAL"!=a.latencyClass||(b=g.Ed(b,{pacing:0}));pga(b,a.Xa.experiments,a.xa).then(a.rL,a.qL,a);NA("mrs")}};
lia=function(a,b){a.ln=b};
CB=function(a){a.ia()||(a.yc=!1,a.S("dataloaded"))};
vB=function(a,b,c){c=void 0===c?!1:c;a.ka=b;g.C(a,b);b.Tc=a.Tc;b.Ne=a.Ne;b.Ah=a.Ah;b.Pj=a.Pj;DB(a)&&a.kd.push("webgl");a.ka.isLive||(a.xa=!1);var d=b.sourceUrl.split("/");-1!=d.indexOf("manifest_duration")&&(a.sl=parseInt(d[d.indexOf("manifest_duration")+1],10));b.B&&(c?b.subscribe("refresh",a.ZB,a):b.subscribe("cuepointsadded",a.Cy,a));uw(b)&&(a.hn=!0)};
EB=function(a){return a.Qc?!0:!!a.ka&&uw(a.ka)};
mia=function(a,b){var c=b||kB(a);if(a.ka&&!c){if(nB(a)){c=a.ka;var d=a.xa;if(!c.o["0"]){var e=new Nv("0","fakesb",void 0,new Iv(0,0,0,void 0,void 0,"auto"),null,null,1);c.o["0"]=d?new Vv(new jv("http://www.youtube.com/videoplayback"),e,"fake"):new lw(new jv("http://www.youtube.com/videoplayback"),e,new hu(0,0),new hu(0,0),0,NaN)}}oB(a,"html5_enable_cobalt_experimental_vp9_decoder")&&(a.Xa.B.A=!0);return Zga(pB(a),a.Xa.B,a.ka,a.kc,a.ha("html5_dynamic_av1_hybrid_threshold")).then(a.ww,void 0,a)}return Fr()};
g.FB=function(a){return sB(a)&&a.Af?(a={},a.fairplay="https://youtube.com/api/drm/fps?ek=uninitialized",a):a.Fa&&a.Fa.Qc||null};
GB=function(a){var b=a.Ia&&a.Ia.paidContentOverlay&&a.Ia.paidContentOverlay.paidContentOverlayRenderer||null;return b&&b.text?g.R(b.text):a.nO};
HB=function(a){var b=a.Ia&&a.Ia.paidContentOverlay&&a.Ia.paidContentOverlay.paidContentOverlayRenderer||null;return b&&b.durationMs?g.nd(b.durationMs):a.MC};
IB=function(a){var b="";if(a.Wu)return a.Wu;a.xa&&(b=a.allowLiveDvr?"dvr":"live");return b};
g.JB=function(a,b){return"string"!==typeof a.keywords[b]?null:a.keywords[b]};
KB=function(a){return!!(a.Ge||a.adaptiveFormats||a.so||a.Rl||a.hlsvp)};
LB=function(a){var b=g.fb(a.kd,"ypc");a.ypcPreview&&(b=!1);return a.isValid()&&!a.yc&&(KB(a)||g.fb(a.kd,"fresca")||g.fb(a.kd,"heartbeat")||b)};
tB=function(a,b){var c=aq(a),d={};if(b)for(var e=g.p(b.split(",")),f=e.next();!f.done;f=e.next())(f=f.value.match(/^([0-9]+)\/([0-9]+)x([0-9]+)(\/|$)/))&&(d[f[1]]={width:f[2],height:f[3]});e=g.p(c);for(f=e.next();!f.done;f=e.next()){f=f.value;var h=d[f.itag];h&&(f.width=h.width,f.height=h.height)}return c};
fia=function(a){if(MB(a)&&(a.errorDetail="0",a.Em)){var b=a.Em.embeddedPlayerErrorMessageRenderer;b&&(a.hG=b.embeddedPlayerErrorMessageRenderer)}};
lB=function(a,b){a.showShareButton=!!b;if(b){var c=b.buttonRenderer&&b.buttonRenderer.navigationEndpoint;c&&(a.fo=!!c.copyTextEndpoint)}};
eia=function(a,b,c){c=c.thumbnailPreviewRenderer;var d=c.controlBgHtml;null!=d?(a.yf=d,a.fc=!0):(a.yf="",a.fc=!1);if(d=c.defaultThumbnail)a.dg=bA(d);(d=c.videoDetails&&c.videoDetails.embeddedPlayerOverlayVideoDetailsRenderer)&&mB(a,b,d);if(b=c.videoDetails&&c.videoDetails.musicEmbeddedPlayerOverlayVideoDetailsRenderer)a.Zt=b.title,a.Yt=b.byline,b.musicVideoType&&(a.musicVideoType=b.musicVideoType);a.Zi=!!c.addToWatchLaterButton;lB(a,c.shareButton);c.playButton&&c.playButton.buttonRenderer&&c.playButton.buttonRenderer.navigationEndpoint&&
(b=c.playButton.buttonRenderer.navigationEndpoint,b.watchEndpoint&&(b=b.watchEndpoint,b.watchEndpointSupportedOnesieConfig&&b.watchEndpointSupportedOnesieConfig.html5PlaybackOnesieConfig&&(a.ur=new bia(b.watchEndpointSupportedOnesieConfig.html5PlaybackOnesieConfig))));c.videoDurationSeconds&&(a.lengthSeconds=g.nd(c.videoDurationSeconds));a.ha("web_player_include_innertube_commands")&&c.webPlayerActionsPorting&&hA(a,c.webPlayerActionsPorting)};
mB=function(a,b,c){var d=c.channelThumbnail;d&&(d=d.thumbnails)&&(d=d[0])&&(b.profile_picture=d.url);if(d=c.channelThumbnailEndpoint&&c.channelThumbnailEndpoint.channelThumbnailEndpoint)if(d=d.urlEndpoint&&d.urlEndpoint.urlEndpoint)b.channel_path=d.url;if(d=c.collapsedRenderer)if(d=d.embeddedPlayerOverlayVideoDetailsCollapsedRenderer){var e=d.title;e&&(b.title=g.R(e));if(d=d.subtitle)b.subtitle=g.R(d)}if(c=c.expandedRenderer)if(c=c.embeddedPlayerOverlayVideoDetailsExpandedRenderer){if(d=c.title)b.expanded_title=
g.R(d);if(d=c.subtitle)b.expanded_subtitle=g.R(d);if(c=c.subscribeButton)if(c=c.subscribeButtonRenderer)b.ucid=c.channelId,b.subscribed=c.subscribed,a.Ql=!!c.notificationPreferenceToggleButton,c.notificationPreferenceToggleButton&&c.notificationPreferenceToggleButton.toggleButtonRenderer&&(b=c.notificationPreferenceToggleButton.toggleButtonRenderer,b.isToggled?(a.Lw=b.toggledServiceEndpoint||null,a.Kw=b.defaultServiceEndpoint||null):(a.Lw=b.defaultServiceEndpoint||null,a.Kw=b.toggledServiceEndpoint||
null))}};
g.NB=function(a){return a.xa&&!a.allowLiveDvr};
OB=function(a){return a.xa&&a.allowLiveDvr};
DB=function(a){return a.yh()||a.xh()||a.ll()||a.rh()};
nia=function(a){a.Aa=a.Aa.A};
g.PB=function(a){if(a.Ew)return null;var b=a.rA;b||(b=a.Ia&&a.Ia.endscreen&&a.Ia.endscreen.endscreenUrlRenderer&&a.Ia.endscreen.endscreenUrlRenderer.url);return b||null};
g.QB=function(a){return a.Ew?null:a.Ia&&a.Ia.endscreen&&a.Ia.endscreen.endscreenRenderer||null};
g.RB=function(a){return a.Ia&&a.Ia.cards&&a.Ia.cards.cardCollectionRenderer||null};
g.SB=function(a){if(!a.Ia||!a.Ia.annotations)return null;a=g.p(a.Ia.annotations);for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.playerAnnotationsExpandedRenderer&&b.playerAnnotationsExpandedRenderer.featuredChannel)return b.playerAnnotationsExpandedRenderer;return null};
TB=function(a){return a.adFormat&&"1_5"!=a.adFormat?"adunit":a.Xa.ba};
UB=function(a){return a.Pi||"detailpage"==TB(a)||a.mutedAutoplay};
VB=function(a){if(UB(a)){if("detailpage"==TB(a))return a.Jj||0<a.Lg;if("adunit"!=TB(a)||!a.Nn)return!0}return!1};
WB=function(a){var b=1,c=g.O(a.Xa.experiments,"html5_default_ad_gain");c&&a.isAd()&&(b=c);return Math.min(1,Math.pow(10,-a.Tn/20))||b};
nB=function(a){var b=["MUSIC_VIDEO_TYPE_ATV","MUSIC_VIDEO_TYPE_PRIVATELY_OWNED_TRACK"],c="TVHTML5_SIMPLY"==a.Xa.deviceParams.c&&"MUSIC"==a.Xa.deviceParams.ctheme;!a.Ak&&(Sy(a.Xa)||c)&&b.includes(a.musicVideoType)&&(a.Ak=!0);if(b=g.il())b=/Starboard\/([0-9]+)/.exec(g.Pc),b=10>(b?parseInt(b[1],10):NaN);c=a.Xa;c=("TVHTML5_CAST"==c.deviceParams.c||"TVHTML5"==c.deviceParams.c&&(c.deviceParams.cver.startsWith("6.20130725")||c.deviceParams.cver.startsWith("6.20130726")))&&"MUSIC"==a.Xa.deviceParams.ctheme;
var d;if(d=!a.Ak)c||(c=a.Xa,c="TVHTML5"===c.deviceParams.c&&c.deviceParams.cver.startsWith("7")),d=c;d&&!b&&(b="MUSIC_VIDEO_TYPE_PRIVATELY_OWNED_TRACK"===a.musicVideoType,c=(a.ha("cast_prefer_audio_only_for_atv_and_uploads")||a.ha("kabuki_pangea_prefer_audio_only_for_atv_and_uploads"))&&"MUSIC_VIDEO_TYPE_ATV"===a.musicVideoType,b||c)&&(a.Ak=!0);return!a.Xa.deviceHasDisplay||a.Ak&&a.Xa.A};
XB=function(a){return!!(a.ha("hoffle_save")&&a.adaptiveFormats&&a.Pk&&a.Xa.A)};
BB=function(a,b){if(a.Pk!=b&&(a.Pk=b)&&a.ka){var c=a.ka,d;for(d in c.o){var e=c.o[d];e.C=!1;e.o=null}}};
qB=function(a){return!(!(a.ha("hoffle_load")&&a.adaptiveFormats&&Pz(a.videoId))||a.Pk)};
YB=function(a){if(!a.ka||!a.Fa||!a.sc)return!1;var b=a.ka.o;return!!b[a.Fa.id]&&mv(b[a.Fa.id].u.o)&&!!b[a.sc.id]&&mv(b[a.sc.id].u.o)};
MB=function(a){return(a=a.Em)&&a.showError?a.showError:!1};
ZB=function(a){return a.ha("disable_rqs")?!1:oB(a,"html5_high_res_logging")};
oB=function(a,b){return a.ha(b)?!0:(a.au||"").includes(b+"=true")};
oia=function(a){return(a=/html5_log_experiment_id_from_player_response_to_ctmp=([0-9]+)/.exec(a.au))?a[1]:null};
hB=function(a,b){var c=b.video_masthead_ad_quartile_urls;c&&(a.Ar=c.quartile_0_url,a.Wv=c.quartile_25_url,a.Yv=c.quartile_50_url,a.bw=c.quartile_75_url,a.Uv=c.quartile_100_url,a.Br=c.quartile_0_urls,a.Xv=c.quartile_25_urls,a.Zv=c.quartile_50_urls,a.cw=c.quartile_75_urls,a.Vv=c.quartile_100_urls)};
kA=function(a){return a?wx()?!0:$B&&5>aC?!1:!0:!1};
jA=function(a){var b={};(0,g.y)(a,function(c){var d=c.split("=");2==d.length?b[d[0]]=d[1]:b[c]=!0});
return b};
gA=function(a){if(a){if(gv(a))return a;a=hv(a);if(gv(a,!0))return a}return""};
g.bC=function(a,b){this.type=a||"";this.id=b||""};
g.cC=function(a,b){g.N.call(this);this.A=a;this.startSeconds=0;this.shuffle=!1;this.index=0;this.title="";this.length=0;this.items=[];this.yc=this.loaded=!1;this.Ac=this.Zy=this.o=null;this.views=0;this.order=[];this.dg={};this.u=0;var c=b.session_data;c&&(this.Ac=Yp(c));this.C=0!==b.fetch;this.index=Math.max(0,Number(b.index)||0);this.loop=!!b.loop;this.startSeconds=Number(b.startSeconds)||0;this.F="1"===b.mob;this.title=b.playlist_title||"";this.description=b.playlist_description||"";this.author=
b.author||b.playlist_author||"";b.video_id&&(this.items[this.index]=b);if(c=b.api)"string"===typeof c&&16===c.length?b.list="PL"+c:b.playlist=c;if(c=b.list)switch(b.listType){case "user_uploads":this.yc||(this.listId=new g.bC("UU","PLAYER_"+c),this.loadPlaylist("/list_ajax?style=json&action_get_user_uploads_by_user=1",{username:c}));break;case "search":pia(this,c);break;default:var d=b.playlist_length;d&&(this.length=Number(d)||0);this.listId=new g.bC(c.substr(0,2),c.substr(2));(c=b.video)?(this.items=
c.slice(0),this.loaded=!0):qia(this)}else if(b.playlist){c=b.playlist.toString().split(",");0<this.index&&(this.items=[]);c=g.p(c);for(d=c.next();!d.done;d=c.next())(d=d.value)&&this.items.push({video_id:d});this.length=this.items.length;c=this.items.map(function(e){return e.video_id});
this.loadPlaylist("/list_ajax?style=json&action_get_templist=1",{video_ids:c.join(",")});this.loaded=!0}this.setShuffle(!!b.shuffle);if(c=b.suggestedQuality)this.quality=c;this.dg=Zz(b,"playlist_");this.B=(c=b.thumbnail_ids)?c.split(","):[]};
dC=function(a){return!!(a.playlist||a.list||a.api)};
eC=function(a){var b=a.index+1;return b>=a.length?0:b};
fC=function(a){var b=a.index-1;return 0>b?a.length-1:b};
gC=function(a,b){a.index=g.Td(b,0,a.length-1);a.startSeconds=0};
pia=function(a,b){if(!a.yc){a.listId=new g.bC("SR",b);var c={search_query:b};a.F&&(c.mob="1");a.loadPlaylist("/search_ajax?style=json&embeddable=1",c)}};
qia=function(a){if(!a.yc){var b=b||a.listId;b={list:b};var c=a.Ca();c&&c.videoId&&(b.v=c.videoId);a.loadPlaylist("/list_ajax?style=json&action_get_list=1",b)}};
hC=function(a,b){if(b.video&&b.video.length){a.title=b.title||"";a.description=b.description;a.views=b.views;a.author=b.author;var c=b.loop;c&&(a.loop=c);c=a.Ca();a.items=[];for(var d=g.p(b.video),e=d.next();!e.done;e=d.next())if(e=e.value)e.video_id=e.encrypted_id,a.items.push(e);a.length=a.items.length;(d=b.index)?a.index=d:a.findIndex(c);a.setShuffle(!1);a.yc=!1;a.loaded=!0;a.u++;a.o&&a.o()}};
iC=function(a,b){a.o=b;a.loaded&&g.Jo(a.o,0)};
jC=function(){};
g.kC=function(){g.A.call(this);this.A=null;this.G=this.F=!1;this.C=new g.pf;g.C(this,this.C)};
lC=function(a){a=a.Rm();return 1>a.length?NaN:a.end(a.length-1)};
mC=function(a,b){a.A&&null!==b&&b.o===a.A.o||(a.A&&a.A.dispose(),a.A=b)};
nC=function(a){return bx(a.Gd(),a.getCurrentTime())};
ria=function(a,b){if(0==a.Oe()||0<a.Nf())return!1;var c=0<a.getCurrentTime();if(0<=b){var d=a.Rm();if(d.length||!c)return Zw(d,b)}return c};
oC=function(a){var b=a.Gd();return 0<ax(b)&&a.getDuration()?$w(b,a.getCurrentTime()):0};
pC=function(a){var b=a.Gd();return 0<ax(b)&&a.getDuration()?b.end(b.length-1):0};
qC=function(a){var b=a.getDuration();return Infinity==b?1:b?oC(a)/b:0};
rC=function(a){switch(a.Nf()){case 2:return"progressive.net.retryexhausted";case 3:return"fmt.decode";case 4:return"fmt.unplayable";case 5:return"drm.unavailable";case 1E3:return"capability.changed";default:return null}};
sC=function(a,b,c){g.Oe.call(this,b,a);this.u=c||null};
g.tC=function(a){g.kC.call(this);this.o=a;this.u={}};
uC=function(){this.o=[];this.u=[];this.A=[]};
wC=function(a,b,c){c=g.ue(c?"AUDIO":"VIDEO");g.Ta(c,sia);g.fp(c,"loadeddata",(0,g.x)(c.KF,c));wy&&6<=aC&&g.fp(c,"webkitbeginfullscreen",(0,g.x)(c.play,c));a.u.push(c);b?a.A.push(c):vC(a,c);return c};
vC=function(a,b){g.fb(a.u,b)&&!g.fb(a.o,b)&&(b.src||b.load(),g.kb(a.A,b)||a.o.push(b))};
tia=function(){this.u=200;this.o=12};
uia=function(a){var b=new tia;b.u=g.O(a.experiments,"html5_gapless_ended_transition_buffer_ms");b.o=g.O(a.experiments,"html5_gapless_max_played_ranges");return b};
g.xC=function(a,b,c,d){d=void 0===d?!1:d;g.kC.call(this);this.o=a;this.u=b;this.B=c;this.I=d};
yC=function(a,b,c){this.audio=a;this.video=b;this.reason=c};
zC=function(){var a=this;this.u=this.A=kaa;this.o=new Gf(function(b,c){a.A=b;a.u=c})};
via=function(a,b){this.G=a;this.u=b;this.C=a.sF;this.F=new Uint8Array(this.C);this.B=this.A=0;this.o=null;this.I=[];this.N=this.R=null;this.M=new zC};
wia=function(a){var b=AC(a);b=Oz(a.G.A,a.u.info,b);BC(a,b)};
CC=function(a){return!!a.o&&a.o.C};
EC=function(a,b){if(!CC(a)){if(1==b.info.type)a.R=ju(0,b.o.getLength());else if(2==b.info.type){if(!a.o||1!=a.o.type)return;a.N=ju(a.B*a.C+a.A,b.o.getLength())}else if(3==b.info.type){if(3==a.o.type&&!ou(a.o,b.info)&&(a.I=[],b.info.u!=qu(a.o)||0!=b.info.A))return;if(b.info.B)a.I.map(function(c){return DC(a,c)}),a.I=[];
else{a.I.push(b);a.o=b.info;return}}a.o=b.info;DC(a,b);xia(a)}};
DC=function(a,b){for(var c=0,d=Eu(b.o);c<d.length;){var e=Math.min(d.length-c,a.F.byteLength-a.A),f=new Uint8Array(d.buffer,d.byteOffset+c,e);a.F.set(f,a.A);a.A+=e;c+=e;if(a.A==a.F.length){if(b.info===a.o&&CC(a)&&c===d.length)break;e=AC(a);e=Oz(a.G.A,a.u.info,e,a.B,a.F);BC(a,e);a.F=new Uint8Array(a.C);a.A=0;a.B+=1}}};
xia=function(a){if(CC(a)){var b=new Uint8Array(a.F.buffer,0,a.A);var c={lmt:a.u.lastModified,docid:a.G.A,fmtid:a.u.info.id,type:a.u.info.mimeType.split(";")[0],csz:a.C,clen:a.B*a.C+a.A};c="local://localhost/videoplayback?"+Zp(c);c={itag:uu(a.u.info),type:a.u.info.mimeType,bitrate:8*a.u.info.o,lmt:""+a.u.lastModified,init:a.R.toString(),index:a.N.toString(),mket:Math.round(a.u.index.fi()).toString(),avbr:Math.round(a.u.info.u).toString(),url:c};c=Zp(c);b=Oz(a.G.A,a.o.o.info,c,a.B,b);BC(a,b,!0)}};
AC=function(a){a={itag:a.u.info.id,dlt:Math.round(a.o?a.o.F:0),mket:Math.round(a.u.index.fi()),avbr:Math.round(a.u.info.u),csz:a.C,lmt:a.u.lastModified};return Zp(a)};
BC=function(a,b,c){c=void 0===c?!1:c;b.then(function(d){(c||4===d)&&a.M.resolve(d)},function(d){a.M.reject(d)})};
yia=function(a){for(var b=new Uint8Array(0),c=new DataView(a.buffer,a.byteOffset,a.length),d=0;d<a.length-8;){var e=c.getUint32(d);if(1>=e)break;var f=c.getUint32(d+4);if(1836019574==f)d+=8;else{if(1886614376==f){f=a.subarray(d,d+e);var h=new Uint8Array(b.length+f.length);h.set(b);h.set(f,b.length);b=h}d+=e}}return b};
zia=function(a){a=Jt(a,1886614376);(0,g.y)(a,function(b){return!b.u});
return(0,g.Ic)(a,function(b){return new Uint8Array(b.data.buffer,b.offset+b.data.byteOffset,b.size)})};
Aia=function(a){var b=(0,g.zi)(a,function(e,f){return e+f.length},0),c=new Uint8Array(b),d=0;
(0,g.y)(a,function(e){c.set(e,d);d+=e.length});
return c};
Bia=function(a,b){this.A=a;this.G=this.F=!1;this.length=b?b:0;this.u=0;this.B=null;this.o=[];this.C=null;this.length?1!=this.A.length||this.A[0].Wa||(this.A[0].Wa=this.length):1==this.A.length||(0,g.yi)(this.A,function(c){return!!c.range})};
Cia=function(a){return a.length-a.u+a.o.reduce(function(b,c){return b+c.o.getLength()},0)};
FC=function(a,b,c,d){var e=this;this.zi=a;this.Xc=c;this.loaded=this.status=0;this.error="";a=iu(this.zi.get("range")||"");if(!a)throw Error("bad range");this.range=a;this.o=new xu;Dia(this).then(d,function(f){e.error=""+f||"unknown_err";d()});
b()};
Dia=function(a){return g.th(a,function c(){var d=this,e,f,h,l,m,n,q,r,u,w,z,B,E;return g.za(c,function(F){if(1==F.o){d.status=200;e=d.zi.get("docid");f=d.zi.get("fmtid");h=+(d.zi.get("csz")||0);if(!e||!f||!h)throw Error("Invalid local URL");l=d.range;m=Math.floor(l.start/h);n=Math.floor(l.end/h);q=m}if(5!=F.o)return q<=n?g.ra(F,qha(e,f,q),5):F.Gc(0);r=F.u;u=q*h;w=(q+1)*h;z=Math.max(0,l.start-u);B=Math.min(l.end+1,w)-(z+u);E=new Uint8Array(r.buffer,z,B);d.o.append(E);d.loaded+=B;d.loaded<l.length&&
d.Xc((0,g.D)(),d.loaded);q++;return F.Gc(2)})})};
Eia=function(a){this.schedule=a;this.o=NaN;this.u=[];this.totalBytes=0};
GC=function(a,b,c,d){var e=void 0===d?{}:d;d=void 0===e.Fe?!1:e.Fe;var f=void 0===e.zg?!1:e.zg,h=void 0===e.Kj?!1:e.Kj,l=e.Eg,m=e.Sa;e=e.Id;this.Z=null;this.U=this.o=NaN;this.sa=0;this.R=this.aa=this.u=this.B=NaN;this.fa=this.ba=this.isActive=!1;this.A=0;this.T=NaN;this.I=this.F=Infinity;this.N=NaN;this.ga=!1;this.G=this.M=NaN;this.C=this.ea=void 0;this.Fe=d;this.zg=f;this.Kj=h;this.Eg=l;this.Sa=m;this.Id=e;this.schedule=a;this.ra=b;this.ua=c;this.snapshot=cy(this.schedule)};
HC=function(a){return{rt:((0,g.D)()-a.o).toFixed(),lb:a.u.toFixed(),pt:(1E3*a.T).toFixed(),pb:a.ra.toFixed(),stall:(1E3*a.A).toFixed(),elbowTime:(a.U-a.o).toFixed(),elbowBytes:a.sa.toFixed()}};
IC=function(a){!a.G&&a.Z&&(a.G=a.Z(),3===a.G&&(a.ea=new Eia(a.schedule)));return a.G};
MC=function(a,b,c,d){var e=(b-a.B)/1E3,f=c-a.u,h=IC(a);if(3===h&&f){var l=a.ea;l.u.push({iU:f,CU:isNaN(l.o)?NaN:d-l.o,pU:d});l.o=d}a.isActive?1===h&&0<f&&(.2<e||1024>f?(a.A+=e,.2<e&&LC(a,.05,f)):LC(a,e,f),a.fa=!0):JC(a,c)&&(1===h&&(d=(b-a.o)/1E3,KC(a)||a.zg||(h=a.schedule,h.C.A(1,d),dy(h))),a.U=b,a.sa=c,a.isActive=!0);a.zg||$x(a.schedule,e,f);a.B=b;a.u=c};
LC=function(a,b,c){if(!a.zg){b=Math.max(b,.05);var d=a.schedule,e=b;a=a.Kj;a=void 0===a?!1:a;d.u.A(void 0===b?e:b,c/e);a||(d.G=Xx())}};
OC=function(a,b,c){c=Math.round(c/1024);a.C&&a.C.push(NC(b-a.aa,c-a.R));a.aa=b;a.R=c};
JC=function(a,b){return b?a.Eg&&1!==IC(a)?!0:2048<=b:!1};
PC=function(a){return JC(a,a.u)};
QC=function(a){a.N=a.o+1E3*a.snapshot.delay;a.ga=!1};
RC=function(a,b){a.Eg&&void 0!==a.Sa&&void 0!==a.Id&&(a.F=Math.min(a.F,Fia(a.Eg,a.Sa,a.o,b)),a.I=Math.min(a.I,Gia(a.Eg,a.Sa,a.o,b,a.Id)),a.F<=a.o?QC(a):(a.N=a.F,a.ga=!0))};
KC=function(a){a.Eg&&RC(a,(0,g.D)());return a.ga};
SC=function(a,b){b=void 0===b?(0,g.D)():b;if(a.Eg){RC(a,b);var c=a.G?a.Eg?1!==IC(a):!1:a.F!==a.I;if(c){if(c=a.I,b<c){a.M=a.I;return}}else c=a.F;c=Math.max(c,a.N)}else c=a.N;var d=a.ra-a.u;0>d&&(d=0);d=1E3*(d*a.snapshot.stall+d/a.snapshot.byterate);d=PC(a)?d+b:d+Math.max(b,c);a.M=d};
NC=function(a,b){for(var c="";4095<a;)c+=NC(4095,0),a-=4095;for(;4095<b;)c+=NC(a,4095),b-=4095,a=0;return c+("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(a>>6&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(a&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b>>6&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b&63))};
TC=function(a,b,c,d,e,f,h){var l=void 0===h?{}:h;h=void 0===l.method?"GET":l.method;var m=l.headers,n=l.body;l=void 0===l.credentials?"include":l.credentials;this.T=c;this.R=d;this.U=e;this.policy=f;this.status=0;this.response=void 0;this.N=!1;this.u=0;this.I=NaN;this.aborted=this.F=this.M=!1;this.errorMessage="";this.method=h;this.headers=m;this.body=n;this.credentials=l;this.o=new xu;this.id=Hia++;this.B=window.AbortController?new AbortController:void 0;this.start(a);this.startTime=Date.now();b()};
WC=function(a){a.A.read().then(function(b){if(!a.ia()){var c;window.performance&&window.performance.now&&(c=window.performance.now());var d=Date.now(),e=b.value?b.value:void 0;a.C&&(a.o.append(a.C),a.C=void 0);b.done?(a.A=void 0,UC(a)):(a.u+=e.length,VC(a)?a.o.append(e):a.C=e,a.T(d,a.u,c),WC(a))}},function(b){a.onError(b)}).then(void 0,g.L)};
UC=function(a){if(!a.ia()){a.M=!0;if(VC(a)&&!a.o.getLength()&&!a.F&&a.u){Xv(a);var b=new Uint8Array(8),c=new DataView(b.buffer);c.setUint32(0,8);c.setUint32(4,1936419184);a.o.append(b);a.u+=b.length}a.R()}};
VC=function(a){var b=a.Uc("content-type");b="audio/mp4"===b||"video/mp4"===b;return a.policy.o&&a.policy.Dd&&Xv(a)&&b};
XC=function(a,b,c,d,e){var f=this;this.status=0;this.ia=this.A=!1;this.u=NaN;this.o=new XMLHttpRequest;this.o.open("GET",a);this.o.responseType="arraybuffer";this.o.withCredentials=!0;this.o.onreadystatechange=function(){2===f.o.readyState&&f.F()};
this.B=d;this.C=c;this.F=e;a=Ho(function(){if(!f.ia){f.status=f.o.status;try{f.response=f.o.response,f.u=f.response.byteLength}catch(h){}f.A=!0;f.B()}});
this.o.addEventListener("load",a,!1);this.o.addEventListener("error",a,!1);this.o.send();b();this.o.addEventListener("progress",Ho(function(h){f.Xc(h)}),!1)};
YC=function(a,b,c,d){this.u=a;this.info=b;this.timing=c;this.ea=d;this.state=1;this.o=this.fa=null;this.G=this.M=0;this.ba=new g.H(this.HO,a.N,this);this.C=this.B=this.I=null;this.F=0;this.T=this.A=null;this.U=0;this.sa=this.R=!1;this.N=this.u.Oa&&(Cv(this.info)||this.info.Fe());this.ga=!1;this.aa=this.Z=null};
Iia=function(a,b){a.ia();a.I=b};
ZC=function(a){return a.B?lv(a.B.uf):""};
$C=function(a){var b=HC(a.timing);b.shost=ZC(a);b.rn=a.M.toString();a.F&&(b.rc=a.F.toString());b.itag=""+uu(a.info.o[0].o.info);b.ml=""+ +a.info.o[0].o.td();b.sq=""+a.info.o[0].u;if(a.B){var c=a.B.uf;kv(c);var d=decodeURIComponent(c.get("mn")||"").split(",");b.ifi=""+ +("/videoplayback"===c.path&&1<d.length&&!!d[1])}410!=a.F&&500!=a.F&&503!=a.F||(b.fmt_unav="true");a.o&&a.o.wl()&&(b.msg=a.o.wl());a.ga&&(b.smb="1");a.A&&(a=a.A.o,a.length&&Ku(a[0],b));return b};
aD=function(a){ZC(a);return Xu(a.ea,ZC(a))};
Jia=function(a,b){if(400<=b.status)return a.C="net.badstatus",7;if(!b.Tp())return a.C=204==b.status?"net.nocontent":"net.connect",7;var c="";if(bD(a)){var d=b.Zu();2048>=d.getLength()&&(c=Eu(d),c=Mt(c),c=dv(c)?c:"")}if(c){d=aD(a);(0,g.M)();d.started=0;d.u=0;d.o=0;d=a.info;var e=a.B;g.zv(d.u,e,c);d.requestId=e.get("req_id");return 5}c=b.Hq();if((d=!!a.T&&a.T.length)&&d!=c||b.dw())return a.C="net.closed",7;cD(a,!0);if(a.u.Lx&&!d&&a.A&&(d=a.A.o,d.length&&!Ku(d[0])))return a.C="net.closed",7;var f=dD(a)?
b.Uc("X-Bandwidth-Est"):0;if(d=dD(a)?b.Uc("X-Bandwidth-Est3"):0)a.sa=!0,a.u.FE&&(f=d);d=a.timing;e=(0,g.D)();f=f?parseInt(f,10):0;if(!d.ba){d.ba=!0;if(!d.zg){e=e>d.o&&4E12>e?e:(0,g.D)();OC(d,e,c);MC(d,e,c);var h=IC(d);if(2===h&&f)LC(d,d.u/f,d.u);else if(2===h||1===h)f=(e-d.o)/1E3,(f<=d.schedule.N.o||!d.schedule.N.o)&&!d.fa&&PC(d)&&LC(d,f,c),PC(d)&&(f=d.schedule,c=Math.max(c,2048),f.o.A(1,d.A/c),dy(f));Yx(d.schedule,(e-d.o)/1E3,d.u,d.T,d.Fe,d.Kj)}d.deactivate()}c=aD(a);(0,g.M)();c.started=0;c.u=0;
c.o=0;a.info.u.u=0;(0,g.M)()<eD+3E5||!a.B||mv(a.B.uf)||!(c=ZC(a))||0>c.indexOf("googlevideo.com")||(g.Ws("yt-player-bandaid-host",{vO:c},432E3),eD=(0,g.M)());return 6};
gD=function(a){if("net.timeout"==a.C){var b=a.timing,c=(0,g.D)();if(!b.zg){c=c>b.o&&4E12>c?c:(0,g.D)();OC(b,c,1024*b.R);var d=(c-b.o)/1E3;if(2!==IC(b))if(PC(b)){b.A+=(c-b.B)/1E3;var e=b.schedule,f=b.u;f=Math.max(f,2048);e.o.A(1,b.A/f);dy(e)}else KC(b)||b.zg||(e=b.schedule,e.C.A(1,d),dy(e)),b.U=c;Yx(b.schedule,d,b.u,b.T,b.Fe,b.Kj);$x(b.schedule,(c-b.B)/1E3,0)}}else(0,g.D)();"net.nocontent"!=a.C&&("net.timeout"==a.C||"net.connect"==a.C?(b=aD(a),b.u+=1):(b=aD(a),b.o+=1),a.info.u.u++);fD(a,7)};
hD=function(a){a.ia();if(1==a.state)return!0;var b=aD(a);return 100>b.u&&b.o<a.u.Lo};
fD=function(a,b){a.state=b;5<=a.state&&(a.u.Mc?iD(a):a.timing.deactivate());a.I&&a.I(a)};
jD=function(a,b){if(b){var c=aD(a);c.A+=1}iD(a);a.C="net.timeout";gD(a)};
dD=function(a){return(0,g.yi)(a.info.o,function(b){return 3==b.type})};
iD=function(a){if(a.o){var b=a.o;a.o=null;b.abort()}a.timing.deactivate()};
bD=function(a){var b=a.o.Uc("content-type"),c=a.o.Mm();return(!kD(a)||!b||-1!=b.indexOf("text/plain"))&&(!c||2048>=c)};
Kia=function(a,b){var c=(0,g.x)(a.PJ,a),d=(0,g.x)(a.fO,a),e=(0,g.x)(a.QJ,a),f=(0,g.x)(a.eO,a);return mv(a.B.uf)?new FC(a.B,d,e,c):lD(a)?new TC(b,d,e,c,f,a.u.B):new XC(b,d,e,c,f)};
lD=function(a){return a.u.ea?a.u.yx&&!isNaN(a.info.Id)&&a.info.Id>a.u.gq?!1:Wv():!1};
kD=function(a){return a.o?a.o.Xr():!1};
mD=function(a){return 2>a.state||!a.A?!1:a.A.o.length||a.u.sa&&a.o&&a.o.Hf()?!0:!1};
Lia=function(a){nD(a);return a.A.o};
nD=function(a){a.u.sa&&a.o&&a.o.Hf()&&cD(a,!1)};
cD=function(a,b){if(b||kD(a)&&!bD(a)){if(!a.A){if(kD(a))a.info.range&&(c=a.info.range.length);else var c=a.o.Hq();a.A=new Bia(a.info.o,c)}for(;a.o.Hf();)a:{c=a.A;var d=a.o.Iq(),e=b&&!a.o.Hf();c.B&&(zu(c.B,d),d=c.B,c.B=null);for(var f=0,h=0,l=g.p(c.A),m=l.next();!m.done;m=l.next())if(m=m.value,m.range&&f+m.Wa<=c.u)f+=m.Wa;else{d.getLength();if(mu(m)&&!e&&c.u+d.getLength()-h<f+m.Wa){c.B=d.split(h).cj;break a}var n=c.u-f;var q=c,r=m;if(1==r.type){q.F=!0;var u=!1}else 3==r.type||4==r.type?(r=q.F&&!q.G,
q.G=!0,u=r):u=!1;q=c;var w=m,z=n;r=h;var B=d;n=u||m.o.NA()&&!n;var E=!!e;u=B.getLength()-r;w.range&&(u=Math.min(w.Wa-z,u));E=w.range?w.A+z+u==w.range.length:E;w=new lu(w.type,w.o,w.range,"reslice_"+w.I,w.u,w.startTime,w.duration,w.A+z,u,E&&w.C,E);z=u;r=B.split(r).cj.split(z).Vp;q.o.push(new Iu(w,r,n));q=u;c.u+=q;h+=q;f+=m.Wa;if(h==d.getLength())break}d.getLength()}}};
Mia=function(a){if(!a.u.B.Dd||!isNaN(a.info.Id)&&0<a.info.Id)return!1;if(!a.o||!a.o.bl())return!0;if(!Xv(a.o))return!1;if(isNaN(a.info.Id)){var b=a.o.Uc("x-head-seqnum");if(b&&parseInt(b,10)>a.info.o[0].u)return!1}return!0};
oD=function(a,b,c){this.initData=a;this.contentType=b;this.isPrefetch=c;this.o=this.cryptoPeriodIndex=NaN;this.u=[];this.Kc=!1};
pD=function(a){a:{var b=a.initData;try{for(var c=0,d=new DataView(b.buffer);c<d.byteLength-8;){var e=d.getUint32(c);if(1>=e)break;if(1886614376==d.getUint32(c+4)){var f=32;if(0<d.getUint8(c+8)){var h=d.getUint32(c+28);f+=16*h+4}var l=d.getUint32(c+f-4);try{var m=new ng(b.subarray(c+f,c+f+l)),n=new so;for(f=m;og(f)&&4!=f.u;)switch(f.A){case 2:var q=rg(f),r=q;Vg(n,2).push(r);break;case 4:q=rg(f);Xg(n,4,q);break;case 7:q=mg(f.o);Xg(n,7,q);break;case 9:q=mg(f.o);Xg(n,9,q);break;case 10:q=mg(f.o);Xg(n,
10,q);break;case 11:q=lg(f.o);Xg(n,11,q);break;case 12:q=mg(f.o);Xg(n,12,q);break;case 13:r=q=rg(f);Vg(n,13).push(r);break;case 14:q=new to;r=f;var u=q,w=hea,z=r.o.A,B=mg(r.o),E=r.o.o+B;r.o.A=E;w(u,r);r.o.o=E;r.o.A=z;r=n;u=q;w=to;ah(r,w,14);var F=r.o[14];F||(F=r.o[14]=[]);var G=u?u:new w,S=Vg(r,14);F.push(G);S.push(G.Td);break;case 15:q=qg(f);Xg(n,15,q);break;case 1:q=lg(f.o);Xg(n,1,q);break;case 3:q=qg(f);Xg(n,3,q);break;case 5:q=qg(f);Xg(n,5,q);break;case 6:q=qg(f);Xg(n,6,q);break;case 8:q=rg(f);
Xg(n,8,q);break;default:pg(f)}f=n;if(null!=f){var aa=f;break a}}catch(ec){}}c+=e}aa=null}catch(ec){aa=null}}if(null!=aa)for(b=Vg(aa,7),a.cryptoPeriodIndex||null==b||(a.cryptoPeriodIndex=b),b=Vg(aa,10),null!=b&&0<b&&!a.Kc&&a.o!==b&&(a.o=b),aa=Vg(aa,2),aa=!aa.length||aa[0]instanceof Uint8Array?aa:(0,g.Ic)(aa,rba),aa=g.p(aa),b=aa.next();!b.done;b=aa.next())a.u.push(g.xg(b.value,4))};
qD=function(a){this.o=a;this.offset=0};
rD=function(a){if(a.offset>=a.o.getLength())throw Error();return Gu(a.o,a.offset++)};
sD=function(a,b){b=void 0===b?!1:b;var c=rD(a);if(1===c){c=-1;for(var d=0;7>d;d++){var e=rD(a);-1===c&&255!==e&&(c=0);-1<c&&(c=256*c+e)}return c}d=128;for(e=0;6>e&&d>c;e++)c=256*c+rD(a),d*=128;return b?c:c-d};
tD=function(a,b){for(var c=0,d=0;d<b;d++)c=256*c+rD(a);return c};
uD=function(a){try{var b=sD(a,!0),c=sD(a,!1);return{id:b,size:c}}catch(d){return{id:-1,size:-1}}};
vD=function(a,b,c){g.N.call(this);var d=this;this.C=a;this.u=[];this.o=null;this.R=-1;this.I=0;this.Z=NaN;this.M=0;this.A=b;this.ra=c;this.F=NaN;this.ba=0;this.fa=-1;this.B=this.N=this.ga=this.T=this.ea=this.G=this.U=null;this.C.A&&(this.B=new via(this.C,this.A),this.B.M.o.then(function(e){d.B=null;1==e&&d.S("localmediachange",e)},function(){d.B=null;
d.S("localmediachange",4)}),wia(this.B));
this.sa=!1;this.aa=0};
wD=function(a){return a.u.length?a.u[0]:null};
xD=function(a){return a.u.length?a.u[a.u.length-1]:null};
ED=function(a,b,c){a.ea&&!pu(a.ea,c.info)&&(a.F=NaN,a.ba=0,a.fa=-1);a.ea=c.info;a.A=c.info.o;0==c.info.A?yD(a):!a.A.Ee()&&a.G&&vu(c.info,a.G);a.o?(c=Lu(a.o,c),a.o=c):a.o=c;a:{c=g.Mu(a.o.info.o.info);if(3!=a.o.info.type){if(!a.o.info.B)break a;6==a.o.info.type?zD(a,b,a.o):AD(a,a.o);a.o=null}for(;a.o;){var d=a.o.o.getLength();if(0>=a.R&&0==a.I){var e=a.o.o,f=-1,h=-1;if(c){for(var l=0;l+8<e.getLength();){var m=Hu(e,l),n=Hu(e,l+4);l+=m||1;if(1836019558===n)f=l;else if(1835295092===n){h=l;break}}0>h&&
(f=-1)}else{e=new qD(e);for(m=l=!1;;){n=e.offset;var q=uD(e),r=q.id;q=q.size;if(0>r)break;if(408125543!==r)if(524531317===r)l=!0,0<=q&&(h=e.offset+q,m=!0);else{if(l&&(160===r||163===r)&&(0>f&&(f=n),m))break;163===r&&(f=Math.max(0,f),h=e.offset+q);if(160===r){0>f&&(h=f=e.offset+q);break}e.skip(q)}}0>f&&(h=-1)}if(0>f)break;a.R=f;a.I=h-f}if(a.R>d)break;a.R?(d=BD(a,a.R),d.A&&!a.A.Ee()&&CD(a,d),zD(a,b,d),DD(a,d),a.R=0):a.I&&(d=BD(a,0>a.I?Infinity:a.I),a.I-=d.o.getLength(),DD(a,d))}}a.o&&a.o.info.B&&(DD(a,
a.o),a.o=null)};
AD=function(a,b){!a.A.Ee()&&0==b.info.A&&(g.Mu(b.info.o.info)||b.info.o.info.Kc())&&Su(b);if(1==b.info.type)try{CD(a,b),FD(a,b)}catch(d){g.L(d);var c=ru(b.info);c.hms="1";a.S("error",c||{})}b.info.o.Rp(b);a.B&&EC(a.B,b)};
Nia=function(a){var b=a.u.reduce(function(c,d){return c+d.o.getLength()},0);
a.o&&(b+=a.o.o.getLength());return b};
GD=function(a){return(0,g.Ic)(a.u,function(b){return b.info})};
HD=function(a){a.N&&!a.C.Ae&&a.S("placeholderrollback",a.N);a.N=null;a.G=null;a.ea=a.ga;a.F-=a.M;yD(a)};
BD=function(a,b){var c=a.o,d=Math.min(b,c.o.getLength());if(d==c.o.getLength())return a.o=null,c;c.o.getLength();d=Math.min(d,c.info.Wa);var e=c.o.split(d),f=e.Vp;e=e.cj;var h=new lu(c.info.type,c.info.o,c.info.range,c.info.I,c.info.u,c.info.startTime,c.info.duration,c.info.A,d,!1,!1);f=new Iu(h,f,c.A);c=new lu(c.info.type,c.info.o,c.info.range,c.info.I,c.info.u,c.info.startTime,c.info.duration,c.info.A+d,c.info.Wa-d,c.info.C,c.info.B);c=new Iu(c,e,!1);c=[f,c];a.o=c[1];return c[0]};
CD=function(a,b){b.o.getLength();var c=Ju(b);if(!a.C.mx&&Pv(b.info.o.info)&&"bt2020"===b.info.o.info.Ca().primaries){var d=new Nt(c);Pt(d,[408125543,374648427,174,224,21936,21937])&&(d=d.A+d.o,129==c.getUint8(d)&&1==c.getUint8(d+1)&&c.setUint8(d+1,9))}d=b.info.o.info;Ov(d)&&!Pv(d)&&(d=Ju(b),Vt(new Nt(d)),Ut([408125543,374648427,174,224],21936,d));b.info.o.info.isVideo()&&(d=b.info.o,d.info&&d.info.video&&4==d.info.video.projectionType&&!d.B&&(g.Mu(d.info)?d.B=zfa(c):d.info.Kc()&&(d.B=Bfa(c))));b.info.o.info.Kc()&&
b.info.isVideo()&&(c=Ju(b),Vt(new Nt(c)),Ut([408125543,374648427,174,224],30320,c)&&Ut([408125543,374648427,174,224],21432,c));if(a.A.info.audio&&g.Mu(b.info.o.info)){d=Ju(b);c=g.wt(d,0,1701606260);var e=g.wt(d,0,1836476516);if(c&&e){c.skip(2);var f=jt(c),h=lt(c);d=[];var l=[],m=[],n=[];if(f)for(f=0;f<h;++f)d.push(mt(c)),l.push(mt(c)),m.push(jt(c)),n.push(jt(c));else for(f=0;f<h;++f)d.push(kt(c)),l.push(kt(c)),m.push(jt(c)),n.push(jt(c));c=zt(e);c=new yfa(l[0]/c,d[0]/c)}else c=null;if(c){if(g.Mu(b.info.o.info))for(d=
Ju(b),l=g.wt(d,0,1701082227);l;)l.markAsSkip(),l=g.wt(d,l.offset+l.size,1701082227);a.sa=!0;a.C.Io&&a.S("gaplessinfo",c)}}a.A.Ee()||b.info.o.o||b.info.o.indexRange||(g.Mu(b.info.o.info)?(c=Ju(b),(d=Bt(c,0,1836019574))?(d=d.offset+d.size,l=new Uint8Array(d),l.set(new Uint8Array(c.buffer,c.byteOffset,d)),c=l):c=null):c=Cfa(new Nt(Ju(b))),c&&(b.info.o.o=c))};
zD=function(a,b,c){if(a.A.Ee()){if(a.sa&&a.A.Ee()&&c.info.u==c.info.o.index.ub()&&(b=Ju(c),b=g.wt(b,0,1953658222))){b.skip(1);var d=it(b)<<16|jt(b),e=d&1,f=d&4;if(d&256){var h=d&512,l=d&1024;d&=2048;var m=lt(b);2>m||(e&&b.skip(4),f&&b.skip(4),e=lt(b),b.skip((m-1)*(4+(h?4:0)+(l?4:0)+(d?4:0))-4),b.data.setUint32(b.offset+b.o,e))}}if(b=a.U&&!!a.U.A.A)if(b=c.info.isVideo())b=Ru(c),h=a.U,ID?(l=1/b,b=JD(a,b)>=JD(h)+l):b=a.getDuration()>=h.getDuration(),b=!b;b&&a.A.Ee()&&c.info.u==c.info.o.index.ub()&&(b=
a.U,ID?(l=Ru(c),h=1/l,l=JD(a,l),b=JD(b)+h-l):b=b.getDuration()-a.getDuration(),b=1+b/c.info.duration,xt(Ju(c),b))}else{h=!1;a.G||(Su(c),c.u&&(a.G=c.u,h=!0,vu(c.info,c.u),e=c.info.o.info,d=Ju(c),g.Mu(e)?It(d,1701671783):e.Kc()&&Ut([408125543],307544935,d)));if(d=e=Qu(c))d=c.info.o.info.Kc()&&160==Gu(c.o,0);if(d)a.M+=e,a.F=l+e;else{if(a.C.Bx){if(l=f=a.ra(Nu(c),1),0<=a.F&&6!=c.info.type){f-=a.F;var n=f-a.ba;d=c.info.u;var q=c.info.G;var r=a.T?a.T.u:-1,u=a.T?a.T.G:-1,w=a.T?a.T.duration:-1;(m=!a.C.im||
r==d-1&&0<d)&&1E-4<Math.abs(n)&&(a.C.tp&&a.S("avsyncissue",{audio:""+ +!!a.A.info.audio,sq:d.toFixed(),sliceStart:q,lastSq:r.toFixed(),lastSliceStart:u,lastSliceDuration:w,totalDrift:(1E3*f).toFixed(),segDrift:(1E3*n).toFixed()}),a.fa=d);n=0;m&&a.C.zx&&(a.C.Cd&&f>a.C.Cd||(l=a.F),a.C.Ax&&a.U&&!a.A.info.audio&&g.Mu(c.info.o.info)&&(q=a.U,m=q.fa,q=q.ba,r=.02<Math.abs(q-f),(d==m||d>m&&d>a.fa)&&r&&(d=Math.max(.95,Math.min(1.05,(e-(q-f))/e)),xt(Ju(c),d),d=Qu(c),n=e-d,e=d)));a.ba=f+n}}else isNaN(a.F)?f=
c.info.startTime:f=a.F,l=f;Ou(c,l)?(isNaN(a.Z)&&(a.Z=l),a.M+=e,a.F=l+e):(l=ru(c.info),l.smst="1",a.S("error",l||{}))}if(h&&a.G){h=KD(a,!0);wu(c.info,h);a.o&&wu(a.o.info,h);b=g.p(b.info.o);for(l=b.next();!l.done;l=b.next())wu(l.value,h);(c.info.B||a.o&&a.o.info.B)&&6!=c.info.type||(a.N=h,a.S("placeholderinfo",h),LD(a))}}FD(a,c);a.aa&&Pu(c,a.aa);a.T=c.info};
DD=function(a,b){if(b.info.B){a.ga=b.info;if(a.G){var c=KD(a,!1);a.S("segmentinfo",c);a.N||LD(a);a.N=null}yD(a)}a.B&&EC(a.B,b);if(c=xD(a))if(c=Lu(c,b,a.C.fj)){a.u.pop();a.u.push(c);return}a.u.push(b)};
yD=function(a){a.o=null;a.R=-1;a.I=0;a.G=null;a.Z=NaN;a.M=0;a.N=null};
FD=function(a,b){if(a.A.info.Qc){if(b.info.o.info.Kc()){var c=new Nt(Ju(b));if(Pt(c,[408125543,374648427,174,28032,25152,20533,18402])){var d=St(c,!0);c=16!=d?null:Zt(c,d)}else c=null;d="webm"}else b.info.N=zia(Ju(b)),c=Aia(b.info.N),d="cenc";c&&c.length&&(c=new oD(c,d),c.Kc=b.info.o.info.Kc(),b.u&&b.u.cryptoPeriodIndex&&(c.cryptoPeriodIndex=b.u.cryptoPeriodIndex),a.C.km&&b.u&&b.u.C&&(c.o=b.u.C),a.S("needkeyinfo",c))}};
LD=function(a){var b=a.G,c;b.o["Cuepoint-Type"]?c=new pt(MD?parseFloat(b.o["Cuepoint-Playhead-Time-Sec"])||0:-(parseFloat(b.o["Cuepoint-Playhead-Time-Sec"])||0),parseFloat(b.o["Cuepoint-Total-Duration-Sec"])||0,b.o["Cuepoint-Context"],b.o["Cuepoint-Identifier"]||"",Oia[b.o["Cuepoint-Event"]||""]||"unknown",1E3*(parseFloat(b.o["Cuepoint-Playhead-Time-Sec"])||0)):c=null;c&&(c.startSecs+=a.Z,a.S("cuepoint",c,b.u))};
KD=function(a,b){var c=a.G;if(c.o["Stitched-Video-Id"]||c.o["Stitched-Video-Duration-Us"]||c.o["Stitched-Video-Start-Frame-Index"]||c.o["Serialized-State"]){var d=c.o["Stitched-Video-Id"]?c.o["Stitched-Video-Id"].split(",").slice(0,-1):[];var e=[];if(c.o["Stitched-Video-Duration-Us"])for(var f=g.p(c.o["Stitched-Video-Duration-Us"].split(",").slice(0,-1)),h=f.next();!h.done;h=f.next())e.push((parseInt(h.value,10)||0)/1E6);e=[];if(c.o["Stitched-Video-Start-Frame-Index"])for(f=g.p(c.o["Stitched-Video-Start-Frame-Index"].split(",").slice(0,
-1)),h=f.next();!h.done;h=f.next())e.push(parseInt(h.value,10)||0);d=new wfa(d,c.o["Serialized-State"]?c.o["Serialized-State"]:"")}return new et(c.u,a.Z,b?c.lf:a.M,c.ingestionTime,"sq/"+c.u,void 0,void 0,b,d)};
JD=function(a,b){b=void 0===b?0:b;var c=b?Math.round(a.aa*b)/b:a.aa;a.A.A&&c&&(c+=a.A.A.o);return c+a.getDuration()};
ND=function(a,b){0>b||(a.u.forEach(function(c){return Pu(c,b)}),a.aa=b)};
OD=function(a,b,c){this.Z=a;this.o=b;this.B=[];this.A=new vD(a,b,c);this.u=this.G=null;this.U=0;this.R=b.info.o;this.T=0;this.I=b.ol();this.F=-1;this.aa=b.ol();this.C=this.I;this.M=!1;this.N=-1};
PD=function(a,b){b&&ID&&ND(a.A,b.lu());a.G=b};
QD=function(a){return a.G&&a.G.Gp()};
SD=function(a){for(;a.B.length&&6==a.B[0].state;){var b=a.B.shift();RD(a,b);b=b.timing;a.U=(b.B-b.o)/1E3}a.B.length&&mD(a.B[0])&&!a.B[0].info.Fe()&&RD(a,a.B[0])};
RD=function(a,b){if(mD(b)){b.R=!0;nD(b);var c=b.A,d=c.o;c.o=[];c.C=g.ab(d).info;c=g.p(d);for(d=c.next();!d.done;d=c.next())TD(a,b,d.value)}};
TD=function(a,b,c){switch(c.info.type){case 1:case 2:AD(a.A,c);break;case 4:var d=c.info.o.OA(c);c=c.info;var e=a.u;e&&e.o==c.o&&e.type==c.type&&(c.range&&e.range?e.range.start==c.range.start&&e.range.end==c.range.end:e.range==c.range)&&e.u==c.u&&e.A==c.A&&e.Wa==c.Wa&&(a.u=g.ab(d).info);d=g.p(d);for(c=d.next();!c.done;c=d.next())TD(a,b,c.value);break;case 3:ED(a.A,b,c);break;case 6:ED(a.A,b,c),a.u=c.info}};
UD=function(a){return wD(a.A)};
VD=function(a,b){var c=b.info;c.o.info.o>=a.R&&(a.R=c.o.info.o)};
ZD=function(a,b,c){c=void 0===c?!1:c;if(a.G){var d=a.G.Fd(),e=$w(d,b),f=NaN,h=QD(a);h&&(f=$w(d,h.o.index.wd(h.u)));if(e==f&&a.u&&a.u.Wa&&WD(XD(a),0))return b}a=YD(a,b,c);return 0<=a?a:NaN};
aE=function(a,b){a.o.td();var c=YD(a,b);if(0<=c)return c;c=a.A;c.B?(c=c.B,c=c.o&&3==c.o.type?c.o.startTime:0):c=Infinity;b=Math.min(b,c);a.u=a.o.nh(b).o[0];$D(a)&&a.G&&a.G.abort();a.T=0;return a.u.startTime};
bE=function(a){a.I=!0;a.C=!0;a.F=-1;aE(a,Infinity)};
cE=function(a){var b=0;(0,g.y)(a.B,function(c){var d=b;c=c.A&&c.A.length?Cia(c.A):Ev(c.info);b=d+c},a);
return b+=Nia(a.A)};
dE=function(a,b){if(!a.G)return 0;var c=QD(a);if(c&&c.C)return c.F;c=a.G.Fd(!0);return bx(c,b)};
fE=function(a){eE(a);a=a.A;a.u=[];yD(a)};
gE=function(a,b){var c;for(c=0;c<a.B.length&&b!==a.B[c];c++);if(c==a.B.length)b.R&&HD(a.A),b.dispose();else{for(;c<a.B.length;){var d=a.B.pop();d.R&&HD(a.A);d.dispose()}nu(b.info.o[0])?(b.A&&b.A.C?(c=b.A.C,c=new lu(c.type,c.o,c.range,"getEmptyStubAfter_"+c.I,c.u,c.startTime+c.duration,0,c.A+c.Wa,0,!1)):(c=b.info.o[0],c=new lu(c.type,c.o,c.range,"getEmptyStubBefore_"+c.I,c.u,c.startTime,0,c.A,0,!1)),a.u=c):a.u=null}};
$D=function(a){var b;!(b=!a.Z.Oh&&"f"===a.o.info.sb)&&(b=a.Z.G)&&(b=a.A,b=!!b.B&&CC(b.B));if(b)return!0;b=QD(a);if(!b)return!1;var c=b.C&&b.B;return a.aa&&0<a.N?c||b.u>=a.N:c};
XD=function(a){var b=[],c=QD(a);c&&b.push(c);b=g.nb(b,GD(a.A));(0,g.y)(a.B,function(d){(0,g.y)(d.info.o,function(e){d.R&&(b=(0,g.Ae)(b,function(f){return!(f.o!=e.o?0:f.range&&e.range?f.range.start+f.A>=e.range.start+e.A&&f.range.start+f.A+f.Wa<=e.range.start+e.A+e.Wa:f.u==e.u&&f.A>=e.A&&(f.A+f.Wa<=e.A+e.Wa||e.B))}));
(nu(e)||4==e.type)&&b.push(e)})});
a.u&&!Efa(a.u,g.ab(b),a.u.o.Ee())&&b.push(a.u);return b};
WD=function(a,b){if(!a.length)return!1;for(var c=b+1;c<a.length;c++)if(!pu(a[c-1],a[c]))return!1;return!0};
YD=function(a,b,c){c=void 0===c?!1:c;if(!a.u||!a.u.Wa)return NaN;a=XD(a);a:{var d=c;d=void 0===d?!1:d;for(var e=-1,f=0;f<a.length;++f){var h=a[f];if(h.G<=b)if(d)e=f;else if(h.startTime+h.duration>=b){b=f;break a}}b=e}return 0>b?NaN:WD(a,c?b:0)?a[b].startTime:NaN};
hE=function(a){return oj(a.B,function(b){return 4<=b.state})};
iE=function(a){return!(!a.u||a.u.o==a.o)};
jE=function(a){return iE(a)&&a.o.td()&&a.u.o.info.o<a.o.info.o};
kE=function(a,b,c){var d=xD(a.A);return(a=d?d.info:QD(a))&&!a.C?a.F>b&&a.F<b+c:!1};
eE=function(a){(0,g.y)(a.B,function(b){b.R&&HD(this.A);b.dispose()},a);
a.B=[];a.u=null};
lE=function(a){return!!a.u&&-1!=a.u.u&&a.u.u<a.o.index.Df()};
mE=function(a){var b=a.u;b&&-1==b.u&&(a=xD(a.A))&&nu(a.info)&&(a=a.info.u,b.I="updateLastSliceRequested",b.u=a)};
nE=function(a){return oj(a.B,function(b){return b.N})};
oE=function(a,b){this.u=a;this.o=b;this.A=1};
qE=function(a,b,c,d,e){e=void 0===e?!1:e;a.o.Pb&&(d=Math.abs(d));d/=a.A;var f=1/by(a.u);var h=.9*(d-a.o.Ce);h=Math.max(h,Zx(a.u)+2048*f);c=h/f*a.o.vx/(b+c);c=Math.min(c,d);a.o.zd&&e&&(c=Math.max(c,a.o.zd));return pE(a,c,b)};
pE=function(a,b,c){return Math.ceil(Math.max(Math.max(65536,a.o.rx*c),Math.min(Math.min(a.o.aa,31*c),Math.ceil(b*c))))};
Pia=function(a,b){var c=pE(a,b.video?a.o.Rx:a.o.Ph,b.o);return a.o.Xg&&b.video?Math.max(c,a.o.Xg):c};
rE=function(a){var b=by(a.u);if(a.o.Mo)return b;var c=a.o.ox,d=1E-9+Zx(a.u);b*=Math.min(1,c/(b*d));a.o.Wg&&(c=((Wx(a.u.A,.98)||0)-1)/2,c=Math.max(0,Math.min(1,c)),b*=1-a.o.Wg*c);return b};
sE=function(a){return rE(a)/a.A};
tE=function(a,b,c,d){g.N.call(this);this.B=0;this.u=b;this.o=c;this.C=a;this.M=d;this.F=0;this.G=this.C.u&&!this.C.ff;this.A=!1;this.I=null};
uE=function(a,b){var c=a.o.index,d=a.u.u;aw(c,d)||b&&b.u==d?(a.C=!aw(c,d),a.M=!aw(c,d)):(a.C=!0,a.M=!0)};
vE=function(a,b,c){if(!a.o.td())return 0!=b&&eE(a),b;var d=ZD(a,b);if(!isNaN(d))return d;fE(a);return c&&(c=$w(c.Fd(),b),!isNaN(c))?(aE(a,c+Qia),b):aE(a,b)};
Sia=function(a,b,c,d){if(a.A&&a.B){var e=Ria(a,b,c);if(-1!=e){a.u.C=!1;a.o.C=!1;a.G=!0;g.Bf(function(){wE(a,"seekreason","behindMinSq");xE(a,e)});
return}}c?a.u.M=!1:a.o.M=!1;0<=ZD(a.u,a.B)&&0<=ZD(a.o,a.B)?((a.u.C||a.o.C)&&wE(a,"iterativeSeeking","done;count."+a.F,!1),a.u.C=!1,a.o.C=!1):d&&g.Bf(function(){if(a.G||!a.M.T)a.M.Vg?yE(a):c&&xE(a,b.startTime);else{var f=b.startTime,h=b.duration,l=c?a.u.C:a.o.C;l=!a.ia()&&l;var m=-1!=a.u.F&&-1!=a.o.F,n=!a.u.M&&!a.o.M;l&&m&&n&&(a.B>=f&&a.B<f+h+.1?((c?a.u:a.o).C=!1,a.u.C||a.o.C||(wE(a,"iterativeSeeking","done;count."+a.F,!1),a.F=0)):8>a.F?(a.F++,wE(a,"iterativeSeeking","inprogress;count."+a.F+";target."+
a.B+";actual."+f+";duration."+h+";isVideo."+c,!1),a.seek(a.B)):(wE(a,"iterativeSeeking","incomplete;count."+a.F+";target."+a.B+";actual."+f,!1),a.F=0,a.u.C=!1,a.o.C=!1,a.S("seekplayerrequired",f+.1,!0)))}})};
Ria=function(a,b,c){if(!a.A)return-1;c=(c?a.u:a.o).o.index;var d=c.Ef(a.B);return(aw(c,a.C.Tc)||b.Sa==a.C.Tc)&&d<a.C.Tc?a.C.Kb():-1};
xE=function(a,b){!a.ia()&&a.G&&-1!=a.u.F&&-1!=a.o.F&&(a.G=!1,a.S("seekplayerrequired",b+.1,a.M.Vg))};
yE=function(a){var b=-1!=a.u.F,c=-1!=a.o.F;if(!b||!c)if(b=!b&&UD(a.u),c=!c&&UD(a.o),b||c)if(c=b?a.u:a.o,b=b?a.o:a.u,c.F=UD(c).info.u,-1!=b.F){var d=Math.max(b.o.index.wd(b.F),c.o.index.wd(c.F));wE(a,"seekreason","initManifestlessSync");g.Bf(function(){return xE(a,d)});
a.I&&(a.I.resolve(d+.1),a.I=null)}};
wE=function(a,b,c,d){a.S("ctmp",b,c,void 0===d?!1:d)};
zE=function(){this.u=this.A=0;this.C={}};
AE=function(a,b,c){g.N.call(this);this.u=this.o=null;this.B=!1;this.A=0;this.C=b;this.G=a;this.F=c;this.F.A.subscribe("cuepoint",this.I,this)};
BE=function(a,b){if(a.o){a.u=null;a.B=!1;var c=b.startTime+a.A-a.o.Ed.startSecs;0>=c||(c=new pt(a.o.Ed.startSecs-(a.C.Cb&&!isNaN(a.A)?a.A:0),c,a.o.Ed.context,a.o.Ed.identifier,"stop",a.o.Ed.o+1E3*b.duration),a.S("ctmp","cuepointdiscontinuity","segNum."+b.Sa,!1),a.I(c,b.Sa))}};
Tia=function(a,b,c,d){this.aa=a;this.C=b;this.G=c;this.I=d;this.B=Fx;this.F=this.N=null;this.T=-1;this.u=this.A=null;this.o=[];this.Z={};this.M=0;this.R=this.ba=!1;this.U=0};
Wia=function(a,b,c){CE(a,b);Uia(a,c);a.N=a.A;Via(a);a.F=a.u;return DE(a)};
Xia=function(a,b){if(Cx(a.B,b))return null;if("m"==b.reason&&b.isLocked())return CE(a,b),a.M=a.o.length-1,EE(a),FE(a),a.R=a.R||a.F!=a.u,a.F=a.u,new yC(a.A,a.F,b.reason);"r"==b.reason&&(a.T=-1);CE(a,b);FE(a);if("r"==b.reason&&a.u==a.F)return new yC(a.A,a.u,b.reason);if(a.F&&a.u&&GE(a,a.F.info)<GE(a,a.u.info)){var c=a.B.reason;a.ba=a.ba||"r"==c||"u"==c||"v"==c}return null};
Yia=function(a,b){if(b.info.video){if(a.F!=b)return a.F=b,DE(a)}else a.N=b;return null};
HE=function(a,b){b.N=(0,g.M)();a.T=-1;CE(a,a.B)};
IE=function(a){for(var b=(0,g.M)()-6E4,c=g.p(a.I.videoInfos),d=c.next();!d.done;d=c.next())if(a.G.o[d.value.id].N>b)return!0;return!1};
Zia=function(a){return new yC(a.N,a.F,a.B.reason)};
JE=function(a){return a.B.isLocked()};
$ia=function(a){return 0<a.o.length&&0==a.M};
DE=function(a){a.T=(0,g.M)();a.ba=!1;return new yC(a.N,a.F,a.B.reason)};
CE=function(a,b){a.B=b;var c=a.I.videoInfos;if(!JE(a)){var d=(0,g.M)()-6E4;c=(0,g.Ae)(c,function(m){if(m.o>this.C.M)return!1;m=this.G.o[m.id];return m.N>d?!1:4<m.u.u||4<m.M||m.F?!1:!0},a);
if(IE(a)){var e=(0,g.Ae)(c,function(m){m=uu(m);return"140"===m||"134"===m||"243"===m});
e.length&&(c=e)}}c.length||(c=a.I.videoInfos);e=(0,g.Ae)(c,b.B,b);if(a.C.Ho){for(var f={},h=g.p(e),l=h.next();!l.done;l=h.next())!(l=l.value)||!l.video||f[l.video.Qb]&&"1"===l.sb!=l.video.Qb<=a.C.er||(f[l.video.Qb]=l.sb);e=e.filter(function(m){return!!m&&!!m.video&&m.sb==f[m.video.Qb]})}e.length||(e=[c[0]]);
e.sort((0,g.x)(function(m,n){return GE(this,m)-GE(this,n)},a));
for(c=1;c<e.length;c++)h=e[c-1],l=e[c],h.video.width>l.video.width?(g.jb(e,c),c--):GE(a,h)*a.C.o>GE(a,l)&&(g.jb(e,c-1),c--);c=e[e.length-1];a.o=e;Hfa(a.C,c)};
Uia=function(a,b){if(b)a.A=a.G.o[b];else{var c=g.cb(a.I.u,function(d){return!!d.Db&&d.Db.isDefault});
c=c||a.I.u[0];a.A=a.G.o[c.id]}EE(a)};
KE=function(a,b){for(var c=0;c+1<a.o.length&&"tiny"==a.o[c].Ca().quality;)c++;var d=sE(a.aa)/a.C.o;return GE(a,b.info)+GE(a,a.o[c])>d};
EE=function(a){if(!a.A||!a.C.A)if(!a.A||!a.A.info.Db)if(a.A=a.G.o[a.I.u[0].id],1<a.I.u.length){var b=!1;if(a.C.Qi){if(b=!0,a.C.DE){var c=g.bb(a.I.u,function(d){return"250"===uu(d)});
0<=c&&(a.A=a.G.o[a.I.u[c].id],b=KE(a,a.A))}}else b=a.B.isLocked()?240>a.B.o:KE(a,a.A);b&&(a.A=a.G.o[g.ab(a.I.u).id])}};
FE=function(a){if(!a.u||!a.C.A)if(JE(a))a.u=360>=a.B.o?a.G.o[a.o[0].id]:a.G.o[g.ab(a.o).id];else{for(var b=Math.min(a.M,a.o.length-1),c=sE(a.aa),d=GE(a,a.A.info),e=c/a.C.u-d;0<b&&!(GE(a,a.o[b])<=e);b--);for(c=c/a.C.o-d;b<a.o.length-1&&!(GE(a,a.o[b+1])>=c);b++);a.u=a.G.o[a.o[b].id];a.M=b}};
Via=function(a){var b=a.C.u,c=sE(a.aa)/b-GE(a,a.A.info);b=g.db(a.o,function(d){return GE(this,d)<c},a);
0>b&&(b=0);a.M=b;a.u=a.G.o[a.o[b].id]};
GE=function(a,b){if(!a.Z[b.id]){var c=a.G.o[b.id].index.Az(a.U,15);c=b.u&&a.F&&a.F.index.Rb()?c||b.u:c||b.o;a.Z[b.id]=c}c=a.Z[b.id];a.C.We&&b.video&&b.video.Qb>a.C.We&&(c*=1.5);return c};
aja=function(a,b){var c=Mb(a.G.o,function(d){return uu(d.info)==b});
if(!c)throw Error("Itag "+b+" from server not known.");return c};
bja=function(a){var b=[];if("m"==a.B.reason||"s"==a.B.reason)return b;var c=!1;if(iga(a.G)){for(var d=Math.max(0,a.M-2);d<a.M;d++){var e=uu(a.o[d]);Jv(a.o[d].Ca())||(c=!0);b.push(e)}b.reverse();if(!c&&a.C.SD)for(d=Math.max(0,a.M-3);0<=d&&!c;d--)Jv(a.o[d].Ca())||(c=!0,b.push(uu(a.o[d])))}return b};
LE=function(a){this.F=a;this.o=new xu;this.C=41708333;this.A=1E6;this.u=this.B=-1};
lx=function(a){/video.webm.*vp09/.test(a)&&(a=a.replace("video/webm","video/mp4"));return a};
ija=function(a,b,c){if(!c)return a.F({bsf:"vp9",e:"nullInit"}),b;if(!c.o.info.Kc()||!Ov(c.o.info)||c.o.info.en())return b;c.A||(a.u=-1);a.o.append(b);b=new Uint8Array(a.o.getLength()+4096);for(var d=0,e=new qD(a.o),f=!1,h=!1,l,m=!1,n=[];;){l=e.offset;var q=uD(e),r=q.id;q=q.size;if(-1==r)break;if(408125543!=r&&524531317!=r){var u=q+e.offset;if(u>a.o.getLength())break;357149030==r&&(f=!0);374648427==r&&(h=!0);if(f&&h){var w=a,z=new qD(w.o);f=new Map;f.set(2807729,1E6);f.set(2352003,41708333);f.set(176,
1920);f.set(186,1080);f.set(21937,1);f.set(21947,1);f.set(21946,1);f.set(21945,1);h=0;for(var B=41,E=8,F=1;z.offset<u;){var G=uD(z),S=G.id;G=G.size;if(f.has(S))f.set(S,tD(z,G));else if(25506==S)for(S=z.offset+G;z.offset<S;){G=rD(z);var aa=rD(z);1==G?h=rD(z):2==G?B=rD(z):3==G?E=rD(z):4==G?F=rD(z):z.skip(aa)}else 408125543!=S&&357149030!=S&&374648427!=S&&174!=S&&224!=S&&21936!=S&&z.skip(G)}w.C=f.get(2352003);w.A=f.get(2807729);u=g.kg(cja);w=new DataView(u.buffer,u.byteOffset,u.length);w.setUint16(ME,
f.get(176));w.setUint16(ME+4,f.get(186));w.setUint16(NE,f.get(176));w.setUint16(NE+2,f.get(186));z=Math.round(1E9/f.get(2807729));S=g.p(dja);for(G=S.next();!G.done;G=S.next())w.setUint32(G.value,z);z=eja;w.setUint8(z++,h);w.setUint8(z++,B);w.setUint8(z++,16*E+2*F+(2==f.get(21945)));w.setUint8(z++,f.get(21947));w.setUint8(z++,f.get(21946));w.setUint8(z++,f.get(21937));w.setUint16(z,0);b.set(u);d+=u.length;f=h=!1}if(231==r)a.B=tD(e,q),0>a.u&&(a.u=a.B);else{if(163==r||160==r)m=163==r,n.push(fja(a,l));
e.skip(q)}}}e=m&&!c.B;m=d;r=d;q=n.length-(e?1:0);if(0>=q)c=0;else{d=r;h=g.kg(gja);f=new DataView(h.buffer,h.byteOffset,h.length);B=8+12*q;E=g.p(hja);for(F=E.next();!F.done;F=E.next())F=F.value,f.setUint32(F,f.getUint32(F)+B);f.setUint32(OE,n[0].startTime/4294967296);f.setUint32(OE+4,n[0].startTime);b.set(h,r);r+=h.length;h=new DataView(b.buffer);h.setUint32(r,q);h.setUint32(r+4,f.getUint32(0)+8);r+=8;for(B=f=0;B<q;B++)E=n[B],F=E.duration,0>F&&(F=B+1<n.length?n[B+1].startTime-E.startTime:Math.round(1E9*
c.duration/a.A)-(E.startTime-a.u),0>=F||1<F*a.A/1E9)&&(a.F({bsf:"vp9",e:"duration"}),F=Math.round(a.C/a.A)),h.setUint32(r,F),h.setUint32(r+4,E.length),f+=E.length,h.setUint32(r+8,E.EH?33554432:16842752),r+=12;h.setUint32(r,f+8);h.setUint32(r+4,1835295092);r+=8;for(c=0;c<q;c++)f=n[c],b.set(Eu(a.o,f.offset,f.length),r),r+=f.length;c=r-d}d=m+c;if(e){if(1>=n.length)return null;l=n[n.length-2];l=l.offset+l.length}return d?(a.o=a.o.split(l).cj,new Uint8Array(b.buffer,0,d)):null};
fja=function(a,b){var c=new qD(a.o);c.skip(b);for(var d=-1;;){var e=uD(c),f=e.id;e=e.size;if(155==f)d=tD(c,e);else{if(161==f||163==f){f=c.offset;sD(c);var h=tD(c,2),l=rD(c);return{startTime:h+a.B,EH:!!(l&128),offset:c.offset,length:e-(c.offset-f),duration:d}}160!==f&&c.skip(e)}}};
PE=function(a,b,c,d){this.o=a;this.F=b;this.C=d;this.B=c;this.A=0};
QE=function(a,b,c,d){g.N.call(this);this.o=a;this.aa=b;this.Z=c;this.T=d;this.U=NaN;this.A=this.N=this.F=null;this.u=this.I=this.M=this.G=NaN;this.B=!1;this.R=NaN};
jja=function(a,b,c,d){return a.ra&&a.fa&&3==Yv(a)?new QE(a,b,c,d):null};
RE=function(a,b){if(a.o.Ex){var c=b.info.o;if(0>=c)a.R=NaN;else{var d=by(a.aa),e=b.index.o;c=Math.max(1,d/c);a.R=Math.round(1E3*Math.max(((c-1)*e+a.o.R)/c,e-a.o.tb))}}};
kja=function(a,b){var c=(0,g.D)()/1E3,d=c-a.G,e=c-a.M,f=e>=a.o.Ug,h=!1;if(f){var l=0;!isNaN(b)&&b>a.I&&(l=b-a.I,a.I=b);l/e<a.o.Hx&&(h=!0);a.M=c}c=d>=a.o.tb&&!a.B;if(!f&&!c&&SE(a,b))return NaN;c&&(a.B=!0);a:{d=h;c=(0,g.D)()/1E3-(a.Z.o()||0)-a.N.A-a.o.R;f=a.A.startTime;c=f+c;if(d){if(isNaN(b)){TE(a,NaN,"n",b);f=NaN;break a}d=b-a.o.kb;d<c&&(c=d)}else a.B&&(d=c+a.o.R-a.U+a.o.Ix,isNaN(b)||(d=Math.max(d,Math.min(c,b-a.o.kb))),c=d);f=c=Math.max(c,f)}a.u=f;if(isNaN(a.u))return UE(a),NaN;if(!h&&SE(a,b))return VE(a,
b),NaN;if(a.u<=a.A.startTime)return TE(a,NaN,"y",b),UE(a),NaN;if(!a.T(a.u,!1))return!VE(a,b)&&h&&(TE(a,NaN,"t",b),UE(a)),NaN;h=a.u;TE(a,h,"s",b);UE(a);return h};
VE=function(a,b){return a.T(a.u,!0)?!1:(TE(a,NaN,"ns",b),UE(a),!0)};
SE=function(a,b){return isNaN(b)?!0:isNaN(a.u)?!1:b<a.u+(a.B?a.o.kb:a.o.Gx)};
UE=function(a){a.F=null;a.N=null;a.A=null;a.G=NaN;a.M=NaN;a.I=NaN;a.u=NaN;a.B=!1};
TE=function(a,b,c,d){var e=$C(a.F);e.ssr_sk=(1E3*b).toFixed(0);e.ssr_t=(1E3*a.u).toFixed(0);e.ssr_r=c;e.ssr_st=(1E3*a.G).toFixed(0);e.ssr_n=(0,g.D)().toFixed(0);e.ssr_f=(1E3*a.N.A).toFixed(0);e.ssr_fa=a.B?"1":"0";e.ssr_o=(1E3*a.Z.o()||0).toFixed(0);e.ssr_v=(1E3*d).toFixed(0);b=a.A.o.index;aw(b,a.A.u,!0)&&(e.ssr_ist=(1E3*b.wd(a.A.u)).toFixed(0),e.ssr_id=(1E3*b.getDuration(a.A.u)).toFixed(0));e=ex(e);a.S("ctmp","ssr",e,!1)};
lja=function(){this.u=g.ez;this.o=[]};
mja=function(a,b,c){var d=[];for(b=WE(a,b);b<a.o.length;++b){var e=a.o[b];(e.end<=c||e.contains(c))&&d.push(e);if(e.start>c)break}return d};
XE=function(a,b){for(var c=[],d=g.p(a.o),e=d.next();!e.done&&!(e=e.value,e.contains(b)&&c.push(e),e.start>b);e=d.next());return c};
nja=function(a){return a.o.slice(WE(a,0x7ffffffffffff),a.o.length)};
WE=function(a,b){var c=vb(a.o,function(d){return b-d.start||1});
return 0>c?-(c+1):c};
YE=function(a,b){for(var c=NaN,d=g.p(a.o),e=d.next();!e.done;e=d.next())if(e=e.value,e.contains(b)&&(isNaN(c)||e.end<c)&&(c=e.end),e.start>b&&(isNaN(c)||e.start<c)){c=e.start;break}return c};
ZE=function(a,b){if(1<b.length&&b.length>a.o.length)a.o=a.o.concat(b),a.o.sort(a.u);else for(var c=g.p(b),d=c.next();!d.done;d=c.next())d=d.value,!a.o.length||0<a.u(d,a.o[a.o.length-1])?a.o.push(d):g.yb(a.o,d,a.u)};
$E=function(a,b,c,d){g.A.call(this);this.R=a;this.T=b;this.I=c;this.M=d;this.B=NaN;this.F=this.G=this.started=!1;this.A=[];this.N=new g.H(this.u,250,this);g.C(this,this.N);this.C=new g.H(this.u,0,this);g.C(this,this.C);this.o=new lja};
aF=function(a,b){if(!a.ia()){for(var c=g.p(b),d=c.next();!d.done;d=c.next())if(d=d.value){var e=a.A.indexOf(d);0<=e&&a.A.splice(e,1);var f=a.o;e=f.o;d=g.ub(e,d,f.u);0<=d&&g.jb(e,d)}a.u()}};
bF=function(a){return a.ia()?[]:a.o.o};
cF=function(a,b){var c=bF(a).filter(function(d){return d.namespace===b});
aF(a,c);return c};
dF=function(a,b){var c=[];if(!b.length)return c;for(var d=0;d<b.length;d++){var e=b[d];e.active&&-1===a.A.indexOf(e)&&(a.A.push(e),c.push([1,e]))}return c};
eF=function(a,b){var c=[];if(!b.length)return c;b.sort(g.ez);for(var d=g.p(b),e=d.next();!e.done;e=d.next())e=e.value,a.A.splice(a.A.indexOf(e),1),c.push([2,e]);return c};
qja=function(a){if(a.started&&!a.ia()){a.C.stop();var b=a.I();g.T(b,32)&&a.N.start();for(var c=oja(a),d=g.T(b,2),e=[],f=[],h=g.p(a.A),l=h.next();!l.done;l=h.next())l=l.value,l.active&&(d?0x8000000000000>l.end:!l.contains(c))&&f.push(l);e=e.concat(eF(a,f));h=f=null;d?(b=XE(a.o,0x7ffffffffffff),f=b.filter(function(m){return 0x8000000000000>m.end}),h=nja(a.o)):b=a.B<=c&&fF(b)?mja(a.o,a.B,c):XE(a.o,c);
e=e.concat(dF(a,b));f&&(e=e.concat(eF(a,f)));h&&(e=e.concat(dF(a,h)));a.B=c;pja(a,e)}};
pja=function(a,b){for(var c=g.p(b),d=c.next();!d.done;d=c.next()){d=d.value;var e=d[1];1===d[0]?a.M(g.fz(e.namespace),e):a.M("crx_"+e.namespace,e)}};
oja=function(a){return g.T(a.I(),2)?0x8000000000000:1E3*a.R()};
rja=function(a){a=void 0===a?{}:a;var b=a.Dd,c=a.ko,d=a.ub,e=a.Vk;this.ih=a.ih;this.Dd=b;this.ko=c;this.ub=d;this.Vk=e};
gF=function(a,b){if(0>b)return!0;var c=a.ub();return b<c||b===c&&!a.ih||b===c&&(c=a.Vk())&&b===c.Sa?!0:!1};
sja=function(a,b,c){if(!gF(a,b))return 0;if(!a.Dd||!isNaN(c)&&0<c)return 2;if(0>b)return 1;c=a.ub();return b<c||b===c&&(a=a.Vk())&&b===a.Sa&&!a.pending?2:1};
Fia=function(a,b,c,d){if(gF(a,b))return d;b=0;a.Dd&&(b=.2);return c+1E3*(a.ko+b)};
Gia=function(a,b,c,d,e){b=sja(a,b,e);if(2===b)return d;c=b?d:c+1E3*a.ko;a.Dd&&(c+=1E3*a.ko);return c};
tja=function(){this.u=0;this.F=this.C=this.A=this.B=NaN;this.o="";this.bandwidthEstimate=NaN};
jF=function(a,b,c,d,e,f,h){g.N.call(this);var l=this;this.T=a;this.o=b;this.C=c;this.ga=new zE;this.bb=h||null;this.R=new oE(a,b);this.G=new Tia(this.R,b,this.C,d);a=Wia(this.G,e,f&&f.id);this.B=new OD(this.o,a.audio,(0,g.x)(this.hy,this));this.u=new OD(this.o,a.video,(0,g.x)(this.hy,this));hF(this,this.B);hF(this,this.u);this.u.A.U=this.B.A;this.A=null;this.ya={updateend:this.OJ,error:this.RK};this.ea=new g.H(this.Hg,0,this);g.C(this,this.ea);this.Ha=new g.H(this.Hg,1E3,this);g.C(this,this.Ha);this.tb=
new g.H(this.Hg,void 0,this);g.C(this,this.tb);this.Va=new g.H(this.Hg,1E4,this);g.C(this,this.Va);this.N=this.F=NaN;this.Ea=0;this.fa=this.za=this.ba=!1;this.ra="";this.ua=new Tx(5);this.sa={};this.Ba=NaN;(this.I=jja(this.o,this.T,this.ua,function(m,n){return iF(l,m,n)}))&&this.I.subscribe("ctmp",this.Vc,this);
this.M=new tE(this.C,this.u,this.B,this.o);g.C(this,this.M);this.aa=new AE(this.C,this.o,this.u);g.C(this,this.aa);this.aa.subscribe("ctmp",this.Vc,this);uja(this,this.M);this.gb=NaN;this.Oa=null;this.Z=NaN;this.Cb=this.kb=!1;this.Da=0;this.U=!1};
vja=function(a){var b=a.u.o.index;a.Oa=new rja({ih:a.o.ih,Dd:a.o.B.Dd,ko:b.o,ub:function(){return b.ub()},
Vk:function(){return b.Vk()}})};
kF=function(a,b){b=b||a.u&&a.u.u&&a.u.u.startTime||a.F;var c=a.u;var d=a.G;var e=d.u&&d.u.index.Ef(b)||0;d.U!=e&&(d.Z={},d.U=e,CE(d,d.B));e=!JE(d)&&-1<d.T&&8E3>(0,g.M)()-d.T;var f=d.u&&3*GE(d,d.u.info)<sE(d.aa);if(!e||f)EE(d),FE(d),d.R=d.R||d.u!=d.F;d.u&&!d.u.index.Rb()&&(d.U=-1);d=d.u;c.o!=d&&(c.o=d);c=a.B;d=a.G.A;c.o!=d&&(c.o=d)};
lF=function(a,b){a.za=b;a.U||(a.ba=!0)};
wja=function(a,b){a.U&&(mF(a),a.U=!1);nF(a);if(!mx(b)){var c;a.o.rD&&(c=new LE(function(d){return a.hC(d)}));
yga(b,a.u.o.info.mimeType+a.o.Ko,a.B.o.info.mimeType,c)}PD(a.u,b.u);PD(a.B,b.o);a.A=b;a.resume();ds(b.o,a.ya,a);ds(b.u,a.ya,a);a.o.Dp&&1E-4>=Math.random()&&a.Vc("toff",""+b.o.supports(1),!0);a.Hg()};
nF=function(a){a.A&&a.A.o&&a.A.u&&(es(a.A.o,a.ya,a),es(a.A.u,a.ya,a));PD(a.B,null);PD(a.u,null);a.A=null};
oF=function(a,b){b=void 0===b?!1:b;nF(a);b?a.U=!0:a.o.be?lF(a,a.kb):lF(a,!1);mF(a)};
qF=function(a){a.A&&nx(a.A)&&(oF(a),a.o.xx&&pF(a,!0,"fmt.unplayable",{unexpected:1}))};
sF=function(a,b,c){if(a.ba&&(!ey(a.T)||a.za)||a.o.G&&!ey(a.T))return!1;if(a.C.u){if(0<b.B.length&&b.u&&-1==b.u.u||b.B.length>=a.o.Yp&&!a.o.gb||!a.o.hE&&0<b.B.length&&!a.o.B.Dd)return!1;if(b.I)return!a.C.isLive||!isNaN(a.Ba)}if(nE(b))return!1;if(!(b.u||a.C.u&&a.o.gb&&b.I)){if(!b.o.td())return!1;aE(b,a.F)}var d=b.B.length+c.B.length;(hE(b)||hE(c)||a.C.isLive&&(!a.o.gb||!b.B.length))&&--d;if(d+1>=a.o.hq)return!1;d=b.u;if(!d)return!0;if(!yv(d.o.u))return!1;4==d.type&&d.o.td()&&(b.u=g.ab(d.o.Lr(d)),d=
b.u);if(!d.C&&!d.o.Ch(d))return!1;var e=a.C.ff||a.C.G;if(a.C.u&&e){e=b.o.index.ub();var f=c.o.index.ub();e=Math.min(e,f);if(0<b.o.index.F&&0<e&&d.u>=e)return b.N=e,c.N=e,!1}if(d.o.info.audio&&4==d.type)return!1;if(jE(b)&&!a.o.ga)return!0;if(d.C||cE(b)&&cE(b)+cE(c)>a.o.za)return!1;e=!b.C&&!c.C;f=b==a.u&&a.U;if(!(c=!!(c.u&&!c.u.C&&c.u.F<d.F)&&(!a.C.u||c.u&&c.u.F&&d.F)&&e&&!f||a.o.T&&!b.C&&c.C)&&(c=nu(d))){d=d.F;a:if(c=a.aa,c=c.o?c.o.Ed:null,a.U&&c)a=c.startSecs+c.durationSecs;else{c=rF(a,b,!0);!JE(a.G)&&
0<a.o.U&&(e=((0,g.M)()-a.Ea)/1E3,c=Math.min(c,a.o.U+a.o.Lc*e));c=a.F+c;if(a.o.ce&&(e=xja(a)+a.o.ce,e<c)){a.Vc("mrl","ori."+c+";mod."+e,!0);a.o.No&&(a.Ea=(0,g.M)());a=e;break a}a=c}c=d>a}return c?!1:(b=b.G)&&b.isLocked()?!1:!0};
tF=function(a,b,c){if((!a.A||jx(a.A)||px(a.A))&&!a.M.A&&a.G.ba){var d=a.F;a=a.R;c=qE(a,b.o.info.o,c.o.info.o,0);var e=Zx(a.u)+c/by(a.u);d+=Math.max(e,e+a.o.ae-c/b.o.info.o);a:{if(b.B.length){if(b.B[0].info.o[0].startTime<=d)break a;eE(b)}a=b.A;for(c=a.u.length-1;0<=c;c--)a.u[c].info.startTime>d&&a.u.pop();b.B.length?b.u=g.ab(g.ab(b.B).info.o):b.A.u.length?b.u=xD(b.A).info:b.u=QD(b);b.u&&d<b.u.startTime&&(b.T=0,b.u=b.o.nh(d,!0).o[0])}}};
vF=function(a,b,c){if(sF(a,b,c))if(c=yja(a,b,c),a.o.Cx&&a.C.u&&!b.I&&0>c.o[0].u)a.Vc("invalidsq",tu(c.o[0]));else{if(a.Qa){var d=zja(a.Qa.o,c.o[0].G,c.o[0].u,c.o[0].o.info.id);d&&(c.C=d)}a.o.jm&&-1!=c.o[0].u&&c.o[0].u<a.C.Tc&&(c=b.o.ak(a.C.Tc,!1));a=uF(a,c);b.B.push(a);b.u=g.ab(a.info.o)}};
yja=function(a,b,c){if(b.I){if(a.C.isLive){var d=a.C.Tc&&a.C.G?b.o.ak(a.C.Tc,!1):b.o.nh(Infinity);d.Id=a.Ba}else d=b.o.ak(0,!1);a.I?0==d.Id&&(d.B=a.I.R):d.B=a.gb;return d}d=b.u;if(!d.o.td())return d.o.Ee()?(a=qE(a.R,b.o.info.o,c.o.info.o,0),a=d.o.Zj(d,a)):a=d.gi(),a;!jE(b)||a.o.ga||a.C.u||(tF(a,b,c),b.u||aE(b,a.F));d=b.u;var e=d.F-a.F,f=!d.range||0==d.Wa&&0==d.A?0:d.range.length-(d.A+d.Wa),h=d.o;Aja(a,b,e)&&0==f&&(a.C.u?h=b.o:(h=d.startTime+wF,d.Wa&&(h+=d.duration),aE(b,h),d=b.u,h=d.o));h.Ee()?(c=
qE(a.R,h.info.o,c.o.info.o,e,$ia(a.G)&&a.fa),d=Bja(d,c,iE(b))):(0>d.u&&(c=ru(d),c.pr=""+b.B.length,a.M.A&&(c.sk="1"),a.Vc("nosq",d.I+";"+ex(c))),d=h.gi(d));a.U&&d.o.forEach(function(l){l.type=6});
return d};
Aja=function(a,b,c){if(!iE(b)||!b.o.td())return!1;a=Math.min(15,.5*rF(a,b,!0));return jE(b)||c<=a};
Bja=function(a,b,c){b=a.o.Zj(a,b);if(b.range&&1<b.o.length)if(c||b.u.u||b.o[0].o!=a.o)b=a.o.Zj(a,b.o[0].Wa);else{c=b.o[b.o.length-1];var d=c.Wa/b.range.length;!c.B&&.4>d&&(b=a.o.Zj(a,b.range.length-c.Wa))}return b};
Cja=function(a,b){var c=Ev(b),d=a.R;var e=Math.min(2.5,Zx(d.u));d=rE(d);e=c-e*d;d=mu(b.o[0]);var f=mv(b.u.o),h=a.o.G,l;a.Oa?l={Fe:d,zg:f,Kj:h,Eg:a.Oa,Sa:b.o[0].u,Id:b.Id}:l={Fe:d,zg:f,Kj:h};return new GC(a.T,c,e,l)};
uF=function(a,b){nu(b.o[b.o.length-1])&&xF(a,Yia(a.G,b.o[0].o));var c=Cja(a,b);a.o.lp&&(c.C=[]);var d=new YC(a.o,b,c,a.sa);c.Z=function(){var e;if(Mia(d)){if(e=d.u.Jo&&!(!window.performance||!window.performance.now)&&d.o&&d.o.bl()&&kD(d))e=d.o,e=e.policy.Dd&&Xv(e);e=e?d.info.o[0].o.info.video?3:4:2}else e=1;return e};
Iia(d,(0,g.x)(a.hN,a));3==b.o.length&&1==b.o[0].type&&2==b.o[1].type&&4==b.o[2].type&&b.o[0].o.info.video&&(d.fa=bja(a.G));a.U&&(d.ga=!0);d.start(Math.max(0,b.o[0].G-a.F));return d};
xF=function(a,b){b&&a.S("videoformatchange",b)};
yF=function(a,b){var c=b.info.o[0].o,d=c.info.video?a.u:a.B;Dja(a,d,b);b.info.Fe()&&!Bv(b.info)&&((0,g.y)(Lia(b),function(e){AD(d.A,e)}),a.S("metadata",c));
SD(d);return!!UD(d)};
Dja=function(a,b,c){if(a.C.u&&b){b.I&&(c.ia(),5<=c.state||kD(c)||mD(c),b.I=!1);c.U&&a.ua.A(1,c.U);c.o&&(c.Z=parseInt(c.o.Uc("X-Head-Seqnum"),10));b=c.Z;c.o&&(c.aa=parseInt(c.o.Uc("X-Head-Time-Millis"),10));c=c.aa;a=a.C;for(var d in a.o){var e=a.o[d].index,f=c;e.u&&(b&&(e.F=Math.max(e.F,b)),f&&(e.B=Math.max(e.B,f)))}}};
zF=function(a,b,c){a:{b=b.info;var d=a.o.NE,e=null,f=b.o[0];if(b.range)e=ju(b.range.start,Math.min(4096,b.range.length));else if(d){if(b.A&&0<=b.A.indexOf("/range/")||"1"==b.u.B.get("defrag")||"1"==b.u.B.get("otf")){c=null;break a}e=ju(0,4096)}else if(f.o.info.video){c=null;break a}d=new lu(5,f.o,e,"createProbeRequestInfo_"+f.I,f.u);b=new Av([d],b.A);b.F=c;c=b}c&&uF(a,c)};
DF=function(a){var b=a.A.o,c=a.A.u;a.B.o.A&&AF(a,b,a.B.o.A);if(Eja(a)){if(a.o.Nh){if(!b.zj()){var d=UD(a.B);d&&BF(a,b,d)}c.zj()||(d=UD(a.u))&&BF(a,c,d)}}else a.I&&(d=a.I.C(a.B,ax(a.A.u.Fd())))&&a.S("seekplayerrequired",d,!0),d=!1,CF(a,a.u,c)&&(d=!0,c=a.ga,c.A||(c.A=(0,g.D)(),c.Bd("vda"),UA("vda"),c.u&&xp(4))),c=UD(a.u),a.o.ya&&!d&&c&&(a.Cb||a.Vc("sbp",a.A.u.Za({ns:tu(c.info)})),a.Cb=!0),a.A&&!nx(a.A)&&(CF(a,a.B,b)&&(d=a.ga,d.u||(d.u=(0,g.D)(),d.Bd("ada"),UA("ada"),d.A&&xp(4)),d=!0),!a.ia()&&a.A&&
(!a.o.ba&&$D(a.u)&&$D(a.B)&&jx(a.A)&&!a.A.ne()&&(b=QD(a.B).o,b==a.C.o[b.info.id]&&(b=a.A,jx(b)&&b.A.endOfStream(),b=a.T,Lx(cy(b)),b.B=Xx())),d&&!px(a.A)&&a.ea.fb()))};
Eja=function(a){if(a.o.Ha)return!1;var b;if(!(b=nE(a.u))&&(b=a.M.A)){b=a.R;var c=a.u,d=a.B;if(0==c.B.length&&0==d.B.length)b=!0;else{var e=0,f=GD(c.A).concat(GD(d.A));f=g.p(f);for(var h=f.next();!h.done;h=f.next())e+=h.value.Wa;c=c.o.info.o+d.o.info.o;e/=c;b=10<e?!0:10>c*(10-e)/sE(b)}(b=!b)||(b=a.u,b=0<b.B.length&&1==b.A.u.length&&wD(b.A).info.M<b.U)}if(b)return!0;if(!a.fa||!a.o.Da||10>a.F||360<a.u.o.info.Ca().Qb)return!1;b=kE(a.u,a.F,a.o.Da)||kE(a.B,a.F,a.o.Da);return(0<a.u.B.length||0<a.B.B.length||
sF(a,a.u,a.B)||sF(a,a.B,a.u))&&b};
CF=function(a,b,c){if(c.ne())return!0;if(!c.qt())return!1;var d=UD(b);if(!d||6==d.info.type)return!1;var e=d.info,f=QD(b);!f||f.B||ou(f,e)||c.abort();c.Zw(e.o.info.containerType,e.o.info.mimeType);if(e=a.o.bb&&a.C.B&&0==d.info.A&&(g.Mu(d.info.o.info)||a.o.Tx)){if(null==c.zj()){e=QD(b);if(!(f=!e||e.o!=d.info.o)){b:if(e=e.N,f=d.info.N,e.length!=f.length)e=!1;else{for(var h=0;h<e.length;h++)if(!g.xb(e[h],f[h])){e=!1;break b}e=!0}f=!e}e=f}else e=c.zj(),f=d.info.o.o,e=e!==f&&!g.xb(e,f);e=!e}e&&(g.Mu(d.info.o.info)?
(It(Ju(d),1836019574),It(Ju(d),1718909296)):(e=new Nt(Ju(d)),gu(e),Rt(e,524531317,!0),d.o=d.o.split(e.A+e.o).cj),d.A=!1);a.o.Ve&&d.A&&(d.A=!1);e=a.I&&!!a.I.F&&b.o.info.audio;f=a.C.u||d.A;if(!(a.C.B&&0!=d.info.A||f&&!e)&&BF(a,c,d))return!0;if(e)return!1;e=a.F+rF(a,b,!1);if(!(e=d.info.G>e)){a:if(a.o.ya&&(!d.info.A||d.info.B)&&a.Vc("sba",c.Za({as:tu(d.info)})),e=d.A?d.info.o.o:null,f=Eu(d.o),d.A&&(f=new Uint8Array(f.buffer,0,f.byteOffset+f.length)),e=EF(a,c,f,d.info,e),"s"==e){a.Da=0;var l=!0}else{a.o.Go||
(c.abort(),fE(b));if("i"==e||"x"==e)FF(a,"checked",e,d.info);else{if("q"==e&&(d.info.isVideo()?(e=a.o,e.F=Math.floor(.8*e.F),e.Z=Math.floor(.8*e.Z),e.C=Math.floor(.8*e.C)):(e=a.o,e.I=Math.floor(.8*e.I),e.Ba=Math.floor(.8*e.Ba),e.C=Math.floor(.8*e.C)),c.supports(2)&&!c.ne()&&!a.A.isView())){e=!1;f=c.Fd();try{for(h=0;!e&&h<f.length;h++)f.start(h)>d.info.F&&(c.remove(f.start(h),f.end(f.length-1)),e=!0);var m=Math.max(0,Math.min(a.F,d.info.startTime)-5);!e&&m&&c.remove(0,m);l=!1;break a}catch(n){}}a.S("reattachrequired")}l=
!1}e=!l}if(e)return!1;b.A.u.shift();VD(b,d);return!0};
FF=function(a,b,c,d){var e="fmt.unplayable",f=!0;"x"==c||"m"==c?(e="fmt.unparseable",d.o.F=e,d.o.info.video&&!IE(a.G)&&HE(a.G,d.o)):"i"==c&&(15>a.Da?(a.Da++,e="html5.invalidstate",f=!1):e="fmt.unplayable");d=ru(d);d.mrs=a.A.A.readyState;d.origin=b;d.reason=c;pF(a,f,e,d)};
GF=function(a,b,c){if(c){var d=a.aa;if(d.C.Va){var e=d.o&&d.u&&d.o.Sa==d.u.Sa-1;e=d.o&&e&&"stop"!=d.o.Ed.event&&"predictStart"!=d.o.Ed.event;d.u&&d.u.Sa<b.Sa&&(e?BE(d,d.u):d.B=!0);d.u=b}}d=a.C;e=!1;for(var f in d.o){var h=Sv(d.o[f].info.mimeType)||d.o[f].info.isVideo();c==h&&(h=d.o[f].index,aw(h,b.Sa)||(h.jB(b),e=!0))}Sia(a.M,b,c,e)};
BF=function(a,b,c){c.info.o.td();var d=c.info.o.o;if(null==d||b.zj()==d)return!1;var e=d,f=b.Fp();if(a.o.Ve&&f&&b.isView()&&g.Mu(c.info.o.info)){var h=new DataView(d.buffer,d.byteOffset,d.byteLength);(f=Afa(h,f))?e=new Uint8Array(f.buffer,f.byteOffset,f.byteLength):a.Vc("fenc","1")}f=null;h=c.info.o.Aj(0);h.length&&(f=h[0].o[0]);d=EF(a,b,e,f,d);return"s"!=d?(FF(a,"sepInit",d,c.info),!0):b.ne()};
EF=function(a,b,c,d,e){try{b.appendBuffer(c,d,e)}catch(f){if(11==f.code)return"i";if(12==f.code)return"x";if(22!=f.code&&0!=f.message.indexOf("Not enough storage"))return g.L(f),"u";c=Xw(b.Fd()).replace(/,/g,"_");d=g.yg(f.message);a.Vc("quex","br."+c+";t."+(a.A?b==a.A.u?"v":"a":"u")+";e."+d);return"q"}return nx(a.A)?"m":"s"};
hF=function(a,b){b.A.subscribe("needkeyinfo",a.xK,a);b.A.subscribe("error",a.dM,a);b.A.subscribe("avsyncissue",a.hC,a);var c=(0,g.x)(a.gM,a,b);b.A.subscribe("placeholderinfo",c,void 0);c=(0,g.x)(a.hM,a,b);b.A.subscribe("placeholderrollback",c,void 0);c=(0,g.x)(a.iM,a,b);b.A.subscribe("segmentinfo",c,void 0);c=a.eM.bind(a);b.A.subscribe("gaplessinfo",c,void 0);c=a.fM.bind(a);b.A.subscribe("localmediachange",c,void 0)};
uja=function(a,b){b.subscribe("seekplayerrequired",function(c,d){a.U||a.S("seekplayerrequired",c,d)});
b.subscribe("ctmp",function(c,d){a.Vc(c,d,!1)});
b.subscribe("error",function(c,d,e){pF(a,c,d,e)});
b.subscribe("setcurrenttime",function(c){a.F=c})};
AF=function(a,b,c){var d=0+c.duration;c=-c.o;0==b.Ep()&&d==b.du()||b.pw(0,d);c!=b.Ib()&&(b.Pr(c),ID&&ND(a.B.A,b.lu()))};
rF=function(a,b,c){if(a.ba)return 1;var d=b.o.info.audio?a.o.I:a.o.F;!a.o.ga&&JE(a.G)&&(d=Math.max(d,b.o.info.audio?a.o.Ba:a.o.Z));c&&(d+=a.o.za);var e=JE(a.G)?b.u?b.u.o.info.o:b.o.info.o:b.R;d/=e;0<a.o.Ea&&a.A&&jx(a.A)&&(b=b.o.info.video?a.A.u:a.A.o)&&!b.ne()&&(b=b.Fd(),e=Yw(b,a.F),0<=e&&(b=a.F-b.start(e),d+=Math.max(0,Math.min(b-a.o.Ea,a.o.dr))));0<a.o.C&&(d=Math.min(d,a.o.C));a.o.Zd&&c&&!JE(a.G)&&(c=a.G,c=GE(c,g.ab(c.o))+GE(c,c.I.u[0]),c=a.o.Zd*(c/rE(a.R)),c<d&&15>c&&a.Vc("bwcapped","1",!0),c=
Math.max(c,15),d=Math.min(d,c));return d};
xja=function(a){if(!a.bb)return Infinity;var b=(0,g.Ae)(bF(a.bb),function(d){return"ad"==d.namespace});
b=g.p(b);for(var c=b.next();!c.done;c=b.next())if(c=c.value,c.start/1E3>a.F)return c.start/1E3;return Infinity};
Fja=function(a,b){var c=XD(a.u).find(function(d){return d.startTime>=b&&iF(a,d.startTime,!1)});
return c&&c.startTime<b+1.5*c.duration?c.startTime+.1:0};
iF=function(a,b,c){if(!(a.u.o.td()&&a.B.o.td()&&a.A&&a.A.u&&a.A.o))return!1;if(c&&a.C.u&&(-1==a.u.F||-1==a.B.F))return!0;var d=ZD(a.u,b,c);if(isNaN(d))return!1;a=ZD(a.B,a.o.fa?b:d,c);return isNaN(a)?!1:!0};
HF=function(a,b,c,d){c.td()||c.C||!yv(c.u)||(d=c.Aj(d?Pia(a.R,c.info):0),(0,g.y)(d,function(e){if("f"!=e.o[0].o.info.sb){var f=uF(this,e);Bv(e)&&(b.B.push(f),b.u=g.ab(f.info.o))}},a),c.C=!0)};
pF=function(a,b,c,d){a.ia()||(d=new dx(c,b,d),g.Ra(a),ex(d.details),a.S("error",d),"html5.invalidstate"!=c&&"fmt.unplayable"!=d.errorCode&&"fmt.unparseable"!=c&&b&&a.dispose())};
mF=function(a){fE(a.B);fE(a.u)};
IF=function(a){a.B.A.B=null;a.u.A.B=null;a.o.A="";a.o.G=!1};
Gja=function(a,b){var c=b.info.video?a.u:a.B;null!=c&&HF(a,c,b,!1)};
JF=function(a){this.o=a};
KF=function(){g.N.apply(this,arguments)};
LF=function(a,b,c,d){KF.call(this);var e=this;this.A=-1;this.o={};this.B=new g.H(this.C,0,this);g.C(this,this.B);this.u=new g.H(function(){e.ia()||(e.B.start(Math.random()*c),e.u.start(b))},a,this);
g.C(this,this.u);d.subscribe("fairplay_next_need_key_info",this.F,this)};
MF=function(a){a=a.subarray(4);a=new Uint16Array(a.buffer,a.byteOffset,a.byteLength/2);return String.fromCharCode.apply(null,a)};
Hja=function(a,b,c){a=a.match(sd);for(var d=[],e=g.p(a[6].split("&")),f=e.next();!f.done;f=e.next())f=f.value,0===f.indexOf("cpi=")?d.push("cpi="+b.toString()):0===f.indexOf("ek=")?d.push("ek="+hd(c)):d.push(f);a[6]="?"+d.join("&");b="skd://"+a.slice(2).join("");a=2*b.length;c=new Uint8Array(a+4);c[0]=a%256;c[1]=(a-c[0])/256;for(a=0;a<b.length;++a)c[2*a+4]=b.charCodeAt(a);return c};
Ija=function(a,b,c){this.url=a;this.interval=b;this.o=c};
g.NF=function(a){return(a=Jja[a.toString()])?a:"LICENSE"};
OF=function(a,b){this.statusCode=a;this.message=b;this.o=this.heartbeatParams=this.errorMessage=null;this.u={};this.nextFairplayKeyId=null};
PF=function(a){var b=Mt(a.subarray(0,16384)),c=b.indexOf("\r\n\r\n");if(-1===c)return null;var d=b.indexOf("\r\n"),e=b.slice(0,d).match(/^GLS\/1.\d ([0-9]{1,3}) (\w+)$/);if(null==e)return null;e=e[1];isFinite(e)&&(e=String(e));e="string"===typeof e?/^\s*-?0x/i.test(e)?parseInt(e,16):parseInt(e,10):NaN;b=vt(b.slice(d+2));if(null==b)return null;a=new OF(e,a.subarray(c+4));0!==a.statusCode&&(a.errorMessage=g.NF(a.statusCode));if(c=b["Heartbeat-Url"])a.heartbeatParams=new Ija(c,Number(b["Heartbeat-Interval-Secs"])||
60,Number(b["Heartbeat-Num-Retries"])||4);if(c=b["Authorized-Format-Types"])a.o=c.split(",");if(c=b["Key-Ids"])a.u=Kja(c);a.nextFairplayKeyId=b["Next-Key-Id"];return a};
Kja=function(a){if(!a)return{};a=a.split(";");var b={};(0,g.y)(a,function(c){c=c.split(",");2===c.length&&(b[c[1]]=c[0])});
return b};
QF=function(a,b,c,d){g.A.call(this);this.message=a;this.requestNumber=b;this.onSuccess=c;this.onError=d;this.o=new g.Un(5E3,2E4,.2)};
Lja=function(a,b,c){var d={format:"RAW",method:"POST",postBody:a.message,responseType:"arraybuffer",withCredentials:!0,timeout:3E4,onSuccess:function(e){if(!a.ia())if(0!==e.status&&e.response)if(NA("drm_net_r"),e=new Uint8Array(e.response),e=PF(e))a.onSuccess(e);else a.onError(a,"drm.net","t.p");else RF(a,e)},
onError:function(e){RF(a,e)}};
c&&(b=Kd(b,"access_token",c));g.tq(b,d)};
RF=function(a,b){if(!a.ia())a.onError(a,b.status?"drm.net.badstatus":"drm.net.connect","t.r;c."+String(b.status))};
Nja=function(a,b,c,d){var e={onSuccess:function(f){if(!a.ia()){NA("drm_net_r");var h="LICENSE_STATUS_OK"===f.status?0:9999,l=null;if(f.license)try{l=g.kg(f.license)}catch(z){}if(0!==h||l){l=new OF(h,l);0!==h&&f.reason&&(l.errorMessage=f.reason);if(f.authorizedFormats){h={};for(var m=[],n={},q=g.p(f.authorizedFormats),r=q.next();!r.done;r=q.next())if(r=r.value,r.trackType&&r.keyId){var u=Mja[r.trackType];if(u){"HD"===u&&f.isHd720&&(u="HD720");h[u]||(m.push(u),h[u]=!0);var w=null;try{w=g.kg(r.keyId)}catch(z){}w&&
(n[g.xg(w,4)]=u)}}l.o=m;l.u=n}f.nextFairplayKeyId&&(l.nextFairplayKeyId=f.nextFairplayKeyId);f=l}else f=null;if(f)a.onSuccess(f);else a.onError(a,"drm.net","t.p;p.i")}},
onError:function(f){a.ia()||(f=f.error,a.onError(a,"drm.net.badstatus","t.r;p.i;c."+f.code+";s."+f.status))}};
d&&(e.iy="Bearer "+d);g.Pp(c,"player/get_drm_license",b,e)};
SF=function(a,b,c,d,e){g.A.call(this);this.element=a;this.I=b;this.initData=c;this.o=d;this.u=e;this.sessionId="";this.G=this.F=this.A=this.C=null;this.B=new g.as(this);g.C(this,this.B);Oja(this)};
Oja=function(a){a.o?(a.B.L(a.o,"message",a.wI),a.B.L(a.o,"keystatuseschange",a.LL),a.o.closed&&a.o.closed.then(Ho(function(){a.ia()||fl("xboxone")&&a.A&&a.A("closed")}),null)):a.u&&(bs(a.B,a.u,["mskeymessage",
"webkitkeymessage"],a.tC),bs(a.B,a.u,["mskeyerror","webkitkeyerror"],a.sC),bs(a.B,a.u,["mskeyadded","webkitkeyadded"],a.rC))};
TF=function(a,b,c,d,e){a.C=b;a.A=c;a.F=d;a.G=e};
UF=function(a,b,c){g.L(c);a.A&&(c instanceof DOMException&&(b+=";n.$(exc.name);m.$(exc.message)"),a.A(b))};
VF=function(a,b){g.A.call(this);this.element=a;this.o=b;this.F={};this.A=null;this.B=new g.as(this);this.u=this.C=null;g.C(this,this.B)};
WF=function(a){if(a.o.keySystemAccess)return a.o.keySystemAccess.createMediaKeys().then(function(b){a.ia()||(a.C=b,a.element.setMediaKeys(b))});
lz(a.o)?a.u=new (kz())(a.o.o):oz(a.o)?(a.u=new (kz())(a.o.o),a.element.webkitSetMediaKeys(a.u)):Pja(a);return null};
Pja=function(a){bs(a.B,a.element,["keymessage","webkitkeymessage"],a.xI);bs(a.B,a.element,["keyerror","webkitkeyerror"],a.KL);bs(a.B,a.element,["keyadded","webkitkeyadded"],a.JL)};
Qja=function(a){return"widevine"===a.o.flavor&&a.o.uo&&a.C.setServerCertificate?a.C.setServerCertificate(a.o.uo):null};
Rja=function(a,b){var c=XF(b,a.o.Af);c=a.u.createSession("video/mp4",c);return new SF(null,null,null,null,c)};
Sja=function(a,b){for(var c=new Uint8Array(270),d=0;135>d;d++)c[2*d]='<PlayReadyCDMData type="LicenseAcquisition"><LicenseAcquisition version="1.0" Proactive="true"></LicenseAcquisition></PlayReadyCDMData>'.charCodeAt(d);c=a.u.createSession("video/mp4",b,c);return new SF(null,null,null,null,c)};
YF=function(a,b){var c=a.F[b.sessionId];!c&&a.A&&(c=a.A,a.A=null,c.sessionId=b.sessionId,a.F[b.sessionId]=c);return c};
XF=function(a,b){var c=a.subarray(4);c=new Uint16Array(c.buffer,c.byteOffset,c.byteLength/2);c=String.fromCharCode.apply(null,c).match(/ek=([0-9a-f]+)/)[1];for(var d="",e=0;e<c.length;e+=2)d+=String.fromCharCode(parseInt(c.substr(e,2),16));c=d;d=new ArrayBuffer(2*c.length);e=new Uint16Array(d);for(var f=0;f<c.length;f++)e[f]=c.charCodeAt(f);c=new Uint8Array(d);d=0;f=new ArrayBuffer(a.byteLength+4+c.byteLength+4+b.byteLength);e=new Uint8Array(f);f=new DataView(f);e.set(a);d+=a.byteLength;f.setUint32(d,
c.length,!0);d+=4;e.set(c,d);d+=c.length;f.setUint32(d,b.byteLength,!0);e.set(b,d+4);return e};
$F=function(a,b,c,d){g.N.call(this);this.V=a;this.u=a.kc;this.A=b;this.fa=c;this.cryptoPeriodIndex=c.cryptoPeriodIndex||NaN;this.sa=d;a={};g.Ub(a,this.A.deviceParams);a.cpn=this.V.clientPlaybackNonce;this.V.ye&&(a.vvt=this.V.ye,this.V.mdxEnvironment&&(a.mdx_environment=this.V.mdxEnvironment));this.A.Bc&&(a.authuser=this.A.Bc);this.A.pageId&&(a.pageid=this.A.pageId);isNaN(this.cryptoPeriodIndex)||(a.cpi=this.cryptoPeriodIndex);if(g.P(this.A.experiments,"html5_send_device_type_in_drm_license_request")){var e;
(e=(e=/_(TV|STB|GAME|OTT|ATV|BDP)_/.exec(g.Pc))?e[1]:"")&&(a.cdt=e)}this.F=a;this.F.session_id=d;this.N=!0;"widevine"==this.u.flavor&&(this.F.hdr="1");"playready"==this.u.flavor&&(d=parseInt(g.Vu(b.experiments,"playready_first_play_expiration"),10),!isNaN(d)&&0<=d&&(this.F.mfpe=""+d),g.P(b.experiments,"html5_playready_keystatuses_killswitch")||(this.N=!1),g.P(b.experiments,"html5_playready_enable_non_persist_license")&&(this.F.pst="0"));d=pz(this.u)?MF(c.initData).replace("skd://","https://"):this.u.A;
g.P(this.A.experiments,"enable_shadow_yttv_channels")&&(d=new g.Vm(d),document.location.origin&&document.location.origin.includes("green")?g.Xm(d,"web-green-qa.youtube.com"):g.Xm(d,"www.youtube.com"),d=d.toString());this.M=d;this.ba=Id(this.M,"ek")||"";this.aa=g.P(b.experiments,"html5_use_drm_retry");this.Z=0;this.I=this.R=!1;this.B=null;this.ga=c.u;this.G=[];this.T=!1;this.o={};this.U=NaN;ZF(this,"sessioninit"+c.cryptoPeriodIndex);this.C="in"};
Wja=function(a,b){ZF(a,"createkeysession");a.C="gr";NA("drm_gk_s");a.ea=Tja(a);try{a.B=b.createSession(a.fa,function(d){return ZF(a,d)})}catch(d){var c="t.g";
d instanceof DOMException&&(c+=";c."+d.code);a.S("licenseerror","drm.unavailable",!0,c,"HTML5_NO_AVAILABLE_FORMATS_FALLBACK");return}a.B&&(TF(a.B,function(d,e){a:{var f=d;if(!a.ia())if(f){ZF(a,"onkmtyp"+e);a.C="km";if(!g.P(a.A.experiments,"html5_provisioning_killswitch"))switch(e){case "license-request":case "license-renewal":case "license-release":break;case "individualization-request":Uja(a,f);f=void 0;break a;default:a.S("ctmp","message_type","t."+e+";l."+f.byteLength)}a.R||(NA("drm_gk_f"),a.R=
!0,a.S("newsession",a));if(mz(a.u)&&(f=aG(f),!f)){f=void 0;break a}pz(a.u)&&!a.V.useInnertubeDrmService()&&(f=Lt(g.xg(f)));f=new QF(f,++a.Z,(0,g.x)(a.QL,a),(0,g.x)(a.PL,a));g.C(a,f);bG(a,f)}else cG(a,"drm.unavailable",!1,"km.empty");f=void 0}return f},function(d){a.ia()||cG(a,"drm.keyerror",!0,d)},function(){a.ia()||(ZF(a,"onkyadd"),a.I||(a.S("sessionready"),a.I=!0))},function(d){return Vja(a,d)}),g.C(a,a.B))};
Tja=function(a){var b=a.M;Nfa(b)||cG(a,"drm.net",!0,"t.x");if(!Id(b,"fexp")){var c=["23898307","23914062","23916106","23883098"].filter(function(e){return a.A.experiments.experiments[e]});
0<c.length&&(a.F.fexp=c.join())}for(var d in a.F)b=Kd(b,d,a.F[d]);return b};
Xja=function(a){var b={};g.Ub(b,a.F);return b};
aG=function(a){for(var b="",c=0;c<a.length;c+=2)b+=String.fromCharCode(a[c]);a=(new DOMParser).parseFromString(b,"text/xml");return a?(a=a.querySelector("Challenge"))&&a.childNodes&&0!==a.childNodes.length?new Uint8Array(qba(a.childNodes[0].data)):null:null};
Uja=function(a,b){ZF(a,"sdpvrq");if("widevine"!=a.u.flavor)cG(a,"drm.provision",!0,"e.flavor;f."+a.u.flavor+";l."+b.byteLength);else{var c={cpn:a.V.clientPlaybackNonce};g.Ub(c,a.A.deviceParams);c=g.Ed("https://www.googleapis.com/certificateprovisioning/v1/devicecertificates/create?key=AIzaSyB-5OLKTx2iU5mko18DfdwK5611JIjbUhE",c);var d={format:"RAW",headers:{"content-type":"application/json"},method:"POST",postBody:JSON.stringify({signedRequest:Mt(b)}),responseType:"arraybuffer"};g.Dr(c,d,3,500).then(Ho(function(e){if(!a.ia()){e=
new Uint8Array(e.response);var f=Mt(e);try{var h=JSON.parse(f)}catch(l){}h&&h.signedResponse?(a.S("ctmp","drminfo","provisioning"),a.B&&a.B.update(e)):(h=h&&h.error&&h.error.message,e="e.parse",h&&(e+=";m."+h),cG(a,"drm.provision",!0,e))}}),Ho(function(e){a.ia()||cG(a,"drm.provision",!0,"e."+e.errorCode+";c."+(e.Xj&&e.Xj.status))}))}};
Vja=function(a,b){a.ia()||0>=b.size||(b.forEach(function(c,d){var e=mz(a.u)?d:c,f=new Uint8Array(mz(a.u)?c:d);mz(a.u)&&dG(f);var h=g.xg(f,4);dG(f);f=g.xg(f,4);a.o[h]?a.o[h].status=e:a.o[f]?a.o[f].status=e:a.o[h]={type:"",status:e}}),ZF(a,"onkeystatuschange"),a.C="kc",a.S("keystatuseschange",a))};
eG=function(a){var b;if(b=a.N&&null!=a.B)a=a.B,b=!(!a.o||!a.o.keyStatuses);return b};
bG=function(a,b){a.C="km";NA("drm_net_s");if(a.V.useInnertubeDrmService()){var c=new g.kr(a.A.Z),d=g.Mp(c.oe||g.Np());d.drmSystem=Yja[a.u.flavor];d.videoId=a.V.videoId;d.cpn=a.V.clientPlaybackNonce;d.sessionId=a.sa;d.licenseRequest=g.xg(b.message);d.drmParams=a.V.drmParams;isNaN(a.cryptoPeriodIndex)||(d.isKeyRotated=!0,d.cryptoPeriodIndex=a.cryptoPeriodIndex);if(!d.context||!d.context.client){cG(a,"drm.net",!0,"t.r;ic.0");return}var e=a.A.deviceParams;e&&(d.context.client.deviceMake=e.cbrand,d.context.client.deviceModel=
e.cmodel,d.context.client.browserName=e.cbr,d.context.client.browserVersion=e.cbrver,d.context.client.osName=e.cos,d.context.client.osVersion=e.cosver);d.context.user=d.context.user||{};d.context.request=d.context.request||{};a.V.ye&&(d.context.user.credentialTransferTokens=[{token:a.V.ye,scope:"VIDEO"}]);d.context.request.mdxEnvironment=a.V.mdxEnvironment||d.context.request.mdxEnvironment;a.V.Kf&&(d.context.user.kidsParent={oauthToken:a.V.Kf});if(pz(a.u)){e=a.ba;for(var f=[],h=0;h<e.length;h+=2)f.push(parseInt(e.substring(h,
h+2),16));d.fairplayKeyId=g.xg(f)}Nja(b,d,c,a.V.Rd())}else Lja(b,a.ea,a.V.oauthToken);a.C="rs"};
cG=function(a,b,c,d,e){a.ia()||a.S("licenseerror",b,c,d,e);c&&a.dispose()};
Zja=function(a,b){var c=b.o.getValue();c=new g.H(function(){return bG(a,b)},c);
g.C(a,c);c.start();g.Vn(b.o);ZF(a,"rtyrq")};
fG=function(a){return g.fb(a,"UHD2")?"highres":g.fb(a,"UHD1")?"hd2160":g.fb(a,"HD")?"hd1080":g.fb(a,"HD720")?"hd720":"large"};
gG=function(a,b){if(!eG(a)&&nz(a.u)&&!b)return"large";var c=[],d=!0;if(eG(a))for(var e in a.o)"usable"==a.o[e].status&&c.push(a.o[e].type),"unknown"!=a.o[e].status&&(d=!1);if(!eG(a)||d)c=a.G;return fG(c)};
dG=function(a){var b=a[0];a[0]=a[3];a[3]=b;b=a[1];a[1]=a[2];a[2]=b;b=a[4];a[4]=a[5];a[5]=b;b=a[6];a[6]=a[7];a[7]=b};
hG=function(a){var b=a.C+";";if(eG(a)){var c=[],d;for(d in a.o)c.push.apply(c,[d,a.o[d].type,a.o[d].status]);a=b+c.join(";")}else a=b+a.G.join(";");return a};
iG=function(a,b,c,d,e){var f;"playready"===e?f=aG(a):"fairplay"==e&&(f=Lt(g.xg(a)));f&&(a={format:"RAW",method:"POST",postBody:f,responseType:"arraybuffer",withCredentials:!0,timeout:3E4},c=Paa(c,d),g.Dr(c,a,3,500).then(function(h){h=new Uint8Array(h.response);(h=PF(h))&&h.message&&b.update(h.message)}))};
jG=function(a,b,c){a:{switch(b){case "highres":case "hd2880":b="UHD2";break;case "hd2160":case "hd1440":b="UHD1";break;case "hd1080":case "hd720":b="HD";break;case "large":case "medium":case "small":case "light":case "tiny":b="SD";break;default:c="";break a}c&&(b+="HDR");c=b}for(var d in a.o)if("output-restricted"==a.o[d].status&&(b=a.o[d].type,""==c||"AUDIO"==b||c==b))return!0;return!1};
kG=function(a,b){for(var c in a.o)if("usable"==a.o[c].status&&a.o[c].type==b)return!0;return!1};
ZF=function(a,b){ZB(a.V)&&a.S("ctmp","drmlog",b)};
lG=function(a,b){g.A.call(this);this.o=g.ue("video");this.u=null;this.A=new jz("fairplay","com.youtube.fairplay","",b);this.A.Af=a;this.B=[];this.C=new g.as(this);g.C(this,this.C);$ja(this)};
$ja=function(a){var b,c;Aa(function(d){if(1==d.o){if(!a.o)return d["return"]();g.zh(a.o,{position:"absolute",width:"1px",height:"1px",display:"block"});a.o.src=a.A.B;document.body.appendChild(a.o);a.C.L(a.o,"encrypted",a.F);b=[{initDataTypes:["keyids","cenc"],audioCapabilities:[{contentType:'audio/mp4; codecs="mp4a"'}],videoCapabilities:[{contentType:'video/mp4; codecs="avc1"'}]}];return g.ra(d,navigator.requestMediaKeySystemAccess("com.youtube.fairplay",b),2)}c=d.u;a.A.keySystemAccess=c;a.u=new VF(a.o,
a.A);g.C(a,a.u);WF(a.u);d.o=0})};
mG=function(){this.keys=[];this.values=[]};
nG=function(a,b,c){KF.call(this);var d=this;this.B=a;this.A=b;this.o=[];this.u=new g.H(function(){var e=d.o.shift().info;a:{var f=e.cryptoPeriodIndex;if(isNaN(f)&&0<d.A.values.length)f=!0;else{for(var h=g.p(d.A.values),l=h.next();!l.done;l=h.next())if(l.value.cryptoPeriodIndex==f){f=!0;break a}f=!1}}f||d.S("rotated_need_key_info_ready",e);0<d.o.length&&(e=d.o[0].time-(0,g.D)(),d.u.start(Math.max(0,e)))},0);
g.C(this,this.u);c.subscribe("widevine_set_need_key_info",this.C,this)};
qG=function(a,b,c){g.N.call(this);a&&(a.addKey||a.webkitAddKey)||kz()||qz(c.experiments);this.R=a;this.V=b;this.o=b.kc;this.A=c;this.ya=b.drmSessionId||g.os();this.u=new mG;this.fa=null;this.F=new mG;this.M=new mG;this.B=[];b=g.P(this.A.experiments,"html5_drm_initial_constraint_from_config")?this.V.Dm:g.P(this.A.experiments,"html5_drm_start_from_null_constraint");this.I="fairplay"==this.o.flavor?Fx:b?Fx:oG;this.Z=null;this.T=new VF(a,this.o);g.C(this,this.T);this.C=null;lz(this.o)&&(this.C=new VF(a,
this.o),g.C(this,this.C));this.ra=2;this.aa=new g.as(this);g.C(this,this.aa);this.ua=this.ga=!1;this.sa=null;this.N=!1;a=this.R;this.o.keySystemAccess?this.aa.L(a,"encrypted",this.RJ):bs(this.aa,a,lz(this.o)?["msneedkey"]:["needkey","webkitneedkey"],this.tM);(a=WF(this.T))?a.then(Ho((0,g.x)(this.cM,this)),Ho((0,g.x)(this.UK,this))):(pG(this,"mdkrdy"),this.N=!0);this.C&&WF(this.C);this.U=this.ea=this.ba=!1;a:{a=this.o;b=this.A.experiments;c=this.u;switch(a.flavor){case "fairplay":19.2999<el()?(b=a.rp,
a=a.qp,a>=b&&(a=.75*b),c=.5*(b-a),a=new LF(c,b,b-c-a,this)):a=null;break a;case "widevine":a=new nG(g.P(b,"disable_license_delay"),c,this);break a}a=null}if(this.G=a)g.C(this,this.G),this.G.subscribe("rotated_need_key_info_ready",this.ey,this);pG(this,"cks"+this.o.je());a=this.o;"com.youtube.widevine.forcehdcp"===a.o&&a.B&&(this.za=new lG(this.V.Af,this.A.experiments),g.C(this,this.za))};
tG=function(a,b,c){a.ua=!0;c=new oD(b,c);g.P(a.A.experiments,"html5_eme_loader_sync")?(a.F.get(b)||a.F.set(b,c),rG(a,c)):0!=a.B.length&&a.V.Aa&&a.V.Aa.o()?sG(a):rG(a,c)};
uG=function(a,b){pG(a,"onneedkeyinfo");g.P(a.A.experiments,"html5_eme_loader_sync")&&(a.M.get(b.initData)||a.M.set(b.initData,b));rG(a,b)};
bka=function(a,b){if(lz(a.o)&&!a.ba){var c=yia(b);if(0!=c.length){var d=new oD(c);a.ba=!0;navigator.requestMediaKeySystemAccess("com.microsoft.playready",[{initDataTypes:["keyids","cenc"],audioCapabilities:[{contentType:'audio/mp4; codecs="mp4a"'}],videoCapabilities:[{contentType:'video/mp4; codecs="avc1"'}]}]).then(function(e){e.createMediaKeys().then(function(f){aka(a,f,d)})},null)}}};
aka=function(a,b,c){var d=b.createSession(),e=a.u.values[0],f=Xja(e);d.addEventListener("message",function(h){h=new Uint8Array(h.message);iG(h,d,a.o.A,f,"playready")});
d.addEventListener("keystatuseschange",function(){d.keyStatuses.forEach(function(h,l){"usable"==l&&(a.ea=!0,vG(a,gG(e,a.ea)))})});
d.generateRequest("cenc",c.initData)};
rG=function(a,b){if(!a.ia()){pG(a,"onInitData_");if(g.P(a.A.experiments,"html5_eme_loader_sync")&&a.V.Aa&&a.V.Aa.o()){var c=a.M.get(b.initData),d=a.F.get(b.initData);if(!c||!d)return;b=c;c=b.initData;a.F.remove(c);a.M.remove(c)}pG(a,"initd"+b.initData.length+"ct"+b.contentType);"widevine"==a.o.flavor?a.ga&&!a.V.xa||g.P(a.A.experiments,"vp9_drm_live")&&a.V.xa&&b.Kc||(a.ga=!0,c=b.o,pD(b),c&&!b.Kc&&b.o!=c&&a.S("ctmp","cpsmm","emsg."+c+";pssh."+b.o),a.S("widevine_set_need_key_info",b)):a.ey(b)}};
wG=function(a){a.ia()||(a.N=!0,pG(a,"onmdkrdy"),sG(a))};
sG=function(a){if(a.ua&&a.N&&!a.U){for(;a.B.length;){var b=a.B[0];if(a.u.get(b.initData))if("fairplay"==a.o.flavor)a.u.remove(b.initData);else{a.B.shift();continue}pD(b);break}if(a.B.length){b=a.B[0];a.u.get(b.initData);a.U=!0;var c=new $F(a.V,a.A,b,a.ya);a.u.set(b.initData,c);c.subscribe("ctmp",a.RB,a);c.subscribe("hdentitled",a.eC,a);c.subscribe("keystatuseschange",a.kB,a);c.subscribe("licenseerror",a.lB,a);c.subscribe("newlicense",a.nC,a);c.subscribe("newsession",a.pC,a);c.subscribe("sessionready",
a.DC,a);c.subscribe("fairplay_next_need_key_info",a.bC,a);Wja(c,a.T)}}};
vG=function(a,b){var c=Dx("auto",b,!1,"l");if(g.P(a.A.experiments,"html5_drm_initial_constraint_from_config")?a.V.Dm:g.P(a.A.experiments,"html5_drm_start_from_null_constraint")){if(Cx(a.I,c))return}else if(Ix(a.I,b))return;a.I=c;a.S("qualitychange");pG(a,"updtlq"+b)};
cka=function(a){if(0>=a.u.values.length){var b="ns;";a.N||(b+="nr;");return b+="ql"+a.B.length}return hG(a.u.values[0])};
pG=function(a,b){a.ia()||ZB(a.V)&&a.Si.S("ctmp","drmlog",b)};
xG=function(a,b){this.videoData=a;this.Aa=b};
dka=function(a,b,c){return b.Ro(c).then(function(){return(a.ha("disable_index_range_auth")||!b.Up||!b.Aa.o()||b.Bg()||b.isOtf()?0:/(&|,|^)init=0-0(&|,|$)/.test(b.adaptiveFormats))?Fr(new dx("auth",!0,{init:"1"})):Gr(new xG(b,b.Aa))},function(d){d instanceof Error&&g.Io(d);
d=b.xa&&!g.xx(a.B,!0)?"html5.unsupportedlive":"fmt.noneavailable";var e={buildRej:"1",a:""+ +!!b.adaptiveFormats,d:""+ +!!b.Ge,drm:""+ +EB(b),f18:""+ +(0<=b.so.indexOf("itag=18")),c18:""+ +Nw('video/mp4; codecs="avc1.42001E, mp4a.40.2"')};b.ka&&(EB(b)?(e.f142=""+ +!!b.ka.o["142"],e.f149=""+ +!!b.ka.o["149"],e.f279=""+ +!!b.ka.o["279"]):(e.f133=""+ +!!b.ka.o["133"],e.f140=""+ +!!b.ka.o["140"],e.f242=""+ +!!b.ka.o["242"]),e.cAVC=""+ +Pw('video/mp4; codecs="avc1.42001E"'),e.cAAC=""+ +Pw('audio/mp4; codecs="mp4a.40.2"'),
e.cVP9=""+ +Pw('video/webm; codecs="vp9"'));if(b.kc){e.drmsys=b.kc.o;var f=0;b.kc.u&&(f=Object.keys(b.kc.u).length);e.drmst=""+f}return new dx(d,!0,e)})};
yG=function(a,b){g.N.call(this);this.o=a;this.R=b;this.N=this.F=this.G=this.A=this.u=this.C=this.M=this.B=0;this.I=1};
AG=function(a,b,c){!g.P(a.o.experiments,"html5_tv_ignore_capable_constraint")&&g.Fy(a.o)&&(c=Gx(c,zG(a,b)));return c};
zG=function(a,b){if(g.Fy(a.o)&&sx(a.o.B,tx.HEIGHT))var c=b.Aa.videoInfos[0].Ca().Qb;else{var d=b.Aa.o();uy(a.o)&&(c=window.screen&&window.screen.width?new g.Zd(window.screen.width,window.screen.height):null);c||(c=a.o.jm?a.o.jm.clone():a.R.getPlayerSize());if(wy||ux||d){d=c;var e=g.Oy();d.width*=e;d.height*=e}nB(b.videoData)||XB(b.videoData);var f=b.Aa.videoInfos;if(f.length){d=.85;e=f[0].Ca();4!=e.projectionType&&2!=e.projectionType&&3!=e.projectionType||sy||(d=.45);e=f[0];var h=e.Ca();f=g.p(f);
for(var l=f.next();!l.done&&!(e=h=l.value,h=h.Ca(),null===c||h.width*d<c.width&&h.height*d<c.height);l=f.next());c="93"===uu(e)?Gv(h.width,h.height):h.quality;c=Dx("auto",c,!1,"r")}else c=Fx;c=c.o}c&&(c=Math.max(c,360));return new Bx(0,c,!1,"r")};
BG=function(a,b){var c;a:if((c=b.Aa)&&c.videoInfos.length){for(var d=g.p(c.videoInfos),e=d.next();!e.done;e=d.next())if(e=e.value,e.A){c=e.Ca().Qb;break a}c=c.videoInfos[0].Ca().Qb}else c=0;hl()&&!g.Fy(a.o)&&Ov(b.Aa.videoInfos[0])&&(c=Math.min(c,g.Hv.large));return new Bx(0,c,!1,"o")};
eka=function(a){var b;return Aa(function(c){if(!a.Aa.o())return c["return"]();b=a.Aa.videoInfos;return c["return"](Wz(b))})};
fka=function(a,b,c,d){if(!b||!c||!b.videoData.Fa)return!1;var e=g.O(a.o.experiments,"html5_df_downgrade_thresh"),f=CG(a,"html5_log_media_perf_info"),h=g.O(a.o.experiments,"hfr_dropped_framerate_fallback_threshold");if(!(5E3>(0,g.M)()-a.C?0:f||0<e||0<h))return!1;a.C=(0,g.M)();c=c.getVideoPlaybackQuality();if(!c)return!1;var l=c.droppedVideoFrames-a.F,m=c.totalVideoFrames-a.N;a.F=c.droppedVideoFrames;a.N=c.totalVideoFrames;f&&b.videoData.uh&&a.S("ctmp","ddf","dr."+c.droppedVideoFrames+";de."+c.totalVideoFrames);
if(CG(a,"html5_ignore_background_dfd")&&d)return a.u=0,a.A=0,!1;d=60<m?l/m:0;0<d&&(a.G=d);a.A=0<h&&60*d>h?a.A+1:0;if(!e||g.Fy(a.o)||!DG(a,b))return!1;a.u=d>e?a.u+1:0;if(3!=a.u)return!1;EG(a,b.videoData.Fa);a.S("ctmp","dfd",FG());return!0};
DG=function(a,b){if(CG(a,"html5_restore_perf_cap_redux"))return!0;if(!b.videoData.Fa)return!1;if("1"===b.videoData.Fa.sb)return!0;var c=a.o.o?240:360;return b.videoData.Fa.Ca().Qb>c};
EG=function(a,b){var c=b.Ca().Qb-1,d=b.sb,e=b.Ca().fps,f=c,h=Ox();d=Nx(d,e);0<+h[d]&&(f=Math.min(+h[d],f));h[d]!==f&&(h[d]=f,g.Ws("yt-player-performance-cap",h,604800));a.o.be=new Bx(0,c,!1,"b")};
GG=function(a,b){if(CG(a,"html5_restore_perf_cap_redux")){if(!b.Aa.o())return Fx;var c=0,d=g.O(a.o.experiments,"html5_performance_cap_floor");d=a.o.o?240:d;for(var e=g.p(b.Aa.videoInfos),f=e.next();!f.done;f=e.next()){f=f.value;var h=f.sb,l=f.Ca().fps;h=+Ox()[Nx(h,l)]||0;f=f.Ca().Qb;if(!h||Math.max(h,d)>=f){c=f;break}}return new Bx(0,c,!1,"b")}return a.o.be};
CG=function(a,b){return g.P(a.o.experiments,b)};
gka=function(a,b){CG(a,"html5_log_media_perf_info")&&(a.S("ctmp","perfdb",FG()),a.S("ctmp","hwc",""+navigator.hardwareConcurrency,!0),b&&a.S("ctmp","mcdb",b.Aa.videoInfos.filter(function(c){return!1===c.A}).map(function(c){return uu(c)}).join("-")))};
FG=function(){var a=Cb(Ox(),function(b){return""+b});
return ex(a)};
hka=function(){this.B=this.o=NaN;this.A=this.u=!1};
HG=function(a,b){return b>a.o+.001&&b<a.o+5};
IG=function(a,b,c,d){if(d=1<d)a.A=!0;if(a.u)b!=a.o&&(a.u=!1);else if(0<b&&a.o==b)return c-a.B>(d||!a.A?1500:400);a.o=b;a.B=c;return!1};
JG=function(a){this.data=window.Float32Array?new Float32Array(a):Array(a);this.u=this.o=a-1};
KG=function(a){return a.data[a.o]||0};
ika=function(a){this.B=new JG(50);this.o=null;this.A=this.u=0;this.C=a};
MG=function(a,b,c){g.N.call(this);var d=new jka;"ULTRALOW"==a.latencyClass&&(d.B=!1);a.yg?d.u=3:g.NB(a)&&(d.u=2);g.P(b,"html5_adaptive_seek_to_head_killswitch")||"NORMAL"!=a.latencyClass||(d.F=!0);var e=AB(a);d.C=2==e||-1==e;d.C&&(d.N++,21530001==yB(a)&&(d.G=g.O(b,"html5_jumbo_ull_nonstreaming_mffa_ms")||NaN));if(fl("trident/")||fl("edge/"))e=g.O(b,"html5_platform_minimum_readahead_seconds")||3,d.A=Math.max(d.A,e);g.O(b,"html5_minimum_readahead_seconds")&&(d.A=g.O(b,"html5_minimum_readahead_seconds"));
g.O(b,"html5_maximum_readahead_seconds")&&(d.I=g.O(b,"html5_maximum_readahead_seconds"));g.P(b,"html5_force_adaptive_readahead")&&(d.B=!0);g.O(b,"html5_allowable_liveness_drift_chunks")&&(d.o=g.O(b,"html5_allowable_liveness_drift_chunks"));g.O(b,"html5_readahead_ratelimit")&&(d.M=g.O(b,"html5_readahead_ratelimit"));switch(yB(a)){case 21530001:d.o=(d.o+1)/5,"LOW"==a.latencyClass&&(d.o*=2),d.R=g.P(b,"html5_live_smoothly_extend_max_seekable_time")}this.o=d;this.V=a;this.M=c;this.A=[];this.C=0;this.B=
!0;this.F=1!=this.o.u;this.G=!1;this.I=0;b=isNaN(a.liveChunkReadahead)?3:a.liveChunkReadahead;a.yg&&b--;a.isLowLatencyLiveStream&&"NORMAL"!=a.latencyClass||b++;switch(yB(a)){case 21530001:b=1;break;case 2153E4:b=2}this.o.C&&b++;this.u=LG(this,b)};
OG=function(a,b){var c=a.u;(void 0===b?0:b)&&a.o.R&&3==AB(a.V)&&--c;return NG(a)*c};
TG=function(a,b){var c=SG(a);var d=a.o.o;a.G||(d=Math.max(d-1,0));d*=NG(a);return b>=c-d};
SG=function(a){return Math.max(a.M()-OG(a,!0),a.V.Kb())};
UG=function(a,b,c){b=TG(a,b);c||b?b&&(a.B=!0):a.B=!1;a.F=2==a.o.u||3==a.o.u&&a.B};
VG=function(a,b){var c=TG(a,b);a.G!=c&&a.S("livestatusshift",c);a.G=c};
NG=function(a){return a.V.ka?Kw(a.V.ka)||5:5};
LG=function(a,b){b=Math.max(Math.max(a.o.N,Math.ceil(a.o.A/NG(a))),b);return Math.min(Math.min(8,Math.floor(a.o.I/NG(a))),b)};
jka=function(){this.N=1;this.A=0;this.I=Infinity;this.M=0;this.B=!0;this.o=2;this.u=1;this.C=!1;this.G=NaN;this.R=this.F=!1};
WG=function(){var a=Zo();return!(!a||"visible"===a)};
YG=function(a){var b=XG();b&&document.addEventListener(b,a,!1)};
ZG=function(a){var b=XG();b&&document.removeEventListener(b,a,!1)};
XG=function(){if(document.visibilityState)var a="visibilitychange";else{if(!document[Yo+"VisibilityState"])return"";a=Yo+"visibilitychange"}return a};
$G=function(){g.N.call(this);this.A=0;this.B=this.C=this.u=this.o=this.F=!1;this.G=(0,g.x)(this.bk,this);YG(this.G);this.I=this.getVisibilityState(this.u,this.isFullscreen(),this.o,this.isInline(),this.C,this.B)};
kka=function(a,b){a.u!=b&&(a.u=b,a.bk())};
aH=function(a,b){a.C!=b&&(a.C=b,a.bk())};
g.bH=function(a,b){this.stateData=void 0===b?null:b;this.state=a||64};
cH=function(a,b,c){return b===a.state&&c===a.stateData||void 0!==b&&(b&128&&!c||b&2&&b&16)?a:new g.bH(b,c)};
dH=function(a,b){return cH(a,a.state|b)};
eH=function(a,b){return cH(a,a.state&~b)};
fH=function(a,b,c){return cH(a,(a.state|b)&~c)};
g.T=function(a,b){return!!(a.state&b)};
g.gH=function(a,b){return b.state===a.state&&b.stateData===a.stateData};
g.hH=function(a){return g.T(a,8)&&!g.T(a,2)&&!g.T(a,1024)};
fF=function(a){return a.qb()&&!g.T(a,16)&&!g.T(a,32)};
lka=function(a){return g.T(a,8)&&g.T(a,16)};
g.iH=function(a){return g.T(a,1)&&!g.T(a,2)};
jH=function(a){return g.T(a,128)?-1:g.T(a,2)?0:g.T(a,64)?-1:g.T(a,1)&&!g.T(a,32)?3:g.T(a,8)?1:g.T(a,4)?2:-1};
g.kH=function(a,b){this.state=a;this.Mi=b};
lH=function(a,b){return g.T(a.state,b)&&!g.T(a.Mi,b)?1:!g.T(a.state,b)&&g.T(a.Mi,b)?-1:0};
g.mH=function(a,b){return 0<lH(a,b)};
pH=function(a,b,c,d){g.A.call(this);this.C=a;this.F=b;this.R=c;this.aa=d;this.A=new g.bH;this.u=this.B=null;this.M=this.N=this.o=0;this.I=new g.H(this.ba,1E3,this);g.C(this,this.I);this.sa=new nH({delayMs:g.O(this.C.experiments,"html5_seek_timeout_delay_ms")});this.Z=new nH({delayMs:g.O(this.C.experiments,"html5_long_rebuffer_threshold_ms")});this.ra=oH(this,"html5_seek_set_cmt");this.fa=oH(this,"html5_seek_jiggle_cmt");this.ga=oH(this,"html5_seek_new_elem");this.U=oH(this,"html5_decoder_freeze_timeout");
this.ua=oH(this,"html5_unreported_seek_reseek");this.ea=oH(this,"html5_reload_element_long_rebuffer");this.T=oH(this,"html5_ads_preroll_lock_timeout");this.G={}};
oH=function(a,b){var c=g.O(a.C.experiments,b+"_delay_ms"),d=g.P(a.C.experiments,b+"_cfl");return new nH({delayMs:c,Jy:d})};
qH=function(a,b){(a.B=b)&&a.I.fb()};
sH=function(a,b,c,d,e,f,h){mka(b,c)?(d=rH(a,b),d.wn=h,d.wdup=a.G[e]?"1":"0",a.F("qoeerror",e,d),a.G[e]=!0,b.I||f()):(b.C&&b.u&&!b.F?(f=(0,g.M)(),d?b.o||(b.o=f):b.o=0,c=!d&&f-b.u>b.C,f=b.o&&f-b.o>b.M||c?b.F=!0:!1):f=!1,f&&(f=rH(a,b),f.wn=h,f.we=e,f.wsuc=""+ +d,h=ex(f),a.F("ctmp","workaroundReport",h),d&&(b.reset(),a.G[e]=!1)))};
rH=function(a,b){var c=b.Za();a.o&&(c.stt=a.o.toFixed(3));a.u&&Object.assign(c,a.u.Za());a.B&&Object.assign(c,a.B.Za());return c};
nH=function(a){a=void 0===a?{}:a;var b=void 0===a.FO?1E3:a.FO,c=void 0===a.GO?3E4:a.GO,d=void 0===a.Jy?!1:a.Jy;this.G=Math.ceil((void 0===a.delayMs?0:a.delayMs)/1E3);this.M=b;this.C=c;this.I=d;this.reset()};
mka=function(a,b){if(!a.G||a.u)return!1;if(!b)return a.reset(),!1;var c=(0,g.M)();if(!a.A)a.A=c,a.B=0;else if(a.B>=a.G)return a.u=c,!0;a.B+=1;return!1};
xH=function(a,b,c,d){g.N.call(this);var e=this;this.U=b;this.V=a;this.Z=new nka(b);this.Ea=c;this.Da=d;this.M=new pH(this.U,function(f){for(var h=[],l=0;l<arguments.length;++l)h[l-0]=arguments[l];return e.S.apply(e,g.la(h))},this.Ea,this.Da);
a={};this.ba=(a.seekplayerrequired=this.QO,a.videoformatchange=this.TJ,a);tH(this,"html5_unrewrite_timestamps")?this.ba.timestamp=this.YO:this.ba.timestamp=this.XO;this.ya=null;this.ra=new g.as;g.C(this,this.ra);this.N=this.u=this.C=this.o=null;this.A=NaN;this.G=0;this.F=null;this.ea=NaN;this.I=this.R=null;this.sa=this.T=!1;this.aa=new g.H(function(){return uH(e,!1)},this.Z.o);
g.C(this,this.aa);this.ga=new g.H(function(){e.T=!0;vH(e)});
g.C(this,this.ga);this.Ha=new g.H(function(){return wH(e)});
g.C(this,this.Ha);this.ua=this.B=0;this.fa=!0;this.za=0;this.Ba=NaN};
oka=function(a,b){a.ya=b;a.V.xa&&(a.N=new ika(function(){a:{if(a.ya&&a.ya.Aa.o()){if(xB(a.V)&&a.C){var c=a.C.ua.o()||0;break a}if(a.V.ka){c=a.V.ka.N;break a}}c=0}return c}),a.u=new MG(a.V,a.U.experiments,function(){return a.Dc(!0)}));
a.V.startSeconds&&isFinite(a.V.startSeconds)&&1E9<a.V.startSeconds||(a.G=a.G||a.V.startSeconds||0)};
zH=function(a,b){g.cs(a.ra);(a.o=b)?(pka(a),wH(a)):yH(a);qH(a.M,b)};
BH=function(a,b){a.C&&es(a.C,a.ba,a);(a.C=b)?(ds(b,a.ba,a),AH(a,!0)):yH(a);a.M.u=b};
CH=function(a){return a.getCurrentTime()-a.Ib()};
DH=function(a){return!!a.u&&a.u.F};
uH=function(a,b){if(a.u){var c=a.u;var d=a.getCurrentTime();!TG(c,d)&&c.F?(c.o.F&&(c.o.o=Math.max(c.o.o+1,10)),c=Infinity):c=d<c.V.Kb()?Math.min(c.V.Kb()+10,SG(c)):NaN;if(!isNaN(c)){if(tH(a,"html5_in_buffer_ptl")&&a.C&&b){d=a.aa.isActive();var e=SG(a.u);if((e=Fja(a.C,e-a.Ib()))&&!d){a.Z.o&&a.aa.start();a.S("ctmp","inBufferPtl","cmt."+a.getCurrentTime()+";seekTo"+(e+a.Ib()));a.seekTo(e+a.Ib());return}}tH(a,"html5_peg_to_live_logging")&&a.S("ctmp","ptl","cmt."+a.getCurrentTime()+";seekTo"+(c+a.Ib()));
a.seekTo(c)}}};
AH=function(a,b){if(a.u&&a.C){var c=!1;if(b)c=!0;else if(a.V.isLowLatencyLiveStream||"LOW"==a.V.latencyClass||"ULTRALOW"==a.V.latencyClass)if(c=a.u,c.A.length){var d=c.u;b:{if(c.A.length){if(1<Math.min.apply(null,c.A)){var e=LG(c,c.u-1);break b}if(c.o.B){e=LG(c,c.u+1);break b}}e=c.u}c.u=e;if(d=d!=c.u)c.A=[],c.C=0;c=d}else c=!1;c&&a.S("livereadaheadchanged",OG(a.u));c=a.C;d=a.u.u;e=a.u;e=(e.u-1+e.o.o)*NG(e);var f=a.u.o.G;c.Ba=Math.max(d-1,0);c.I&&(c.I.U=e);c.gb=f}};
EH=function(a){return a.V.xa&&!!a.V.Aa&&!a.V.Aa.o()};
vH=function(a){qka(a).then(void 0,function(){yH(a)});
FH(a).then(function(b){a.I&&(a.I.resolve(b),a.S("seekend"));yH(a)},function(){yH(a)});
a.S("seekstart")};
qka=function(a){if(!a.R)if(a.C)if(isFinite(a.A))a.R=a.C.seek(a.A-a.B);else{var b=a.C;mF(b);b.I&&RE(b.I,b.u.o);b.ea.fb();b=b.M;var c=Math.max(b.u.A.F||0,b.o.A.F||0);bE(b.u);bE(b.o);var d=b.C,e;for(e in d.o)gt(d.o[e].index,Infinity);b.C.u&&(b.G=!0);b.S("setcurrenttime",c);b.A=!0;b.I=new zC;a.R=b.I;a.A=a.C.getCurrentTime()+a.B}else a.R=Kf(a.A-a.B);return a.R};
FH=function(a){var b=a.F;b||(a.F=new zC,b=a.F,wH(a));return b};
GH=function(a,b,c){return isNaN(b)?NaN:g.Td(b,a.Kb(),a.Dc(c))};
wH=function(a){if(a.F)if(!tH(a,"html5_nondash_live_seek_killswitch")&&EH(a)&&a.o&&0<a.o.Oe()&&0<lC(a.o)&&(a.A=GH(a,a.A,!1)),!a.o||!HH(a))a.Ha.start(750);else if(!isNaN(a.A)&&isFinite(a.A)&&a.ea!=a.A-a.B){var b=a.o.getCurrentTime()-a.A;if(Math.abs(b)<=a.za)a.F&&a.F.resolve(a.o.getCurrentTime());else if(!a.V.xa&&a.A>=a.Dc()-.1)a.A=a.Dc(),a.F.resolve(a.Dc()),a.S("ended");else try{var c=a.A-a.B;a.o.seekTo(c);a.M.o=c;a.ea=c;a.G=a.A}catch(d){}}};
HH=function(a){if(!a.o||0==a.o.Oe()||0<a.o.Nf())return!1;var b=0<a.o.getCurrentTime();if(!(tH(a,"html5_nondash_mediaelementready_killswitch")||a.V.Aa&&a.V.Aa.o()||a.V.xa)&&EB(a.V))return b;if(0<=a.A){var c=a.o.Rm();if(c.length||!b)return Zw(c,a.A-a.B)}return b};
yH=function(a){a.A=NaN;a.ea=NaN;a.F=null;a.R=null;a.I=null;a.T=!1;a.sa=!1;a.za=0;a.aa.stop();a.ga.stop()};
pka=function(a){if(a.o){for(var b=g.p(["loadedmetadata","progress","seeked","seeking"]),c=b.next();!c.done;c=b.next())a.ra.L(a.o,c.value,function(d){switch(d.type){case "seeking":d=a.o.getCurrentTime()+a.B;if(!a.F||a.sa&&d!=a.A){a.F=new zC;a.ea=d;var e=a.o.getCurrentTime();a.M.o=e;a.seekTo(d);a.sa=!0}break;case "seeked":a.F&&a.F.resolve(a.o.getCurrentTime());break;case "loadedmetadata":if(a.fa){d="ss.";e=0;if((OB(a.V)||a.V.liveUtcStartSeconds)&&(a.V.liveUtcStartSeconds||a.V.startSeconds&&isFinite(a.V.startSeconds)&&
1E9<a.V.startSeconds)&&a.V.ka){e=a.V.liveUtcStartSeconds||a.V.ri;d="utc.";var f=a.Dc();var h=a.Dc();h=Lw(a.V.ka,h-a.B);e=f-h+e}else a.V.ka&&a.V.ka.u&&a.V.ri?(d="mss.",e=a.V.ri+a.Ib()):tH(a,"html5_unrewrite_timestamps")&&a.V.Ur&&(d="stss.",e=a.V.Ur);e?(a.seekTo(e),a.S("ctmp","startSeconds",d+e),a.fa=!1):a.V.ri&&a.S("ctmp","startSeconds",d+(a.V.ri+a.Ib()));d=!!e}else d=!1;tH(a,"html5_nondash_live_seek_killswitch")&&!d&&EH(a)&&(a.A=isFinite(a.A)?g.Td(a.A,a.Kb(),a.Dc()):a.Dc());case "progress":wH(a)}});
a.I||a.G||a.Z.A||!a.o.Jr()||a.seekTo(.01)}};
rka=function(a){if(!a.o)return 0;if(OB(a.V)){var b=pC(a.o)+a.B-a.Kb();a=a.Dc()-a.Kb();return Math.max(0,Math.min(1,b/a))}return qC(a.o)};
tH=function(a,b){return a.U&&g.P(a.U.experiments,b)};
nka=function(a){this.o=g.O(a.experiments,"html5_in_buffer_ptl_timeout_ms");this.u=g.P(a.experiments,"html5_live_smoothly_extend_max_seekable_time");this.B=a.ha("html5_seek_over_discontinuities");this.A=a.ha("html5_requires_seek_for_playback_at_zero_killswitch")};
IH=function(){this.o=this.started=!1};
ska=function(){JH=(0,g.M)()};
KH=function(a){a=void 0===a?{}:a;var b=ur;a=void 0===a?{}:a;return b.o?b.o.invoke(void 0,void 0,a):null};
tka=function(a){a=void 0===a?{}:a;return dfa(a)};
uka=function(a,b){var c=this;this.videoData=a;this.A=b;var d={};this.u=(d.c1a=function(){if(LH(c)){var e="";c.videoData&&c.videoData.tf&&(e=c.videoData.tf+("&r1b="+c.videoData.clientPlaybackNonce));var f={};e=(f.atr_challenge=e,f);e=(e=c.A?KH(e):g.Ja("yt.abuse.player.invokeBotguard")(e))?"r1a="+e:"r1c=2"}else e="r1c=1";return e},d.c3a=function(e){return"r3a="+Math.floor(c.videoData.lengthSeconds%Number(e.c3a)).toString()},d.c6a=function(e){e=Number(e.c);
var f=c.A?parseInt(g.K("DCLKSTAT",0),10):(f=g.Ja("yt.abuse.dclkstatus.checkDclkStatus"))?f():NaN;return"r6a="+(e^f)},d);
this.videoData&&this.videoData.tf?this.o=$p(this.videoData.tf):this.o={}};
vka=function(a){if(a.videoData&&a.videoData.tf){for(var b=[a.videoData.tf],c=g.p(Object.keys(a.u)),d=c.next();!d.done;d=c.next())d=d.value,a.o[d]&&a.u[d]&&(d=a.u[d](a.o))&&b.push(d);return b.join("&")}return null};
xka=function(a){var b={};Object.assign(b,a.u);"c1b"in a.o&&(b.c1a=function(){return wka(a)});
if(a.videoData&&a.videoData.tf){for(var c=[a.videoData.tf],d=g.p(Object.keys(b)),e=d.next();!e.done;e=d.next())e=e.value,a.o[e]&&b[e]&&(e=b[e](a.o))&&c.push(e);return new Promise(function(f){Promise.all(c).then(function(h){f(h.filter(function(l){return!!l}).join("&"))})})}return Promise.resolve(null)};
LH=function(a){return a.A?ur.fd():(a=g.Ja("yt.abuse.player.botguardInitialized"))&&a()};
wka=function(a){if(!LH(a))return Promise.resolve("r1c=1");var b="";a.videoData&&a.videoData.tf&&(b=a.videoData.tf+("&r1b="+a.videoData.clientPlaybackNonce));var c={},d=(c.atr_challenge=b,c),e=a.A?tka:g.Ja("yt.abuse.player.invokeBotguardAsync");return new Promise(function(f){e(d).then(function(h){h?f("r1a="+h):f("r1c=2")},function(){f("r1c=3")})})};
MH=function(a,b,c){g.N.call(this);this.videoData=a;this.o=b;this.playerVisibility=c;this.B=0;this.u=null;this.A=!1};
RH=function(a,b,c){var d=!1,e=a.B+3E4<(0,g.M)()||!1,f;if(f=a.videoData.ha("html5_pause_on_nonforeground_platform_errors")&&!e)f=a.playerVisibility,f=!!(f.o||f.isInline()||f.isBackground()||f.C||f.B);f&&(c.nonfg="paused",e=!0,a.S("pausevideo"));a.videoData.ha("html5_disable_codec_on_platform_errors")&&!e&&(f=a.videoData.Fa)&&("1"===f.sb||Ov(f))&&(d=e=!0,c.cfall=f.sb,a.o.B.I.add(f.sb));if(!e)return NH(a,c);a.B=(0,g.M)();e=a.videoData;e.kf?(e=e.kf.qz(),f=Date.now()/1E3+1800,e=e<f):e=!1;c.e=b;e&&(c.staleprog=
"1");a.S("qoeerror","qoe.restart",c);if(e&&OH(a))return PH(a),!0;fl("philips")&&QH(a);b=a.videoData.Fa;!a.videoData.ha("html5_disable_codec_on_platform_errors")&&b&&"1"===b.sb?(a.o.B.disableAv1(),d=!0):a.u?(b=a.u,c=(c=QD(b.u)||b.u.u)?c.o:b.u.o,c.M+=1,HE(b.G,c)):a.videoData.kf&&a.videoData.kf.mw();a.S("newelementrequired",d);return!0};
NH=function(a,b){if(a.videoData.Ze)return!1;a.o.ua+=1;if(10>=a.o.ua)return!1;b.exiled=""+a.o.ua;a.S("qoeerror","qoe.start15s",b);a.S("playbackstalledatstart");return!0};
QH=function(a){if("GAME_CONSOLE"!=a.o.deviceParams.cplatform)try{window.close()}catch(b){}};
OH=function(a){return a.A||"yt"!==a.o.U?!1:a.videoData.Ze?25>a.videoData.Lg:!a.videoData.Lg};
PH=function(a){a.A||(a.A=!0,a.S("signatureexpiredreloadrequired"))};
SH=function(a,b,c,d){this.videoData=a;this.o=b;this.reason=c;this.u=d};
TH=function(a,b){g.A.call(this);this.provider=a;this.F=b;this.o=-1;this.C=!1;this.u=-1;this.playerState=new g.bH;this.seekCount=this.nonNetworkErrorCount=this.networkErrorCount=this.rebufferTimeSecs=this.playTimeSecs=this.A=0;this.delay=new g.H(this.send,6E4,this);this.B=!1;g.C(this,this.delay)};
VH=function(a){0<=a.o||(3===a.provider.getVisibilityState()?a.C=!0:(a.o=g.UH(a.provider),a.delay.start()))};
WH=function(a){if(!(0>a.u)){var b=g.UH(a.provider),c=b-a.A;a.A=b;8===a.playerState.state?a.playTimeSecs+=c:g.iH(a.playerState)&&!g.T(a.playerState,16)&&(a.rebufferTimeSecs+=c)}};
XH=function(a){var b=g.Vu(a.o.experiments,"web_player_ipp_canary_type_for_logging");if("control"===b)return"HTML5_PLAYER_CANARY_TYPE_CONTROL";if("experiment"===b)return"HTML5_PLAYER_CANARY_TYPE_EXPERIMENT";a=a.o.experiments.experimentIds;return a.includes("21561000")?"HTML5_PLAYER_CANARY_TYPE_SMALL_EXPERIMENT":a.includes("21561001")?"HTML5_PLAYER_CANARY_TYPE_SMALL_CONTROL":"HTML5_PLAYER_CANARY_TYPE_UNSPECIFIED"};
yka=function(a){return(!a.ha("html5_health_to_gel")||a.o.Ba+36E5<(0,g.M)())&&(a.ha("html5_health_to_gel_canary_killswitch")||a.o.Ba+36E5<(0,g.M)()||"HTML5_PLAYER_CANARY_TYPE_UNSPECIFIED"===XH(a))?a.ha("html5_health_to_qoe"):!0};
YH=function(a,b,c,d,e){var f={format:"RAW"},h={};fq(a)&&gq()&&(c&&(h["X-Goog-Visitor-Id"]=c),b&&(h["X-Goog-PageId"]=b),d&&(h.Authorization="Bearer "+d),c||d||b)&&(f.withCredentials=!0);0<Object.keys(h).length&&(f.headers=h);e&&(f.xd=e);return 1<Object.keys(f).length?f:null};
ZH=function(a,b,c,d,e){gq()&&c.token&&(a=g.Ed(a,{ctt:c.token,cttype:c.Nw,mdx_environment:c.mdxEnvironment}));e?(null==b?b={}:(c=g.bq(a),Object.keys(c).includes("cpn")),hr(a,b)):b?(c=g.bq(a),Object.keys(c).includes("cpn"),g.tq(a,b)):g.xr(a,d)};
aI=function(a){g.A.call(this);var b=this;this.provider=a;this.o={};this.sequenceNumber=1;this.ea=NaN;this.Sb="N";this.F=this.ua=this.ga=this.aa=this.B=0;this.N=this.ya="";this.sa=this.R=NaN;this.fa=0;this.za=-1;this.ra=1;this.playTimeSecs=this.rebufferTimeSecs=0;this.U=this.M=!1;this.Da=[];this.G=null;this.I=this.T=this.u=!1;this.A=-1;this.ba=!1;this.Ba=new g.H(this.dH,750,this);g.C(this,this.Ba);(a=navigator.getBattery?navigator.getBattery():null)&&a.then&&a.then(function(c){b.G=c});
g.$H(this,0,"vps",["N"])};
g.$H=function(a,b,c,d){var e=a.o[c];e||(e=[],a.o[c]=e);e.push(b.toFixed(3)+":"+d.join(":"))};
cI=function(a,b){var c=a.provider.u();g.$H(a,b,"cmt",[c.toFixed(3)]);c=a.provider.I();if(a.C&&1E3*c>a.C.KB+100&&a.C){var d=a.C,e=d.isAd;a.Z=1E3*b-d.MO-(1E3*c-d.KB)-d.BO;bI(a,"gllat","l."+a.Z.toFixed()+";prev_ad."+ +e);delete a.C}};
fI=function(a,b){b=void 0===b?NaN:b;b=0<=b?b:g.UH(a.provider);var c=a.provider.B();if(!isNaN(a.R)&&!isNaN(c.A)){var d=c.A-a.R;0<d&&g.$H(a,b,"bwm",[d,(c.C-a.sa).toFixed(3)])}a.R=c.A;a.sa=c.C;isNaN(c.bandwidthEstimate)||g.$H(a,b,"bwe",[c.bandwidthEstimate.toFixed(0)]);a.provider.videoData.uh&&c.o&&bI(a,"bwinfo",c.o);a.G&&g.$H(a,b,"bat",[a.G.level,a.G.charging?"1":"0"]);d=a.provider.getVisibilityState();a.za!==d&&(g.$H(a,b,"vis",[d]),a.za=d);cI(a,b);(d=dI(a.provider))&&d!==a.fa&&(g.$H(a,b,"conn",[d]),
a.fa=d);eI(a,b,c)};
eI=function(a,b,c){if(!isNaN(c.u)){var d=c.u;c.B<d&&(d=c.B);g.$H(a,b,"bh",[d.toFixed(3)])}};
gI=function(a){for(var b=0,c=g.p(Object.keys(a.o)),d=c.next();!d.done;d=c.next())d=d.value,b+=d.length+Number((0,g.zi)(a.o[d],function(e,f){return e+f.length},0));
96E3<b&&(new g.H(a.reportStats,0,a)).start()};
zka=function(a){a.provider.videoData.nk?hI(a,"prefetch"):a.provider.ha("html5_qoe_user_intent_match_health")||(a.o.user_intent=["0"],a.u=!0);a.provider.videoData.Lg&&bI(a,"reload","r."+a.provider.videoData.reloadReason+";ct."+a.provider.videoData.Lg);a.provider.videoData.yg&&hI(a,"monitor");a.provider.videoData.xa&&hI(a,"live");a.provider.videoData.Mg&&bI(a,"ctrl",a.provider.videoData.Mg,!0);if(a.provider.videoData.Vf){var b=a.provider.videoData.Vf.replace(/,/g,"_");bI(a,"ytp",b,!0)}a.provider.videoData.uD&&
(b=a.provider.videoData.uD.replace(/,/g,"."),bI(a,"ytrexp",b,!0));if(!g.P(a.provider.o.experiments,"html5_disable_gpu_reporting")){var c=a.provider.o.experiments;b=a.provider.videoData;c=g.P(c,"enable_white_noise")||g.P(c,"enable_webgl_noop")||g.P(c,"enable_gpu_logging");var d=b.ll()||b.xh()||b.yh()||b.rh(),e=b.Aa&&"1"===g.ab(b.Aa.videoInfos).sb&&/^g/.test(b.clientPlaybackNonce);b=/^gp/.test(b.clientPlaybackNonce);(c||d||b||e)&&(b=(0,g.iI)())&&(a.o.gpu=[b])}a.ea=Ko(function(){a.reportStats()},1E4)};
jI=function(a,b,c,d){var e=a.provider.u();c=[c,e.toFixed(3)];d&&c.push(d);g.$H(a,b,"error",c);a.I=!0};
kI=function(a){!a.provider.ha("html5_qoe_user_intent_match_health")||0<=a.A||(a.provider.o.bb||3!==a.provider.getVisibilityState()?a.A=g.UH(a.provider):a.ba=!0)};
hI=function(a,b){var c=a.o.cat||[];c.push(b);a.o.cat=c};
bI=function(a,b,c,d){var e=a.o.ctmp||[],f=-1!==a.Da.indexOf(b);f||a.Da.push(b);if(!d||!f){!a.provider.ha("html5_censor_ctmp_killswitch")&&/[^a-zA-Z0-9;.!_-]/.test(c)&&(c=c.replace(/[+]/g,"-").replace(/[^a-zA-Z0-9;.!_-]/g,"_"));if(!d){var h=1E3*g.UH(a.provider);c="t."+h.toFixed()+";"+c}Aka(b,c);e.push(b+":"+c);a.o.ctmp=e;gI(a);return h}};
mI=function(a){this.provider=a;this.G=!1;this.o=0;this.B=-1;this.Cg=NaN;this.u=0;this.segments=[];this.F=this.C=0;this.M=this.provider.od().volume;this.I=this.provider.od().muted;this.A=lI(this.provider)};
nI=function(a){a.A.startTime=a.u;a.A.endTime=a.o;a.segments.length&&g.ab(a.segments).isEmpty()?a.segments[a.segments.length-1]=a.A:a.segments.length&&a.A.isEmpty()||a.segments.push(a.A);a.C+=a.o-a.u;a.A=lI(a.provider);a.u=a.o};
oI=function(a){return a.C+a.provider.u()-a.u};
pI=function(a){a.segments.length&&a.o===a.u||nI(a);var b=a.segments;a.segments=[];return b};
Bka=function(a){qI(a);a.F=Ko(function(){a.update()},100);
a.Cg=g.UH(a.provider);a.A=lI(a.provider)};
qI=function(a){window.clearInterval(a.F);a.F=NaN};
rI=function(a,b,c){c-=a.Cg;return b===a.o&&.5<c};
sI=function(a,b,c,d){this.segments=[];this.experimentIds=[];this.wh=this.aa=this.isFinal=this.Ba=this.T=this.autoplay=this.autonav=!1;this.ra="yt";this.u=this.B=null;this.sendVisitorIdHeader=this.ga=!1;this.pageId="";this.A="watchtime"===c;this.I="playback"===c;this.Z="delayplay"===c;this.U="atr"===c;this.Da="engage"===c;this.sendVisitorIdHeader=!1;this.uri=this.U?"/api/stats/"+c:"//"+b.km+"/api/stats/"+c;d&&(this.aa=d.fs,d.rtn&&(this.u=d.rtn),this.A?(this.playerState=d.state,0<d.rti&&(this.B=d.rti)):
(this.Ea=d.mos,this.Oa=d.volume,d.at&&(this.adType=d.at)),d.autonav&&(this.autonav=d.autonav),d.inview&&(this.ya=d.inview),d.size&&(this.ua=d.size));this.deviceParams=g.Rb(b.deviceParams);this.za=b.za;this.experimentIds=b.experiments.experimentIds;this.fa=b.ae;this.ra=b.U;this.region=b.region;this.userAge=b.userAge;this.sa=b.Wg;this.Va=Cp();this.sendVisitorIdHeader=b.sendVisitorIdHeader;this.G=g.P(b.experiments,"vss_pings_using_networkless");this.pageId=b.pageId;this.accessToken=a.Rd();this.adFormat=
a.adFormat;this.adQueryId=a.adQueryId;this.autoplay=VB(a);this.autonav=a.Jj||this.autonav;this.contentVideoId=a.wj();this.clientPlaybackNonce=a.clientPlaybackNonce;this.T=a.fc;a.lg&&(this.C=a.lg,this.R=a.Kh);a.mdxEnvironment&&(this.mdxEnvironment=a.mdxEnvironment);this.Xh=a.Xh;this.xf=a.xf;a.Fa&&(this.videoFormat=uu(a.Fa),a.sc&&uu(a.sc)!==this.videoFormat&&(this.N=uu(a.sc)));a.ka&&vw(a.ka)&&(this.offlineDownloadUserChoice="1");this.eventLabel=TB(a);this.wh=a.wh;this.il=a.il;if(b=IB(a))this.Ha=b;a.gj&&
(this.gj=a.gj);this.mn=a.mn;this.jf=a.jf;this.eventId=a.eventId;this.playlistId=a.aE||a.playlistId;this.Fr=a.Fr;this.Mg=a.Mg;this.Vf=a.Vf;this.bo=a.bo;this.subscribed=a.subscribed;this.videoId=a.videoId;this.videoMetadata=a.videoMetadata;this.visitorData=a.visitorData;this.osid=a.osid;this.Nv=a.Nv;this.referrer=a.referrer;this.Rn=a.sD||a.Rn;this.Ul=a.Ul;this.ls=a.ls;this.userGenderAge=a.userGenderAge};
tI=function(a,b){return YH(a.uri,a.pageId,a.sendVisitorIdHeader?a.visitorData:void 0,a.accessToken,b)};
Cka=function(a,b,c,d,e){b.cmt=b.len;b.lact="0";d=d().toFixed(3);b.rt=Number(d).toString();a=g.Ed(a,b);e?(null==c&&(c={}),hr(a,c)):c?g.tq(a,c):g.xr(a)};
vI=function(a){var b={ns:a.ra,el:a.eventLabel,cpn:a.clientPlaybackNonce,docid:a.videoId,ver:2,referrer:a.referrer,cmt:a.o(a.Xh),ei:a.eventId,fmt:a.videoFormat,fs:a.aa?"1":"0",rt:a.o(a.Qa),of:a.Nv,adformat:a.adFormat,content_v:a.contentVideoId,euri:a.za,lact:a.Va,live:a.Ha,cl:(322671404).toString(),mos:a.Ea,osid:a.osid,state:a.playerState,vm:a.videoMetadata,volume:a.Oa};a.adQueryId&&(b.aqi=a.adQueryId);a.subscribed&&(b.subscribed="1");g.Ta(b,a.deviceParams);a.autonav&&(b.autonav="1");a.autoplay&&(b.autoplay=
"1");a.T&&(b.dni="1");a.isFinal&&(b["final"]="1");a.wh&&(b.splay="1");a.xf&&(b.delay=a.xf);a.fa&&(b.hl=a.fa);a.region&&(b.cr=a.region);a.userGenderAge&&(b.uga=a.userGenderAge);void 0!==a.userAge&&a.sa&&(b.uga=a.sa+a.userAge);void 0!==a.ea&&(b.len=a.o(a.ea));!a.A&&0<a.experimentIds.length&&(b.fexp=a.experimentIds.toString());null!==a.u&&(b.rtn=a.o(a.u));a.gj&&(b.als=a.gj);a.Rn&&(b.feature=a.Rn);a.playlistId&&(b.list=a.playlistId);a.Mg&&(b.ctrl=a.Mg);a.Vf&&(b.ytr=a.Vf);a.bo&&(b.ssrt="1");a.N&&(b.afmt=
a.N);a.offlineDownloadUserChoice&&(b.ODUC=a.offlineDownloadUserChoice);a.ba&&(b.lio=a.o(a.ba));a.A?(b.idpj=a.il,b.ldpj=a.mn,null!=a.B&&(b.rti=a.o(a.B))):void 0!==a.adType&&(b.at=a.adType);a.ua&&(a.I||a.Z)&&(b.size=a.ua);null!==a.ya&&(a.I||a.Z)&&(b.inview=a.o(a.ya));a.A&&(b.volume=uI(a,(0,g.Ic)(a.segments,function(d){return d.volume})),b.muted=uI(a,(0,g.Ic)(a.segments,function(d){return d.muted?1:0})),b.st=uI(a,(0,g.Ic)(a.segments,function(d){return d.startTime})),b.et=uI(a,(0,g.Ic)(a.segments,function(d){return d.endTime})),
oj(a.segments,function(d){return 1!==d.playbackRate})&&(b.rate=uI(a,(0,g.Ic)(a.segments,function(d){return d.playbackRate}))));
oj(a.segments,function(d){return 0!==d.visibilityState})&&(b.vis=uI(a,(0,g.Ic)(a.segments,function(d){return d.visibilityState})));
oj(a.segments,function(d){return 0!==d.connectionType})&&(b.conn=uI(a,(0,g.Ic)(a.segments,function(d){return d.connectionType})));
oj(a.segments,function(d){return 0!==d.A})&&(b.blo=uI(a,(0,g.Ic)(a.segments,function(d){return d.A})));
oj(a.segments,function(d){return"-"!==d.u})&&(b.cc=(0,g.Ic)(a.segments,function(d){return d.u}).join(","));
oj(a.segments,function(d){return"-"!==d.clipId})&&(b.clipid=(0,g.Ic)(a.segments,function(d){return d.clipId}).join(","));
if(oj(a.segments,function(d){return!!d.o})){var c="au";
a.I&&(c="au_d");b[c]=(0,g.Ic)(a.segments,function(d){return d.o}).join(",")}gq()&&a.C&&(b.ctt=a.C,b.cttype=a.R,b.mdx_environment=a.mdxEnvironment);
a.Da&&(b.etype=void 0!==a.F?a.F:0);a.Ul&&(b.uoo=a.Ul);a.ls&&(b.upt=a.ls);return b};
uI=function(a,b){return(0,g.Ic)(b,a.o).join(",")};
xI=function(){this.o={};var a=Bq("CONSISTENCY");a&&wI(this,{encryptedTokenJarContents:a})};
wI=function(a,b){if(b.encryptedTokenJarContents&&(a.o[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.o[b.encryptedTokenJarContents]},1E3*c);
g.Aq("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}};
g.zI=function(a,b){b=void 0===b?!0:b;var c=g.K("INNERTUBE_CONTEXT");if(!c)return g.mr(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};c=g.Sb(c);var d=b;c.client||(c.client={});var e=c.client;"MWEB"===e.clientName&&(e.clientFormFactor=g.K("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;e.screenPixelDensity=Math.round(window.devicePixelRatio)||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());
var f=void 0===f?!1:f;Rr.getInstance();var h=Tr(0,165)?"USER_INTERFACE_THEME_DARK":"USER_INTERFACE_THEME_LIGHT";g.zo("kevlar_apply_prefers_color_theme")&&(h=Tr(0,165)?"USER_INTERFACE_THEME_DARK":Tr(0,174)?"USER_INTERFACE_THEME_LIGHT":window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches?"USER_INTERFACE_THEME_DARK":"USER_INTERFACE_THEME_LIGHT");f=f?h:mfa()||h;e.userInterfaceTheme=f;if(g.zo("web_log_connection")){a:{if(h=(f=
window.navigator)?f.connection:void 0){f=yI[h.type||"unknown"]||"CONN_UNKNOWN";h=yI[h.o||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===f&&"CONN_UNKNOWN"!==h&&(f=h);if("CONN_UNKNOWN"!==f)break a;if("CONN_UNKNOWN"!==h){f=h;break a}}f=void 0}f&&(e.connectionType=f)}(f=Bq("EXPERIMENTS_DEBUG"))?e.experimentsToken="ZERO"===f?"GgIQAQ%3D%3D":f:delete e.experimentsToken;e=Bo();xI.o||(xI.o=new xI);f=g.Gb(xI.o.o);c.request=Object.assign(Object.assign({},c.request),{internalExperimentFlags:e,consistencyTokenJars:f});
f=Rr.getInstance();e=Tr(0,58);f=f.get("gsml","");c.user=Object.assign({},c.user);e&&(c.user.enableSafetyMode=e);f&&(c.user.lockedSafetyMode=!0);(e=g.K("DELEGATED_SESSION_ID"))&&!g.zo("pageid_as_header_web")&&(c.user.onBehalfOfUser=e);d&&(d=g.xs())&&(c.clientScreenNonce=d);a&&(c.clickTracking={clickTrackingParams:a});return c};
AI=function(a){var b=g.zI(),c=a.Gf;c&&(b.clickTracking={clickTrackingParams:c});var d=b.client||{};c="EMBED";var e=TB(a);"leanback"===e?c="WATCH":a.yg?c="LIVE_MONITOR":"detailpage"===e?c="WATCH_FULL_SCREEN":"adunit"===e?c="ADUNIT":"sponsorshipsoffer"===e&&(c="UNKNOWN");d.clientScreen=c;c=a.O();if(e=c.getPlayerType())d.playerType=e;if(e=c.deviceParams.ctheme)d.theme=e;a.ro&&(d.unpluggedAppInfo={enableFilterMode:!0});if(e=a.Zc)d.unpluggedLocationInfo=e;b.client=d;d=b.request||{};if(e=a.mdxEnvironment)d.mdxEnvironment=
e;b.request=d;d=b.user||{};if(e=a.ye)d.credentialTransferTokens=[{token:e,scope:"VIDEO"}];if(e=a.Kf)d.delegatePurchases={oauthToken:e},d.kidsParent={oauthToken:e};b.user=d;if(d=a.contextParams)b.activePlayers=[{playerContextParams:d}];if(a=a.clientScreenNonce)b.clientScreenNonce=a;if(a=c.za)b.thirdParty={embedUrl:a};return b};
BI=function(a,b,c){var d=a.videoId,e=AI(a),f=a.O(),h={html5Preference:"HTML5_PREF_WANTS",lactMilliseconds:String(Cp()),referer:document.location.toString(),signatureTimestamp:18466};a.Jj&&(h.autonav=!0);VB(a)&&(h.autoplay=!0);f.A&&a.cycToken&&(h.cycToken=a.cycToken);a.Iu&&(h.fling=!0);var l=a.Sk;if(l){var m={},n=l.split("|");3===n.length?(m.breakType=Dka[n[0]],m.offset={kind:"OFFSET_MILLISECONDS",value:String(Number(n[1])||0)},m.url=n[2]):m.url=l;h.forceAdParameters={videoAds:[m]}}a.isLivingRoomDeeplink&&
(h.isLivingRoomDeeplink=!0);l=a.lq;if(null!=l){l={startWalltime:String(l)};if(m=a.sl)l.manifestDuration=String(m||14400);h.liveContext=l}a.mutedAutoplay&&(h.mutedAutoplay=!0);a.wh&&(h.splay=!0);l=a.vnd;5===l&&(h.vnd=l);if(a.isMdxPlayback){l={triggeredByMdx:!0};if(n=a.Vf)m=n.startsWith("!"),n=n.split("-"),3===n.length?(m&&(n[0]=n[0].substr(1)),m={clientName:Eka[n[0]]||"UNKNOWN_INTERFACE",platform:Fka[n[1]]||"UNKNOWN_PLATFORM",applicationState:m?"INACTIVE":"ACTIVE",clientVersion:n[2]||""},f.ha("use_remote_context_in_populate_remote_client_info")?
l.remoteContexts=[{remoteClient:m}]:l.remoteClients=[m]):(m={clientName:"UNKNOWN_INTERFACE"},f.ha("use_remote_context_in_populate_remote_client_info")?l.remoteContexts=[{remoteClient:m}]:l.remoteClients=[m]);if(m=a.wm)l.skippableAdsSupported=m.split(",").includes("ska");h.mdxContext=l}l=b.width;0<l&&(h.playerWidthPixels=l);if(b=b.height)h.playerHeightPixels=b;0!==c&&(h.vis=c);if(c=f.widgetReferrer)h.widgetReferrer=c.substring(0,128);d={videoId:d,context:e,playbackContext:{contentPlaybackContext:h}};
a.contentCheckOk&&(d.contentCheckOk=!0);if(e=a.clientPlaybackNonce)d.cpn=e;if(e=a.playerParams)d.params=e;if(e=a.playlistId)d.playlistId=e;a.racyCheckOk&&(d.racyCheckOk=!0);if(a=a.O().embedConfig)d.serializedThirdPartyEmbedConfig=a;return d};
CI=function(a){var b=a.O(),c={context:AI(a),videoId:a.videoId,racyCheckOk:a.racyCheckOk,contentCheckOk:a.contentCheckOk};"adunit"===TB(a)&&(c.isAdPlayback=!0);b.embedConfig&&(c.serializedThirdPartyEmbedConfig=b.embedConfig);b.de&&(c.showContentOwnerOnly=!0);return c};
Hka=function(a,b,c,d){var e=window.location.search;if(38===b.jf&&"books"===a.playerStyle)return e=b.videoId.indexOf(":"),g.Ed("//play.google.com/books/volumes/"+b.videoId.slice(0,e)+"/content/media",{aid:b.videoId.slice(e+1),sig:b.yK});if(30===b.jf&&"docs"===a.playerStyle)return g.Ed("https://docs.google.com/get_video_info",{docid:b.videoId,authuser:b.Bc,authkey:b.authKey,eurl:a.za});if(33===b.jf&&"google-live"===a.playerStyle)return g.Ed("//google-liveplayer.appspot.com/get_video_info",{key:b.videoId});
g.P(a.experiments,"log_invalid_namespame_killswitch")||"yt"===a.U||g.mr(Error("getVideoInfoUrl for invalid namespace: "+a.U));var f=18466;a.ha("ipp_signature_cipher_killswitch")||(f=g.K("STS",void 0)?g.K("STS",void 0):f);f={html5:"1",video_id:b.videoId,cpn:b.clientPlaybackNonce,eurl:a.za,ps:a.playerStyle,el:TB(b),hl:a.ae,list:b.playlistId,agcid:b.FF,aqi:b.adQueryId,sts:f,lact:Cp()};g.Ta(f,a.deviceParams);a.Cd&&(f.forced_experiments=a.Cd);b.ye?(f.vvt=b.ye,b.mdxEnvironment&&(f.mdx_environment=b.mdxEnvironment)):
b.Rd()&&(f.access_token=b.Rd());b.adFormat&&(f.adformat=b.adFormat);0<=b.slotPosition&&(f.slot_pos=b.slotPosition);b.breakType&&(f.break_type=b.breakType);null!==b.Yx&&(f.ad_id=b.Yx);null!==b.dy&&(f.ad_sys=b.dy);null!==b.Yy&&(f.encoded_ad_playback_context=b.Yy);b.Gw&&(f.tpra="1");a.captionsLanguagePreference&&(f.cc_lang_pref=a.captionsLanguagePreference);a.Uh&&2!==a.Uh&&(f.cc_load_policy=a.Uh);a.mute&&(f.mute=a.mute);b.annotationsLoadPolicy&&2!==a.annotationsLoadPolicy&&(f.iv_load_policy=b.annotationsLoadPolicy);
b.pp&&(f.endscreen_ad_tracking=b.pp);var h=a.M.get(b.videoId);h&&h.qo&&(f.ic_track=h.qo);b.Gf&&(f.itct=b.Gf);VB(b)&&(f.autoplay="1");b.mutedAutoplay&&(f.mutedautoplay=b.mutedAutoplay);b.Jj&&(f.autonav="1");b.Ku&&(f.noiba="1");b.isMdxPlayback&&(f.mdx="1",f.ytr=b.Vf);b.mdxControlMode&&(f.mdx_control_mode=b.mdxControlMode);b.wm&&(f.ytrcc=b.wm);b.Qu&&(f.utpsa="1");b.Iu&&(f.is_fling="1");b.Ju&&(f.mute="1");b.vnd&&(f.vnd=b.vnd);b.Sk&&(h=3===b.Sk.split("|").length,f.force_ad_params=h?b.Sk:"||"+b.Sk);b.nk&&
(f.preload=b.nk);c.width&&(f.width=c.width);c.height&&(f.height=c.height);b.wh&&(f.splay="1");b.ypcPreview&&(f.ypc_preview="1");b.wj()&&(f.content_v=b.wj());b.yg&&(f.livemonitor=1);a.Bc&&(f.authuser=a.Bc);a.pageId&&(f.pageid=a.pageId);a.Pb&&(f.ei=a.Pb);a.u&&(f.iframe="1");b.contentCheckOk&&(f.cco="1");b.racyCheckOk&&(f.rco="1");a.A&&b.lq&&(f.live_start_walltime=b.lq);a.A&&b.sl&&(f.live_manifest_duration=b.sl);a.A&&b.playerParams&&(f.player_params=b.playerParams);a.A&&b.cycToken&&(f.cyc=b.cycToken);
a.A&&b.WD&&(f.tkn=b.WD);0!==d&&(f.vis=d);a.enableSafetyMode&&(f.enable_safety_mode="1");b.Kf&&(f.kpt=b.Kf);b.iq&&(f.kids_age_up_mode=b.iq);b.kidsAppInfo&&(f.kids_app_info=b.kidsAppInfo);b.ro&&(f.upg_content_filter_mode="1");a.widgetReferrer&&(f.widget_referrer=a.widgetReferrer.substring(0,128));(h=a.Ko)&&(f.embedding_app=h);b.Zc?(h=null!=b.Zc.latitudeE7&&null!=b.Zc.longitudeE7?b.Zc.latitudeE7+","+b.Zc.longitudeE7:",",h+=","+(b.Zc.clientPermissionState||0)+","+(b.Zc.locationRadiusMeters||"")+","+(b.Zc.locationOverrideToken||
"")):h=null;h&&(f.uloc=h);b.cn&&(f.internalipoverride=b.cn);a.embedConfig&&(f.embed_config=a.embedConfig);a.de&&(f.co_rel="1");0<a.Zd.length&&(f.ancestor_origins=Array.from(a.Zd).join(","));void 0!==a.homeGroupInfo&&(f.home_group_info=a.homeGroupInfo);void 0!==a.livingRoomAppMode&&(f.living_room_app_mode=a.livingRoomAppMode);a.enablePrivacyFilter&&(f.enable_privacy_filter="1");b.isLivingRoomDeeplink&&(f.is_living_room_deeplink="1");b.fp&&b.gp&&(f.clip=b.fp,f.clipt=b.gp);b.Pt&&(f.disable_watch_next=
"1");a.ha("web_player_gvi_wexit_diff")&&(f.player_request=JSON.stringify(BI(b,c,d)));a.ha("html5_onesie_watch_next_diff")&&(f.watch_next_request=JSON.stringify(CI(b)));for(var l in f)!Gka.has(l)&&f[l]&&512<String(f[l]).length&&(g.mr(Error("GVI param too long: "+l)),f[l]="");b=a.I;g.Gy(a)&&(b=cv(b.replace(/\b(?:www|web)([.-])/,"tv$1"))||a.I);a=g.Ed(b+"get_video_info",f);e&&(a=qq(a,e));return a};
g.DI=function(a,b){return a.I+"timedtext_video?ref=player&v="+b.videoId};
g.EI=function(a,b){a.feature=b;return a};
FI=function(a){g.A.call(this);this.provider=a;this.currentPlayerState="paused";this.B=NaN;this.C=[10,10,10,40];this.G=this.F=0;this.R=this.N=this.U=this.T=this.M=this.I=this.u=!1;this.A=NaN;this.o=new mI(a)};
HI=function(a,b,c){c=void 0===c?NaN:c;var d=g.UH(a.provider);c=isNaN(c)?d:c;c=Math.ceil(c);var e=a.C[a.F];a.F+1<a.C.length&&a.F++;var f=c+e;a.B=g.Jo(function(){if(!a.ia()){a.B=NaN;a.o.update();var h=pI(a.o),l=GI(a,h);b&&(l.B=f);var m=a.provider.ha("html5_expanded_max_vss_pings")?1E3:400;m=a.G>m;!(1<h.length)&&h[0].isEmpty()||m||(l.u=HI(a,!0,f));l.send();a.G++}},1E3*(f-d));
return f};
II=function(a,b){var c=a.provider,d=c.od();g.Ta(d,c.videoData.od());g.Ta(d,{state:a.currentPlayerState});c=new sI(a.provider.videoData,a.provider.o,b,d);c.Xh=a.provider.u();a.provider.videoData.xa||(c.ea=a.provider.C());a.provider.videoData.ka&&(d=Lw(a.provider.videoData.ka,c.Xh))&&(c.ba=d-c.Xh);c.Qa=g.UH(a.provider);c.segments=[lI(a.provider)];return c};
GI=function(a,b){var c=II(a,"watchtime");c.segments=b;c.Xh=a.o.o;return c};
JI=function(a){a.o.update();return GI(a,pI(a.o))};
MI=function(a){a.provider.videoData.remarketingUrl&&!a.T&&(KI(a,a.provider.videoData.remarketingUrl),a.T=!0);a.provider.videoData.youtubeRemarketingUrl&&!a.U&&(KI(a,a.provider.videoData.youtubeRemarketingUrl),a.U=!0);a.provider.videoData.googleRemarketingUrl&&!a.N&&(KI(a,a.provider.videoData.googleRemarketingUrl),a.N=!0);a.provider.videoData.ppvRemarketingUrl&&!a.R&&(KI(a,a.provider.videoData.ppvRemarketingUrl),a.R=!0);LI(a)};
OI=function(a){a.A=Ko(function(){NI(a,"heartbeat")},3E4)};
NI=function(a,b){var c=a.provider.o,d=a.provider.videoData,e={ns:c.U,el:TB(d),eurl:c.za,fmt:d.Fa?uu(d.Fa):0,html5:1,list:d.playlistId,cpn:d.clientPlaybackNonce,ei:d.eventId,ps:c.playerStyle,noflv:1,st:a.provider.u(),video_id:d.videoId,metric:b};VB(d)&&(e.autoplay="1");"heartbeat"===b&&(e.tpmt=oI(a.o));g.Ta(e,c.deviceParams);KI(a,g.Ed(g.P(c.experiments,"cardio_base_url_killswitch")?(c.o?c.protocol+"://www.youtube.com/":c.I)+"live_204":c.I+"live_204",e))};
PI=function(a,b,c){a.I||(c||(c=II(a,"atr")),c.M=b,c.send(),a.I=!0)};
LI=function(a){a.provider.videoData.dd.eventLabel=TB(a.provider.videoData);a.provider.videoData.dd.playerStyle=a.provider.o.playerStyle;a.provider.videoData.Nn&&(a.provider.videoData.dd.feature="pyv");a.provider.videoData.dd.vid=a.provider.videoData.videoId;var b=a.provider.videoData.dd;a=a.provider.videoData;a=a.isAd()||!!a.Nn;b.isAd=a};
Ika=function(a){var b=II(a,"engage");b.F=1;a=QI(a.provider);return g.Sa(Cka,b.uri,vI(b),tI(b),a,b.G)};
KI=function(a,b){var c=a.provider.videoData.Rd(),d=a.provider.ha("web_player_vss_pageid_header")?a.provider.o.pageId:void 0,e=a.provider.o.sendVisitorIdHeader?a.provider.videoData.visitorData:void 0,f=g.P(a.provider.o.experiments,"vss_pings_using_networkless");c=YH(b,d,e,c,void 0);ZH(b,c,{token:a.provider.videoData.lg,Nw:a.provider.videoData.Kh,mdxEnvironment:a.provider.videoData.mdxEnvironment},void 0,f)};
RI=function(a){g.A.call(this);var b=this;this.provider=a;this.u=this.qoe=this.o=null;this.provider.videoData.isValid()&&!this.provider.videoData.Rl&&(this.o=new FI(this.provider),g.C(this,this.o),this.qoe=new aI(this.provider),g.C(this,this.qoe));yka(this.provider)&&(this.u=new TH(this.provider,function(c){b.qoe&&bI(b.qoe,"h5h",c,void 0)}),g.C(this,this.u))};
g.SI=function(a){a.o&&nI(a.o.o)};
Jka=function(a,b){a.o&&PI(a.o,b)};
Kka=function(a){if(!a.o)return null;var b=II(a.o,"atr");return function(c){a.o&&PI(a.o,c,b)}};
TI=function(a){return a.o?Ika(a.o):function(){}};
UI=function(a,b){this.A=a;this.timerName="";this.u=!1;this.o=b||null;this.u=!1};
VI=function(a,b,c){var d=g.vy(b.Xa)&&b.Xa.Be&&UB(b);if(b.Xa.ce&&(ry(b.Xa)||g.Yy(b.Xa)||d)&&!a.u){a.u=!0;g.K("TIMING_ACTION")||vo("TIMING_ACTION",a.A.Ve);a.A.Hc&&vo("CSI_SERVICE_NAME",a.A.Hc);if(a.o){b=a.o.u;d=g.p(Object.keys(b));for(var e=d.next();!e.done;e=d.next())e=e.value,NA(e,b[e],a.timerName);b=a.o.o;d=g.p(Object.keys(b));for(e=d.next();!e.done;e=d.next())e=e.value,MA(e,b[e],a.timerName);b=a.o;b.u={};b.o={}}MA("yt_pvis",aia(),a.timerName);MA("yt_pt","html5",a.timerName);c&&!RA("pbs",a.timerName)&&
a.tick("pbs",c);c=a.A;!g.Yy(c)&&!ry(c)&&RA("_start",a.timerName)&&VA(a.timerName)}};
WI=function(){this.endTime=this.startTime=-1;this.u="-";this.playbackRate=1;this.visibilityState=0;this.o="";this.volume=this.connectionType=this.A=0;this.muted=!1;this.clipId="-"};
XI=function(a,b,c,d,e,f,h,l,m,n,q,r,u,w){this.videoData=a;this.o=b;this.A=void 0;this.od=c;this.C=d;this.u=e;this.B=f;this.M=h;this.getAudioTrack=l;this.getPlaybackRate=m;this.F=n;this.getVisibilityState=q;this.G=r||function(){};
this.N=u||function(){};
this.I=w||function(){return-1}};
g.UH=function(a){return QI(a)()};
QI=function(a){if(!a.A){var b=g.Sa(function(d){var e=(0,g.M)();d&&631152E6>=e&&(g.L(Error("invalid coreTime.now value: "+e)),e=(new Date).getTime()+2);return e},g.P(a.o.experiments,"html5_validate_yt_now")),c=b();
a.A=function(){return Math.round(b()-c)/1E3};
a.N()}return a.A};
dI=function(a){if(navigator.connection&&navigator.connection.type)return YI[navigator.connection.type]||YI.other;if(g.Fy(a.o)){a=navigator.userAgent;if(/[Ww]ireless[)]/.test(a))return 3;if(/[Ww]ired[)]/.test(a))return 1}return 0};
lI=function(a){var b=new WI;b.u=a.od().cc||"-";b.playbackRate=a.getPlaybackRate();var c=a.getVisibilityState();0!==c&&(b.visibilityState=c);a.o.gb&&(b.A=1);c=a.getAudioTrack();c.Db&&c.Db.id&&"und"!==c.Db.id&&(b.o=c.Db.id);b.connectionType=dI(a);b.volume=a.od().volume;b.muted=a.od().muted;b.clipId=a.od().clipid||"-";return b};
ZI=function(){g.A.call(this);this.A={};this.o={};this.u=new g.H(this.B,250,this);g.C(this,this.u)};
aJ=function(a,b,c,d){a.A[b]=c;a.o[b]=new $I(void 0===d?!1:d)};
bJ=function(a,b){if(a.o[b]){var c=a.o[b].buffer;for(var d=[];c.u!==c.o;)c.u=(c.u+1)%c.data.length,d.push(c.data[c.u]);c=d}else c=[];return c};
cJ=function(a,b){return a.o[b]?KG(a.o[b].buffer):0};
$I=function(a){this.u=a;this.o=NaN;this.buffer=new JG(100)};
iJ=function(a){if(!dJ){var b,c=new Uint8Array(256),d=new Uint8Array(256);var e=1;for(b=0;256>b;b++)c[e]=b,d[b]=e,e^=e<<1^(e>>7&&283);dJ=new Uint8Array(256);eJ=[];fJ=[];gJ=[];hJ=[];for(var f=0;256>f;f++){e=f?d[255^c[f]]:0;e^=e<<1^e<<2^e<<3^e<<4;e=e&255^e>>>8^99;dJ[f]=e;b=e<<1^(e>>7&&283);var h=b^e;eJ.push(b<<24|e<<16|e<<8|h);fJ.push(h<<24|eJ[f]>>>8);gJ.push(e<<24|fJ[f]>>>8);hJ.push(e<<24|gJ[f]>>>8)}}this.o=[0,0,0,0];this.A=new Uint8Array(16);e=[];for(c=0;4>c;c++)e.push(a[4*c]<<24|a[4*c+1]<<16|a[4*
c+2]<<8|a[4*c+3]);for(d=1;44>c;c++)a=e[c-1],c%4||(a=(dJ[a>>16&255]^d)<<24|dJ[a>>8&255]<<16|dJ[a&255]<<8|dJ[a>>>24],d=d<<1^(d>>7&&283)),e.push(e[c-4]^a);this.B=e;this.u=16};
jJ=function(a){for(var b=a.B,c=a.o[0]^b[0],d=a.o[1]^b[1],e=a.o[2]^b[2],f=a.o[3]^b[3],h=3;0<=h&&!(a.o[h]=-~a.o[h]);h--);for(h=4;40>h;){var l=eJ[c>>>24]^fJ[d>>16&255]^gJ[e>>8&255]^hJ[f&255]^b[h++];var m=eJ[d>>>24]^fJ[e>>16&255]^gJ[f>>8&255]^hJ[c&255]^b[h++];var n=eJ[e>>>24]^fJ[f>>16&255]^gJ[c>>8&255]^hJ[d&255]^b[h++];f=eJ[f>>>24]^fJ[c>>16&255]^gJ[d>>8&255]^hJ[e&255]^b[h++];c=l;d=m;e=n}a=a.A;c=[c,d,e,f];for(d=0;16>d;)a[d++]=dJ[c[0]>>>24]^b[h]>>>24,a[d++]=dJ[c[1]>>16&255]^b[h]>>16&255,a[d++]=dJ[c[2]>>
8&255]^b[h]>>8&255,a[d++]=dJ[c[3]&255]^b[h++]&255,c.push(c.shift())};
Lka=function(a,b,c){var d,e,f,h,l,m;return Aa(function(n){if(1==n.o)return d=window.crypto.subtle,e={name:"HMAC",hash:{name:"SHA-256"}},f=["sign"],g.ra(n,d.importKey("raw",a,e,!1,f),2);if(3!=n.o)return h=n.u,l=new Uint8Array(b.length+c.length),l.set(b),l.set(c,b.length),g.ra(n,d.sign(e,h,l),3);m=n.u;return n["return"](new Uint8Array(m))})};
kJ=function(a,b,c){var d,e,f,h,l,m,n,q;return Aa(function(r){switch(r.o){case 1:if(!(window.crypto&&window.crypto.subtle&&window.crypto.subtle.importKey)){r.Gc(2);break}e=window.crypto.subtle;f={name:"AES-CTR"};h=["encrypt"];l={name:"AES-CTR",counter:c,length:128};sa(r,3);return g.ra(r,e.importKey("raw",a,f,!1,h),5);case 5:return m=r.u,g.ra(r,e.encrypt(l,m,b),6);case 6:n=r.u;d=new Uint8Array(n);ta(r,2);break;case 3:ua(r);case 2:if(!d){q=new iJ(a);for(var u=0;4>u;u++)q.o[u]=c[4*u]<<24|c[4*u+1]<<16|
c[4*u+2]<<8|c[4*u+3];q.u=16;d=q.encrypt(b)}return r["return"](d)}})};
mJ=function(a){this.o=a;this.u=lJ(ms())};
Mka=function(a,b){return Aa(function(c){return c["return"](Lka(a.o.u,b,a.u))})};
nJ=function(){this.o=0;this.A=void 0;this.u=new Uint8Array(4096);this.view=new DataView(this.u.buffer);g.v.TextEncoder&&(this.A=new TextEncoder)};
oJ=function(a,b){var c=a.o+b;if(!(a.u.length>=c)){for(var d=2*a.u.length;d<c;)d*=2;c=new Uint8Array(d);c.set(a.u);a.u=c;a.view=new DataView(a.u.buffer)}};
pJ=function(a,b){if(268435455<b){oJ(a,4);for(var c=b&1073741823,d=0;4>d;d++)a.view.setUint8(a.o,c&127|128),c>>=7,a.o+=1;b=Math.floor(b/268435456)}for(oJ(a,4);127<b;)a.view.setUint8(a.o,b&127|128),b>>=7,a.o+=1;a.view.setUint8(a.o,b);a.o+=1};
qJ=function(a,b,c){pJ(a,b<<3|2);b=c.length;pJ(a,b);oJ(a,b);a.u.set(c,a.o);a.o+=b};
rJ=function(a,b,c){if(a.A)c=a.A.encode(c);else{for(var d=[],e=0,f=0;f<c.length;f++){var h=c.charCodeAt(f);128>h?d[e++]=h:(2048>h?d[e++]=h>>6|192:(55296==(h&64512)&&f+1<c.length&&56320==(c.charCodeAt(f+1)&64512)?(h=65536+((h&1023)<<10)+(c.charCodeAt(++f)&1023),d[e++]=h>>18|240,d[e++]=h>>12&63|128):d[e++]=h>>12|224,d[e++]=h>>6&63|128),d[e++]=h&63|128)}c=new Uint8Array(lJ(d).buffer)}qJ(a,b,c)};
sJ=function(a){return new Uint8Array(a.u.buffer,0,a.o)};
tJ=function(a){var b=a.gl,c=a.deviceId,d=a.userAgent,e=a.clientName,f=a.clientVersion;this.u=a.hl;this.F=b;this.C=c;this.G=d;this.A=e;this.B=f};
uJ=function(){this.u=document.location.toString()};
vJ=function(a){var b=a.encryptedClientKey,c=a.iv,d=a.hmac;this.A=a.encryptedOnesiePlayerRequest;this.u=b;this.C=c;this.B=d};
wJ=function(a){var b=a.value;this.u=a.name;this.A=b};
xJ=function(a){this.u=a.client};
yJ=function(a){this.u=a;this.B=this.o=0;this.A=-1};
zJ=function(a){var b=Gu(a.u,a.o);++a.o;if(128>b)return b;for(var c=b&127,d=1;128<=b;)b=Gu(a.u,a.o),++a.o,d*=128,c+=(b&127)*d;return c};
AJ=function(a,b){for(a.B=b;a.o+1<=a.u.totalLength;){var c=a.A;0>c&&(c=zJ(a));var d=c>>3,e=c&7;if(d===b)return!0;if(d>b){a.A=c;break}switch(e){case 0:zJ(a);break;case 1:a.o+=8;break;case 2:c=zJ(a);a.o+=c;break;case 5:a.o+=4}}return!1};
BJ=function(a,b){var c=void 0===c?null:c;if(!AJ(a,b))return c;c=zJ(a);var d=Eu(a.u,a.o,c);a.o+=c;return d};
Nka=function(a){this.iv=BJ(new yJ(a),5)};
Oka=function(a){a=new yJ(a);var b=-1;b=void 0===b?0:b;this.o=AJ(a,1)?zJ(a):b;0===this.o&&(a=BJ(a,4),this.u=new Nka(new xu([a])))};
CJ=function(){this.u=new uJ};
DJ=function(a){var b=a.videoId,c=a.playbackContext;this.u=a.wH;this.A=b;this.B=c};
EJ=function(a){var b=a.httpHeaders,c=a.postBody;this.A=a.url;this.u=b;this.B=c};
Pka=function(a){this.body=BJ(new yJ(a),4)};
FJ=function(a){this.u=a.jG};
GJ=function(a,b){if(b+1<=a.totalLength){var c=Gu(a,b);c=128>c?1:192>c?2:224>c?3:240>c?4:5}else c=0;if(1>c||!(b+c<=a.totalLength))return[-1,b];if(1===c)c=Gu(a,b++);else if(2===c){c=Gu(a,b++);var d=Gu(a,b++);c=(c&63)+64*d}else if(3===c){c=Gu(a,b++);d=Gu(a,b++);var e=Gu(a,b++);c=(c&31)+32*(d+256*e)}else if(4===c){c=Gu(a,b++);d=Gu(a,b++);e=Gu(a,b++);var f=Gu(a,b++);c=(c&15)+16*(d+256*(e+256*f))}else c=b+1,a.focus(c),Bu(a,c,4)?c=Cu(a).getUint32(c-a.A,!0):(d=Gu(a,c+2)+256*Gu(a,c+3),c=Gu(a,c)+256*(Gu(a,
c+1)+256*d)),b+=5;return[c,b]};
HJ=function(a){this.o=new xu;this.u=a};
IJ=function(a){var b=g.p(GJ(a.o,0));var c=b.next().value;var d=b.next().value;d=g.p(GJ(a.o,d));b=d.next().value;d=d.next().value;!(0>c||0>b)&&d+b<=a.o.totalLength&&(d=a.o.split(d).cj.split(b),b=d.Vp,d=d.cj,a.u(c,b),a.o=d,IJ(a))};
Qka=function(a){var b,c;a:{var d,e=a.O().Ae;if(e){var f=null===(c=g.Xs("yt-player-bandaid-host"))||void 0===c?void 0:c.vO;if(f&&e.baseUrl){c=new jv("https://"+f+e.baseUrl);if(e=null===(d=a.ur)||void 0===d?void 0:d.urlQueryOverride)for(d=qv(e),d=g.p(Object.entries(d)),e=d.next();!e.done;e=d.next())f=g.p(e.value),e=f.next().value,f=f.next().value,c.set(e,f);if(!c.get("id")){e=Kx(a.videoId);d=[];if(e)for(e=g.p(e),f=e.next();!f.done;f=e.next())d.push(f.value.toString(16).padStart(2,"0"));d=d.join("");
if(!d){c=void 0;break a}c.set("id",d)}break a}}c=void 0}!c&&(null===(b=a.ur)||void 0===b?0:b.url)&&(c=new jv(a.ur.url));if(!c)return"";c.set("ack","1");c.set("cpn",a.clientPlaybackNonce);c.set("opr","1");c.set("pvi","135");c.set("pai","140");c.set("oad","0");c.set("ovd","0");c.set("oaad","0");c.set("oavd","0");return c.Ec()};
JJ=function(a,b){var c=this;this.V=a;this.u=b;this.B=new mJ(a.O().Ae.o);this.N=new HJ(function(d,e){switch(d){case 10:var f=new Oka(e);switch(f.o){case 5:c.u.tick("orfb");break;case 0:c.I=f.u.iv}c.G=f.o;break;case 11:switch(c.G){case 0:Rka(c,e)}c.G=null}});
this.A=new zC;this.F=!1;this.C=new g.H(this.M,1E4,this)};
KJ=function(a,b){a.A.reject(b);a.C.stop();a.u.tick("ore");a.o&&a.o.abort()};
LJ=function(a){for(;a.o.Hf();){var b=a.o.Iq();a.N.feed(b)}};
Rka=function(a,b){var c,d,e,f;Aa(function(h){if(1==h.o)return a.u.tick("orpr"),a.F=!0,c=Eu(b),g.ra(h,a.B.decrypt(c,a.I),2);d=h.u;e=new Pka(new xu([d]));f=e.body;a.Ia=g.v.TextDecoder?(new TextDecoder).decode(f):g.fg(f);a.u.tick("oprr");a.A.resolve(a.Ia);a.C.stop();h.o=0})};
Tka=function(a){var b,c;return Aa(function(d){if(1==d.o)return g.ra(d,Ska(a),2);b=d.u;c={jG:b};return d["return"](new FJ(c))})};
Ska=function(a){var b,c,d,e,f;return Aa(function(h){if(1==h.o)return g.ra(h,Uka(a),2);if(3!=h.o)return b=h.u,c=a.B.o.encryptedClientKey,d=a.B.u,g.ra(h,Mka(a.B,b),3);e=h.u;f={encryptedOnesiePlayerRequest:b,encryptedClientKey:c,iv:d,hmac:e};return h["return"](new vJ(f))})};
Uka=function(a){var b,c,d;return Aa(function(e){switch(e.o){case 1:var f=a.V.O().Z;f="https://youtubei.googleapis.com/youtubei/"+f.innertubeApiVersion+"/player?key="+f.innertubeApiKey;var h=[new wJ({name:"Content-Type",value:"application/x-protobuf"})],l=a.V.Rd();l&&h.push(new wJ({name:"Authorization",value:"Bearer "+l}));l=a.V.O().Z;var m=l.an,n=l.Zm,q=g.Pc;switch(l.kl){case "TVHTML5":var r=7;break;default:r=56}b=new EJ({url:f,httpHeaders:h,postBody:new DJ({wH:new xJ({client:new tJ({hl:m,gl:n,deviceId:"Rory",
userAgent:q,clientName:r,clientVersion:l.innertubeContextClientVersion})}),videoId:a.V.videoId,playbackContext:new CJ})});sa(e,2);return g.ra(e,a.B.encrypt(b.o()),4);case 4:c=e.u;ta(e,3);break;case 2:return ua(e),d=new dx("onesie.request.encrypt",!1),e["return"](Promise.reject(d));case 3:return e["return"](c)}})};
MJ=function(a,b,c){this.o=a;this.A=b;this.u=c};
RJ=function(a,b,c){var d=void 0===d?NJ:d;a:{var e,f;if((null===(e=b.signalServiceEndpoint)||void 0===e?0:e.signal)&&a.o.cP&&(e=a.o.cP[b.signalServiceEndpoint.signal])){var h=new e;break a}if((null===(f=b.continuationCommand)||void 0===f?0:f.request)&&a.o.RF&&(f=a.o.RF[b.continuationCommand.request])){h=new f;break a}for(h in b)if(a.o.Ht[h]&&(f=a.o.Ht[h])){h=new f;break a}h=void 0}if(!h)return a.u(new jr("Error: No request builder found for command.",b)),Kf({});c=void 0===c?{}:c;f={context:g.zI(b.clickTrackingParams)};
(e=h.A(b))?(h.o(f,e,c),c=f):(g.mr(new jr("Error: Failed to create Request from Command.",b)),c=void 0);if(!c)return a.u(new jr("Error: Failed to build request for command.",b)),Kf({});f=OJ(g.PJ(h.u()));var l;var m=(b=null===(l=null===(m=b.commandMetadata)||void 0===m?void 0:m.webCommandMetadata)||void 0===l?void 0:l.apiUrl)?OJ(b):void 0;m&&(f=m);return QJ(a,c,f,d,h.B())};
g.SJ=function(a,b,c){var d=void 0===d?NJ:d;var e=void 0===e?!0:e;b.context||(b.context=g.zI(void 0,e));c=OJ(c);return QJ(a,b,c,d,void 0)};
QJ=function(a,b,c,d,e){d=void 0===d?NJ:d;var f=JSON.stringify(b),h=fq(c)?"same-origin":"cors",l=fq(c)?"same-origin":"include";return Vka().then(function(m){m={method:"POST",mode:h,credentials:l,headers:m,body:f};var n;e&&(n=Object.assign({uU:c,vU:m,identity:d,requestTime:(0,g.M)(),wU:0},e));return a.A.fetch(c,m,n)}).then(function(m){return Kf(m)})};
OJ=function(a){a=eq(a,{key:g.K("INNERTUBE_API_KEY")});var b=g.K("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(vd(a)));return a};
Vka=function(){return Eq().then(function(a){a=Object.assign({"Content-Type":"application/json","X-Goog-Visitor-Id":g.K("VISITOR_DATA")},a);return Kf(a)})};
Wka=function(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=TJ[b];if(c){var d=new RegExp(c),e=g.p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(TJ).forEach(function(h){var l=g.p(h);h=l.next().value;l=l.next().value;b!==h&&f.push(l)});
d=new RegExp(f.join("|"));a.sort(function(h,l){return h.length-l.length});
e=g.p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]};
g.PJ=function(a){return"/youtubei/v1/"+Wka(a)};
UJ=function(){};
VJ=function(){};
WJ=function(){};
XJ=function(){};
YJ=function(){};
ZJ=function(){this.B=new kba;this.u=new lba;this.A=new nba;this.o=new oba};
$J=function(){ZJ.o||(ZJ.o=new ZJ);return ZJ.o};
Xka=function(a,b,c){var d=b.json();b.redirected?mba(a.u,b.status,c,rd(g.td(5,b.url))):b.ok?a.A.o.B("/client_streamz/youtube/web/network/one_platform_request_success",c):(a.o.o.B("/client_streamz/youtube/web/network/one_platform_request_failed",b.status,c),d.then(function(e){g.nr(new jr("Error: API fetch failed",b.status,b.url,e))}));
return d};
g.bK=function(){if(!aK){var a={Ht:{playlistEditEndpoint:YJ,subscribeEndpoint:VJ,unsubscribeEndpoint:WJ,modifyChannelNotificationPreferenceEndpoint:XJ}},b=$J();Dq();MJ.o=new MJ(a,b,bfa);aK=MJ.o}return aK};
bla=function(a,b,c,d,e,f){a.ia();a.yc=!0;var h=a.O();return g.P(h.experiments,"html5_onesie")&&g.P(h.experiments,"html5_onesie_player_config")&&"yt"===h.U?Yka(a).then(function(){return Zka(a,d)}).then(function(){cK(a)},function(l){l=fx(l);
if(l.o)return Promise.reject(l);c(l);return dK(a,b,c)}):$ka(h,a)?ala(a,e,f).then(function(){cK(a)},function(l){l=fx(l);
if(l.o)return Promise.reject(l);c(l);return dK(a,b,c)}):dK(a,b,c)};
$ka=function(a,b){return g.P(a.experiments,"web_player_gvi_wexit")&&"yt"===a.U&&"adunit"!==TB(b)?!0:!1};
Yka=function(a){a=a.O().Ae;if(!a||!a.o)return Promise.reject(new dx("onesie.unavailable.hotconfig",!1,{key:"0"}));a={};window.fetch||(a.fetch="0");window.crypto&&window.crypto.subtle&&window.crypto.subtle.importKey||(a.crypto="0");window.Uint8Array||(a.uint8="0");return 0<Object.keys(a).length?(a.onesie="0",Promise.reject(new dx("html5.missingapi",!1,a))):Promise.resolve()};
Zka=function(a,b){return g.th(this,function d(){var e,f,h,l,m;return g.za(d,function(n){if(1==n.o)return a.fetchType="onesie",e=new JJ(a,b),g.ra(n,e.fetch(),2);f=n.u;h={player_response:f};a.yc=!1;a.Od(h,!0);if(a.yc||LB(a))return n["return"](Promise.resolve());l={};a.errorCode?(l.ec=a.errorCode,l.ed=a.errorDetail,l.es=a.ai||""):l.successButUnplayable="1";m=new dx("onesie.response",!1,l);return n["return"](Promise.reject(m))})})};
ala=function(a,b,c){return g.th(this,function e(){var f,h,l,m,n;return g.za(e,function(q){if(1==q.o)return f=g.bK(),h=BI(a,b,c),l=g.PJ(dla),g.ra(q,g.SJ(f,h,l),2);m=q.u;a.yc=!1;a.Od({raw_player_response:m},!0);if(!a.yc&&!LB(a))return n=a.isAd()?"auth":"manifest.net.retryexhausted",q["return"](Promise.reject(new dx(n,!0,{successButUnplayable:"1"})));q.o=0})})};
dK=function(a,b,c){return g.th(this,function e(){var f,h,l,m,n,q,r,u,w;return g.za(e,function(z){switch(z.o){case 1:f=function(){return!0},h=function(B){B=fx(B);
if(B.o)return Promise.reject(B);c(B);return!1},m=(l=a.isAd())?1:3,n=0;
case 2:if(!(n<m)){z.Gc(4);break}q=b;if(!(0<n)){z.Gc(5);break}return g.ra(z,bg(5E3),6);case 6:r={playerretry:n},l||(r.recover="embedded"),q=eq(b,r);case 5:return g.ra(z,ela(a,q).then(f,h),7);case 7:if(u=z.u)return z["return"]();n++;z.Gc(2);break;case 4:w=l?"auth":"manifest.net.retryexhausted";if(!l&&1E-4>Math.random())try{g.nr(new jr("b/152131571",btoa(b)))}catch(B){}return z["return"](Promise.reject(new dx(w,!0,{backend:"gvi"})))}})})};
ela=function(a,b){return g.th(this,function d(){var e,f,h,l,m,n,q,r,u,w,z,B,E;return g.za(d,function(F){if(1==F.o)return a.fetchType="gvi",e=a.O(),g.P(e.experiments,"enable_gvi_via_post")?(f={format:"RAW",method:"POST",withCredentials:!0,timeout:3E4},h=eq(b,{action_display_post:1})):(f={format:"RAW",method:"GET",withCredentials:!0,timeout:3E4},h=b),l={},e.sendVisitorIdHeader&&a.visitorData&&(l["X-Goog-Visitor-Id"]=a.visitorData),(m=g.Vu(e.experiments,"debug_dapper_trace_id"))&&(l["X-Google-DapperTraceInfo"]=
m),(n=g.Vu(e.experiments,"debug_sherlog_username"))&&(l["X-Youtube-Sherlog-Username"]=n),0<Object.keys(l).length&&(f.headers=l),q=(0,g.M)(),r=function(G){if(!a.ia()){G=G?G.status:-1;var S=400===G||429===G,aa=((0,g.M)()-q).toFixed();aa={backend:"gvi",rc:""+G,rt:aa};var ec="manifest.net.connect";429===G?ec="auth":200<G&&(ec="manifest.net.badstatus");return Promise.reject(new dx(ec,S,aa))}},u=function(G){return r(G.Xj)},g.ra(F,pw(Cr,h,f).then(void 0,u),2);
w=F.u;if(!w||!w.responseText)return F["return"](r(w));a.yc=!1;z=$p(w.responseText);a.Od(z,!0);if(a.errorCode)return B={ec:a.errorCode,ed:a.errorDetail,es:a.ai||""},F["return"](Promise.reject(new dx("auth",!0,B)));if(!a.yc&&!LB(a))return E=a.isAd()?"auth":"manifest.net.retryexhausted",F["return"](Promise.reject(new dx(E,!0,{successButUnplayable:"1"})));F.o=0})})};
cK=function(a){g.th(this,function c(){var d,e,f,h;return g.za(c,function(l){if(1==l.o)return sa(l,2),d=g.bK(),e=CI(a),f=g.PJ(g.eK),g.ra(l,g.SJ(d,e,f),4);if(2!=l.o)return h=l.u,a.Od({raw_watch_next_response:h},!1),ta(l,0);ua(l);l.o=0})})};
fla=function(a,b,c,d,e,f){function h(){NA("virc");UA("virc")}
NA("vir");UA("vir");a=bla(a,b,c,d,e,f);a.then(h,h);return a};
jK=function(a,b,c,d,e,f,h){g.N.call(this);var l=this;this.B=a;this.Oa=new hka;this.M=c;this.Cb=d;this.We=f;this.R=h;this.U=new $E((0,g.x)(this.getCurrentTime,this),(0,g.x)(this.getPlaybackRate,this),(0,g.x)(this.getPlayerState,this),function(m,n){m!=g.fz("endcr")||g.T(l.u,32)||fK(l);e(m,n,l.Qa)});
g.C(this,this.U);this.G=null;this.Da=new mG;this.ea=null;this.Z=new yG(a,this.Cb);g.C(this,this.Z);this.Z.subscribe("ctmp",this.ab,this);this.zd=!0;this.I=this.A=null;this.aa=[];this.ba=new IH;this.T=this.Ba=null;this.fa=new IH;this.bb=null;this.Ug=this.ua=!1;this.Pb=NaN;this.ee=new g.H(this.LN,500,this);g.C(this,this.ee);this.u=new g.bH;this.lc=[];this.Qa=b;this.Ea=new g.as;g.C(this,this.Ea);this.V=new g.gB(a);gK(this,function(){return{}});
hK(this);this.o=null;this.ya=new g.H((0,g.x)(this.UL,this),15E3);g.C(this,this.ya);a=g.O(this.B.experiments,"html5_source_buffer_attach_delay_time")||15E3;this.de=new g.H((0,g.x)(this.DN,this),a);g.C(this,this.de);this.Oh=0;this.be=this.Va=!1;this.ra=NaN;this.za=!1;this.Ha=0;this.Lc=new g.H(this.nw,4500,this);g.C(this,this.Lc);this.Cd=!1;this.gb=NaN;this.ga=new ZI;g.C(this,this.ga);aJ(this.ga,"bufferhealth",function(){var m=l.F;return m.o?nC(m.o):0});
aJ(this.ga,"bandwidth",(0,g.x)(this.vG,this));aJ(this.ga,"networkactivity",(0,g.x)(this.DG,this),!0);aJ(this.ga,"livelatency",(0,g.x)(this.zz,this));aJ(this.ga,"rawlivelatency",(0,g.x)(this.Dz,this));this.ga.start();this.ce=!1;this.Mc=!0;this.Xg=0;this.Yd=this.fj=!1;this.tb=1;this.kb=(0,g.x)(this.iI,this);YG(this.kb);this.R.subscribe("visibilitystatechange",this.kb);this.Wg=this.Ve=this.Ce=0;gla(this);g.C(this,this.F);this.sa=null;this.Be=!1;this.ae=[];this.Xd=this.Nh=0;this.Ae=this.Ph=!1;this.Hc=
new g.H(function(){g.iK(l,"ad.rebuftimeout","RETRYABLE_ERROR","vps."+l.u.state.toString(16))});
g.C(this,this.Hc);this.Zd=null;this.Vg=0};
gK=function(a,b){!a.C||a.C.ia();var c=new XI(a.V,a.B,b,(0,g.x)(a.getDuration,a),(0,g.x)(a.getCurrentTime,a),(0,g.x)(a.HG,a),(0,g.x)(a.Cb.getPlayerSize,a.Cb),(0,g.x)(a.getAudioTrack,a),(0,g.x)(a.getPlaybackRate,a),(0,g.x)(a.nu,a),a.We,(0,g.x)(a.UG,a),function(){return a.M.tick("qoes")},function(){return CH(a.F)});
a.C=new RI(c)};
hK=function(a){!a.N||a.N.ia();a.N=new MH(a.V,a.B,a.R);a.N.subscribe("newelementrequired",function(b){return kK(a,b)});
a.N.subscribe("qoeerror",a.MA,a);a.N.subscribe("playbackstalledatstart",function(){return a.S("playbackstalledatstart")});
a.N.subscribe("signatureexpiredreloadrequired",function(){return a.S("signatureexpired")});
a.N.subscribe("pausevideo",function(){return a.pauseVideo()})};
lK=function(a){var b=a.C;b.u&&b.u.send();if(b.o){var c=b.o;if(!c.ia()&&c.u){c.currentPlayerState="paused";var d=JI(c);d.isFinal=!0;d.send();g.Lo(c.A);c.dispose()}}b.qoe&&(c=b.qoe,c.provider.ha("html5_stopVideo_ping_block_killswitch")||c.I)&&("PL"===c.Sb&&(c.Sb="N"),d=g.UH(c.provider),g.$H(c,d,"vps",[c.Sb]),c.provider.ha("html5_qoe_user_intent_match_health")&&!c.u&&(0<=c.A&&(c.o.user_intent=[c.A.toString()]),c.u=!0),c.reportStats(d));b.dispose();g.Me(a.C)};
mK=function(a){return a.o&&a.o.Hi()?a.o.wa():null};
nK=function(a){if(a.V.isValid())return!0;g.iK(a,"api.invalidparam",void 0,"invalidVideodata.1");return!1};
oK=function(a,b){a.ua=void 0===b?!1:b;if(!nK(a)||a.ba.started)g.Fy(a.B)&&a.V.xa&&a.ba.started&&!a.ba.isFinished()&&!a.ua&&a.Dt();else{a.ba.start();var c=a.C;g.UH(c.provider);c.qoe&&zka(c.qoe);a.Dt()}};
hla=function(a){var b=a.V,c=a.Cb.getPlayerSize(),d=a.We(),e=Hka(a.B,a.V,c,d,a.R.isFullscreen());fla(a.V,e,function(f){return a.Yj(f)},a.M,c,d).then(void 0,function(f){a.V!=b||b.ia()||(f=fx(f),"auth"==f.errorCode&&a.V.errorDetail?g.iK(a,"auth",unescape(a.V.errorReason),ex(f.details),a.V.errorDetail,a.V.ai||void 0):a.Yj(f))})};
ila=function(a,b){a.A?a.A.Qa=new JF(b):a.Zd=b};
kla=function(a){if(!g.T(a.u,128))if(a.V.Rb(),a.Mc=!0,4!=a.Qa&&(a.aa=g.ob(a.V.kd)),KB(a.V)){pK(a).then(function(){a.ia()||(a.ua&&qK(a),rK(a,a.V),a.ba.o=!0,sK(a,"dataloaded"),a.fa.started?tK(a):a.ua&&uK(a,dH(dH(a.u,512),1)),gka(a.Z,a.T))});
a.ab("loudness",""+a.V.Tn.toFixed(3),!0);var b=oia(a.V);b&&a.ab("playerResponseExperiment",b,!0);jla(a)}else sK(a,"dataloaded")};
pK=function(a){vK(a);a.T=null;var b=dka(a.B,a.V,a.R.u);a.Ba=b;a.Ba.then((0,g.x)(a.FM,a),(0,g.x)(a.GM,a));return b};
wK=function(a){a.o&&a.o.xl();oK(a);nK(a)&&!g.T(a.u,128)&&(a.fa.started||(a.fa.start(),uK(a,dH(dH(a.u,8),1))),tK(a))};
tK=function(a){a.ia();if(!a.fa.isFinished()&&a.ba.isFinished()&&!g.T(a.u,128)&&!a.aa.length){if(!a.U.started){var b=a.U;b.started=!0;b.u()}if(!xK(a)){a.A&&(b=a.A.ga,a.Ug=!!b.o&&!!b.B);a.fa.isFinished()||(a.fa.o=!0);!a.V.xa||0<a.V.ri&&!xB(a.V)||(a.seekTo(Infinity),yK(a,"readying"),a.R.isBackground()&&(a.be=!0));b=a.C;if(b.o){var c=b.o;c.provider.videoData.Fm&&c.provider.videoData.np&&(NI(c,"connected"),OI(c))}b.qoe&&(b=b.qoe,b.provider.videoData.Pn&&hI(b,b.provider.videoData.Pn),b.provider.videoData.xa&&
(c=b.provider.videoData.ka,xB(b.provider.videoData)&&hI(b,"manifestless"),c&&Kw(c)&&hI(b,"live-segment-"+Kw(c).toFixed(1))),"yt"!==b.provider.o.U&&(b.o.len=[b.provider.videoData.lengthSeconds.toFixed(2)]));a.S("playbackready",a);RA("pbr",a.M.timerName)||(a.M.tick("pbr"),UA("pbr"))}}};
fK=function(a,b,c){b=void 0===b?!0:b;(void 0===c||c)&&a.o&&a.o.pause();b=b?new g.bH(14):new g.bH;uK(a,b)};
rK=function(a,b){if(b.endSeconds&&b.endSeconds>b.startSeconds){var c=b.endSeconds;a.ea&&(a.removeCueRange(a.ea),a.ea=null);a.ea=new g.cz(1E3*c,0x7ffffffffffff);a.ea.namespace="endcr";a.addCueRange(a.ea)}};
BK=function(a,b,c,d){a.V.Fa=c;d&&zK(a,b,d);var e=(d=g.AK(a))?uu(d):"";d=a.C;e=new SH(a.V,c,b,e);if(d.qoe){c=d.qoe;d=g.UH(c.provider);g.$H(c,d,"vfs",[e.o.id,e.u,c.ya,e.reason]);c.ya=e.o.id;e=c.provider.M();if(0<e.width&&0<e.height){e=[Math.round(e.width),Math.round(e.height)];var f=g.Oy();1<f&&e.push(f);g.$H(c,d,"view",e)}c.T||(c.provider.videoData.uh&&hI(c,"rqs"),c.provider.videoData.ka&&vw(c.provider.videoData.ka)&&(c.o.preload=["1"]));c.T=!0;c.I=!0;g.$H(c,d,"vps",[c.Sb]);c.reportStats(d)}c=a.Z;
c.B=0;c.u=0;a.S("internalvideoformatchange",a.V,"m"==b)};
g.AK=function(a){var b=CK(a);return Ex(b)||!a.T?null:g.cb(a.T.Aa.videoInfos,(0,g.x)(b.B,b))};
zK=function(a,b,c){if(c!=a.V.sc){var d=!a.V.sc;a.V.sc=c;"m"!=b&&(b=d?"i":"a");var e=a.C;c=new SH(a.V,c,b,"");if(e.qoe){e=e.qoe;var f=g.UH(e.provider);c.o.id!==e.N&&(g.$H(e,f,"afs",[c.o.id,e.N,c.reason]),e.N=c.o.id)}d||a.S("internalaudioformatchange",a.V,"m"==b)}};
g.iK=function(a,b,c,d,e,f){var h,l;g.Kb(lla,c)?h=c:c?l=c:h="GENERIC_WITHOUT_LINK";d=(d||"")+(";a6s."+parseInt(g.K("DCLKSTAT",0),10));b={errorCode:b,errorDetail:e,errorMessage:l||g.DK[h]||"",Ut:h,ai:f||"",nD:d};sK(a,"dataloaderror");uK(a,cH(a.u,128,b));g.wp(a.ra);vK(a);a.Uf()};
EK=function(a,b){a.aa=a.aa.filter(function(c){return b!=c});
a.fa.started&&tK(a)};
xK=function(a){var b;(b=!!a.aa.length)||(a=a.U.o.o[0],b=!!a&&-0x8000000000000>=a.start);return b};
HK=function(a,b){if(a.o&&b.wa()==a.o.wa()&&(b.isView()||a.o.isView())){if(b.isView()||!a.o.isView())g.cs(a.Ea),a.o=b,FK(a),zH(a.F,a.o)}else{a.o&&GK(a);if(!a.u.isError()){var c=eH(a.u,512);g.T(c,8)&&!g.T(c,2)&&(c=dH(c,1));b.isView()&&(c=eH(c,64));uK(a,c)}a.o=b;a.o.setLoop(a.Yd);a.o.setPlaybackRate(a.tb);FK(a);zH(a.F,a.o)}};
GK=function(a,b,c){b=void 0===b?!1:b;c=void 0===c?!1:c;if(a.o){var d=a.getCurrentTime();0<d&&(a.F.G=d);zH(a.F,null);IK(a);a.A&&(a.A.ea.fb(),JK(a,c));a.ya.stop();if(a.o){!a.fa.started||a.u.isError()||g.T(a.u,2)||uK(a,dH(a.u,512));g.cs(a.Ea);if(b||!a.o.isView())a.o.stopVideo(),KK(a);a.o=null}}};
CK=function(a){if(a.T){var b=a.Z;var c=a.T,d=LK(a);a=a.R.isBackground();var e=Mx(g.O(b.o.experiments,"html5_sticky_duration_cap_secs"));e=Dx("auto",e,!1,"s");var f=g.P(b.o.experiments,"html5_break_sticky")&&/^i/.test(c.videoData.clientPlaybackNonce);if(Ex(e)||f){e=Gx(zG(b,c),BG(b,c));f=0;!b.o.o||g.vy(b.o)||pl()||g.P(b.o.experiments,"mweb_uniplayer_auto_quality")||g.P(b.o.experiments,"hls_for_vod")||(f=g.Hv.medium);var h=g.O(b.o.experiments,"html5_default_quality_cap");if(h){var l=c.Aa.o();!CG(b,"html5_quality_cap_include_cast")&&
c.videoData.Mg&&(l=!1);!CG(b,"html5_quality_cap_include_drm")&&c.videoData.Qc&&(l=!1);var m=g.O(b.o.experiments,"html5_quality_cap_min_age_secs");l&&m&&(l=b.o.schedule.F,l=(0,g.M)()-l>1E3*m);l&&(f=f?Math.min(f,h):h)}h=g.O(b.o.experiments,"html5_random_playback_cap");m=/[a-h]$/;h&&m.test(c.videoData.clientPlaybackNonce)&&(f=f?Math.min(f,h):h);if(m=h=g.O(b.o.experiments,"html5_not_vp9_supported_quality_cap"))m=!Pw('video/webm; codecs="vp9"');m&&(f=f?Math.min(f,h):h);if(m=h=g.O(b.o.experiments,"html5_hfr_quality_cap"))a:{m=
c.Aa;if(m.o())for(m=g.p(m.videoInfos),l=m.next();!l.done;l=m.next())if(32<l.value.Ca().fps){m=!0;break a}m=!1}m&&(f=f?Math.min(f,h):h);(h=g.O(b.o.experiments,"html5_live_quality_cap"))&&c.videoData.xa&&(f=f?Math.min(f,h):h);f=new Bx(0,f,!1,"d");e=Gx(e,f);f=g.O(b.o.experiments,"html5_background_quality_cap");h=g.O(b.o.experiments,"html5_background_cap_idle_secs");a=!f||"auto"!=Mx()||Cp()/1E3<h?Fx:a?new Bx(0,f,!1,"v"):Fx;a=Gx(e,a);e=g.O(b.o.experiments,"html5_autonav_quality_cap");f=g.O(b.o.experiments,
"html5_autonav_cap_idle_secs");e=e&&c.videoData.Jj&&Cp()/1E3>f?new Bx(0,e,!1,"e"):Fx;a=Gx(Gx(Gx(a,e),GG(b,c)),c.videoData.xE);e=new Bx(0,0,!1,"o");1<b.I&&(e=new Bx(0,480,!0,"o"));e=Gx(a,e)}else CG(b,"html5_perf_cap_override_sticky")&&(e=Gx(e,GG(b,c)));g.P(b.o.experiments,"html5_ignore_sticky_for_medcap")&&(e=Gx(e,BG(b,c)));b=Gx(Gx(Gx(c.videoData.us,e),c.videoData.oy),d)}else b=Fx;return b};
LK=function(a,b){if(a.G){var c=a.G;var d=void 0===b?!1:b;c=(void 0===d?0:d)&&c.Z?c.Z:c.I}else c=a.V.Up()&&a.V.ka&&uw(a.V.ka)?(g.P(a.B.experiments,"html5_drm_initial_constraint_from_config")?a.V.Dm:g.P(a.B.experiments,"html5_drm_start_from_null_constraint"))?Fx:oG:Fx;a.Ae&&(c=Gx(c,MK));return c};
PK=function(a){if(!a.ia()&&!g.T(a.u,128)&&a.V.Aa){if(a.V.Aa.o())NK(a);else{var b=CK(a),c=a.V;a:{var d=a.V.Fh;if(b.o){for(var e=g.p(d),f=e.next();!f.done;f=e.next()){f=f.value;var h=f.je(),l=g.Hv[h.Ca().quality];if((!b.A||"auto"!=h.Ca().quality)&&l<=b.o){d=f;break a}}d=d[d.length-1]}else d=d[0]}c.kf=d;BK(a,b.reason,OK(a,a.V.kf))}a.u.qb()&&(a.F.fa=!1,a.playVideo())}};
NK=function(a){if(a.V.Aa&&a.V.Aa.o()){var b=CK(a),c=a.V.Fa;if(!QK(a,"html5_dynamic_av1_hybrid_threshold")&&c&&"1"===c.sb){var d=gz(a.B);if(d&&d<c.Ca().Qb&&d!=a.Vg){a.Vg=d;pK(a);return}}if(a.A&&(a=a.A,!a.ia()&&!Cx(a.G.B,b)&&a.u)){var e=a.G.B;xF(a,Xia(a.G,b));kF(a);c=JE(a.G)&&"m"==b.reason&&a.G.R;d=a.o.Hc&&"l"==b.reason&&iE(a.u);b=("b"==b.reason||"o"==b.reason)&&e.o>b.o;c||d||b?a.S("reattachrequired"):(jE(a.u)&&tF(a,a.u,a.B),a.ea.fb())}}};
RK=function(a){QK(a,"html5_nonblocking_media_capabilities")?NK(a):PK(a)};
TK=function(a){tga(a.V.ka,{cpn:a.V.clientPlaybackNonce,c:a.B.deviceParams.c,cver:a.B.deviceParams.cver});var b=a.B,c=a.V,d=new g.Wu,e=Uu(b,{hasSubfragmentedFmp4:c.hasSubfragmentedFmp4,dl:c.dl});d.B=e;d.im=b.ha("html5_max_drift_per_track_secs")||b.ha("html5_rewrite_manifestless_for_sync")||b.ha("html5_check_segnum_discontinuity");d.Vg=b.ha("html5_unify_sqless_flow");d.T=b.ha("html5_accurate_seeking_redux");d.Cb=b.ha("html5_unrewrite_timestamps");d.gb=b.ha("html5_stop_overlapping_requests");d.Ea=g.O(b.experiments,
"html5_min_readbehind_secs");d.dr=g.O(b.experiments,"html5_min_readbehind_cap_secs");g.Fy(b)&&(d.Ea=g.O(b.experiments,"tvhtml5_min_readbehind_secs"));d.Nh=b.ha("html5_append_init_while_paused");d.Zd=g.O(b.experiments,"html5_max_readahead_bandwidth_cap");d.ce=g.O(b.experiments,"html5_post_interrupt_readahead");d.R=g.O(b.experiments,"html5_subsegment_readahead_target_buffer_health_secs");d.tb=g.O(b.experiments,"html5_subsegment_readahead_timeout_secs");d.Gx=g.O(b.experiments,"html5_subsegment_readahead_min_buffer_health_secs");
d.kb=g.O(b.experiments,"html5_subsegment_readahead_min_buffer_health_secs_on_timeout");d.Hx=g.O(b.experiments,"html5_subsegment_readahead_min_load_speed");d.Ug=g.O(b.experiments,"html5_subsegment_readahead_load_speed_check_interval");d.Ix=g.O(b.experiments,"html5_subsegment_readahead_seek_latency_fudge");d.Oa=b.ha("html5_peak_shave");d.SD=b.ha("html5_peak_shave_always_include_sd");d.yx=b.ha("html5_restrict_streaming_xhr_on_sqless_requests");d.gq=g.O(b.experiments,"html5_max_headm_for_streaming_xhr");
d.hE=b.ha("html5_pipeline_manifestless_allow_nonstreaming");d.FE=b.ha("html5_prefer_server_bwe3");d.Xg=1024*g.O(b.experiments,"html5_video_tbd_min_kb");d.NE=b.ha("html5_probe_live_using_range");d.Qo=b.ha("html5_last_slice_transition");d.Dx=b.ha("html5_store_xhr_headers_readable");d.Jo=b.ha("html5_enable_packet_train_response_rate");if(e=g.O(b.experiments,"html5_probe_secondary_during_timeout_miss_count"))d.ee=e,d.Kx=1;d.Qa=g.O(b.experiments,"html5_probe_primary_delay_base_ms")||d.Qa;d.Ae=b.ha("html5_no_placeholder_rollbacks");
d.Ex=b.ha("html5_subsegment_readahead_enable_mffa");b.ha("html5_allow_video_keyframe_without_audio")&&(d.fa=!0);d.Be=b.ha("html5_reattach_on_stuck");d.Tx=b.ha("html5_webm_init_skipping");d.Ce=g.O(b.experiments,"html5_request_size_padding_secs")||d.Ce;d.Dp=b.ha("html5_log_timestamp_offset");d.Pb=b.ha("html5_abs_buffer_health");d.No=b.ha("html5_interruption_resets_seeked_time");d.Yd=g.O(b.experiments,"html5_max_live_dvr_window_plus_margin_secs")||d.Yd;d.Mc=b.ha("html5_explicitly_dispose_xhr");d.de=
g.O(b.experiments,"html5_probe_primary_failure_factor");d.Cx=b.ha("html5_skip_invalid_sq");d.xx=b.ha("html5_restart_on_unexpected_detach");d.tp=b.ha("html5_log_live_discontinuity");d.zx=b.ha("html5_rewrite_manifestless_for_continuity");d.Cd=g.O(b.experiments,"html5_max_drift_per_track_secs");d.Ax=b.ha("html5_rewrite_manifestless_for_sync");d.We=g.O(b.experiments,"html5_static_abr_resolution_shelf");d.fj=!b.ha("html5_encourage_array_coalescing");d.km=b.ha("html5_crypto_period_secs_from_emsg");d.sa=
b.ha("html5_defer_slicing");d.lc=g.O(b.experiments,"html5_buffer_health_to_defer_slice_processing");d.Go=b.ha("html5_disable_reset_on_append_error");b.ha("html5_dynamic_av1_hybrid_threshold")&&(d.Ho=!0,d.er=gz(b));b.ha("html5_media_common_config_killswitch")||(d.C=c.maxReadAheadMediaTimeMs/1E3||d.C,e=b.schedule,e.u.o()===e.policy.A?d.U=10:d.U=c.minReadAheadMediaTimeMs/1E3||d.U,d.Lc=c.readAheadGrowthRateMs/1E3||d.Lc);Bh&&(d.Z=41943040);d.ga=!ox();g.Fy(b)||!ox()?(e=b.experiments,d.F=8388608,d.I=524288,
d.Ph=5,d.za=2097152,d.aa=1048576,d.rx=1.5,d.CD=!1,d.M=4587520,kl()&&(d.M=786432),d.o*=1.1,d.u*=1.1,d.bb=!0,d.Z=d.F,d.Ba=d.I,d.be=g.P(e,"persist_disable_player_preload_on_tv")||g.P(e,"persist_disable_player_preload_on_tv_for_living_room")||!1):b.o&&(d.o*=1.3,d.u*=1.3);g.Ow&&fl("crkey")&&(e="CHROMECAST/ANCHOVY"==b.deviceParams.cmodel,d.F=20971520,d.I=1572864,e&&(d.M=812500,d.N=1E3,d.Rx=5,d.aa=2097152));!b.ha("html5_disable_firefox_init_skipping")&&g.vx&&(d.bb=!0);b.supportsGaplessAudio()||(d.Io=!1);
ny&&(d.Qi=!0);d.rD=b.B.M;if(xB(c)){d.Mo=!0;d.Bx=!0;if("ULTRALOW"==c.latencyClass||"LOW"==c.latencyClass&&!b.ha("html5_disable_low_pipeline"))d.Yp=2,d.hq=4;d.ih=c.defraggedFromSubfragments;c.ac&&(d.Va=!0);g.NB(c)&&(d.T=!1);d.jm=g.Ry(b)}c.isAd()&&(d.Da=0,d.zd=0);zB(c)&&(d.ea=!0);d.ra=b.ha("html5_enable_subsegment_readahead_v3")||b.ha("html5_ultra_low_latency_subsegment_readahead")&&"ULTRALOW"==c.latencyClass;d.ua=c.uh;d.lp=d.ua&&(/^rq[a-f]/.test(c.clientPlaybackNonce)||ZB(c));sl()&&/(K\d{3}|KS\d{3}|KU\d{3})/.test(b.deviceParams.cmodel)&&
!b.ha("html5_disable_move_pssh_to_moov")&&uw(c.ka)&&(d.bb=!1);uw(c.ka)&&(d.Be=!1);if(c.xa){e=Kw(c.ka);var f=g.O(b.experiments,"html5_live_abr_head_miss_fraction"),h=g.O(b.experiments,"html5_live_abr_repredict_fraction");f&&e&&(d.Xd=Math.min(e*f,d.Xd));h&&e&&(d.N=Math.min(1E3*e*h,d.N))}f=0;b.ha("html5_live_use_alternate_bandwidth_window_sizes")&&(f=b.schedule.policy.o,c.xa&&(f=g.O(b.experiments,"ULTRALOW"==c.latencyClass?"html5_live_ultra_low_latency_bandwidth_window":c.isLowLatencyLiveStream?"html5_live_low_latency_bandwidth_window":
"html5_live_normal_latency_bandwidth_window")||f));e=b.schedule;e.N.o=xB(c)?.5:0;if(!e.policy.u&&f&&(e=e.u,f=Math.round(f*e.resolution),f!==e.u)){h=Array(f);var l=Math.min(f,e.B?e.u:e.valueIndex),m=e.valueIndex-l;0>m&&(m+=e.u);for(var n=0;n<l;++n)h[n]=e.values[(m+n)%e.u];for(;n<f;++n)h[n]=Infinity;e.u=f;e.values=h;e.valueIndex=l%f;e.B=l===f;e.F=!0;e.I=Ux(e)}d.Ha=c.xa;switch(yB(c)){case 21530001:d.mD=b.ha("html5_live_smoothly_extend_max_seekable_time");d.ra=!0;"LOW"==c.latencyClass?d.R=g.O(b.experiments,
"html5_jumbo_mobile_subsegment_readahead_target"):"ULTRALOW"==c.latencyClass&&(d.R=g.O(b.experiments,"html5_jumbo_ull_subsegment_readahead_target"));d.Ae=!0;break;case 2153E4:d.ra=!1}d.Qi=d.Qi||c.Qi;d.ba=c.Ag;ZB(c)&&(d.ya=!0);c.Ag&&!uw(c.ka)&&b.ha("html5_hack_gapless_init")&&(d.Ve=!0);(e=g.O(b.experiments,"html5_gapless_ad_byterate_multiplier"))&&c.Ag&&c.isAd()&&(d.o*=e,d.u*=e);XB(c)&&(d.A=c.videoId,d.Pb=!0,XB(c)&&c.Rt&&(d.G=!0));b.ha("html5_drm_initial_constraint_from_config")?d.Hc=c.Dm:d.Hc=b.ha("html5_drm_start_from_null_constraint");
c=g.O(b.experiments,"html5_deadzone_multiplier")||1;(e=g.O(b.experiments,"html5_sticky_reduces_discount_by"))&&"auto"!==Mx()&&(c-=e);d.o*=c;d.u*=c;if(c=g.O(b.experiments,"html5_request_sizing_multiplier"))d.vx=c;d.ae=g.O(b.experiments,"html5_min_upgrade_health")||d.ae;sx(b.B,tx.BITRATE)&&(d.M=NaN);b.B.A&&(d.Ko="; "+tx.EXPERIMENTAL.name+"=allowed");"auto"!==Mx()&&(d.Wg=0);d.mx=b.ha("html5_rec_2020_matrix_correction_killswitch");c=d.Ha&&!b.ha("html5_pause_appends_killswitch");d.Ha=c||b.ha("html5_never_pause_appends");
g.P(b.experiments,"html5_prefer_low_quality_audio_means_64k")&&ny&&(d.DE=!0);b=b.experiments;g.P(b,"html5_validate_lengthless_slices_killswitch")&&(d.Lx=!1);g.P(b,"html5_audio_only_eos_fix_killswitch")&&(d.Oh=!0);g.P(b,"html5_reject_promise_if_seeking_to_head_killswitch")&&(d.nx=!0);b=a.getAudioTrack();b=b.Db.isDefault?void 0:b;c=a.Da;c.keys=[];c.values=[];a.A=new jF(a.B.schedule,d,a.V.ka,a.V.Aa,CK(a),b,a.U);a.A.subscribe("needkeyinfo",a.oC,a);a.A.subscribe("newDrmInfo",a.uM,a);a.A.subscribe("videoformatchange",
a.gI,a);a.A.subscribe("audioformatchange",a.WL,a);a.A.subscribe("error",a.Yj,a);a.A.subscribe("ctmp",a.ab,a);a.A.subscribe("reattachrequired",a.KO,a);a.A.subscribe("metadata",a.iC,a);a.A.subscribe("constraint",a.TN,a);a.A.subscribe("timestamp",a.OH,a);a.A.subscribe("localmediachange",a.XL,a);a.A.subscribe("localplaybackfailed",a.yF,a);d=SK(a)?!0:a.ua&&g.Fy(a.B)&&a.V.xa;a.A.initialize(a.getCurrentTime(),CK(a),d);a.V.probeUrl&&(a.A.ra=a.V.probeUrl);(a.aa.length||a.ua)&&JK(a,!1);BH(a.F,a.A);a.N.u=a.A;
a.Zd&&(a.A.Qa=new JF(a.Zd));YB(a.V)&&(a.A.o.Lo=2)};
gla=function(a){a.F=new xH(a.V,a.B,a.R,function(){return g.fb(a.aa,"ad")});
a.F.subscribe("seekto",function(b,c){a.F.G=b;var d=a.Oa;d.o=b;d.u=!0;c||UK(a);a.ea&&b>a.V.endSeconds&&isFinite(b)&&(a.removeCueRange(a.ea),a.ea=null);b<VK(a)-.01&&(d=eH(a.u,2),g.T(d,8)&&(d=eH(d,4)),uK(a,d));a.S("SEEK_TO",a,b)});
a.F.subscribe("seekstart",function(){return WK(a)});
a.F.subscribe("seekend",function(){return a.S("SEEK_COMPLETE")});
a.F.subscribe("newmediaelementrequired",function(){return kK(a)});
a.F.subscribe("ended",function(){return fK(a)});
a.F.subscribe("ctmp",a.ab,a);a.F.subscribe("qoeerror",a.MA,a);a.F.subscribe("livereadaheadchanged",function(b){var c=a.C;c.qoe&&(c=c.qoe,g.$H(c,g.UH(c.provider),"lra",[b]),bI(c,"live-readahead-seconds",b.toString()))});
a.F.subscribe("releaseadsprerolllock",function(){return EK(a,"ad")})};
vK=function(a){a.A&&(a.A.dispose(),a.A=null,BH(a.F,null),a.N.u=null);IK(a)};
IK=function(a){if(a.I){if(a.A){var b=xB(a.V)&&a.V.ac&&!a.V.isAd();oF(a.A,b)}a.I.dispose();a.I=null}};
YK=function(a){if(a.I)return a.I.nn;QK(a,"html5_disable_loader_reorder")&&XK(a);mla(a);return a.I?a.I.nn:null};
mla=function(a){if(QK(a,"html5_application_media_source"))a.S("requestmediasource",a);else{var b=g.O(a.B.experiments,"html5_source_buffer_attach_retry_limit")||0;a.Oh<b&&a.de.start();try{var c=a.o.Lq()}catch(d){if(RH(a.N,"html5.missingapi",{updateMs:"1"}))return;g.nr(d);d.message="window.URL object overwritten by external code";window.setTimeout(function(){throw d;},0);
g.iK(a,"html5.missingapi","HTML5_NO_AVAILABLE_FORMATS_FALLBACK","updateMs.1")}ZK(a,c)}};
ZK=function(a,b){QK(a,"html5_disable_loader_reorder")||XK(a);a.I=b;xga(a.I,function(c){try{if(a.I&&(!c||a.I==c)){var d=a.getDuration();!d&&xB(a.V)&&(d=g.O(a.B.experiments,"html5_manifestless_media_source_duration")||3600);a.I.isView()?(c=d,c>a.I.getDuration()&&kx(a.I,c)):kx(a.I,d);wja(a.A,a.I);a.S("mediasourceattached");a.de.stop()}}catch(e){g.nr(e),a.Yj(new dx("fmt.unplayable",!0,{msi:"1",ename:e.name}))}})};
XK=function(a){a.A?Sf(a.A.seek(a.getCurrentTime()-a.Ib()),function(){}):TK(a)};
nla=function(a){return 403==a.details.rc?(a=a.errorCode,"net.badstatus"==a||"manifest.net.retryexhausted"==a):!1};
$K=function(a,b){try{window.location.reload(!0);a.C.onError("qoe.restart",ex({detail:"pr."+b}));return}catch(c){}QK(a,"tvhtml5_retire_old_players")&&g.Fy(a.B)&&QH(a.N)};
aL=function(a){return"net.retryexhausted"==a.errorCode||"net.badstatus"==a.errorCode&&!!a.details.fmt_unav};
ola=function(a,b){if(a.o&&("fmt.unplayable"==b.errorCode||"html5.invalidstate"==b.errorCode)){var c=a.o.Nf();b.details.merr=c?c.toString():"0";b.details.msg=a.o.yl()}};
kK=function(a,b){b=void 0===b?!1:b;return Aa(function(c){if(1==c.o)return a.A&&a.A.ia()&&vK(a),a.S("newelementrequired"),b?g.ra(c,pK(a),2):c.Gc(2);g.T(a.u,8)&&a.playVideo();c.o=0})};
UK=function(a){g.T(a.u,32)||(uK(a,dH(a.u,32)),g.T(a.u,8)&&a.pauseVideo(!0),a.S("beginseeking",a));bL(a)};
WK=function(a){g.T(a.u,32)?(uK(a,fH(a.u,16,32)),a.S("endseeking",a)):QK(a,"html5_sync_seeking_state")&&!g.T(a.u,2)&&uK(a,dH(a.u,16))};
cL=function(a){if(a.V.ka)return Lw(a.V.ka,a.getCurrentTime()-a.Ib());if((!QK(a,"html5_disable_limit_ingestion_tvos")||jl())&&a.o){var b=a.o.getStartDate();if(b&&(b=b.getTime(),!isNaN(b)))return b/1E3+a.getCurrentTime()}return NaN};
sK=function(a,b){a.S("internalvideodatachange",void 0===b?"dataupdated":b,a,a.V)};
FK=function(a){(0,g.y)("loadstart loadeddata loadedmetadata play playing progress pause ended suspend seeking seeked timeupdate durationchange ratechange error waiting resize".split(" "),function(b){this.Ea.L(this.o,b,this.hI,this)},a);
a.B.Oh&&a.o.Hi()&&(a.Ea.L(a.o,"webkitplaybacktargetavailabilitychanged",a.LK,a),a.Ea.L(a.o,"webkitcurrentplaybacktargetiswirelesschanged",a.MK,a))};
eL=function(a){QK(a,"html5_enable_timeupdate_timeout")&&!a.V.xa&&dL(a)&&a.ee.start()};
dL=function(a){if(!a.o)return!1;var b=a.o.getCurrentTime();a=a.o.getDuration();return!!(1<b&&b>a-.3)};
gL=function(a){window.clearInterval(a.Pb);a.ya.stop();a.V.Ze=!0;a.B.Ze=!0;a.B.ua=0;fL(a);g.T(a.u,8)&&uK(a,eH(a.u,65));var b=a.C;if(b.o){var c=b.o;if(!c.u){g.P(c.provider.o.experiments,"disable_embedpage_playback_logging")||16623!==c.provider.videoData.Mr||g.Io(Error("Playback for EmbedPage"));var d=II(c,"playback");c.C=[10+c.provider.videoData.il,10,10,40+c.provider.videoData.mn-c.provider.videoData.il,40];Bka(c.o);d.u=HI(c,!0);d.send();if(c.provider.videoData.xr){d=c.provider.o;var e=c.provider.videoData;
e={html5:"1",video_id:e.videoId,cpn:e.clientPlaybackNonce,ei:e.eventId,ptk:e.xr,oid:e.OC,ptchn:e.NC,pltype:e.PC,content_v:e.wj()};d=g.Ed(d.I+"ptracking",e);KI(c,d)}c.provider.videoData.Fm&&(NI(c,"playback"),c.A||OI(c));c.provider.videoData.xf||MI(c);c.u=!0;c=c.o;c.o=c.provider.u();c.Cg=g.UH(c.provider);!(0===c.u&&5>c.o)&&2<c.o-c.u&&(c.u=c.o);c.G=!0}}b.u&&(b=b.u,c=g.UH(b.provider),0>b.o&&(b.o=c,b.delay.start()),b.u=c,b.A=c);a.Lc.fb();a.S("playbackstarted");g.vp()&&((a=g.Ja("yt.scheduler.instance.clearPriorityThreshold"))?
a():xp(0))};
fL=function(a){var b=a.getCurrentTime(),c=a.V;!RA("pbs",a.M.timerName)&&SA.measure&&SA.getEntriesByName&&(SA.getEntriesByName("mark_nr")[0]?TA("mark_nr"):TA());c.videoId&&a.M.info("docid",c.videoId);c.eventId&&a.M.info("ei",c.eventId);c.clientPlaybackNonce&&a.M.info("cpn",c.clientPlaybackNonce);0<c.startSeconds&&a.M.info("start",c.startSeconds.toString());a.o&&a.o.Ii()&&a.M.info("paused",1);c.Fa?a.M.info("fmt",uu(c.Fa)):a.M.info("fmt","-1");c.nk&&a.M.info("yt_pre",a.Ug?"2":"1");a.R.isFullscreen()&&
a.M.info("yt_fs","1");a.M.info("cmt",b.toFixed(3));if(a.A){b=a.A.ga;window&&window.performance&&window.performance.getEntriesByName&&(c=window.performance.getEntriesByName(b.B),c.length&&(c=c[0],b.Bd("vri",c.fetchStart),b.Bd("vdns",c.domainLookupEnd),b.Bd("vreq",c.requestStart),b.Bd("fvb",c.responseStart),b.Bd("vrc",c.responseEnd)),c=window.performance.getEntriesByName(b.o),c.length&&(c=c[0],b.Bd("ari",c.fetchStart),b.Bd("adns",c.domainLookupEnd),b.Bd("areq",c.requestStart),b.Bd("avb",c.responseStart),
b.Bd("arc",c.responseEnd)));b=b.C;for(var d in b)a.M.tick(d,b[d])}};
bL=function(a,b){b=void 0===b?!1:b;if(a.o&&a.V){var c=a.F,d=a.u.qb(),e=c.getCurrentTime(),f=c.isAtLiveHead(e);if(c.N&&f){var h=c.N;if(h.o&&!(e>=h.u&&e<h.A)){var l=h.o.Ef(e);-1!=l&&(h.u=h.o.wd(l),h.A=h.u+h.o.getDuration(l),l=(0,g.D)()/1E3-h.o.xv(l),l-=h.C(),h.B.add(l))}}c.u&&(f&&(f=c.u,h=c.o?nC(c.o):0,f.C++,3>f.C||(0,g.D)()-f.I<f.o.M||(f.I=(0,g.D)(),f.A.push(h),50<f.A.length&&f.A.shift())),f=c.u,UG(f,e,void 0===d?!0:d),VG(f,e),d&&uH(c,!0));c=a.getCurrentTime();!a.A||g.T(a.u,4)&&g.NB(a.V)||(d=a.A,e=
c,d.A&&d.A.u&&(e-=!isNaN(d.Z)&&d.o.Cb?d.Z:0,d.F!=e&&d.resume(),d.M.A&&!nx(d.A)&&(f=d.F<=e&&e<d.F+10,h=Zw(d.A.u.Fd(),d.F+wF),f&&h&&(d.M.A=!1)),d.M.A||(d.F=e),d.Ha.fb()));5<c&&(a.F.G=c);(d=g.vp())?g.wp(a.ra):g.Lo(a.ra);!g.iH(a.u)&&a.o.Ii()||g.T(a.u,128)||(e=(0,g.x)(a.cH,a),0==a.o.Xk().length?a.ra=d?g.tp(e,100):g.Jo(e,100):a.ra=d?g.tp(e,500):g.Jo(e,500));a.V.Xh=c;!b&&a.u.qb()&&(a.C.Xc(),a.V.xa&&(0,g.D)()>a.Wg+6283&&(!a.isAtLiveHead()||a.V.ka&&Hw(a.V.ka)||(c=a.C,c.qoe&&(c=c.qoe,e=c.provider.B(),d=g.UH(c.provider),
eI(c,d,e),e=e.F,isNaN(e)||g.$H(c,d,"e2el",[e.toFixed(3)]))),g.Ry(a.B)&&a.ab("rawlat","l."+cJ(a.ga,"rawlivelatency").toFixed(3)),a.Wg=(0,g.D)()),a.V.Fa&&Qv(a.V.Fa)&&(c=mK(a))&&c.videoHeight!=a.Xd&&(a.Xd=c.videoHeight,BK(a,"a",OK(a,a.V.kf))));fka(a.Z,a.T,a.o,a.R.isBackground())&&RK(a);c=a.Z;d=a.V.Fa;0>=g.O(c.o.experiments,"hfr_dropped_framerate_fallback_threshold")||!(d&&d.Ca()&&32<d.Ca().fps)?c=!1:3<=c.A?(c.A=0,c=!0):c=!1;c&&pla(a);a.S("progresssync",a,b)}};
pla=function(a){a.C.onError("qoe.restart","droprate."+a.Z.G);a.B.B.F=!1;pK(a).then(function(){return qK(a)})};
OK=function(a,b){if("auto"==b.lh.Ca().quality&&Qv(b.je())&&a.V.Fh)for(var c=g.p(a.V.Fh),d=c.next();!d.done;d=c.next())if(d=d.value,d.getHeight()==a.Xd&&"auto"!=d.lh.Ca().quality)return d.je();return b.je()};
uK=function(a,b){if(!g.gH(a.u,b)){var c=new g.kH(b,a.u);a.u=b;var d=!a.lc.length;a.lc.push(c);var e=a.o&&a.o.tn();if(g.mH(c,1)&&!g.T(c.Mi,16)&&!e&&g.T(a.u,8)&&!g.T(a.u,64)&&a.A&&(a.A.fa=!0,hL(a),a.o&&5<=nC(a.o))){e=a.Z;var f=a.T;DG(e,f)&&f.videoData.Fa?(6E4<(0,g.D)()-e.M&&(e.B=0),e.B++,e.M=(0,g.D)(),4!=e.B?e=!1:(EG(e,f.videoData.Fa),e=!0)):e=!1;e&&RK(a)}(e=g.O(a.B.experiments,"html5_ad_timeout_ms"))&&a.V.isAd()&&g.T(b,1)&&(g.T(b,8)||g.T(b,16))?a.Hc.start(e):a.Hc.stop();(0>lH(c,8)||g.mH(c,1024))&&
a.ya.stop();!g.mH(c,8)||a.V.Ze||g.T(c.state,1024)||a.ya.start();g.T(c.state,8)&&0>lH(c,16)&&!g.T(c.state,32)&&!g.T(c.state,2)&&a.playVideo();g.T(c.state,2)&&OB(a.V)&&(e=a.getCurrentTime(),a.V.lengthSeconds!=e&&(a.V.lengthSeconds=e,sK(a)),bL(a,!0));g.mH(c,2)&&(a.nw(!0),hL(a));g.mH(c,128)&&(hL(a),QK(a,"html5_release_on_error")&&a.Uf());a.V.ka&&a.V.xa&&!a.Ph&&(0>lH(c,8)?(e=a.V.ka,e.C&&e.C.stop()):g.mH(c,8)&&a.V.ka.resume());a.F.Ub(c);a.C.Ub(c);if(d&&!a.ia())try{for(var h=g.p(a.lc),l=h.next();!l.done;l=
h.next()){var m=l.value;a.U.Ub(m);a.S("statechange",m)}}finally{a.lc.length=0}}};
iL=function(a,b){g.T(a.u,128)||(uK(a,fH(a.u,1028,9)),a.ab("dompaused",b),a.S("onDompaused"))};
qK=function(a){if(!a.o||!a.V.Aa)return!1;var b=null;a.V.Aa.o()?(b=YK(a),a.A.resume()):(vK(a),a.V.kf&&(b=a.V.kf.zn()));var c=b;var d=a.o.Mq();b=!1;d&&null!==c&&c.o===d.o||(a.M.tick("vta"),UA("vta"),0<a.getCurrentTime()&&(b=a.getCurrentTime(),a.F.G=b),a.o.xl(c),a.I&&xp(4),!a.V.Ze&&g.hH(a.u)&&a.ya.start(),b=!0);g.T(a.u,2)||(c=a.F,c.I||!(0<c.G)||c.o&&0<c.o.getCurrentTime()||c.seekTo(c.G));a:if(c=b,g.FB(a.V)&&a.o)if((d=a.V.kc)&&a.o.Hi()){var e=a.o.wa();if(a.G)if(e!=a.G.wa())KK(a);else if(c&&"fairplay"==
d.flavor&&!jl())KK(a);else break a;a.G=new qG(e,a.V,a.B);a.G.subscribe("licenseerror",a.fI,a);a.G.subscribe("qualitychange",a.OL,a);a.G.subscribe("heartbeatparams",a.dI,a);a.G.subscribe("keystatuseschange",a.eI,a);a.G.subscribe("hdproberequired",a.NL,a);a.G.subscribe("ctmp",a.ab,a);c=g.p(a.Da.keys);for(d=c.next();!d.done;d=c.next())d=a.Da.get(d.value),uG(a.G,d);QK(a,"html5_eme_loader_sync")||(a=a.Da,a.keys=[],a.values=[])}else g.iK(a,"fmt.unplayable","HTML5_NO_AVAILABLE_FORMATS_FALLBACK","drm.1");
return b};
KK=function(a){a.G&&(a.G.dispose(),a.G=null)};
qla=function(a){a.B.B.u=!1;a.C.onError("qoe.restart",ex({e:"fmt.noneavailable",detail:"hdr"}));pK(a).then(function(){return qK(a)})};
jL=function(a,b){b=void 0===b?!1:b;return a.V.xa&&(a.isAtLiveHead()&&(QK(a,"html5_videoplayer_getmaxseekabletimeforux_check_pause_killswitch")||!g.T(a.u,4))||DH(a.F)||g.NB(a.V))?a.getCurrentTime():VK(a,b)};
VK=function(a,b){return a.F.Dc(void 0===b?!1:b)};
g.kL=function(a,b){(a.zd=b)||a.ya.stop();if(a.V.ka)if(b)a.V.ka.resume();else{var c=a.V.ka;c.C&&c.C.stop()}g.P(a.B.experiments,"html5_suspend_loader")&&a.A&&(b?a.A.resume():JK(a,!0));g.P(a.B.experiments,"html5_fludd_suspend")&&(g.T(a.u,2)||b?g.T(a.u,512)&&b&&uK(a,eH(a.u,512)):uK(a,dH(a.u,512)));c=a.C;c.qoe&&(c=c.qoe,g.$H(c,g.UH(c.provider),"stream",[b?"A":"I"]))};
lL=function(a){return a.o?a.o.Kq():a.Yd};
mL=function(a){a.o&&(a.I?(KK(a),IK(a),YK(a)):(a.V.kf&&a.V.kf.mw(),a.o.stopVideo()),a.playVideo())};
nL=function(a,b){g.P(a.B.experiments,"html5_log_rebuffer_reason")&&a.ab("bufreason","r."+b+";lact."+Cp())};
oL=function(a,b){if(a.V.uh){var c=g.O(a.B.experiments,"html5_log_rebuffer_events");if(c&&a.o){var d=a.o.Za();d.rt=g.UH(a.C.provider).toFixed(3);d.e=b.substr(0,3);a.ae[a.Nh++%c]=ex(d)}}};
hL=function(a){if(a.V.uh){for(var b=g.p(a.ae),c=b.next();!c.done;c=b.next())a.ab("vpe",c.value);a.ae=[];a.Nh=0}};
yK=function(a,b){a.ab("seekreason",b)};
pL=function(a){if(fl("cobalt")&&fl("nintendo switch")){var b=!window.matchMedia("screen and (max-height: 720px) and (min-resolution: 200dpi)").matches;a.ab("nxdock",""+ +b)}};
QK=function(a,b){return g.P(a.B.experiments,b)};
JK=function(a,b){lF(a.A,b||SK(a))};
SK=function(a){var b=QK(a,"disable_prefetch_when_ad_pending_for_living_room")&&g.Fy(a.B),c=QK(a,"disable_prefetch_when_ad_pending_for_web");return(b||c)&&g.fb(a.aa,"ad")};
jla=function(a){if(oB(a.V,"html5_set_debugging_opt_in")&&(a=Rr.getInstance(),!Tr(0,183))){var b="f"+(Math.floor(183/31)+1),c=Sr(b)||0;c|=268435456;0==c?delete Qr[b]:(c=c.toString(16),Qr[b]=c.toString());a.save()}};
rla=function(a,b,c,d){var e=c.getVideoData(),f=b.getVideoData();if(c.getPlayerState().isError())return"player-error";if(CH(b.F)>d/1E3+1)return"in-the-past";if(f.xa&&!isFinite(d))return"live-infinite";if(a.o&&((b=b.o)&&b.isView()&&(b=b.o),b&&b.Xk().length>a.o&&g.FB(e)))return"played-ranges";if(!e.Aa)return null;if(!e.Aa.o()||!f.Aa.o())return"non-dash";if(e.Aa.videoInfos[0].containerType!=f.Aa.videoInfos[0].containerType)return"container";if(g.FB(f)&&g.FB(e))return"content-protection";a=f.Aa.u[0].audio;
e=e.Aa.u[0].audio;return a.sampleRate==e.sampleRate||g.Ow?(a.o||2)!=(e.o||2)?"channel-count":null:"sample-rate"};
rL=function(a,b,c,d){g.A.call(this);var e=this;this.T=a;this.o=b;this.u=c;this.C=this.B=null;this.G=d-1E3*b.Ib();this.I=-1;this.M=!1;this.F=new zC;this.F.then(void 0,function(){});
this.N=new g.H(function(){return qL(e,"timeout")},1E4);
g.C(this,this.N);this.R=isFinite(d);this.A={status:0,error:null}};
sla=function(a){var b,c,d,e,f,h;return Aa(function(l){if(1==l.o){if(a.ia())return l["return"](Promise.reject(Error(a.A.error||"disposed")));a.N.start();return g.ra(l,a.F,2)}b=a.o.o;if(b.wg())return qL(a,"ended_in_finishTransition"),l["return"](Promise.reject(Error(a.A.error)));if(!a.C||!jx(a.C))return qL(a,"next_mse_closed"),l["return"](Promise.reject(Error(a.A.error)));if(a.u.I!=a.C)return qL(a,"next_mse_mismatch"),l["return"](Promise.reject(Error(a.A.error)));c=sL(a);d=c.JB;e=c.IB;GK(a.o,!1,!0);
f=tL(b,d,e,!a.u.getVideoData().isAd());HK(a.u,f);a.R&&(a.u.seekTo(a.u.getCurrentTime()+.001,{Ym:!0,Ow:3}),f.play());h=b.Za();h.cpn=a.o.getVideoData().clientPlaybackNonce;h.st=""+d;h.et=""+e;a.u.ab("gapless",ex(h));a.o.ab("gaplessTo",a.u.getVideoData().clientPlaybackNonce);g.Bf(function(){!a.u.getVideoData().Ze&&g.hH(a.u.getPlayerState())&&gL(a.u)});
uL(a,6);a.dispose();return l["return"](Promise.resolve())})};
xL=function(a){if(a.u.getVideoData().Aa){ZK(a.u,a.C);uL(a,3);vL(a);var b=wL(a),c=b.ID;b=b.ZO;c.subscribe("updateend",a.Dl,a);b.subscribe("updateend",a.Dl,a);a.Dl(c);a.Dl(b)}};
vL=function(a){a.o.unsubscribe("internalvideodatachange",a.ij,a);a.u.unsubscribe("internalvideodatachange",a.ij,a);a.o.unsubscribe("mediasourceattached",a.ij,a);a.u.unsubscribe("statechange",a.mB,a)};
tL=function(a,b,c,d){return new g.xC(a.isView()?a.o:a,b,c,d)};
uL=function(a,b){b<=a.A.status||(a.A={status:b,error:null},5==b&&a.F.resolve(void 0))};
qL=function(a,b){if(!a.ia()&&!a.isFinished()){var c=4<=a.A.status&&"player-reload-after-handoff"!==b;a.A={status:Infinity,error:b};if(a.o&&a.u){var d=a.u.getVideoData().clientPlaybackNonce;a.o.ab("gaplessError","cpn."+d+";msg."+b);d=a.o;d.V.Ag=!1;c&&kK(d);d.A&&(c=d.A,c.o.ba=!1,c.A&&DF(c))}a.F.reject(void 0);a.dispose()}};
sL=function(a){var b=a.o.o;b=b.isView()?b.u:0;var c=a.o.getVideoData().xa?Infinity:jL(a.o,!0);c=Math.min(a.G/1E3,c)+b;var d=a.R?100:0;a=c-CH(a.u.F)+d;return{aG:b,JB:a,ZF:c,IB:Infinity}};
wL=function(a){return{ID:a.B.o.o,ZO:a.B.u.o}};
yL=function(a){g.A.call(this);var b=this;this.A=a;this.F=this.u=this.o=null;this.I=!1;this.C=null;this.M=uia(this.A.O());this.B=null;this.G=function(){return g.Bf(function(){return tla(b)})}};
ula=function(a,b,c,d){d=void 0===d?0:d;a.o&&zL(a);a.C=new zC;a.o=b;var e=c,f=a.A.zb(),h=f.getVideoData().xa?Infinity:1E3*jL(f,!0);e>h&&(e=h-a.M.u,a.I=!0);f.getCurrentTime()>=e/1E3?a.G():(a.u=f,a.A.addEventListener(g.fz("vqueued"),a.G),e=isFinite(e)||e/1E3>a.u.getDuration()?e:0x8000000000000,a.F=new g.cz(e,0x8000000000000,{namespace:"vqueued"}),a.u.addCueRange(a.F));f=d/=1E3;e=b.getVideoData().ka;if(d&&e&&a.u){h=d;var l=0;b.getVideoData().xa&&(f=Math.min(c/1E3,jL(a.u,!0)),l=Math.max(0,f-a.u.getCurrentTime()),
h=Math.min(d,jL(b)+l));f=sga(e,h)||d;f!=d&&a.o.ab("qvaln","st."+d+";at."+f+";rm."+(l+";ct."+h))}b=f;a.o.getVideoData().nk=!0;a.o.getVideoData().Ag=!0;oK(a.o,!0);d="";a.u&&(d=g.UH(a.u.C.provider),e=a.u.getVideoData().clientPlaybackNonce,d="crt."+(1E3*d).toFixed()+";cpn."+e);a.o.ab("queued",d);0!=b&&a.o.seekTo(b+.01,{Ym:!0,Ow:3});a.B=new rL(a.M,a.A.zb(),a.o,c);c=a.B;Infinity!=c.A.status&&(uL(c,1),c.o.subscribe("internalvideodatachange",c.ij,c),c.u.subscribe("internalvideodatachange",c.ij,c),c.o.subscribe("mediasourceattached",
c.ij,c),c.u.subscribe("statechange",c.mB,c),c.o.subscribe("newelementrequired",c.mC,c),c.ij());return a.C};
tla=function(a){var b,c,d;return Aa(function(e){switch(e.o){case 1:if(a.ia()||!a.C||!a.o)return e["return"]();a.I&&fK(a.A.zb(),!0,!1);b=null;if(!a.B){e.Gc(2);break}sa(e,3);return g.ra(e,sla(a.B),5);case 5:ta(e,2);break;case 3:b=c=ua(e);case 2:AL(a.A.app,a.o);var f=a.o.getPlayerType();g.BL(a.A.app,f);a.A.playVideo();b&&(f=a.o,f.ab("newelem",b.message),kK(f));d=a.C;zL(a);return e["return"](d.resolve(void 0))}})};
zL=function(a){a.u&&(a.A.removeEventListener(g.fz("vqueued"),a.G),a.u.removeCueRange(a.F),a.u=null,a.F=null);if(a.B){if(!a.B.isFinished()){var b=a.B;Infinity!=b.A.status&&qL(b,"Canceled")}a.B=null}a.C=null;a.o=null;a.I=!1};
DL=function(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return CL(a)};
CL=function(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c};
EL=function(a,b,c,d){if(g.Pa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b};
HL=function(a,b){g.A.call(this);var c=this;this.data=[];this.A=a||NaN;this.u=b||null;this.o=new g.H(function(){FL(c);GL(c)});
g.C(this,this.o)};
FL=function(a){var b=(0,g.M)();a.data.forEach(function(c){c.expire<b&&IL(a,c,!0)});
a.data=(0,g.Ae)(a.data,function(c){return!(c.expire<b)})};
IL=function(a,b,c){c&&a.u&&a.u(b.value)};
GL=function(a){a.o.stop();var b=Infinity;for(var c=g.p(a.data),d=c.next();!d.done;d=c.next())d=d.value,d.expire<b&&(b=d.expire);b&&isFinite(b)&&(b=Math.max(b-(0,g.D)(),0),a.o.start(b))};
g.JL=function(a,b){for(var c={},d=g.p(Object.keys(b)),e=d.next();!e.done;c={Ks:c.Ks},e=d.next())e=e.value,c.Ks=b[e],a=a.replace(new RegExp("\\$"+e,"gi"),function(f){return function(){return f.Ks}}(c));
return a};
g.KL=function(a,b){var c=Math.abs(Math.floor(a)),d=Math.floor(c/86400),e=Math.floor(c%86400/3600),f=Math.floor(c%3600/60);c=Math.floor(c%60);if(b){var h="";0<d&&(h+=" "+d+" Days");if(0<d||0<e)h+=" "+e+" Hours";d=(h+(" "+f+" Minutes ")+(c+" Seconds")).trim()}else{h="";0<d&&(h+=d+":",10>e&&(h+="0"));if(0<d||0<e)h+=e+":",10>f&&(h+="0");h+=f+":";10>c&&(h+="0");d=h+c}return 0<=a?d:"-"+d};
g.LL=function(a){return(!("button"in a)||"number"!==typeof a.button||0===a.button)&&!("shiftKey"in a&&a.shiftKey)&&!("altKey"in a&&a.altKey)&&!("metaKey"in a&&a.metaKey)&&!("ctrlKey"in a&&a.ctrlKey)};
g.ML=function(a,b){return dC(b)?(b.fetch=0,new g.cC(a,b)):new g.gB(a,b)};
NL=function(a){g.A.call(this);var b=this;this.u=null;for(var c=[],d=0;100>=d;d++)c.push(d/100);c={threshold:c};(this.o=window.IntersectionObserver?new IntersectionObserver(function(e){b.u=e[e.length-1].intersectionRatio},c):null)&&this.o.observe(a)};
OL=function(a,b){this.o=a;this.A=b;this.u=null;this.B=[];this.C=!1};
g.PL=function(a){a.u||(a.u=a.o.createMediaElementSource(a.A.wa()));return a.u};
g.QL=function(a){for(var b;0<a.B.length;)(b=a.B.pop())&&b.disconnect();a.u&&a.u.disconnect()};
vla=function(a,b){Do(a,"version",b)};
SL=function(){var a="ytp-id-"+RL.toString();RL++;return a};
g.TL=function(a){g.A.call(this);this.sa={};this.Qa={};this.element=this.createElement(a)};
UL=function(a,b,c,d){if("{{"===d.substr(0,2))a.Qa[d]=[b,c];else return d};
wla=function(a,b){var c=[];if(!b)return c;for(var d=g.p(b),e=d.next();!e.done;e=d.next())if(e=e.value,null!=e){var f=e.nodeType;1===f||3===f?c.push(e):e&&"string"===typeof e.D?c.push(a.createElement(e)):e.element?c.push(e.element):"string"===typeof e&&-1!==e.indexOf("\n")?e.split("\n").forEach(function(h,l){0<l&&c.push(g.ue("BR"));c.push(g.ve(h))}):c.push(g.ve(e))}return c};
VL=function(a,b,c,d){if("child"===c){g.xe(b);var e;void 0===d?e=void 0:!Array.isArray(d)||d&&"string"===typeof d.D?e=[d]:e=d;c=wla(a,e);c=g.p(c);for(a=c.next();!a.done;a=c.next())b.appendChild(a.value)}else"style"===c?g.zh(b,"cssText",d?d:""):null===d||void 0===d?b.removeAttribute(c):(a=d.toString(),"href"===c&&(a=g.zc(g.Cc(a))),b.setAttribute(c,a))};
g.U=function(a){g.TL.call(this,a);this.ea=!0;this.M=!1;this.listeners=[]};
g.WL=function(a,b){b?a.show():a.hide()};
ZL=function(a){g.U.call(this,{D:"div",Y:["html5-video-player"],P:{tabindex:"-1",id:a.Pb?a.Pb.rootElementId:a.za.attrs.id},K:[{D:"div",J:g.XL.VIDEO_CONTAINER,P:{"data-layer":"0"}}]});var b=this;this.app=a;this.A=this.da(g.XL.VIDEO_CONTAINER);this.u=new g.wh(0,0,0,0);this.o=null;this.G=new g.wh(0,0,0,0);this.R=this.Z=this.U=NaN;this.C=this.fa=!1;this.N=NaN;this.T=!1;this.F=null;this.dispatchEvent=function(){};
this.aa=function(){b.element.focus()};
this.I=null;var c=this.element.addEventListener,d=this.element.removeEventListener;this.addEventListener=function(f,h,l){c.apply(b.element,[f,h,l])};
this.removeEventListener=function(f,h,l){d.apply(b.element,[f,h,l])};
var e=a.O();e.transparentBackground&&this.xn("ytp-transparent");"0"===e.controlsType&&this.xn("ytp-hide-controls");e.ha("web_wn_macro_markers")&&g.I(this.element,"ytp-exp-marker-tooltip");e.ha("html5_player_bottom_linear_gradient")&&g.I(this.element,"ytp-linear-gradient-bottom-experiment");g.Py(e)&&(e.ha("web_player_bigger_buttons")?g.I(this.element,"ytp-exp-bigger-button"):e.ha("web_player_bigger_buttons_like_mobile")&&g.I(this.element,"ytp-exp-bigger-button-like-mobile"));vla(this.element,YL(a));
Ny(e)&&"blazer"!==e.playerStyle&&window.matchMedia&&(this.I="desktop-polymer"===e.playerStyle?[{query:window.matchMedia("(max-width: 656px)"),size:new g.Zd(426,240)},{query:window.matchMedia("(max-width: 856px)"),size:new g.Zd(640,360)},{query:window.matchMedia("(max-width: 999px)"),size:new g.Zd(854,480)},{query:window.matchMedia("(min-width: 1720px) and (min-height: 980px)"),size:new g.Zd(1280,720)},{query:window.matchMedia("(min-width: 1294px) and (min-height: 630px)"),size:new g.Zd(854,480)},
{query:window.matchMedia("(min-width: 1000px)"),size:new g.Zd(640,360)}]:[{query:window.matchMedia("(max-width: 656px)"),size:new g.Zd(426,240)},{query:window.matchMedia("(min-width: 1720px) and (min-height: 980px)"),size:new g.Zd(1280,720)},{query:window.matchMedia("(min-width: 1294px) and (min-height: 630px)"),size:new g.Zd(854,480)},{query:window.matchMedia("(min-width: 657px)"),size:new g.Zd(640,360)}]);this.ba=e.useFastSizingOnWatchDefault;this.B=new g.Zd(NaN,NaN);xla(this);this.L(a.u,"onMutedAutoplayChange",
this.Kn)};
xla=function(a){function b(){a.o&&$L(a);aM(a)!==a.T&&a.resize()}
function c(h,l){a.updateVideoData(l)}
function d(h){h.getVideoData()&&a.updateVideoData(h.getVideoData())}
function e(){a.G=new g.wh(0,0,0,0);a.u=new g.wh(0,0,0,0)}
var f=a.app.u;f.addEventListener("initializingmode",e);f.addEventListener("videoplayerreset",d);f.addEventListener("videodatachange",c);f.addEventListener("presentingplayerstatechange",b);g.Le(a,function(){f.removeEventListener("initializingmode",e);f.removeEventListener("videoplayerreset",d);f.removeEventListener("videodatachange",c);f.removeEventListener("presentingplayerstatechange",b)})};
bM=function(a){a.o&&(a.o.removeEventListener("focus",a.aa),g.ze(a.o),a.o=null)};
dM=function(a){var b=g.P(a.app.O().experiments,"html5_aspect_from_adaptive_format"),c=g.V(a.app);if(c=c?c.getVideoData():null){if(c.xh()||c.yh()||c.rh())return 16/9;if(b&&c.Up()&&c.Aa.o())return b=c.Aa.videoInfos[0].video,cM(b.width,b.height)}return(a=a.o)?cM(a.videoWidth,a.videoHeight):b?16/9:NaN};
eM=function(a,b,c,d){var e=c,f=cM(b.width,b.height);a.fa?e=c<f?Infinity:0:isNaN(a.R)?isNaN(a.Z)||(e=a.Z):e=a.R;isFinite(e)||(e=Math.max(c,f));var h;e>f?h={width:b.width,height:b.width/e,aspectRatio:e}:e<f?h={width:b.height*e,height:b.height,aspectRatio:e}:h={width:b.width,height:b.height,aspectRatio:f};d||isNaN(c)||(c>e?h.width=h.height*c:c<e&&(h.height=h.width/c),h.aspectRatio=c);return h};
cM=function(a,b){return 1>Math.abs(fM*b-a)||1>Math.abs(fM/a-b)?fM:a/b};
aM=function(a){if(1===a.app.getAppState())return!1;if(6===a.app.getAppState())return!0;var b=g.V(a.app);if(!b||xK(b))return!1;var c=g.gM(a.app.u);a=!g.T(c,2)||!g.P(a.app.O().experiments,"html5_leanback_gapless_elem_display_killswitch")&&b&&b.getVideoData().Ag;b=g.T(c,1024);return c&&a&&!b&&!c.isCued()};
$L=function(a){var b="3"===a.app.O().controlsType&&!a.C&&aM(a)&&!a.app.Va||!1;a.o.controls=b;a.o.tabIndex=b?0:-1;b?a.o.removeEventListener("focus",a.aa):g.P(a.app.O().experiments,"disable_focus_redirect")||a.o.addEventListener("focus",a.aa)};
hM=function(a){var b=a.getPlayerSize(),c=1,d=!1,e=eM(a,b,a.getVideoAspectRatio()),f=pl();if(aM(a)){var h=dM(a);var l=isNaN(h)||g.yx||ux&&g.Vy;ql&&!g.Rd(601)?h=e.aspectRatio:l=l||"3"===a.app.O().controlsType;l?l=new g.wh(0,0,b.width,b.height):(c=e.aspectRatio/h,l=new g.wh((b.width-e.width/c)/2,(b.height-e.height)/2,e.width/c,e.height),1===c&&g.Vy&&(h=l.width-b.height*h,0<h&&(l.width+=h,l.height+=h)));f&&(a.o.style.display="");a.T=!0}else l=-b.height,ql?l*=window.devicePixelRatio:g.Uy&&(l-=window.screen.height),
l=new g.wh(0,l,b.width,b.height),f&&(a.o.style.display="none"),a.T=!1;xh(a.G,l)||(a.G=l,g.Gy(a.app.O())?(a.o.style.setProperty("width",l.width+"px","important"),a.o.style.setProperty("height",l.height+"px","important")):g.Rh(a.o,new g.Zd(l.width,l.height)),g.Hh(a.o,new g.Xd(l.left,l.top)),d=!0);b=new g.wh((b.width-e.width)/2,(b.height-e.height)/2,e.width,e.height);xh(a.u,b)||(a.u=b,d=!0);g.zh(a.o,"transform",1===c?"":"scaleX("+c+")");return d};
g.iM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-cast-desktop-on"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",Ua:!0,P:{d:"M7,24 L7,27 L10,27 C10,25.34 8.66,24 7,24 L7,24 Z M7,20 L7,22 C9.76,22 12,24.24 12,27 L14,27 C14,23.13 10.87,20 7,20 L7,20 Z M25,13 L11,13 L11,14.63 C14.96,15.91 18.09,19.04 19.37,23 L25,23 L25,13 L25,13 Z M7,16 L7,18 C11.97,18 16,22.03 16,27 L18,27 C18,20.92 13.07,16 7,16 L7,16 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,14 L9,14 L9,11 L27,11 L27,25 L20,25 L20,27 L27,27 C28.1,27 29,26.1 29,25 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z",
fill:"#fff"}}]}};
jM=function(){return{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",P:{d:"m 14.8,21.9 -4.2,-4.2 -1.4,1.4 5.6,5.6 12,-12 -1.4,-1.4 -10.6,10.6 z",fill:"#fff"}}]}};
g.kM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-chevron-back"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},K:[{D:"path",P:{d:"M 19.41,20.09 14.83,15.5 19.41,10.91 18,9.5 l -6,6 6,6 z",fill:"#fff"}}]}};
g.lM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-chevron-forward"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},K:[{D:"path",P:{d:"m 12.59,20.34 4.58,-4.59 -4.58,-4.59 1.41,-1.41 6,6 -6,6 z",fill:"#fff"}}]}};
mM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-clip-clear"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},K:[{D:"path",P:{d:"M14,14 L14,0 L0,0 L0,14 L14,14 Z"}},{D:"path",P:{d:"M7.15,8.35 L9.25,10.45 L10.65,9.05 L8.55,6.95 L10.7,4.8 L9.3,3.4 L7.15,5.55 L5,3.4 L3.6,4.8 L5.75,6.95 L3.65,9.05 L5.05,10.45 L7.15,8.35 Z",fill:"#fff"}}]}};
nM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-clip-end"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},K:[{D:"path",Ua:!0,P:{d:"M2,14 L5,11 L5,3 L2,0 L9,0 L9,14 L2,14 L2,14 Z",fill:"#eaeaea"}}]}};
oM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-clip-start"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},K:[{D:"path",Ua:!0,P:{d:"M12,14 L9,11 L9,3 L12,0 L5,0 L5,14 L12,14 Z",fill:"#eaeaea"}}]}};
g.pM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-close"]}:{D:"svg",P:{height:"100%",viewBox:"0 0 24 24",width:"100%"},K:[{D:"path",P:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"#fff"}}]}};
qM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-code"]}:{D:"svg",P:{height:"100%",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",P:{d:"M14.1 24.9L7.2 18.0l6.9-6.9L12.0 9.0l-9.0 9.0 9.0 9.0 2.1-2.1zm7.8 .0l6.9-6.9-6.9-6.9L24.0 9.0l9.0 9.0-9.0 9.0-2.1-2.1z",fill:"#fff"}}]}};
rM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-dislike"]}:{D:"svg",P:{viewBox:"0 0 24 24"},K:[{D:"path",P:{d:"M0 0h24v24H0z",fill:"none"}},{D:"path",P:{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",fill:"#fff"}}]}};
g.sM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-error-exclamation"]}:{D:"svg",P:{fill:"#fff",viewBox:"0 0 48 48"},K:[{D:"path",P:{d:"M0 0h48v48H0V0z",fill:"none"}},{D:"path",P:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z","fill-opacity":"0.7"}}]}};
tM=function(){return{D:"svg",P:{fill:"#fff",height:"100%",version:"1.1",viewBox:"0 0 48 48",width:"100%"},K:[{D:"path",P:{d:"M0 0h48v48H0z",fill:"none"}},{D:"path",P:{d:"M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"}}]}};
g.uM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-like"]}:{D:"svg",P:{viewBox:"0 0 24 24"},K:[{D:"path",P:{d:"M0 0h24v24H0z",fill:"none"}},{D:"path",P:{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z",fill:"#fff"}}]}};
vM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-link"]}:{D:"svg",P:{height:"100%",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",P:{d:"M5.85 18.0c0.0-2.56 2.08-4.65 4.65-4.65h6.0V10.5H10.5c-4.14 .0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5h6.0v-2.85H10.5c-2.56 .0-4.65-2.08-4.65-4.65zM12.0 19.5h12.0v-3.0H12.0v3.0zm13.5-9.0h-6.0v2.85h6.0c2.56 .0 4.65 2.08 4.65 4.65s-2.08 4.65-4.65 4.65h-6.0V25.5h6.0c4.14 .0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5z",fill:"#fff"}}]}};
wM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-loop-range"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},K:[{D:"path",Ua:!0,P:{d:"M5,0 L9,0 L9,14 L5,14 L5,0 Z",fill:"#eaeaea"}}]}};
xM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-next"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",Ua:!0,J:"ytp-svg-fill",P:{d:"M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z"}}]}};
g.yM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-notifications-active"]}:{D:"svg",P:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},K:[{D:"path",P:{d:"M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"}}]}};
zM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-pause"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",Ua:!0,J:"ytp-svg-fill",P:{d:"M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"}}]}};
AM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-pip"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",Ua:!0,P:{d:"M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z",fill:"#fff"}}]}};
BM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-play"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",Ua:!0,J:"ytp-svg-fill",P:{d:"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"}}]}};
CM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-prev"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",Ua:!0,J:"ytp-svg-fill",P:{d:"m 12,12 h 2 v 12 h -2 z m 3.5,6 8.5,6 V 12 z"}}]}};
g.DM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-replay"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",Ua:!0,J:"ytp-svg-fill",P:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z"}}]}};
g.EM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-settings"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",Ua:!0,P:{d:"m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 l -1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c -0.02,-0.19 -0.19,-0.33 -0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l -1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l -1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 -0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 -0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 .36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 .93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 -0.09,-0.51 l -1.68,-1.32 0,0 z m -5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 -1.25,2.8 -2.8,2.8 l 0,0 z",
fill:"#fff"}}]}};
FM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-stop"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",Ua:!0,J:"ytp-svg-fill",P:{d:"M 12,25 19,25 19,11 12,11 z M 19,25 26,25 26,11 19,11 z"}}]}};
GM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-subtitles"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",Ua:!0,P:{d:"M11,11 C9.9,11 9,11.9 9,13 L9,23 C9,24.1 9.9,25 11,25 L25,25 C26.1,25 27,24.1 27,23 L27,13 C27,11.9 26.1,11 25,11 L11,11 Z M11,17 L14,17 L14,19 L11,19 L11,17 L11,17 Z M20,23 L11,23 L11,21 L20,21 L20,23 L20,23 Z M25,23 L22,23 L22,21 L25,21 L25,23 L25,23 Z M25,19 L16,19 L16,17 L25,17 L25,19 L25,19 Z",fill:"#fff"}}]}};
HM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-volume-high"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",Ua:!0,P:{d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z M19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z",fill:"#fff"}}]}};
IM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-volume-low"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",Ua:!0,P:{d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z",fill:"#fff"}}]}};
JM=function(){return g.W?{D:"div",Y:["ytp-icon","ytp-icon-volume-muted"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",Ua:!0,J:"ytp-svg-fill",P:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]}};
KM=function(){};
MM=function(a,b){g.A.call(this);var c=this;this.app=a;this.playerType=b;this.o=!0;this.element=null;this.C={};this.G={};this.u={};this.I=[];this.F={};this.B={};this.A=null;this.N=new Set;LM(this,"cueVideoById",this.cueVideoById);LM(this,"loadVideoById",this.loadVideoById);LM(this,"cueVideoByUrl",this.cueVideoByUrl);LM(this,"loadVideoByUrl",this.loadVideoByUrl);LM(this,"playVideo",this.playVideo);LM(this,"pauseVideo",this.pauseVideo);LM(this,"stopVideo",this.stopVideo);LM(this,"clearVideo",this.clearVideo);
LM(this,"getVideoBytesLoaded",this.getVideoBytesLoaded);LM(this,"getVideoBytesTotal",this.getVideoBytesTotal);LM(this,"getVideoLoadedFraction",this.getVideoLoadedFraction);LM(this,"getVideoStartBytes",this.getVideoStartBytes);LM(this,"cuePlaylist",this.cuePlaylist);LM(this,"loadPlaylist",this.loadPlaylist);LM(this,"nextVideo",this.nextVideo);LM(this,"previousVideo",this.previousVideo);LM(this,"playVideoAt",this.playVideoAt);LM(this,"setShuffle",this.setShuffle);LM(this,"setLoop",this.setLoop);LM(this,
"getPlaylist",this.FG);LM(this,"getPlaylistIndex",this.getPlaylistIndex);LM(this,"getPlaylistId",this.getPlaylistId);LM(this,"loadModule",this.loadModule);LM(this,"unloadModule",this.unloadModule);LM(this,"setOption",this.setOption);LM(this,"getOption",this.getOption);LM(this,"getOptions",this.getOptions);LM(this,"mute",this.mute);LM(this,"unMute",this.unMute);LM(this,"isMuted",this.isMuted);LM(this,"setVolume",this.setVolume);LM(this,"getVolume",this.getVolume);LM(this,"seekTo",this.seekTo);LM(this,
"getPlayerState",this.getPlayerState);LM(this,"getPlaybackRate",this.getPlaybackRate);LM(this,"setPlaybackRate",this.setPlaybackRate);LM(this,"getAvailablePlaybackRates",this.getAvailablePlaybackRates);LM(this,"getPlaybackQuality",function(){return c.getPlaybackQuality(1)});
LM(this,"setPlaybackQuality",this.setPlaybackQuality);LM(this,"getAvailableQualityLevels",this.getAvailableQualityLevels);LM(this,"getCurrentTime",this.getCurrentTime);LM(this,"getDuration",this.getDuration);LM(this,"addEventListener",this.GF);LM(this,"removeEventListener",this.CO);LM(this,"getDebugText",this.getDebugText);LM(this,"getVideoData",function(){return c.Op()});
LM(this,"addCueRange",this.addCueRange);LM(this,"removeCueRange",this.removeCueRange);LM(this,"setSize",this.setSize);LM(this,"getApiInterface",this.getApiInterface);LM(this,"destroy",this.destroy);LM(this,"showVideoInfo",this.showVideoInfo);LM(this,"hideVideoInfo",this.hideVideoInfo);LM(this,"isVideoInfoVisible",this.isVideoInfoVisible);LM(this,"getSphericalProperties",this.getSphericalProperties);LM(this,"setSphericalProperties",this.setSphericalProperties);this.app.O().C||(LM(this,"getVideoEmbedCode",
this.getVideoEmbedCode),LM(this,"getVideoUrl",this.getVideoUrl));LM(this,"getMediaReferenceTime",this.getMediaReferenceTime);X(this,"getInternalApiInterface",this.getInternalApiInterface);X(this,"cueVideoByPlayerVars",this.cueVideoByPlayerVars);X(this,"loadVideoByPlayerVars",this.loadVideoByPlayerVars);X(this,"preloadVideoByPlayerVars",this.preloadVideoByPlayerVars);X(this,"getAdState",this.getAdState);X(this,"sendAbandonmentPing",this.sendAbandonmentPing);X(this,"setLoopRange",this.setLoopRange);
X(this,"getLoopRange",this.getLoopRange);X(this,"setAutonavState",this.setAutonavState);X(this,"seekToLiveHead",this.seekToLiveHead);X(this,"seekToStreamTime",this.seekToStreamTime);X(this,"getStreamTimeOffset",this.getStreamTimeOffset);X(this,"getVideoData",this.Op);X(this,"setIsExternalPlaylist",this.setIsExternalPlaylist);X(this,"deleteLocalMediaById",this.deleteLocalMediaById);X(this,"deleteAllLocalMedia",this.deleteAllLocalMedia);X(this,"cancelPendingLocalMediaById",this.cancelPendingLocalMediaById);
X(this,"fetchLocalMedia",this.fetchLocalMedia);X(this,"fetchLocalMediaById",this.fetchLocalMediaById);X(this,"getLocalMediaInfoById",this.getLocalMediaInfoById);X(this,"getAllLocalMediaInfo",this.getAllLocalMediaInfo);X(this,"getAppState",this.getAppState);X(this,"addInfoCardXml",this.addInfoCardXml);X(this,"updateLastActiveTime",this.updateLastActiveTime);X(this,"setBlackout",this.setBlackout);X(this,"setAccountLinkState",this.setAccountLinkState);X(this,"setUserEngagement",this.setUserEngagement);
X(this,"updateSubtitlesUserSettings",this.updateSubtitlesUserSettings);X(this,"setFauxFullscreen",this.setFauxFullscreen);X(this,"setUseFastSizingOnWatch",this.setUseFastSizingOnWatch);X(this,"getPresentingPlayerType",this.getPresentingPlayerType);X(this,"canPlayType",this.canPlayType);X(this,"updatePlaylist",this.updatePlaylist);X(this,"updateVideoData",this.updateVideoData);X(this,"updateEnvironmentData",this.updateEnvironmentData);X(this,"sendVideoStatsEngageEvent",this.sendVideoStatsEngageEvent);
X(this,"setCardsVisible",this.setCardsVisible);X(this,"setSafetyMode",this.setSafetyMode);X(this,"isInline",this.isInline);X(this,"setInline",this.setInline);X(this,"isAtLiveHead",function(d){c.isAtLiveHead(void 0,d)});
X(this,"getVideoAspectRatio",this.getVideoAspectRatio);X(this,"getPreferredQuality",this.getPreferredQuality);X(this,"setPlaybackQualityRange",this.setPlaybackQualityRange);X(this,"onAdUxClicked",this.onAdUxClicked);X(this,"setAutonav",this.setAutonav);X(this,"isNotServable",this.isNotServable);X(this,"channelSubscribed",this.channelSubscribed);X(this,"channelUnsubscribed",this.channelUnsubscribed);X(this,"isPictureInPictureAllowed",this.isPictureInPictureAllowed);X(this,"togglePictureInPicture",
this.togglePictureInPicture);X(this,"supportsGaplessAudio",this.supportsGaplessAudio);X(this,"enqueueVideoByPlayerVars",function(d){return void c.enqueueVideoByPlayerVars(d)});
X(this,"clearQueue",this.clearQueue);X(this,"isFastLoad",function(){return!1});
X(this,"getPlayerResponse",this.getPlayerResponse);X(this,"getStoryboardFrame",this.getStoryboardFrame);X(this,"getStoryboardFrameIndex",this.getStoryboardFrameIndex);X(this,"getStoryboardLevel",this.getStoryboardLevel);X(this,"getNumberOfStoryboardLevels",this.getNumberOfStoryboardLevels);X(this,"getAudioTrack",this.mG);X(this,"setAudioTrack",this.setAudioTrack);X(this,"getAvailableAudioTracks",this.nG);X(this,"getMaxPlaybackQuality",this.getMaxPlaybackQuality);X(this,"getUserPlaybackQualityPreference",
this.getUserPlaybackQualityPreference);X(this,"getSubtitlesUserSettings",this.getSubtitlesUserSettings);X(this,"resetSubtitlesUserSettings",this.resetSubtitlesUserSettings);X(this,"setMinimized",this.setMinimized);X(this,"handleExternalCall",this.handleExternalCall);X(this,"isExternalMethodAvailable",this.isExternalMethodAvailable);X(this,"getStatsForNerds",this.getStatsForNerds);X(this,"setScreenLayer",this.setScreenLayer);X(this,"getCurrentPlaylistSequence",this.getCurrentPlaylistSequence);X(this,
"getPlaylistSequenceForTime",this.getPlaylistSequenceForTime);X(this,"forceFrescaUpdate",this.forceFrescaUpdate);X(this,"shouldSendVisibilityState",this.shouldSendVisibilityState);X(this,"updateFullerscreenEduButtonVisibility",this.updateFullerscreenEduButtonVisibility);X(this,"updateFullerscreenEduButtonSubtleModeState",this.updateFullerscreenEduButtonSubtleModeState);X(this,"setGlobalCrop",this.setGlobalCrop);X(this,"getVisibilityState",this.getVisibilityState);X(this,"isMutedByMutedAutoplay",this.isMutedByMutedAutoplay);
X(this,"setInternalSize",this.setInternalSize)};
LM=function(a,b,c){a.C[b]=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];return c.apply(a,e)};
a.u.hasOwnProperty(b)||X(a,b,c);a.I.push(b)};
NM=function(a,b,c){a.G[b]=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];return c.apply(a,e)};
a.u.hasOwnProperty(b)||X(a,b,c);a.I.push(b)};
X=function(a,b,c){a.u[b]=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];return c.apply(a,e)}};
OM=function(a){a.A||(a.A={},g.Ta(a.A,a.C),g.Ta(a.A,a.G),a.A.addEventListener=function(b,c){yla(a,b,c)},a.A.removeEventListener=function(b,c){var d="string"===typeof c?b+c:b+String(g.Ra(c)),e=a.B[d];
e&&(a.app.ra.unsubscribe(b,e),e=a.B,d in e&&delete e[d])});
return a.A};
yla=function(a,b,c){var d="string"===typeof c?b+c:b+String(g.Ra(c));if(!a.B[d]){var e;"string"===typeof c?e=function(h){for(var l=[],m=0;m<arguments.length;++m)l[m-0]=arguments[m];g.Ja(c).apply(window,l)}:e=c;
var f=function(h){e({target:a.A,data:h})};
a.B[d]=f;a.app.ra.subscribe(b,f)}};
QM=function(a,b,c){b=g.Td(Math.floor(b),0,100);isFinite(b)&&PM(a.app,{volume:b,muted:a.isMuted()},c)};
RM=function(a,b){PM(a.app,{muted:!0,volume:a.getVolume()},b)};
SM=function(a,b){PM(a.app,{muted:!1,volume:Math.max(5,a.getVolume())},b)};
g.UM=function(a){var b=TM(a.app.B);if(b)return b.chrome;a=a.app.B;a=g.zy(a.H.O())?a.Tb.get("music"):void 0;return a?a.chrome:null};
WM=function(a,b){MM.call(this,a,b);var c=this;this.o=!1;NM(this,"cueVideoByPlayerVars",function(d,e){c.cueVideoByPlayerVars(VM(c,d),e)});
NM(this,"loadVideoByPlayerVars",function(d,e,f,h){c.loadVideoByPlayerVars(VM(c,d),e,f,h)});
NM(this,"preloadVideoByPlayerVars",function(d,e,f,h){return void c.preloadVideoByPlayerVars(VM(c,d),e,f,h)});
NM(this,"seekBy",this.seekBy);NM(this,"mutedAutoplay",this.mutedAutoplay);NM(this,"showControls",this.showControls);NM(this,"hideControls",this.hideControls);NM(this,"cancelPlayback",this.cancelPlayback);NM(this,"getProgressState",this.getProgressState);NM(this,"getStoryboardFormat",this.getStoryboardFormat);NM(this,"getVideoContentRect",this.getVideoContentRect);NM(this,"toggleFullscreen",this.toggleFullscreen);NM(this,"isFullscreen",this.isFullscreen);NM(this,"getVideoStats",this.getVideoStats);
NM(this,"getPlayerSize",this.getPlayerSize);NM(this,"toggleSubtitles",this.toggleSubtitles);NM(this,"setCenterCrop",this.setCenterCrop);NM(this,"handleGlobalKeyDown",this.handleGlobalKeyDown);NM(this,"handleGlobalKeyUp",this.handleGlobalKeyUp);NM(this,"setSizeStyle",this.setSizeStyle);NM(this,"wakeUpControls",this.wakeUpControls)};
VM=function(a,b){var c={};if(a.app.O().C)for(var d=g.p(zla),e=d.next();!e.done;e=d.next())e=e.value,b.hasOwnProperty(e)&&(c[e]=b[e]);else for(d=g.p(Ala),e=d.next();!e.done;e=d.next())e=e.value,b.hasOwnProperty(e)&&(c[e]=b[e]);return c};
XM=function(a){WM.call(this,a);this.M=null};
g.YM=function(a){return a.app.B};
g.ZM=function(a){a=g.YM(a).Tb.get("endscreen");return!!a&&a.KA()};
$M=function(a){a=g.YM(a);var b=a.Tb.get("endscreen");return b&&b.LA()?!0:a.ao()||g.zy(a.H.O())};
g.aN=function(a,b){3===a.getPresentingPlayerType()?a.S("mdxautoplaycancel"):a.S("autonavcancel",b)};
g.gM=function(a,b){return bN(a.app,b)};
g.cN=function(a){return a.app.M};
g.eN=function(a){var b=g.dN(g.YM(a));return a.app.fa&&!a.isFullscreen()||3===a.getPresentingPlayerType()&&b&&b.hasNext()&&b.tg()||!!a.getPlaylist()};
g.fN=function(a,b,c){a.app.A.Yj(new dx(b,!1,c))};
g.hN=function(a){return(a=g.gN(g.YM(a)))?a.XH():{}};
g.jN=function(a){a=g.iN(g.YM(a));return!!a&&a.sn()};
g.kN=function(a){a=g.iN(g.YM(a));return!!a&&a.JA()};
mN=function(a){a=lN(g.YM(a));return!!a&&a.UH()};
nN=function(a){a=g.YM(a).Tb.get("heartbeat");return!!a&&a.VH()};
g.pN=function(a,b,c){oN(a.app,b,c)};
g.qN=function(a,b,c){(a=g.V(a.app,c))&&EK(a,b)};
g.rN=function(a){a=(a=a.getVideoData())&&a.Fa;return!!a&&!(!a.audio||!a.video)&&"application/x-mpegURL"!==a.mimeType};
g.sN=function(a){a=a.getVideoData();return!!a&&!!(a.adaptiveFormats||a.hlsFormats||a.Ge)};
g.tN=function(a,b,c){a=g.cN(a).element;var d=vb(a.children,function(e){e=Number(e.getAttribute("data-layer"));return c-e||1});
0>d&&(d=-(d+1));g.ye(a,b,d);b.setAttribute("data-layer",String(c))};
g.uN=function(a){var b=a.O();if(!b.Cb)return!1;var c=a.getVideoData();if(!c||3===a.getPresentingPlayerType())return!1;var d=!c.isLiveDefaultBroadcast||g.P(b.experiments,"allow_poltergust_autoplay");d=c.xa&&(!g.P(b.experiments,"allow_live_autoplay")||!d);var e=c.xa&&g.P(b.experiments,"allow_live_autoplay_on_mweb"),f=!!a.getPlaylist();g.P(b.experiments,"player_allow_autonav_after_playlist")&&(f=a.getPlaylist(),f=!!f&&f.hasNext());a=c.Rg&&c.Rg.playerOverlays||null;a=!!(a&&a.playerOverlayRenderer&&a.playerOverlayRenderer.autoplay);
a=c.fc&&a;return!c.ypcPreview&&(!d||e)&&!g.fb(c.kd,"ypc")&&!f&&(!g.py(b)||a)};
g.vN=function(a,b,c,d){a.O().ea&&Bla(a.app.ua,b,c,d)};
g.wN=function(a,b,c){a.O().ea&&Cla(a.app.ua,b,c)};
g.xN=function(a,b,c){a.O().ea&&(a.app.ua.elements.has(b),c&&(b.visualElement=g.qs(c)))};
g.yN=function(a,b){a.O().ea&&a.app.ua.click(b)};
g.zN=function(a,b,c){if(a.O().ea&&(a=a.app.ua,a.elements.has(b),c?a.o.add(b):a.o["delete"](b),c&&!a.u.has(b))){c=g.xs();var d=b.visualElement;c&&d&&g.Ns(c,d);a.u.add(b)}};
g.AN=function(a,b){return a.O().ea?a.app.ua.elements.has(b):!1};
g.DN=function(a,b){if(a.app.getPresentingPlayerType()===b){var c=a.app,d=g.V(c,b);d&&(d!=c.A?BN(c,c.A):CN(c))}};
GN=function(a,b,c){c=void 0===c?Infinity:c;a=a.app;b=void 0===b?-1:b;b=void 0===b?-1:b;c=void 0===c?Infinity:c;a.U?EN(a.U,b,c):FN(a.Ba,b,c)};
Dla=function(a){if(!a.ha("html5_inline_video_quality_survey"))return!1;var b=g.V(a.app);if(!b)return!1;var c=b.getVideoData();if(!c.Fa||!c.Fa.video||1080>c.Fa.video.Qb||c.dA)return!1;var d=/^qsa/.test(c.clientPlaybackNonce),e="r";0<=c.Fa.id.indexOf(";")&&(d=/^[a-p]/.test(c.clientPlaybackNonce),e="x");a.ha("html5_inline_video_quality_survey_always")&&(d=!0,e="a");return d?(b.ab("iqss",e,!0),!0):!1};
g.HN=function(a){g.N.call(this);this.loaded=!1;this.player=a};
g.IN=function(a,b){return Sv(a.info.mimeType)?b?uu(a.info)===b:!0:!1};
g.JN=function(a,b){if(null!=a.ka&&g.Ry(b.O())&&!a.ka.u&&null!=a.ka.o.rawcc)return!0;if(!a.Bg())return!1;var c=!!a.ka&&a.ka.u&&Object.values(a.ka.o).some(function(e){return g.IN(e,"386")}),d=!!a.ka&&!a.ka.u&&hga(a.ka);
return c||d};
KN=function(a,b){g.A.call(this);this.H=a;this.C=b;this.o={};this.u={};this.A=null;this.Tb=new Map;this.B=g.P(a.O().experiments,"web_player_defer_modules")};
g.LN=function(a){return a.Tb.get("captions")};
Fla=function(a,b){switch(b){case "ad":return MN(a);case "annotations_module":return a.JD();case "attribution":var c=a.H.O();return g.P(c.experiments,"web_player_show_music_in_this_video")&&"desktop-polymer"===c.playerStyle;case "creatorendscreen":return c=a.H.O(),"3"===c.controlsType?c=!1:"creator-endscreen-editor"===c.playerStyle?c=!0:(c=a.H.getVideoData(),c=!!c&&(!!g.PB(c)||!!g.QB(c))),c;case "embed":return g.py(a.H.O());case "endscreen":return g.NN(a);case "fresca":return a.zw();case "heartbeat":return a.Aw();
case "kids":return Hy(a.H.O());case "remote":return a.H.O().zd;case "miniplayer":return a.H.O().showMiniplayerUiWhenMinimized;case "music":return g.zy(a.H.O());case "captions":return c=a.H.getVideoData(),!!c.rm||!!c.captionTracks.length||g.JN(c,a.H);case "unplugged":return g.Gy(a.H.O());case "ux":return a.H.O().Ea;case "visualizer":return g.ON(a);case "webgl":return Ela(a);case "ypc":return a.ao();case "ypc_clickwrap":return c=a.H.getVideoData(),c.dm&&!c.Lu;case "yto":return!!a.H.getVideoData().kd.includes("yto");
default:return g.mr(Error("Module descriptor "+b+" does not match")),!1}};
PN=function(a,b,c,d,e){d=void 0===d?!1:d;e=void 0===e?!1:e;var f=a.Tb.get(b);if(!f||e)if(c||(c=function(){PN(a,b,void 0,d,e)}),f=f||Gla(a,b,c,Fla(a,b)))a.Tb.set(b,f),f.create(),d&&a.H.oa("onApiChange")};
QN=function(a){a.B&&(PN(a,"endscreen"),a.Kt(),PN(a,"creatorendscreen",void 0,!0))};
g.NN=function(a){var b=a.H.O();if(g.Yy(b)||b.C||!b.Ha&&!b.kb)return!1;var c=a.H.getPresentingPlayerType();if(2===c)return!1;if(3===c)return g.P(b.experiments,"desktop_enable_autoplay");a=a.H.getVideoData();if(!a)return!1;c=!a.isLiveDefaultBroadcast||g.P(b.experiments,"allow_poltergust_autoplay");c=a.xa&&(!g.P(b.experiments,"allow_live_autoplay")||!c);b=a.xa&&g.P(b.experiments,"allow_live_autoplay_on_mweb");return!c||b};
g.gN=function(a){return a.Tb.get("webgl")};
Ela=function(a){var b=a.H.getVideoData(),c=a.H.O().experiments,d=g.ml(),e=g.P(c,"enable_spherical_kabuki");a=g.Wy(a.H.O());if(b.rh())return d||e||a||g.P(c,"html5_enable_spherical");if(b.xh())return a||d||e||g.P(c,"html5_enable_spherical");if(b.yh())return a||d||g.P(c,"html5_enable_spherical3d");if(b.ll())return a||g.P(c,"html5_enable_anaglyph3d")||!1;d=b.Fa&&b.Fa.video&&Kv(b.Fa.video);return a&&!g.FB(b)&&!b.isVisualizerEligible&&!d&&(g.P(c,"enable_webgl_noop")||g.P(c,"html5_enable_bicubicsharp")||
g.P(c,"html5_enable_smartsharp"))};
RN=function(a){g.P(a.H.O().experiments,"web_player_ux_module_wait")&&a.Tb.get("ux")&&g.qN(a.H,"ux")};
Hla=function(a){RN(a);PN(a,"ux",void 0,!0)};
MN=function(a){if(a=a.H.getVideoData(1).getPlayerResponse())if(a=a.adPlacements)for(var b=0;b<a.length;b++)if(a[b].adPlacementRenderer)return!0;return!1};
g.ON=function(a){var b=a.H.O();return a.H.getVideoData().isVisualizerEligible&&Xy(b)&&g.P(b.experiments,"web_player_music_visualizer")&&"desktop-polymer"===b.playerStyle&&g.Wy(b)&&!(g.yx&&!g.Rd(42))};
Gla=function(a,b,c,d){try{if(d){var e=g.SN[b];if(e)return new e(a.H);"creatorendscreen"===b?TN(a,"annotations_module",c):TN(a,b,c)}else g.qN(a.H,b)}catch(f){g.qN(a.H,b),g.mr(f)}return null};
UN=function(a,b,c){for(var d=g.p(a.Tb),e=d.next();!e.done;e=d.next()){var f=g.p(e.value);e=f.next().value;(f=f.next().value)&&(c||f.Xf(b))&&(g.Me(f),a.Tb["delete"](e))}};
VN=function(a){return a.Tb.get("ad")};
WN=function(a){if(Hy(a.H.O()))return a.Tb.get("kids")};
g.dN=function(a){if(a.H.O().zd)return a.Tb.get("remote")};
XN=function(a){if(g.Gy(a.H.O()))return a.Tb.get("unplugged")};
TM=function(a){if(a.H.O().Ea)return a.Tb.get("ux")};
g.iN=function(a){return a.Tb.get("annotations_module")};
YN=function(a){return a.Tb.get("creatorendscreen")};
lN=function(a){return a.Tb.get("fresca")};
TN=function(a,b,c){if(a.C){for(var d=a.C+b+".js",e=document.getElementsByTagName("SCRIPT"),f=!1,h,l=0;l<e.length;l++){var m=e[l];if(m.src===d||m.getAttribute("data-original-src")===d)h=m}h||(h=g.ue("SCRIPT"),h.setAttribute("data-original-src",d),f=!0);var n=function(){a.ia()||c.call(a)},q=function(){a.ia()||g.qN(a.H,b)},r=h.onload;
h.onload=function(B){vf(n);r&&r.apply(window,[B])};
var u=h.onerror;h.onerror=function(B){if(.01>Math.random()){var E=new jr("Unable to load player module",b+".js from "+d+" on "+(document.location&&document.location.origin)+".");g.mr(E)}vf(q);u&&u(B)};
var w=h,z=w.onreadystatechange;w.onreadystatechange=function(B){switch(w.readyState){case "loaded":case "complete":vf(n)}z&&z(B)};
f&&((e=a.H.O().We)&&h.setAttribute("nonce",e),fd(h,nh(d)),e=document.getElementsByTagName("HEAD")[0]||document.body,e.insertBefore(h,e.firstChild),g.Le(a,function(){h.parentNode&&h.parentNode.removeChild(h);g.SN[b]=null;"annotations_module"===b&&(g.SN.creatorendscreen=null)}))}};
$N=function(a,b,c,d){g.N.call(this);var e=this;this.target=a;this.Yo=b;this.u=0;this.F=!1;this.B=new g.Xd(NaN,NaN);this.o=new g.as(this);this.U=this.A=this.G=null;g.C(this,this.o);b=d?4E3:3E3;this.M=new g.H(function(){ZN(e,1,!1)},b,this);
g.C(this,this.M);this.N=new g.H(function(){ZN(e,2,!1)},b,this);
g.C(this,this.N);this.R=new g.H(function(){ZN(e,512,!1)},b,this);
g.C(this,this.R);this.T=c&&0<c.hj.length?5E3:3E3;d||(this.A=this.o.L(a,"mouseover",this.Yq),this.o.L(a,"mousemove",this.qK),this.o.L(a,"mouseleave",this.rK));Bh?this.o.L(a,"keypress",this.GH):this.o.L(a,"focusin",this.oG);this.C=this.o.L(a,"mousedown",this.AB);this.I=this.o.L(a,"touchstart",this.YD,void 0,!0);ZN(this,640,!0)};
aO=function(a){ZN(a,4,!1);a.G&&(a.o.nb(a.G),a.G=null,a.A=a.o.L(a.target,"mouseover",a.Yq));a.A&&(a.o.nb(a.A),a.A=a.o.L(a.target,"mouseover",a.Yq))};
ZN=function(a,b,c){a.ia();var d=!a.u;c?(a.u|=b,b&1&&a.M.start(),b&2&&a.N.start()):(a.u&=~b,b&1&&a.M.stop(),b&2&&a.N.stop(),b&512&&a.R.stop());a.u&512&&!(a.u&128)&&a.R.fb(a.T);b=!a.u;d!==b&&a.S("autohideupdate",b)};
g.bO=function(a,b,c,d,e,f){g.A.call(this);this.element=a;this.state=null;c||a.hide();this.A=b;this.B=void 0===d?b:d;this.o=f;this.u=e;this.delay=new g.H(this.rs,0,this);g.C(this,this.delay)};
cO=function(a,b){var c=a.element.element;b?c.setAttribute("aria-hidden","true"):c.removeAttribute("aria-hidden")};
g.dO=function(a){g.U.call(this,{D:"button",Y:["ytp-large-play-button","ytp-button"],P:{"aria-label":"Play"},K:["{{largePlayButtonChildren}}"]});this.api=a;this.L(a,"videodatachange",this.la);this.la()};
eO=function(a){var b=a.O(),c=["ytp-cued-thumbnail-overlay"];(g.P(b.experiments,"web_player_contain_thumbnail")||b.C)&&c.push("ytp-exp-contain-thumbnail");g.U.call(this,{D:"div",Y:c,K:[{D:"div",J:"ytp-cued-thumbnail-overlay-image"}]});b=this.da("ytp-cued-thumbnail-overlay");c=new g.dO(a);g.C(this,c);c.ca(b);this.A=new g.as(this);g.C(this,this.A);this.api=a;this.C=this.da("ytp-cued-thumbnail-overlay-image");this.B=c;this.u=new g.bO(this,250);g.C(this,this.u);this.o=new g.H(this.la,0,this);g.C(this,
this.o);this.la();this.L(a,"appresize",this.Pa);this.L(a,"presentingplayerstatechange",this.pJ);this.L(a,"ypcStateChanged",this.hO);ry(a.O())&&this.L(a,"videoplayerreset",this.oJ)};
fO=function(a,b){var c=void 0===c?!0:c;var d=g.K("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.ud(window.location.href);e&&d.push(e);e=g.ud(a);if(g.fb(d,e)||!e&&ic(a,"/"))if(g.zo("autoescape_tempdata_url")&&(d=document.createElement("a"),g.dd(d,a),a=d.href),a&&(d=vd(a),e=d.indexOf("#"),d=0>e?d:d.substr(0,e)))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:g.xs()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&(c=b,d="ST-"+md(d).toString(36),c=c?g.Cd(c):"",g.Aq(d,c,f||5))}else f=b,c="ST-"+md(d).toString(36),
f=f?g.Cd(f):"",g.Aq(c,f,5)};
g.gO=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;d=d.location;a=g.Ed(a,b)+c;a=a instanceof g.yc?a:g.Dc(a);d.href=g.zc(a)};
g.hO=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.K("EVENT_ID");d&&(b.ei||(b.ei=d));b&&fO(a,b);c||((window.ytspf||{}).enabled?spf.navigate(a):g.gO(a))};
g.iO=function(a,b,c){c&&fO(a,c);c=g.Cc(a);c=g.zc(c);a!=c&&g.Io(Error("Unsafe window.open URL: "+a));a=c;window.open(a,b||md(a).toString(36))};
jO=function(a){var b=!a.O().Xd&&3!==a.getPresentingPlayerType();return a.isFullscreen()||b};
g.kO=function(a,b,c,d){var e=a.currentTarget;if((void 0===c||!c)&&g.LL(a))return g.lp(a),!0;b.pauseVideo();a=e.getAttribute("href");g.hO(a,d,!0);return!1};
g.lO=function(a,b,c){if(Ny(b.O())&&2!==b.getPresentingPlayerType()){if(g.LL(c))return b.isFullscreen()&&!b.O().externalFullscreen&&b.toggleFullscreen(),g.lp(c),!0}else{var d=g.LL(c);d&&b.pauseVideo();g.hO(a,void 0,!0);d&&(g.iO(a),g.lp(c))}return!1};
mO=function(){return{D:"div",J:"ytp-spinner-container",K:[{D:"div",J:"ytp-spinner-rotator",K:[{D:"div",J:"ytp-spinner-left",K:[{D:"div",J:"ytp-spinner-circle"}]},{D:"div",J:"ytp-spinner-right",K:[{D:"div",J:"ytp-spinner-circle"}]}]}]}};
nO=function(a){if(document.createRange){var b=document.createRange();b&&(b.selectNodeContents(a),a=window.getSelection())&&(a.removeAllRanges(),a.addRange(b))}};
g.oO=function(a,b,c){a=a.O();return g.P(a.experiments,"desktop_player_button_tooltip_with_shortcut")&&!a.Lc?g.JL("$DESCRIPTION ($SHORTCUT)",{DESCRIPTION:b,SHORTCUT:c}):b};
g.pO=function(a){g.U.call(this,{D:"div",Y:["ytp-error"],P:{role:"alert"},K:[{D:"div",J:"ytp-error-content",K:[{D:"div",J:"ytp-error-icon-container",K:[g.sM()]},{D:"div",J:"ytp-error-content-wrap",K:[{D:"div",J:"ytp-error-content-wrap-reason",W:"{{content}}"},{D:"div",J:"ytp-error-content-wrap-subreason",W:"{{subreason}}"}]}]}]});this.api=a;this.keys=[]};
g.qO=function(a){a=a.split(Ila);for(var b=[],c=0;c<a.length;c+=3){var d=a[c++].split("\n");b.push(d[0]);for(var e=1;e<d.length;e++)b.push({D:"br"}),b.push(d[e]);c<a.length&&b.push({D:"a",P:{href:a[c],target:a[c+1]},W:a[c+2]})}return{D:"span",K:b}};
rO=function(a,b,c,d,e,f,h){d=void 0===d?!1:d;e=void 0===e?!1:e;h=void 0===h?!0:h;e||(e=a.api.O().u);a=a.api.getVideoData();b=g.JL(g.DK[b]||"",d?{CPN:a.clientPlaybackNonce}:{}).split(/\$(BEGIN|END)_LINK/);d=[];f&&d.push({D:"h2",W:f});d.push(b[0]);h&&d.push({D:"br"});d.push({D:"a",P:{href:c,target:e?"_blank":null},W:b[2]});d.push(b[4]);return{D:"span",K:d}};
Jla=function(a,b){for(var c=a.element.getElementsByTagName("a"),d=0;d<c.length;d++){var e=a.L(c[d],"click",b);a.keys.push(e)}};
Kla=function(a){for(var b=0;b<a.keys.length;b++)a.nb(a.keys[b]);a.keys=[]};
tO=function(a){g.as.call(this);this.H=a;this.o=new Set;this.mediaSession=navigator.mediaSession;sO(this,"play",function(){a.playVideo()});
sO(this,"pause",function(){a.pauseVideo()});
sO(this,"seekbackward",function(){a.seekBy(-5*a.getPlaybackRate())});
sO(this,"seekforward",function(){a.seekBy(5*a.getPlaybackRate())});
this.L(a,"videodatachange",this.Na);this.L(a,"presentingplayerstatechange",this.hf);this.Na()};
sO=function(a,b,c){a.mediaSession.setActionHandler(b,c?function(){c()}:null);
a.o.add(b)};
uO=function(a){g.U.call(this,{D:"div",J:"ytp-paid-content-overlay",P:{"aria-live":"assertive","aria-atomic":"true"}});this.H=a;this.F=new g.U({D:"div",Y:["ytp-button","ytp-paid-content-overlay-text"]});this.videoId=null;this.B=!1;this.A=new g.bO(this.F,250,!1,100);this.Sb=this.o=null;this.u={};this.C=0;g.C(this,this.F);this.F.ca(this.element);g.C(this,this.A);this.L(a,"videodatachange",this.Na);this.L(a,"presentingplayerstatechange",this.Ub)};
vO=function(a,b){var c=GB(b),d=HB(b);a.o?b.videoId&&b.videoId!==a.videoId&&(a.o.Bf(),a.videoId=b.videoId,c=a.u[b.videoId]||0,a.B=!!d&&3E3>c):c&&d&&(a.o=new g.H(a.Ra,d,a),g.C(a,a.o),g.De(g.ie("ytp-paid-content-overlay-text",a.element),c))};
wO=function(a,b){a.o&&g.T(b,8)&&a.B&&(a.B=!1,a.Yb(),a.o.start())};
yO=function(a){g.U.call(this,{D:"div",J:"ytp-spinner",K:[mO(),{D:"div",J:"ytp-spinner-message",W:"If playback doesn't begin shortly, try restarting your device."}]});this.api=a;this.message=this.da("ytp-spinner-message");this.o=new g.H(this.show,500,this);g.C(this,this.o);this.L(a,"presentingplayerstatechange",this.u);this.L(a,"onFrescaStateChange",this.A);this.L(a,"playbackstalledatstart",this.B);xO(this,g.gM(a))};
xO=function(a,b){if(g.T(b,128))var c=0;else!(c=g.T(b,16))&&(c=g.T(b,1))&&(c=lN(g.YM(a.api)),c=!(c&&c.loaded));c?a.o.start():a.hide()};
g.zO=function(a){g.U.call(this,a);this.Z=new g.N;g.C(this,this.Z)};
g.AO=function(a,b,c,d){d=void 0===d?!1:d;g.zO.call(this,b);var e=this;this.H=a;this.R=d;this.G=new g.as(this);this.N=new g.bO(this,c,!0,void 0,void 0,function(){e.o&&(e.o.getAttribute("aria-haspopup"),e.o.setAttribute("aria-expanded","true"),g.P(e.H.O().experiments,"embeds_enable_new_playlist_killswitch")?document.activeElement&&g.Ce(e.o,document.activeElement)&&e.focus():e.focus())});
g.C(this,this.G);g.C(this,this.N)};
BO=function(a){a.o&&(document.activeElement&&g.Ce(a.element,document.activeElement)&&(Ge(a.o),a.o.focus()),a.o.removeAttribute("aria-expanded"),a.o=void 0);g.cs(a.G);a.I=void 0};
CO=function(a,b,c){a.Ld()?a.Ra():a.Yb(b,c)};
EO=function(a){var b=g.Vu(a.O().experiments,"mweb_muted_autoplay_animation"),c=[],d=[{D:"div",Y:["ytp-unmute-icon"],K:[g.W?{D:"div",Y:["ytp-icon","ytp-icon-volume-muted-dark"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",Ua:!0,J:"ytp-svg-fill",P:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]}]},
{D:"div",Y:["ytp-unmute-text"],W:"Tap to unmute"}];"none"!==b&&(c.push("ytp-unmute-animated"),d.push({D:"div",Y:["ytp-unmute-box"],K:[]}),"expand"===b?c.push("ytp-unmute-expand"):"shrink"===b&&c.push("ytp-unmute-shrink"));g.AO.call(this,a,{D:"button",Y:["ytp-unmute","ytp-popup","ytp-button"].concat(c),K:[{D:"div",J:"ytp-unmute-inner",K:d}]},100);this.seen=this.u=!1;this.api=a;g.vN(this.api,this.element,this,51663);this.L(a,"onMutedAutoplayChange",this.Kn,this);this.L(a,"presentingplayerstatechange",
this.hf);this.na("click",this.onClick,this);a=a.isMutedByMutedAutoplay()&&!g.py(this.api.O());g.WL(this,a);a&&DO(this);this.A=a};
FO=function(a){a.u||(a.u=!0,g.yN(a.api,a.element))};
DO=function(a){a.seen||(a.seen=!0,g.zN(a.api,a.element,!0))};
g.HO=function(a){g.as.call(this);var b=this;this.api=a;this.yw=!1;this.vg=null;this.ip=!1;this.xc=null;this.Jt=this.gs=!1;this.Sw=this.Uw=null;this.uA=NaN;this.Rw=this.Cm=!1;this.En=0;this.ct=[];var c=a.O(),d=g.cN(a);this.ky=new g.H(this.XK,0,this);g.C(this,this.ky);g.zy(c)||(this.Lk=new eO(a),g.C(this,this.Lk),g.tN(a,this.Lk.element,4));if(Lla()){var e=new yO(a);g.C(this,e);e=e.element;g.tN(a,e,4)}var f=a.getVideoData();this.Mb=new $N(d,function(l){return b.Yo(l)},f,c.tb);
g.C(this,this.Mb);this.Mb.subscribe("autohideupdate",this.Rf,this);var h=new uO(a);g.C(this,h);g.tN(a,h.element,4);this.ks=new EO(a);g.C(this,this.ks);g.tN(this.api,this.ks.element,2);this.zu=this.api.isMutedByMutedAutoplay();this.L(a,"onMutedAutoplayChange",this.Kn);this.ds=new g.H(this.Sl,200,this);g.C(this,this.ds);this.Su=f.videoId;this.zD=new g.H(function(){b.En=0},350);
g.C(this,this.zD);this.kp=new g.H(function(){b.Rw||GO(b)},350,this);
g.C(this,this.kp);f=a.getRootNode();f.setAttribute("aria-label","YouTube Video Player");switch(c.color){case "white":g.I(f,"ytp-color-white")}g.zy(c)&&g.I(f,"ytp-music-player");!g.P(a.O().experiments,"disable_mediasession2")&&navigator.mediaSession&&!navigator.mediaSession.metadata&&navigator.mediaSession.setActionHandler&&(f=new tO(a),g.C(this,f));this.L(a,"appresize",this.Pa);this.L(a,"presentingplayerstatechange",this.hf);this.L(a,"videodatachange",this.Na);this.L(a,"videoplayerreset",this.IM);
this.L(a,"autonavvisibility",this.Jh,this);this.L(a,"sizestylechange",this.Jh,this);this.L(a,"onFrescaStateChange",this.Te,this);this.L(d,"click",this.lN,this);this.L(d,"dblclick",this.mN,this);c.ra&&(this.L(d,"gesturechange",this.nN,this),this.L(d,"gestureend",this.pN,this));this.Ki=[d.A];this.Lk&&this.Ki.push(this.Lk.element);e&&this.Ki.push(e)};
IO=function(a,b){if(!b)return!1;var c=a.api.app.C;if(c.Hi()&&(c=c.wa())&&g.Ce(c,b))return c.controls;for(c=0;c<a.Ki.length;c++)if(g.Ce(a.Ki[c],b))return!1;return g.En(b,"ytp-player-content")||g.En(b,"html5-endscreen")||b===a.api.getRootNode()?!1:!0};
KO=function(a){return!!(2===a.api.getPresentingPlayerType()&&g.cN(a.api).C&&a.api.O().o&&JO&&11<=aC)};
LO=function(a,b){return!IO(a,ip(b))&&g.LL(b)};
GO=function(a){a.Mb.Hh();if(g.P(a.api.O().experiments,"web_player_touch_mode_improvements")&&a.gs&&a.Jt)a.Jt=!1;else if(!a.api.O().R&&!a.kh()){var b=g.gM(a.api);g.T(b,2)&&$M(a.api)||a.vk(b);if(!a.api.O().ra||b.isCued()||g.T(b,1024)){var c=a.api.app.Ha;g.lr("embedsShouldRequestStorageAccessResult",{result:!!c,returnsUndefined:void 0===c});var d=g.T(b,2048);c&&(b.isCued()||d)?(g.lr("embedsRequestStorageAccessState",{isCued:b.isCued(),isAutoplayBlocked:d}),a.requestStorageAccess()):(!c||b.isCued()&&
d||g.lr("embedsRequestStorageAccessFailedState",{state:b.state}),a.Sl())}else a.ds.isActive()?(a.Wp(),a.ds.stop()):a.ds.start()}};
MO=function(a,b){if(g.LL(b)&&a.api.isMutedByMutedAutoplay()){a.api.unMute();2===a.api.getPresentingPlayerType()&&a.api.playVideo();var c=g.gM(a.api);!g.T(c,4)||g.T(c,8)||g.T(c,2)||a.Sl();return!0}return!1};
NO=function(a,b,c){a.api.isFullscreen()?c<1-b&&a.api.toggleFullscreen():c>1+b&&a.api.toggleFullscreen()};
Lla=function(){var a=gl()&&67<=dl();return!fl("tizen")&&!ny&&!a&&!0};
OO=function(a,b){this.u=a;this.o=b};
PO=function(a,b){return a.u+b*a.getLength()};
QO=function(a,b,c){if(!a.getLength())return null!=c?c:Infinity;a=(b-a.u)/a.getLength();return g.Td(a,0,1)};
RO=function(a,b){g.zO.call(this,{D:"div",J:"ytp-ad-persistent-progress-bar-container",K:[{D:"div",J:"ytp-ad-persistent-progress-bar"}]});this.A=a;this.u=b;g.C(this,this.u);this.F=this.da("ytp-ad-persistent-progress-bar");this.o=-1;this.L(a,"presentingplayerstatechange",this.C);this.hide();this.C()};
SO=function(a,b){b=void 0===b?2:b;g.N.call(this);this.o=a;this.A=new g.as(this);g.C(this,this.A);this.C=Mla;this.B=null;this.A.L(this.o,"presentingplayerstatechange",this.YJ);this.B=this.A.L(this.o,"progresssync",this.uB);this.u=b;1===this.u&&this.uB()};
TO=function(a){g.U.call(this,{D:"button",Y:["ytp-button","ytp-back-button"],K:[{D:"div",J:"ytp-arrow-back-icon",K:[g.W?{D:"div",Y:["ytp-icon","ytp-icon-arrow-back"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 -12 36 36",width:"100%"},K:[{D:"path",P:{d:"M0 0h24v24H0z",fill:"none"}},{D:"path",Ua:!0,P:{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",fill:"#fff"}}]}]}]});this.H=a;g.WL(this,a.O().showBackButton);this.na("click",this.onClick)};
g.UO=function(a){g.U.call(this,{D:"div",K:[{D:"div",J:"ytp-bezel-text-wrapper",K:[{D:"div",J:"ytp-bezel-text",W:"{{title}}"}]},{D:"div",J:"ytp-bezel",P:{role:"status","aria-label":"{{label}}"},K:[{D:"div",J:"ytp-bezel-icon",W:"{{icon}}"}]}]});this.H=a;this.u=new g.H(this.show,10,this);this.o=new g.H(this.hide,500,this);g.C(this,this.u);g.C(this,this.o);this.hide()};
WO=function(a,b,c){if(0>=b){c=JM();b="muted";var d=0}else c=c?IM():HM(),d=Math.floor(b),b=d+"volume";VO(a,c,b,d+"%")};
XO=function(a,b){var c=b?g.W?{D:"div",Y:["ytp-icon","ytp-icon-fast-rewind"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",Ua:!0,J:"ytp-svg-fill",P:{d:"M 17,24 V 12 l -8.5,6 8.5,6 z m .5,-6 8.5,6 V 12 l -8.5,6 z"}}]}:g.W?{D:"div",Y:["ytp-icon","ytp-icon-fast-forward"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",Ua:!0,J:"ytp-svg-fill",P:{d:"M 10,24 18.5,18 10,12 V 24 z M 19,12 V 24 L 27.5,18 19,12 z"}}]},d=a.H.getPlaybackRate(),
e=g.JL("Speed is $RATE",{RATE:String(d)});VO(a,c,e,d+"x")};
VO=function(a,b,c,d){d=void 0===d?"":d;a.ma("label",void 0===c?"":c);a.ma("icon",b);a.o.Bf();a.u.start();a.ma("title",d);g.J(a.element,"ytp-bezel-text-hide",!d)};
YO=function(a,b,c){g.U.call(this,{D:"div",J:"ytp-cards-teaser",K:[{D:"div",J:"ytp-cards-teaser-box"},{D:"div",J:"ytp-cards-teaser-text",K:[{D:"span",J:"ytp-cards-teaser-label",W:"{{text}}"}]}]});var d=this;this.H=a;this.N=b;this.ng=c;this.B=new g.bO(this,250,!1,250);this.o=null;this.G=new g.H(this.nM,300,this);this.F=new g.H(this.mM,2E3,this);this.C=[];this.u=null;this.I=new g.H(function(){d.element.style.margin="0"},250);
this.A=null;g.C(this,this.B);g.C(this,this.G);g.C(this,this.F);g.C(this,this.I);this.L(c.element,"mouseover",this.aB);this.L(c.element,"mouseout",this.ZA);this.L(a,"cardsteasershow",this.IN);this.L(a,"cardsteaserhide",this.Ra);this.L(a,"cardstatechange",this.mE);this.L(a,"presentingplayerstatechange",this.mE);this.L(a,"appresize",this.ov);this.L(a,"onShowControls",this.ov);this.L(a,"onHideControls",this.NF);this.na("click",this.jP);this.na("mouseenter",this.lM)};
$O=function(a,b,c){g.U.call(this,{D:"button",Y:["ytp-button","ytp-cards-button"],P:{"aria-label":"Show cards","aria-owns":"iv-drawer","aria-haspopup":"true","data-tooltip-opaque":String(g.py(a.O()))},K:[{D:"span",J:"ytp-cards-button-icon-default",K:[{D:"div",J:"ytp-cards-button-icon",K:[g.W?{D:"div",Y:["ytp-icon","ytp-icon-info-card"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",Ua:!0,J:"ytp-svg-fill",P:{d:"M18,8 C12.47,8 8,12.47 8,18 C8,23.52 12.47,28 18,28 C23.52,28 28,23.52 28,18 C28,12.47 23.52,8 18,8 L18,8 Z M17,16 L19,16 L19,24 L17,24 L17,16 Z M17,12 L19,12 L19,14 L17,14 L17,12 Z"}}]}]},
{D:"div",J:"ytp-cards-button-title",W:"Info"}]},{D:"span",J:"ytp-cards-button-icon-shopping",K:[{D:"div",J:"ytp-cards-button-icon",K:[g.W?{D:"div",Y:["ytp-icon","ytp-icon-shopping-card"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",J:"ytp-svg-shadow",P:{d:"M 27.99,18 A 9.99,9.99 0 1 1 8.00,18 9.99,9.99 0 1 1 27.99,18 z"}},{D:"path",J:"ytp-svg-fill",P:{d:"M 18,8 C 12.47,8 8,12.47 8,18 8,23.52 12.47,28 18,28 23.52,28 28,23.52 28,18 28,12.47 23.52,8 18,8 z m -4.68,4 4.53,0 c .35,0 .70,.14 .93,.37 l 5.84,5.84 c .23,.23 .37,.58 .37,.93 0,.35 -0.13,.67 -0.37,.90 L 20.06,24.62 C 19.82,24.86 19.51,25 19.15,25 c -0.35,0 -0.70,-0.14 -0.93,-0.37 L 12.37,18.78 C 12.13,18.54 12,18.20 12,17.84 L 12,13.31 C 12,12.59 12.59,12 13.31,12 z m .96,1.31 c -0.53,0 -0.96,.42 -0.96,.96 0,.53 .42,.96 .96,.96 .53,0 .96,-0.42 .96,-0.96 0,-0.53 -0.42,-0.96 -0.96,-0.96 z",
"fill-opacity":"1"}},{D:"path",J:"ytp-svg-shadow-fill",P:{d:"M 24.61,18.22 18.76,12.37 C 18.53,12.14 18.20,12 17.85,12 H 13.30 C 12.58,12 12,12.58 12,13.30 V 17.85 c 0,.35 .14,.68 .38,.92 l 5.84,5.85 c .23,.23 .55,.37 .91,.37 .35,0 .68,-0.14 .91,-0.38 L 24.61,20.06 C 24.85,19.83 25,19.50 25,19.15 25,18.79 24.85,18.46 24.61,18.22 z M 14.27,15.25 c -0.53,0 -0.97,-0.43 -0.97,-0.97 0,-0.53 .43,-0.97 .97,-0.97 .53,0 .97,.43 .97,.97 0,.53 -0.43,.97 -0.97,.97 z",fill:"#000","fill-opacity":"0.15"}}]}]},{D:"div",
J:"ytp-cards-button-title",W:"Shopping"}]}]});this.H=a;this.B=b;this.A=c;this.o=null;this.u=new g.bO(this,250,!0,100);g.C(this,this.u);g.J(this.A,"ytp-show-cards-title",g.py(a.O()));this.hide();this.na("click",this.onClicked);this.na("mouseover",this.HL);ZO(this,!0)};
ZO=function(a,b){b?a.o=g.aP(a.B.vb(),a.element):(a.o=a.o,a.o(),a.o=null)};
g.cP=function(a,b,c){b=bP(null,b,c);if(b=window.open(b,"loginPopup","width=800,height=600,resizable=yes,scrollbars=yes",!0))c=g.Qo("LOGGED_IN",function(d){g.Ro(g.K("LOGGED_IN_PUBSUB_KEY",void 0));vo("LOGGED_IN",!0);a(d)}),vo("LOGGED_IN_PUBSUB_KEY",c),b.moveTo((screen.width-800)/2,(screen.height-600)/2)};
bP=function(a,b,c){var d="/signin?context=popup";c&&(d=document.location.protocol+"//"+c+d);c=document.location.protocol+"//"+document.domain+"/post_login";a&&(c=Dd(c,"mode",a));a=Dd(d,"next",c);b&&(a=Dd(a,"feature",b));return a};
eP=function(a,b){g.U.call(this,{D:"button",Y:[dP.BUTTON,dP.TITLE_NOTIFICATIONS],P:{"aria-pressed":"{{pressed}}","aria-label":"{{label}}"},K:[{D:"div",J:dP.TITLE_NOTIFICATIONS_ON,P:{title:"Stop receiving notifications about every new video","aria-label":"Notify subscriptions"},K:[g.yM()]},{D:"div",J:dP.TITLE_NOTIFICATIONS_OFF,P:{title:"Receive notifications about every new video","aria-label":"Notify subscriptions"},K:[g.W?{D:"div",Y:["ytp-icon","ytp-icon-notifications-inactive"]}:{D:"svg",P:{fill:"#fff",
height:"24px",viewBox:"0 0 24 24",width:"24px"},K:[{D:"path",P:{d:"M18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"}}]}]}]});this.api=a;this.channelId=b;this.o=!1;g.vN(a,this.element,this,36927);this.na("click",this.onClick,this);this.ma("pressed",!1);this.ma("label","Receive notifications about every new video")};
gP=function(a,b){a.o=b;a.element.classList.toggle(dP.NOTIFICATIONS_ENABLED,a.o);if(g.P(a.api.O().experiments,"web_player_innertube_subscription_update")){var c=a.api.getVideoData();if(c)if(c=b?c.Lw:c.Kw){var d=fP(a.api.app);d?RJ(d,c):g.L(Error("No innertube service available when updating notification preferences."))}else g.L(Error("No update preferences command available."));else g.L(Error("No video data when updating notification preferences."))}else g.tq("/subscription_ajax?action_update_subscription_preferences=1",
{method:"POST",Eb:{channel_id:a.channelId,receive_all_updates:!a.o}})};
hP=function(a,b,c){return b?a.I+"subscription_ajax":c?"/subscription_service":""};
g.jP=function(a,b,c,d,e,f,h,l,m,n,q,r,u){u=void 0===u?null:u;f&&(a=a.charAt(0)+a.substring(1).toLowerCase(),c=c.charAt(0)+c.substring(1).toLowerCase());if("0"===b||"-1"===b)b=null;if("0"===d||"-1"===d)d=null;var w=r.O();if(q){c={href:q,"aria-label":"Subscribe to channel"};if(g.vy(w)||g.yy(w))c.target=w.F;g.U.call(this,{D:"div",Y:["ytp-button","ytp-sb"],K:[{D:"a",J:"ytp-sb-subscribe",P:c,K:[{D:"div",J:"ytp-sb-text",K:[{D:"div",J:"ytp-sb-icon"},a]},b?{D:"div",J:"ytp-sb-count",W:b}:""]}]});f&&g.I(this.element,
"ytp-sb-classic");this.channelId=h;this.o=u}else{q=w.sa&&g.vy(w)&&!g.P(w.experiments,"subscribe_tooltipkillswitch");g.U.call(this,{D:"div",Y:["ytp-button","ytp-sb"],K:[{D:"div",J:"ytp-sb-subscribe",P:q?{title:g.JL("Subscribe as $USER_NAME",{USER_NAME:w.sa}),"aria-label":"Subscribe to channel","data-tooltip-image":Zy(w),"data-tooltip-opaque":String(g.py(w)),tabindex:"0",role:"button"}:{"aria-label":"Subscribe to channel"},K:[{D:"div",J:"ytp-sb-text",K:[{D:"div",J:"ytp-sb-icon"},a]},b?{D:"div",J:"ytp-sb-count",
W:b}:""]},{D:"div",J:"ytp-sb-unsubscribe",P:q?{title:g.JL("Subscribed as $USER_NAME",{USER_NAME:w.sa}),"aria-label":"Unsubscribe from channel","data-tooltip-image":Zy(w),"data-tooltip-opaque":String(g.py(w)),tabindex:"0",role:"button"}:{"aria-label":"Unsubscribe from channel"},K:[{D:"div",J:"ytp-sb-text",K:[{D:"div",J:"ytp-sb-icon"},c]},d?{D:"div",J:"ytp-sb-count",W:d}:""]}]});var z=this;this.channelId=h;this.o=u;var B=this.da("ytp-sb-subscribe"),E=this.da("ytp-sb-unsubscribe");f&&g.I(this.element,
"ytp-sb-classic");if(e){l&&g.I(this.element,"ytp-sb-subscribed");var F=function(){a:{var S=z.channelId;if(m||n){var aa=r.O();var ec={c:S};if(g.P(aa.experiments,"embeds_botguard_with_subscribe_killswitch"))ec="";else{var Vc;ur.fd()&&(Vc=KH(ec));ec=Vc||""}if(g.P(aa.experiments,"web_player_innertube_subscription_update")){aa=r.getVideoData();if(!aa){g.L(Error("No video data available when updating subscription."));break a}aa=aa.subscribeCommand;if(!aa){g.L(Error("No subscribe command in videoData."));
break a}Vc=fP(r.app);if(!Vc){g.L(Error("No innertube service available when updating subscriptions."));break a}RJ(Vc,aa,{botguardResponse:ec,feature:m})}else g.tq(hP(aa,!!m,!!n),m?{method:"POST",Ue:{action_create_subscription_to_channel:1,c:S},Eb:{feature:m,silo_name:null,r2b:ec},withCredentials:!0}:n?{method:"POST",Ue:{action_subscribe:1},Eb:{channel_ids:S,itct:n}}:{});r.oa("SUBSCRIBE",S)}}E.focus();E.removeAttribute("aria-hidden");B.setAttribute("aria-hidden","true")},G=function(){var S=z.channelId;
if(m||n){var aa=r.O();g.P(aa.experiments,"web_player_innertube_subscription_update")?(aa=r.getVideoData(),RJ(fP(r.app),aa.unsubscribeCommand,{feature:m})):g.tq(hP(aa,null!=m,null!=n),m?{method:"POST",Ue:{action_remove_subscriptions:1},Eb:{c:S,silo_name:null,feature:m},withCredentials:!0}:n?{method:"POST",Ue:{action_unsubscribe:1},Eb:{channel_ids:S,itct:n}}:{});r.oa("UNSUBSCRIBE",S)}B.focus();B.removeAttribute("aria-hidden");E.setAttribute("aria-hidden","true")};
this.L(B,"click",F);this.L(E,"click",G);this.L(B,"keypress",function(S){13===S.keyCode&&F(S)});
this.L(E,"keypress",function(S){13===S.keyCode&&G(S)});
this.L(r,"SUBSCRIBE",this.u);this.L(r,"UNSUBSCRIBE",this.A);this.o&&q&&(this.tooltip=this.o.vb(),iP(this.tooltip),g.Le(this,g.aP(this.tooltip,B)),g.Le(this,g.aP(this.tooltip,E)))}else g.I(B,"ytp-sb-disabled"),g.I(E,"ytp-sb-disabled")}};
kP=function(a,b){g.U.call(this,{D:"div",J:"ytp-title-channel",K:[{D:"div",J:"ytp-title-beacon"},{D:"a",J:"ytp-title-channel-logo",P:{href:"{{channelLink}}",target:a.O().F,"aria-label":"{{channelLogoLabel}}"}},{D:"div",J:"ytp-title-expanded-overlay",K:[{D:"div",J:"ytp-title-expanded-heading",K:[{D:"h2",J:"ytp-title-expanded-title",K:[{D:"a",W:"{{expandedTitle}}",P:{href:"{{channelTitleLink}}",target:a.O().F,tabIndex:"{{channelTitleFocusable}}"}}]},{D:"h3",J:"ytp-title-expanded-subtitle",W:"{{expandedSubtitle}}"}]}]}]});
this.api=a;this.F=b;this.channel=this.da("ytp-title-channel");this.o=this.da("ytp-title-channel-logo");this.B=this.da("ytp-title-expanded-overlay");this.A=this.u=this.subscribeButton=null;this.C=g.py(this.api.O());g.vN(a,this.o,this,36925);this.C&&Nla(this);this.L(a,"videodatachange",this.la);this.L(a,"videoplayerreset",this.la);this.la()};
Nla=function(a){var b=a.api.O(),c=a.api.getVideoData();if(!b.fa){var d=b.Bc?null:bP(),e=new g.jP("Subscribe",null,"Subscribed",null,!0,!1,c.jg,c.subscribed,"channel_avatar",null,d,a.api,a.F);a.subscribeButton=e;g.C(a,e);e.ca(a.B);g.vN(a.api,e.element,a,36926);e.hide();a.L(e.element,"click",function(){g.yN(a.api,e.element)});
var f=new eP(a.api,c.jg);a.u=f;g.C(a,f);f.ca(a.B);f.hide();a.L(a.api,"SUBSCRIBE",function(){c.Ql&&f.show()});
a.L(a.api,"UNSUBSCRIBE",function(){c.Ql&&(f.hide(),gP(f,!1))})}a.ma("channelTitleFocusable","-1");
b.o?a.L(a.o,"click",function(h){lP(a)&&(h.preventDefault(),a.isExpanded()?a.Gt():a.Xt());g.yN(a.api,a.o)}):(a.L(a.channel,"mouseenter",a.Xt),a.L(a.channel,"mouseleave",a.Gt),a.L(a.channel,"focusin",a.Xt),a.L(a.channel,"focusout",function(h){a.channel.contains(h.relatedTarget)||a.Gt()}),a.L(a.o,"click",function(){g.yN(a.api,a.o)}));
a.A=new g.H(function(){a.isExpanded()&&(a.subscribeButton&&(a.subscribeButton.hide(),g.zN(a.api,a.subscribeButton.element,!1)),a.u&&(a.u.hide(),g.zN(a.api,a.u.element,!1)),a.channel.classList.remove("ytp-title-expanded"),a.channel.classList.add("ytp-title-show-collapsed"))},500);
g.C(a,a.A);a.L(a.channel,mP,function(){nP(a)});
a.L(a.api,"onHideControls",a.iw);a.L(a.api,"appresize",a.iw);a.L(a.api,"fullscreentoggled",a.iw)};
nP=function(a){a.channel.classList.remove("ytp-title-show-collapsed");a.channel.classList.remove("ytp-title-show-expanded")};
lP=function(a){var b=a.api.getPlayerSize();return a.C&&524<=b.width};
g.oP=function(){g.as.apply(this,arguments)};
pP=function(a,b,c){var d={};b&&(d.v=b);c&&(d.list=c);a={name:a,locale:void 0,feature:void 0};for(var e in d)a[e]=d[e];d=g.Ed("/sharing_services",a);g.xr(d)};
g.rP=function(a,b,c,d){g.zO.call(this,a);this.priority=b;c&&g.qP(this,c);d&&this.Bb(d)};
g.sP=function(a,b,c){a=void 0===a?{}:a;b=void 0===b?[]:b;c=void 0===c?!1:c;b.push("ytp-menuitem");"role"in a||(a.role="menuitem");c||"tabindex"in a||(a.tabindex="0");return{D:c?"a":"div",Y:b,P:a,K:[{D:"div",J:"ytp-menuitem-icon",W:"{{icon}}"},{D:"div",J:"ytp-menuitem-label",W:"{{label}}"},{D:"div",J:"ytp-menuitem-content",W:"{{content}}"}]}};
tP=function(a,b){a.ma("icon",b)};
g.qP=function(a,b){a.ma("label",b)};
uP=function(a,b,c,d,e){var f={D:"div",J:"ytp-panel"};if(c){var h="ytp-panel-title";var l={D:"div",J:"ytp-panel-header",K:[{D:"button",Y:["ytp-button",h],K:[c]}]};if(e){var m="ytp-panel-options";l.K.unshift({D:"button",Y:["ytp-button",m],K:[d]})}f.K=[l]}g.zO.call(this,f);this.content=b;b.ca(this.element);this.Vz=!1;c&&(c=this.da(h),this.L(c,"click",this.ZK),this.Vz=!0,e&&(m=this.da(m),this.L(m,"click",e)));b.subscribe("size-change",this.VB,this);this.L(a,"fullscreentoggled",this.VB)};
g.vP=function(a,b,c,d,e){b=void 0===b?null:b;var f={role:"menu"};b&&(f.id=b);b=new g.zO({D:"div",J:"ytp-panel-menu",P:f});uP.call(this,a,b,c,d,e);this.menuItems=b;this.items=[];g.C(this,this.menuItems)};
g.wP=function(a){for(var b=g.p(a.items),c=b.next();!c.done;c=b.next())c.value.unsubscribe("size-change",a.Kv,a);a.items=[];g.xe(a.menuItems.element);a.menuItems.S("size-change")};
Ola=function(a,b){return b.priority-a.priority};
xP=function(a){var b=g.sP({"aria-haspopup":"true"});g.rP.call(this,b,a);this.na("keydown",this.o)};
yP=function(a,b){a.element.setAttribute("aria-haspopup",String(b))};
g.zP=function(a,b){g.rP.call(this,g.sP({role:"menuitemcheckbox","aria-checked":"false"}),b,a,{D:"div",J:"ytp-menuitem-toggle-checkbox"});this.checked=!1;this.na("click",this.onClick)};
BP=function(a,b,c,d){g.vP.call(this,a);this.H=a;this.Ma=c;this.rb=d;this.Mf=new g.zP("Loop",7);this.getVideoUrl=new xP(6);this.Ff=new xP(5);this.Cf=new xP(4);this.Za=new xP(3);this.Vn=new g.rP(g.sP({href:"{{href}}",target:this.H.O().F},void 0,!0),2,"Troubleshoot playback issue");this.Jk=new g.zO({D:"div",Y:["ytp-copytext","ytp-no-contextmenu"],P:{draggable:"false",tabindex:"1"},W:"{{text}}"});this.Iy=new uP(this.H,this.Jk);this.oi=null;g.C(this,this.Mf);this.xb(this.Mf,!0);this.Mf.na("click",this.mO,
this);g.vN(a,this.Mf.element,this.Mf,28661);g.C(this,this.getVideoUrl);this.xb(this.getVideoUrl,!0);this.getVideoUrl.na("click",this.kO,this);g.vN(a,this.getVideoUrl.element,this.getVideoUrl,28659);g.C(this,this.Ff);this.xb(this.Ff,!0);this.Ff.na("click",this.lO,this);g.vN(a,this.Ff.element,this.Ff,28660);g.C(this,this.Cf);this.xb(this.Cf,!0);this.Cf.na("click",this.jO,this);g.vN(a,this.Cf.element,this.Cf,28658);g.C(this,this.Za);this.xb(this.Za,!0);this.Za.na("click",this.iO,this);g.C(this,this.Vn);
this.xb(this.Vn,!0);this.Vn.na("click",this.fN,this);b=new g.rP(g.sP(),1,"Stats for nerds");g.C(this,b);this.xb(b,!0);b.na("click",this.zN,this);g.C(this,this.Jk);this.Jk.na("click",this.pL,this);g.C(this,this.Iy);c=document.queryCommandSupported&&document.queryCommandSupported("copy");g.Ow&&g.Rd(43)&&(c=!0);g.vx&&!g.Rd(41)&&(c=!1);c&&(this.oi=new g.U({D:"textarea",J:"ytp-html5-clipboard",P:{readonly:""}}),g.C(this,this.oi),this.oi.ca(this.element));tP(this.Mf,g.W?{D:"div",Y:["ytp-icon","ytp-icon-repeat"]}:
{D:"svg",P:{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24"},K:[{D:"path",P:{d:"M7 7H17V10L21 6L17 2V5H5V11H7V7ZM17 17H7V14L3 18L7 22V19H19V13H17V17Z",fill:"white"}}]});tP(this.Za,g.W?{D:"div",Y:["ytp-icon","ytp-icon-bug-report"]}:{D:"svg",P:{height:"24",viewBox:"0 0 24 24",width:"24"},K:[{D:"path",P:{"clip-rule":"evenodd",d:"M20 10V8H17.19C16.74 7.22 16.12 6.54 15.37 6.04L17 4.41L15.59 3L13.42 5.17C13.39 5.16 13.37 5.16 13.34 5.16C13.18 5.12 13.02 5.1 12.85 5.07C12.79 5.06 12.74 5.05 12.68 5.04C12.46 5.02 12.23 5 12 5C11.51 5 11.03 5.07 10.58 5.18L10.6 5.17L8.41 3L7 4.41L8.62 6.04H8.63C7.88 6.54 7.26 7.22 6.81 8H4V10H6.09C6.03 10.33 6 10.66 6 11V12H4V14H6V15C6 15.34 6.04 15.67 6.09 16H4V18H6.81C7.85 19.79 9.78 21 12 21C14.22 21 16.15 19.79 17.19 18H20V16H17.91C17.96 15.67 18 15.34 18 15V14H20V12H18V11C18 10.66 17.96 10.33 17.91 10H20ZM16 15C16 17.21 14.21 19 12 19C9.79 19 8 17.21 8 15V11C8 8.79 9.79 7 12 7C14.21 7 16 8.79 16 11V15ZM10 14H14V16H10V14ZM10 10H14V12H10V10Z",
fill:"white","fill-rule":"evenodd"}}]});tP(this.Vn,g.W?{D:"div",Y:["ytp-icon","ytp-icon-help-outline"]}:{D:"svg",P:{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24"},K:[{D:"path",P:{"clip-rule":"evenodd",d:"M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM13 16V18H11V16H13ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM8 10C8 7.79 9.79 6 12 6C14.21 6 16 7.79 16 10C16 11.28 15.21 11.97 14.44 12.64C13.71 13.28 13 13.90 13 15H11C11 13.17 11.94 12.45 12.77 11.82C13.42 11.32 14 10.87 14 10C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10H8Z",
fill:"white","fill-rule":"evenodd"}}]});tP(b,tM());this.L(a,"loopchange",this.gC);this.L(a,"videodatachange",this.Na);AP(this);this.Wf(this.H.getVideoData())};
DP=function(a,b){var c=!1;if(a.oi){var d=a.oi.element;d.value=b;d.select();try{c=document.execCommand("copy")}catch(e){}}c?a.Ma.Ra():(a.Jk.Bb(b,"text"),g.CP(a.Ma,a.Iy),nO(a.Jk.element),a.oi&&(a.oi=null,AP(a)));return c};
AP=function(a){var b=!!a.oi;g.qP(a.Za,b?"Copy debug info":"Get debug info");yP(a.Za,!b);g.qP(a.Cf,b?"Copy embed code":"Get embed code");yP(a.Cf,!b);g.qP(a.getVideoUrl,b?"Copy video URL":"Get video URL");yP(a.getVideoUrl,!b);g.qP(a.Ff,b?"Copy video URL at current time":"Get video URL at current time");yP(a.Ff,!b);tP(a.Cf,b?qM():null);tP(a.getVideoUrl,b?vM():null);tP(a.Ff,b?vM():null)};
g.EP=function(a,b){g.AO.call(this,a,{D:"div",Y:["ytp-popup",b||""]},100,!0);this.u=[];this.A=this.C=null;this.Qq=this.maxWidth=0;this.size=new g.Zd(0,0);this.na("keydown",this.tJ)};
GP=function(a){var b=FP(a);if(b){g.Rh(a.element,a.maxWidth||"100%",a.Qq||"100%");g.zh(b.element,"minWidth","250px");g.zh(b.element,"width","");g.zh(b.element,"height","");g.zh(b.element,"maxWidth","100%");g.zh(b.element,"maxHeight","100%");g.zh(b.content.element,"height","");var c=g.Sh(b.element);c.width+=1;c.height+=1;g.zh(b.element,"width",c.width+"px");g.zh(b.element,"height",c.height+"px");g.zh(b.element,"maxWidth","");g.zh(b.element,"maxHeight","");var d=0;b.Vz&&(d=b.da("ytp-panel-header"),d=
g.Sh(d).height);g.zh(b.content.element,"height",c.height-d+"px");if(b.element instanceof HTMLElement){d=b.element;var e=d.scrollWidth-d.clientWidth;0<d.offsetWidth-d.clientWidth&&0<e&&(c.width+=e,g.zh(b.element,"width",c.width+"px"))}a.size=c}};
g.CP=function(a,b){var c=a.u[a.u.length-1];a.u.push(b);HP(a,c,b)};
g.IP=function(a){var b=a.u.pop(),c=a.u[0];a.u=[c];HP(a,b,c,!0)};
HP=function(a,b,c,d){JP(a);FP(a);g.En(c.element,"ytp-panel-animate-back")||g.En(c.element,"ytp-panel-animate-forward");b&&(b.unsubscribe("size-change",a.Wl,a),b.unsubscribe("back",a.re,a));c.subscribe("size-change",a.Wl,a);c.subscribe("back",a.re,a);if(a.La()){g.I(c.element,d?"ytp-panel-animate-back":"ytp-panel-animate-forward");c.ca(a.element);c.focus();a.element.scrollLeft=0;a.element.scrollTop=0;var e=a.size;GP(a);g.Rh(a.element,e);a.C=new g.H(function(){Pla(a,b,c,d)},20,a);
a.C.start()}else c.ca(a.element),b&&b.detach()};
Pla=function(a,b,c,d){a.C.dispose();a.C=null;g.I(a.element,"ytp-popup-animating");d?(g.I(b.element,"ytp-panel-animate-forward"),g.Gn(c.element,"ytp-panel-animate-back")):(g.I(b.element,"ytp-panel-animate-back"),g.Gn(c.element,"ytp-panel-animate-forward"));g.Rh(a.element,a.size);a.A=new g.H(function(){g.Gn(a.element,"ytp-popup-animating");b.detach();g.Hn(b.element,["ytp-panel-animate-back","ytp-panel-animate-forward"]);a.A.dispose();a.A=null},250,a);
a.A.start()};
FP=function(a){return a.u[a.u.length-1]};
JP=function(a){a.C&&g.An(a.C);a.A&&g.An(a.A)};
g.LP=function(a,b,c){g.EP.call(this,a);this.T=b;this.rb=c;this.F=new g.oP(this);this.B=null;g.C(this,this.F);g.vN(a,this.element,this,28656);g.I(this.element,"ytp-contextmenu");KP(this);this.hide()};
KP=function(a){g.cs(a.F);"gvn"!==a.H.O().playerStyle&&a.F.L(g.cN(a.H),"contextmenu",a.oL)};
MP=function(a){a.H.isFullscreen()?g.tN(a.H,a.element,9):a.ca(document.body)};
NP=function(a,b){g.U.call(this,{D:"button",Y:["ytp-button","ytp-copylink-button"],P:{title:"{{title-attr}}","data-tooltip-opaque":String(g.py(a.O()))},K:[{D:"div",J:"ytp-copylink-icon",W:"{{icon}}"},{D:"div",J:"ytp-copylink-title",W:"Copy link",P:{"aria-hidden":"true"}}]});this.api=a;this.o=b;this.visible=!1;this.tooltip=this.o.vb();var c=a.O();iP(this.tooltip);g.J(this.element,"ytp-show-copylink-title",g.py(c)&&!g.zy(c));g.vN(a,this.element,this,86570);this.na("click",this.onClick);this.L(a,"videodatachange",
this.la);this.L(a,"videoplayerreset",this.la);this.L(a,"appresize",this.la);this.la();g.Le(this,g.aP(this.tooltip,this.element))};
Qla=function(a){a.ma("icon",jM());OP(a.tooltip,a.element,"Link copied to clipboard");var b=a.na("mouseleave",function(){a.nb(b);a.la();a.tooltip.mg()})};
Sla=function(a,b){return g.th(a,function d(){var e=this,f;return g.za(d,function(h){if(1==h.o){f=e.api.O();if(!g.P(f.experiments,"embeds_enable_clipboard_api"))return h["return"](Rla(b));sa(h,2);return g.ra(h,navigator.UT.GU(b),4)}if(2!=h.o)return h["return"](!0);ua(h);return h["return"](!1)})})};
Rla=function(a){var b=!1,c=g.ue("TEXTAREA");c.value=a;c.setAttribute("readonly","");document.body.appendChild(c);if(ql){var d=window.getSelection();d.removeAllRanges();var e=document.createRange();e.selectNodeContents(c);d.addRange(e);c.setSelectionRange(0,a.length)}else c.select();try{b=document.execCommand("copy")}catch(f){}document.body.removeChild(c);return b};
PP=function(a){g.U.call(this,{D:"div",J:"ytp-doubletap-ui",K:[{D:"div",J:"ytp-doubletap-fast-forward-ve"},{D:"div",J:"ytp-doubletap-rewind-ve"},{D:"div",J:"ytp-doubletap-static-circle",K:[{D:"div",J:"ytp-doubletap-ripple"}]},{D:"div",J:"ytp-doubletap-overlay-a11y"},{D:"div",J:"ytp-doubletap-seek-info-container",K:[{D:"div",J:"ytp-doubletap-arrows-container",K:[{D:"span",J:"ytp-doubletap-base-arrow"},{D:"span",J:"ytp-doubletap-base-arrow"},{D:"span",J:"ytp-doubletap-base-arrow"}]},{D:"div",J:"ytp-doubletap-tooltip",
K:[{D:"div",J:"ytp-doubletap-tooltip-label",W:"{{seekTime}}"}]}]}]});this.H=a;this.A=new g.H(this.show,10,this);this.u=new g.H(this.hide,700,this);g.C(this,this.A);g.C(this,this.u);this.hide();this.o=this.da("ytp-doubletap-fast-forward-ve");this.B=this.da("ytp-doubletap-rewind-ve");g.vN(this.H,this.o,this,28240);g.vN(this.H,this.B,this,28239);g.zN(this.H,this.o,!0);g.zN(this.H,this.B,!0)};
QP=function(a){var b=null;try{b=a.toLocaleString("en-GB",{style:"percent"})}catch(c){b=a.toLocaleString(void 0,{style:"percent"})}return b};
g.SP=function(a,b,c,d,e,f){g.as.call(this);var h=this;this.api=a;this.contextMenu=c;this.Mb=d;this.rb=e;this.A=f;this.u=new g.H(function(){RP(h,!1)},1E3);
this.o="";g.C(this,this.u);a=g.Sa(this.tw,!1);this.L(b,"mousedown",a);this.L(c.element,"mousedown",a);this.L(b,"keydown",this.Tz);this.L(c.element,"keydown",this.Tz);this.L(b,"keyup",this.Uz);this.L(c.element,"keyup",this.Uz)};
UP=function(a,b,c,d){var e=g.LN(g.YM(a.api));if(e&&e.loaded){var f=a.api.getSubtitlesUserSettings();e=void 0;for(var h=0;h<g.TP.length;h++){var l=g.TP[h];if(l.option===b){e=l.options;break}}h=void 0;for(l=0;l<e.length;l++)e[l].option===f[b]&&(h=l);if(d)if(c){if(0===h)return}else if(h===e.length-1)return;d={};d[b]=e[(h+(c?e.length-1:1))%e.length].option;a.api.updateSubtitlesUserSettings(d);RP(a,!0);a.u.start()}};
VP=function(a,b){a.api.hd();if(g.T(g.gM(a.api),4)){var c=a.api.getVideoData().Fa;c&&(c=c.video)&&a.api.seekBy(b/(c.fps||30))}};
RP=function(a,b){g.LN(g.YM(a.api))&&a.api.setOption("captions","sampleSubtitles",b)};
WP=function(a,b,c){g.U.call(this,{D:"button",Y:["ytp-button","ytp-overflow-button"],P:{title:"More","aria-haspopup":"true","aria-owns":c.element.id},K:[{D:"div",J:"ytp-overflow-icon",K:[g.W?{D:"div",Y:["ytp-icon","ytp-icon-more-vert"]}:{D:"svg",P:{height:"100%",viewBox:"-5 -5 36 36",width:"100%"},K:[{D:"path",P:{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",fill:"#fff"}}]}]}]});var d=this;this.H=
a;this.o=b;this.visible=!1;this.tooltip=this.o.vb();g.vN(a,this.element,this,16499);this.L(a,"appresize",this.la);this.L(a,"fullscreentoggled",this.la);this.L(a,"presentingplayerstatechange",this.la);this.la();g.Le(this,g.aP(this.tooltip,this.element));this.na("click",function(){g.yN(a,d.element);CO(c,d.element,!1)})};
XP=function(a,b){g.AO.call(this,a,{D:"div",J:"ytp-overflow-panel",P:{id:SL(),role:"dialog"},K:[{D:"div",J:"ytp-overflow-panel-content",K:[{D:"div",J:"ytp-overflow-panel-action-buttons",W:"{{buttons}}"}]},{D:"button",Y:["ytp-overflow-panel-close","ytp-button"],P:{title:"Close"},K:[g.pM()]}]},250);this.actionButtons=[];this.tooltip=b.vb();this.u=this.da("ytp-overflow-panel-content");this.closeButton=this.da("ytp-overflow-panel-close");this.L(this.closeButton,"click",this.Ra);g.Le(this,g.aP(this.tooltip,
this.closeButton));this.na("click",this.sJ);this.L(a,"videoplayerreset",this.hide);this.L(a,"fullscreentoggled",this.rJ);this.hide()};
YP=function(a,b){a.actionButtons.includes(b)||(a.actionButtons.push(b),a.ma("buttons",a.actionButtons))};
ZP=function(a,b){for(var c=g.p(a.actionButtons),d=c.next();!d.done;d=c.next())d.value.ib(b)};
$P=function(a,b,c){var d=b.Ca(c),e=a.O(),f=d.Ic("default.jpg");g.U.call(this,{D:"a",Y:["ytp-video-menu-item","ytp-button"],P:{role:"menuitemradio","aria-label":d.title,href:e.getVideoUrl(d.videoId,b.listId?b.listId.toString():null)},K:[{D:"div",J:"ytp-video-menu-item-index",W:String(c+1)},{D:"div",J:"ytp-video-menu-item-now-playing",W:"\u25b6"},{D:"div",J:"ytp-video-menu-item-thumbnail",P:{style:f?"background-image: url("+f+");":void 0}},{D:"div",J:"ytp-video-menu-item-title",W:d.title},{D:"div",
J:"ytp-video-menu-item-author",W:d.author}]});this.api=a;this.index=c;this.na("click",this.onClick)};
aQ=function(a){g.AO.call(this,a,{D:"div",J:"ytp-playlist-menu",P:{role:"dialog",id:SL()},K:[{D:"div",J:"ytp-playlist-menu-header",K:[{D:"div",J:"ytp-playlist-menu-title",K:[{D:"a",J:"ytp-playlist-menu-title-name",P:{href:"{{playlisturl}}"},W:"{{title}}"},{D:"button",Y:["ytp-playlist-menu-close","ytp-button"],P:{"aria-label":"Close"},K:[g.pM()]}]},{D:"div",J:"ytp-playlist-menu-subtitle",W:"{{subtitle}}"}]},{D:"div",J:"ytp-playlist-menu-items",P:{role:"menu"}}]},250);this.api=a;this.selected=this.B=
this.playlist=null;this.items=this.da("ytp-playlist-menu-items");this.A=new g.as(this);this.u=[];a=this.da("ytp-playlist-menu-close");this.L(a,"click",this.Ra);a=this.da("ytp-playlist-menu-title-name");this.L(a,"click",this.MN);g.C(this,this.A);this.hide()};
bQ=function(a,b,c){g.U.call(this,{D:"button",Y:["ytp-playlist-menu-button","ytp-button"],P:{title:"{{title}}","aria-owns":String(c.element.id),"aria-haspopup":"true","aria-label":"Playlist"},K:[{D:"div",J:"ytp-playlist-menu-button-icon",K:[g.W?{D:"div",Y:["ytp-icon","ytp-icon-playlist"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",Ua:!0,P:{d:"m 22.53,21.42 0,6.85 5.66,-3.42 -5.66,-3.42 0,0 z m -11.33,0 9.06,0 0,2.28 -9.06,0 0,-2.28 0,0 z m 0,-9.14 13.6,0 0,2.28 -13.6,0 0,-2.28 0,0 z m 0,4.57 13.6,0 0,2.28 -13.6,0 0,-2.28 0,0 z",
fill:"#fff"}}]}]},{D:"div",J:"ytp-playlist-menu-button-text",W:"{{text}}"}]});var d=this;this.api=a;this.playlist=null;this.visible=!1;this.tooltip=b.vb();g.vN(a,this.element,this,70344);this.L(a,"videodatachange",this.o);this.L(a,"onPlaylistUpdate",this.o);this.L(a,"presentingplayerstatechange",this.la);this.L(a,"appresize",this.la);this.hide();this.o();g.Le(this,g.aP(this.tooltip,this.element));this.na("click",function(){g.yN(a,d.element);CO(c,d.element,!1)})};
cQ=function(a,b,c){g.U.call(this,{D:"div",J:"ytp-promotooltip-wrapper",K:[{D:"div",J:"ytp-promotooltip-container",K:[{D:"div",J:"ytp-promotooltip-content",K:[{D:"div",J:"ytp-promotooltip-title",W:"{{title}}"},{D:"div",J:"ytp-promotooltip-details",W:"{{details}}"}]},{D:"div",J:"ytp-promotooltip-buttons",K:[{D:"div",J:"ytp-promotooltip-dismiss-button",W:"{{dismissButtonText}}"},{D:"div",J:"ytp-promotooltip-accept-button",W:"{{acceptButtonText}}"}]}]},{D:"div",J:"ytp-promotooltip-pointer"}]});this.tooltipRenderer=
a;this.B=b;this.H=c;this.o=null;this.title=this.da("ytp-promotooltip-title");this.details=this.da("ytp-promotooltip-details");this.acceptButton=this.da("ytp-promotooltip-accept-button");this.dismissButton=this.da("ytp-promotooltip-dismiss-button");this.visible=!1;g.WL(this,this.visible);this.L(c,"onShowControls",this.A);this.L(c,"onHideControls",this.u)};
dQ=function(a,b){g.U.call(this,{D:"button",Y:["ytp-replay-button","ytp-button"],P:{title:"Replay"},K:[g.DM()]});this.H=a;this.L(a,"presentingplayerstatechange",this.o);this.na("click",this.onClick,this);var c=g.gM(a);g.WL(this,g.T(c,2));g.aP(b.vb(),this.element)};
g.eQ=function(a,b,c,d){d=void 0===d?240:d;g.U.call(this,{D:"button",Y:["ytp-button","ytp-share-button"],P:{title:"Share","aria-haspopup":"true","aria-owns":c.element.id,"data-tooltip-opaque":String(g.py(a.O()))},K:[{D:"div",J:"ytp-share-icon",W:"{{icon}}"},{D:"div",J:"ytp-share-title",W:"Share"}]});this.api=a;this.o=b;this.A=c;this.u=d;this.visible=!1;this.tooltip=this.o.vb();b=a.O();g.vN(a,this.element,this,28664);this.na("click",this.onClick);this.L(a,"videodatachange",this.la);this.L(a,"videoplayerreset",
this.la);this.L(a,"appresize",this.la);this.L(a,"presentingplayerstatechange",this.la);this.la();g.J(this.element,"ytp-show-share-title",g.py(b)&&!g.zy(b));g.Le(this,g.aP(this.tooltip,this.element))};
g.fQ=function(a,b){var c=SL(),d=a.O();c={D:"div",J:"ytp-share-panel",P:{id:SL(),role:"dialog","aria-labelledby":c},K:[{D:"div",J:"ytp-share-panel-inner-content",K:[{D:"div",J:"ytp-share-panel-title",P:{id:c},W:"Share"},{D:"a",Y:["ytp-share-panel-link","ytp-no-contextmenu"],P:{href:"{{link}}",target:d.F,title:"Share link","aria-label":"{{shareLinkWithUrl}}"},W:"{{linkText}}"},{D:"label",J:"ytp-share-panel-include-playlist",K:[{D:"input",J:"ytp-share-panel-include-playlist-checkbox",P:{type:"checkbox",
checked:!0}},"Include playlist"]},{D:"div",J:"ytp-share-panel-loading-spinner",K:[mO()]},{D:"div",J:"ytp-share-panel-service-buttons",W:"{{buttons}}"},{D:"div",J:"ytp-share-panel-error",W:"An error occurred while retrieving sharing information. Please try again later."}]},{D:"button",Y:["ytp-share-panel-close","ytp-button"],P:{title:"Close"},K:[g.pM()]}]};g.AO.call(this,a,c,250);this.api=a;this.tooltip=b.vb();this.u=[];this.C=this.da("ytp-share-panel-inner-content");this.closeButton=this.da("ytp-share-panel-close");
this.L(this.closeButton,"click",this.Ra);g.Le(this,g.aP(this.tooltip,this.closeButton));this.B=this.da("ytp-share-panel-include-playlist-checkbox");this.L(this.B,"click",this.la);this.A=this.da("ytp-share-panel-link");g.Le(this,g.aP(this.tooltip,this.A));this.na("click",this.zJ);this.L(a,"videoplayerreset",this.hide);this.L(a,"fullscreentoggled",this.yJ);this.L(a,"onLoopRangeChange",this.la);this.hide()};
gQ=function(a,b){a.ia()||(g.Gn(a.element,"ytp-share-panel-loading"),Tla(a,b))};
Tla=function(a,b){hQ(a);for(var c=b.links||b.shareTargets,d=0,e={},f=0;f<c.length&&2>d;e={Mh:e.Mh},f++){e.Mh=c[f];a:switch(e.Mh.img||e.Mh.iconId){case "facebook":var h=g.W?{D:"div",Y:["ytp-icon","ytp-icon-share-facebook"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 38 38",width:"100%"},K:[{D:"rect",P:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{D:"path",P:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 l 0,0 z m -1.9,3.8 0,5.7 -3.8,0 c -1.04,0 -1.9,.84 -1.9,1.9 l 0,3.8 5.7,0 0,5.7 -5.7,0 0,13.3 -5.7,0 0,-13.3 -3.8,0 0,-5.7 3.8,0 0,-4.75 c 0,-3.67 2.97,-6.65 6.65,-6.65 l 4.75,0 z",
fill:"#39579b"}}]};break a;case "twitter":h=g.W?{D:"div",Y:["ytp-icon","ytp-icon-share-twitter"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 38 38",width:"100%"},K:[{D:"rect",P:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{D:"path",P:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 l 0,0 z M 29.84,13.92 C 29.72,22.70 24.12,28.71 15.74,29.08 12.28,29.24 9.78,28.12 7.6,26.75 c 2.55,.40 5.71,-0.60 7.41,-2.06 -2.50,-0.24 -3.98,-1.52 -4.68,-3.56 .72,.12 1.48,.09 2.17,-0.05 -2.26,-0.76 -3.86,-2.15 -3.95,-5.07 .63,.28 1.29,.56 2.17,.60 C 9.03,15.64 7.79,12.13 9.21,9.80 c 2.50,2.75 5.52,4.99 10.47,5.30 -1.24,-5.31 5.81,-8.19 8.74,-4.62 1.24,-0.23 2.26,-0.71 3.23,-1.22 -0.39,1.23 -1.17,2.09 -2.11,2.79 1.03,-0.14 1.95,-0.38 2.73,-0.77 -0.47,.99 -1.53,1.9 -2.45,2.66 l 0,0 z",
fill:"#01abf0"}}]};break a;default:h=null}h&&(h=new g.U({D:"a",Y:["ytp-share-panel-service-button","ytp-button"],P:{href:e.Mh.url,target:"_blank",title:e.Mh.sname||e.Mh.serviceName},K:[h]}),h.na("click",function(m){return function(n){if(g.LL(n)){var q=m.Mh.url;var r=void 0===r?{}:r;r.target=r.target||"YouTube";r.width=r.width||"600";r.height=r.height||"600";r||(r={});var u=window;var w=q instanceof g.yc?q:g.Cc("undefined"!=typeof q.href?q.href:String(q));q=r.target||q.target;var z=[];for(B in r)switch(B){case "width":case "height":case "top":case "left":z.push(B+
"="+r[B]);break;case "target":case "noopener":case "noreferrer":break;default:z.push(B+"="+(r[B]?1:0))}var B=z.join(",");if(Md()&&u.navigator&&u.navigator.standalone&&q&&"_self"!=q)B=g.ue("A"),g.dd(B,w),B.setAttribute("target",q),r.noreferrer&&B.setAttribute("rel","noreferrer"),r=document.createEvent("MouseEvent"),r.initMouseEvent("click",!0,!0,u,1),B.dispatchEvent(r),u={};else if(r.noreferrer){if(u=gd("",u,q,B),r=g.zc(w),u&&(g.Uy&&-1!=r.indexOf(";")&&(r="'"+r.replace(/'/g,"%27")+"'"),u.opener=null,
r=g.bd(g.bc("b/12014412, meta tag with sanitized URL"),'<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+g.jd(r)+'">'),w=u.document))w.write(g.Xc(r)),w.close()}else(u=gd(w,u,q,B))&&r.noopener&&(u.opener=null);if(r=u)r.opener||(r.opener=window),r.focus();g.lp(n)}}}(e)),g.Le(h,g.aP(a.tooltip,h.element)),a.u.push(h),d++)}var l=b.more||b.moreLink;
c=new g.U({D:"a",Y:["ytp-share-panel-service-button","ytp-button"],K:[{D:"span",J:"ytp-share-panel-service-button-more",K:[g.W?{D:"div",Y:["ytp-icon","ytp-icon-share-more"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 38 38",width:"100%"},K:[{D:"rect",P:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{D:"path",P:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 Z m -5.7,21.85 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z m -9.5,0 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z m -9.5,0 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z",
fill:"#4e4e4f","fill-rule":"evenodd"}}]}]}],P:{href:l,target:"_blank",title:"More"}});c.na("click",function(m){g.lO(l,a.api,m)&&a.api.oa("SHARE_CLICKED")});
g.Le(c,g.aP(a.tooltip,c.element));a.u.push(c);a.ma("buttons",a.u)};
iQ=function(a){g.Gn(a.element,"ytp-share-panel-loading");g.I(a.element,"ytp-share-panel-fail")};
hQ=function(a){for(var b=g.p(a.u),c=b.next();!c.done;c=b.next())c=c.value,c.detach(),g.Me(c);a.u=[]};
kQ=function(a){g.AO.call(this,a,{D:"button",Y:["ytp-skip-intro-button","ytp-popup","ytp-button"],K:[{D:"div",J:"ytp-skip-intro-button-text",W:"Skip Intro"}]},100);var b=this;this.A=!1;this.u=new g.H(function(){b.hide()},5E3);
this.ti=this.Hj=NaN;g.C(this,this.u);this.F=function(){b.show()};
this.C=function(){b.hide()};
this.B=function(){var c=b.H.getCurrentTime();c>b.Hj/1E3&&c<b.ti/1E3&&b.show()};
this.L(this.H,"videodatachange",function(c,d){if("dataloaded"===c)if(b.Hj=d.Hj,b.ti=d.ti,isNaN(b.Hj)||isNaN(b.ti))b.A&&(g.jQ(b.H.app,"intro",void 0),b.H.removeEventListener(g.fz("intro"),b.F),b.H.removeEventListener("crx_intro",b.C),b.H.removeEventListener("onShowControls",b.B),b.hide(),b.A=!1);else{b.H.addEventListener(g.fz("intro"),b.F);b.H.addEventListener("crx_intro",b.C);b.H.addEventListener("onShowControls",b.B);var e=new g.cz(b.Hj,b.ti,{priority:7,namespace:"intro"});g.pN(b.H,[e]);b.A=!0}});
this.L(this.element,"click",function(){b.H.seekTo(b.ti/1E3)});
this.hide()};
lQ=function(a,b){g.U.call(this,{D:"button",Y:["ytp-airplay-button","ytp-button"],P:{title:"AirPlay"},W:"{{icon}}"});this.H=a;this.na("click",this.onClick);this.L(a,"airplayactivechange",this.la);this.L(a,"airplayavailabilitychange",this.la);this.la();g.Le(this,g.aP(b.vb(),this.element))};
g.nQ=function(a){g.U.call(this,{D:"div",J:"ytp-gradient-bottom"});this.u=g.ue("CANVAS");this.o=this.u.getContext("2d");this.A=NaN;this.u.width=1;this.B=g.zy(a.O());g.mQ(this,g.cN(a).getPlayerSize().height)};
g.mQ=function(a,b){if(a.o){var c=Math.floor(b*(a.B?1:.4));c=Math.max(c,47);var d=c+2;if(a.A!==d){a.A=d;a.u.height=d;a.o.clearRect(0,0,1,d);var e=a.o.createLinearGradient(0,2,0,2+c);if(a.B)e.addColorStop(.133,"rgba(0, 0, 0, 0.2)"),e.addColorStop(.44,"rgba(0, 0, 0, 0.243867)"),e.addColorStop(1,"rgba(0, 0, 0, 0.8)");else{var f=c-42;e.addColorStop(0,"rgba(0, 0, 0, 0)");e.addColorStop(f/c,"rgba(0, 0, 0, 0.3)");e.addColorStop(1,"rgba(0, 0, 0, 0.68)")}a.o.fillStyle=e;a.o.fillRect(0,2,1,c);a.element.style.height=
d+"px";a.element.style.backgroundImage="url("+a.u.toDataURL()+")"}}};
oQ=function(a,b,c,d,e){g.U.call(this,{D:"div",Y:["ytp-chapter-container"],K:[{D:"button",Y:["ytp-chapter-title","ytp-button"],P:{title:"View chapter","aria-label":"View chapter"},K:[{D:"span",P:{"aria-hidden":"true"},J:"ytp-chapter-title-prefix",W:"\u2022"},{D:"span",W:"{{title}}"}]}]});this.H=a;this.I=b;this.F=c;this.G=d;this.N=e;this.C="";this.currentIndex=0;this.A=void 0;this.u=!0;this.B=this.da("ytp-chapter-container");this.o=this.da("ytp-chapter-title");this.updateVideoData("newdata",this.H.getVideoData());
this.L(a,"videodatachange",this.updateVideoData);this.L(this.B,"click",this.onClick);this.L(a,"resize",this.R);this.L(a,"onVideoProgress",this.Wb);this.L(a,"SEEK_TO",this.Wb)};
pQ=function(a,b,c,d,e){var f=b.Wq/b.rows,h=Math.min(c/(b.Xq/b.columns),d/f),l=b.Xq*h,m=b.Wq*h;l=Math.floor(l/b.columns)*b.columns;m=Math.floor(m/b.rows)*b.rows;var n=l/b.columns,q=m/b.rows,r=-b.column*n,u=-b.row*q;e&&45>=f&&(q-=1/h);n-=2/h;a=a.style;a.width=n+"px";a.height=q+"px";e||(d=(d-q)/2,c=(c-n)/2,a.marginTop=Math.floor(d)+"px",a.marginBottom=Math.ceil(d)+"px",a.marginLeft=Math.floor(c)+"px",a.marginRight=Math.ceil(c)+"px");a.background="url("+b.url+") "+r+"px "+u+"px/"+l+"px "+m+"px"};
g.qQ=function(a){g.U.call(this,{D:"div",J:"ytp-storyboard-framepreview",K:[{D:"div",J:"ytp-storyboard-framepreview-img"}]});this.api=a;this.C=this.da("ytp-storyboard-framepreview-img");this.u=null;this.A=NaN;this.events=new g.as(this);this.o=new g.bO(this,100);g.C(this,this.events);g.C(this,this.o);this.L(this.api,"presentingplayerstatechange",this.Ub)};
rQ=function(a,b){var c=!!a.u;a.u=b;a.u?(c||(a.events.L(a.api,"videodatachange",function(){rQ(a,a.api.Ie())}),a.events.L(a.api,"progresssync",a.Xc),a.events.L(a.api,"appresize",a.B)),a.A=NaN,sQ(a),a.o.show(200)):(c&&g.cs(a.events),a.o.hide(),a.o.stop())};
sQ=function(a){var b=a.u,c=a.api.getCurrentTime(),d=g.cN(a.api).getPlayerSize(),e=YA(b,d.width);c=cB(b,e,c);c!==a.A&&(a.A=c,$A(b,c,d.width),b=b.yj(c,d.width),pQ(a.C,b,d.width,d.height))};
tQ=function(a,b){g.U.call(this,{D:"button",Y:["ytp-fullerscreen-edu-button","ytp-button"],K:[{D:"div",Y:["ytp-fullerscreen-edu-text"],W:"Scroll for details"},{D:"div",Y:["ytp-fullerscreen-edu-chevron"],K:[g.W?{D:"div",Y:["ytp-icon","ytp-icon-chevron-down"]}:{D:"svg",P:{height:"100%",viewBox:"0 0 24 24",width:"100%"},K:[{D:"path",P:{d:"M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z",fill:"#fff"}}]}]}]});this.o=a;this.C=b;this.A=new g.bO(this,250,void 0,100);this.B=this.u=!1;g.vN(a,this.element,
this,61214);this.C=b;g.C(this,this.A);this.L(a,"fullscreentoggled",this.la);this.L(a,"presentingplayerstatechange",this.la);this.na("click",this.onClick);this.la()};
g.uQ=function(a,b){g.U.call(this,{D:"button",Y:["ytp-fullscreen-button","ytp-button"],P:{title:"{{title}}"},W:"{{icon}}"});this.H=a;this.A=b;this.message=null;this.o=g.aP(this.A.vb(),this.element);this.u=new g.H(this.LF,2E3,this);g.C(this,this.u);this.L(a,"fullscreentoggled",this.bB);this.L(a,"presentingplayerstatechange",this.la);this.na("click",this.onClick);if(Xr()){var c=g.cN(this.H);this.L(c,ofa(),this.Jv);this.L(c,$r(document),this.Eh)}a.O().ra||this.disable();this.la();this.bB(a.isFullscreen())};
vQ=function(a,b){g.U.call(this,{D:"button",Y:["ytp-miniplayer-button","ytp-button"],P:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-button"},K:[AM()]});this.H=a;this.visible=!1;this.na("click",this.onClick);this.L(a,"fullscreentoggled",this.la);this.ma("title",g.oO(a,"Miniplayer","i"));g.Le(this,g.aP(b.vb(),this.element));g.vN(a,this.element,this,62946);this.la()};
wQ=function(a,b,c){g.U.call(this,{D:"button",Y:["ytp-multicam-button","ytp-button"],P:{title:"Switch camera","aria-haspopup":"true","data-preview":"{{preview}}","data-tooltip-text":"{{text}}"},K:[g.W?{D:"div",Y:["ytp-icon","ytp-icon-switch-camera"]}:{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"path",Ua:!0,P:{d:"M 26,10 22.83,10 21,8 15,8 13.17,10 10,10 c -1.1,0 -2,.9 -2,2 l 0,12 c 0,1.1 .9,2 2,2 l 16,0 c 1.1,0 2,-0.9 2,-2 l 0,-12 c 0,-1.1 -0.9,-2 -2,-2 l 0,0 z m -5,11.5 0,-2.5 -6,0 0,2.5 -3.5,-3.5 3.5,-3.5 0,2.5 6,0 0,-2.5 3.5,3.5 -3.5,3.5 0,0 z",
fill:"#fff"}}]}]});var d=this;this.H=a;this.o=!1;this.u=new g.H(this.A,400,this);this.tooltip=b.vb();iP(this.tooltip);g.C(this,this.u);this.na("click",function(){CO(c,d.element,!1)});
this.L(a,"presentingplayerstatechange",function(){d.la(!1)});
this.L(a,"videodatachange",this.Na);this.la(!0);g.Le(this,g.aP(this.tooltip,this.element))};
xQ=function(a){g.AO.call(this,a,{D:"div",J:"ytp-multicam-menu",P:{role:"dialog"},K:[{D:"div",J:"ytp-multicam-menu-header",K:[{D:"div",J:"ytp-multicam-menu-title",K:["Switch camera",{D:"button",Y:["ytp-multicam-menu-close","ytp-button"],P:{"aria-label":"Close"},K:[g.pM()]}]}]},{D:"div",J:"ytp-multicam-menu-items"}]},250);this.api=a;this.A=new g.as(this);this.items=this.da("ytp-multicam-menu-items");this.u=[];g.C(this,this.A);a=this.da("ytp-multicam-menu-close");this.L(a,"click",this.Ra);this.hide()};
yQ=function(){g.A.call(this);this.u=null;this.startTime=this.duration=0;this.delay=new g.xn(this.o,null,this);g.C(this,this.delay)};
zQ=function(a,b){if("path"===b.D)return b.P.d;if(b.K)for(var c=0;c<b.K.length;c++){var d=b.K[c];if(d&&"string"!==typeof d&&(d=zQ(a,d)))return d}};
DQ=function(a,b,c){c=zQ(a,c);var d=b.getElementsByTagName("path")[0],e=d.getAttribute("d");if(d.getAttribute("id")){var f=SL();b=b.getElementsByTagName("use");for(var h=0;h<b.length;h++)b[h].setAttributeNS("http://www.w3.org/1999/xlink","href","#"+f);d.setAttribute("id",f)}var l=AQ(e),m=AQ(c);BQ(a,function(n){d.setAttribute("d",CQ(l,m,n))},200)};
BQ=function(a,b,c){a.u=b;a.startTime=(0,g.M)();a.duration=c;a.o()};
AQ=function(a){var b=[];a=a.match(Ula);for(var c=0;c<a.length;c++){var d=" "===a[c]?NaN:Number(a[c]);b.push(isNaN(d)?a[c]:d)}return b};
CQ=function(a,b,c){for(var d="",e=0;e<a.length;e++){var f=a[e];d="number"===typeof f?d+(f+(b[e]-f)*c):d+f}return d};
EQ=function(a,b){g.U.call(this,{D:"button",Y:["ytp-mute-button","ytp-button"],P:a.O().T?{title:"{{title}}","aria-label":"{{label}}"}:{"aria-disabled":"true","aria-haspopup":"true"},W:"{{icon}}"});this.H=a;this.o=null;this.C=this.I=this.F=this.R=NaN;this.T=this.G=null;this.B=[];this.A=[];this.visible=!1;this.u=null;var c=this.H.O();this.ma("icon",JM());this.tooltip=b.vb();c.G||(this.o=new g.TL({D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},K:[{D:"defs",K:[{D:"clipPath",P:{id:"ytp-svg-volume-animation-mask"},
K:[{D:"path",P:{d:"m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"}},{D:"path",P:{d:"M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"}},{D:"path",J:"ytp-svg-volume-animation-mover",P:{d:"M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z"}}]},{D:"clipPath",P:{id:"ytp-svg-volume-animation-slash-mask"},K:[{D:"path",J:"ytp-svg-volume-animation-mover",P:{d:"m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z"}}]}]},{D:"path",Ua:!0,Y:["ytp-svg-fill","ytp-svg-volume-animation-speaker"],P:{"clip-path":"url(#ytp-svg-volume-animation-mask)",
d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z",fill:"#fff"}},{D:"path",Ua:!0,Y:["ytp-svg-fill","ytp-svg-volume-animation-hider"],P:{"clip-path":"url(#ytp-svg-volume-animation-slash-mask)",d:"M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z",fill:"#fff"}}]}),g.C(this,this.o),this.G=this.o.da("ytp-svg-volume-animation-speaker"),this.T=this.G.getAttribute("d"),this.B=g.he("ytp-svg-volume-animation-mover",this.o.element),this.A=
g.he("ytp-svg-volume-animation-hider",this.o.element));this.U=new yQ;g.C(this,this.U);this.N=new yQ;g.C(this,this.N);this.na("click",this.pM);this.L(a,"appresize",this.cB);this.L(a,"onVolumeChange",this.qJ);var d=null;if(c.T)g.Le(this,g.aP(b.vb(),this.element));else{var e="Your browser doesn't support changing the volume. $BEGIN_LINKLearn More$END_LINK".split(/\$(BEGIN|END)_LINK/);d=new g.AO(a,{D:"span",Y:["ytp-popup","ytp-generic-popup"],P:{tabindex:"0"},K:[e[0],{D:"a",P:{href:"https://support.google.com/youtube/?p=noaudio",
target:c.F},W:e[2]},e[4]]},100,!0);g.C(this,d);d.hide();d.subscribe("show",function(f){b.Gm(d,f)});
g.tN(a,d.element,4)}this.message=d;g.vN(a,this.element,this,28662);this.cB(g.cN(a).getPlayerSize());this.setVolume(a.getVolume(),a.isMuted())};
FQ=function(a,b){a.R=b;var c=a.T;b&&(c+=CQ(Vla,Wla,b));a.G.setAttribute("d",c)};
GQ=function(a,b){a.I=b;for(var c=20*b,d=0;d<a.B.length;d++)a.B[d].setAttribute("transform","translate("+c+", "+c+")");var e;1===b?e=JM():e=a.o;for(c=0;c<a.A.length;c++)a.A[c].style.display=0===b?"none":"";e!==a.u&&(a.ma("icon",e),a.u=e)};
HQ=function(a,b){g.U.call(this,{D:"button",Y:["ytp-pip-button","ytp-button"],P:{title:"{{title}}","data-tooltip-target-id":"ytp-pip-button"},K:[AM()]});this.H=a;this.ma("title","Picture in Picture");this.na("click",this.onClick);g.Le(this,g.aP(b.vb(),this.element))};
g.JQ=function(a,b){g.U.call(this,{D:"button",Y:["ytp-play-button","ytp-button"],P:{title:"{{title}}","aria-label":"{{label}}"},W:"{{icon}}"});this.H=a;this.o=null;this.transition=new yQ;this.tooltip=b.vb();g.C(this,this.transition);this.L(a,"fullscreentoggled",this.Na);this.L(a,"presentingplayerstatechange",this.u);this.L(a,"videodatachange",this.Na);IQ(this,g.gM(a));this.na("click",this.Sl,this);g.Le(this,g.aP(b.vb(),this.element))};
KQ=function(a){switch(a){case 1:return BM();case 2:return zM();case 3:return g.DM();case 4:return FM();default:return null}};
IQ=function(a,b){var c=g.NB(a.H.getVideoData()),d=!1;if(g.hH(b))var e=c?4:2;else g.T(b,2)?(e=3,d=c):e=1;a.element.disabled=d;if(a.o!==e){c=null;switch(e){case 2:c=g.oO(a.H,"Pause","k");break;case 3:c="Replay";break;case 1:c=g.oO(a.H,"Play","k");break;case 4:c="Stop live playback"}3===e?a.update({title:c,label:null,icon:KQ(e)}):(a.update({title:c,label:c}),(c=KQ(e))&&a.o&&3!==a.o&&!a.H.O().G?DQ(a.transition,a.element,c):a.ma("icon",c));LQ(a.tooltip);a.o=e}};
g.NQ=function(a,b,c){g.U.call(this,{D:"a",Y:[c?"ytp-next-button":"ytp-prev-button","ytp-button"],P:{role:"button",title:"{{title}}",href:"{{url}}","data-preview":"{{preview}}","data-tooltip-text":"{{text}}","data-duration":"{{duration}}","aria-disabled":"{{disabled}}","data-next":"{{next}}","data-prev":"{{prev}}"},K:[c?xM():CM()]});var d=this;this.H=a;this.o=c;this.playlist=this.videoData=null;this.F=!1;this.B=this.C=this.u=null;this.A=!1;this.tooltip=b.vb();this.L(a,"fullscreentoggled",this.Na);
this.L(a,"videodatachange",this.Na);this.L(a,"onPlaylistUpdate",this.Na);this.o||this.L(a,"appresize",this.qv);this.L(a,"mdxpreviousnextchange",function(){MQ(d);d.qv()});
this.Na()};
OQ=function(a){a.playlist&&a.playlist.unsubscribe("shuffle",a.Na,a)};
PQ=function(a){return!!a.playlist&&!a.o&&!!a.videoData&&!a.videoData.xa&&3<=a.H.getCurrentTime()&&2!==a.H.getPresentingPlayerType()};
QQ=function(a){var b=g.dN(g.YM(a.H));return b?a.o?b.hasNext():b.tg():!1};
MQ=function(a){var b={duration:null,preview:null,text:null,title:null,url:null},c=a.H.O(),d=!0;g.P(c.experiments,"player_allow_autonav_after_playlist")&&(d=null!=a.playlist&&a.playlist.hasNext());d=g.eN(a.H)&&(!a.o||d);var e=a.o&&g.uN(a.H),f=QQ(a),h=a.o&&5===a.H.getPresentingPlayerType(),l=g.oO(a.H,"Next","SHIFT+n"),m=g.oO(a.H,"Previous","SHIFT+p");if(h)b.title="Start video";else if(a.A)b.title="Replay";else if(d){var n=null;a.playlist&&(n=a.playlist.Ca(a.o?eC(a.playlist):fC(a.playlist)));if(n){if(n.videoId){var q=
a.playlist.listId;b.url=c.getVideoUrl(n.videoId,q?q.toString():void 0)}b.text=n.title;b.duration=n.lengthSeconds?g.KL(n.lengthSeconds):null;b.preview=n.Ic("mqdefault.jpg")}b.title=a.o?l:m}else e&&(a.videoData&&a.videoData.suggestions&&a.videoData.suggestions.length&&(c=g.ML(c,a.videoData.suggestions[0]),b.url=c.ji(),b.text=c.title,b.duration=c instanceof g.gB?g.KL(c.lengthSeconds):null,b.preview=c.Ic("mqdefault.jpg")),b.title=l);b.disabled=!e&&!d&&!f&&!h;a.update(b);a.F=!!b.url;e||d||a.A||f||h?a.u||
(a.u=g.aP(a.tooltip,a.element),a.C=a.na("click",a.onClick,a)):a.u&&(a.u(),a.u=null,a.nb(a.C),a.C=null);LQ(a.tooltip)};
RQ=function(){g.U.call(this,{D:"div",J:"ytp-chapter-hover-container",K:[{D:"div",J:"ytp-progress-bar-padding"},{D:"div",J:"ytp-progress-list",K:[{D:"div",Y:["ytp-play-progress","ytp-swatch-background-color"]},{D:"div",J:"ytp-load-progress"},{D:"div",J:"ytp-hover-progress"},{D:"div",J:"ytp-ad-progress-list"}]}]});this.startTime=NaN;this.title="";this.width=0;this.C=this.da("ytp-ad-progress-list");this.A=this.da("ytp-load-progress");this.B=this.da("ytp-play-progress");this.u=this.da("ytp-hover-progress");
this.o=this.da("ytp-chapter-hover-container")};
SQ=function(a,b){g.zh(a.o,"width",b)};
TQ=function(a,b){g.zh(a.o,"margin-right",b+"px")};
UQ=function(){this.A=this.position=this.B=this.o=this.C=this.u=this.width=NaN};
g.WQ=function(a,b){g.zO.call(this,{D:"div",J:"ytp-progress-bar-container",P:{"aria-disabled":"true"},K:[{D:"div",Y:["ytp-progress-bar",a.O().o?"ytp-mobile":""],P:{tabindex:"0",role:"slider","aria-label":"Seek slider","aria-valuemin":"{{ariamin}}","aria-valuemax":"{{ariamax}}","aria-valuenow":"{{arianow}}","aria-valuetext":"{{arianowtext}}"},K:[{D:"div",J:"ytp-chapters-container"},{D:"div",J:"ytp-marker-crenellation-list"},{D:"div",J:"ytp-clip-start-exclude"},{D:"div",J:"ytp-clip-end-exclude"},{D:"div",
J:"ytp-scrubber-container",K:[{D:"div",Y:["ytp-scrubber-button","ytp-swatch-background-color"],K:[{D:"div",J:"ytp-scrubber-pull-indicator"}]}]}]},{D:"div",J:"ytp-bound-time-left",W:"{{boundTimeLeft}}"},{D:"div",J:"ytp-bound-time-right",W:"{{boundTimeRight}}"},{D:"div",J:"ytp-clip-start",P:{title:"{{clipstarttitle}}"},W:"{{clipstarticon}}"},{D:"div",J:"ytp-clip-end",P:{title:"{{clipendtitle}}"},W:"{{clipendicon}}"}]});this.api=a;this.bb=!1;this.B=this.Pb=0;this.aa=1;this.lc=this.N=0;this.C=null;this.R=
this.Ba=0;this.kb=this.da("ytp-marker-crenellation-list");this.U={};this.za={};this.clipEnd=Infinity;this.ra=this.da("ytp-clip-end");this.Ea=new g.gs(this.ra,!0);this.gb=this.da("ytp-clip-end-exclude");this.Lc=this.da("ytp-clip-start-exclude");this.clipStart=0;this.ua=this.da("ytp-clip-start");this.Ha=new g.gs(this.ua,!0);this.F=this.fa=0;this.hc=this.da("ytp-progress-bar");this.Da=this.da("ytp-chapters-container");this.o=[];this.ba=-1;this.Oa=g.O(this.api.O().experiments,"web_macro_markers_snapping_threshold");
this.ga=this.T=0;this.G=null;this.Hc=this.da("ytp-scrubber-button");this.Mc=this.da("ytp-scrubber-container");this.ya=new g.Xd;this.tb=new UQ;this.u=new OO(0,0);this.I=null;this.A=this.Va=!1;this.Cb=null;this.tooltip=b.vb();g.Le(this,g.aP(this.tooltip,this.ra));g.C(this,this.Ea);this.Ea.subscribe("hoverstart",this.TB,this);this.Ea.subscribe("hoverend",this.SB,this);this.L(this.ra,"click",this.Gr);g.Le(this,g.aP(this.tooltip,this.ua));g.C(this,this.Ha);this.Ha.subscribe("hoverstart",this.TB,this);
this.Ha.subscribe("hoverend",this.SB,this);this.L(this.ua,"click",this.Gr);VQ(this);this.api.O().ha("web_wn_macro_markers")&&this.L(a,"resize",this.Yw);this.L(a,"presentingplayerstatechange",this.vJ);this.L(a,"videodatachange",this.dB);this.L(a,"videoplayerreset",this.aH);this.L(a,"cuerangesadded",this.qE);this.L(a,"cuerangesremoved",this.DO);this.L(a,"cuerangemarkersupdated",this.qE);this.L(a,"onLoopRangeChange",this.pE);this.updateVideoData(a.getVideoData(),!0);this.pE(a.getLoopRange())};
VQ=function(a){if(0===a.o.length){var b=new RQ;a.o.push(b);g.C(a,b);b.ca(a.Da,0)}for(;1<a.o.length;)a.o.pop().dispose();SQ(a.o[0],"100%");a.o[0].startTime=0;a.o[0].title=""};
XQ=function(a,b){var c=0,d=!1,e=a.o.length,f=1E3*a.u.o;0===f&&(f=1E3*a.api.getProgressState().seekableEnd);if(0<f&&0<a.B){for(var h=a.B-(a.A?3:2)*a.T,l=0===a.ga?3:h*a.ga,m=g.p(a.o),n=m.next();!n.done;n=m.next())n.value.width=0;for(;c<e;){m=f-a.o[c].startTime;c<e-1&&(m=a.o[c+1].startTime-a.o[c].startTime,TQ(a.o[c],a.A?3:2));a.api.O().ha("web_wn_macro_markers")&&g.J(a.o[c].o,"ytp-exp-chapter-hover-container",1<a.o.length);n=(0===f?0:m/f*h)+a.o[c].width;if(n>l)a.o[c].width=n;else{a.o[c].width=0;var q=
a,r=c,u=q.o[r-1];void 0!==u&&0<u.width?u.width+=n:r<q.o.length-1&&(q.o[r+1].width+=n);TQ(q.o[r],0);b&&(a.T--,m/f>a.ga&&(a.ga=m/f),d=!0)}c++}}return d};
aR=function(a){if(a.B){var b=a.api.getProgressState(),c=new OO(b.seekableStart,b.seekableEnd),d=QO(c,b.loaded,0);b=QO(c,b.current,0);var e=a.u.u!==c.u||a.u.o!==c.o;a.u=c;YQ(a,b,d);e&&ZQ(a);$Q(a)}};
cR=function(a,b){var c=PO(a.u,b.A);if(1<a.o.length){c=bR(a,b.B,!0);for(var d=0,e=0;e<c;e++)0<a.o[e].width&&(d+=a.o[e].width,d+=a.A?3:2);c=(a.o[c].startTime+(b.B-d)/a.o[c].width*((c===a.o.length-1?1E3*a.u.o:a.o[c+1].startTime)-a.o[c].startTime))/1E3}return c};
dR=function(a,b,c){return c>=a.o.length?!1:Math.abs(b-a.o[c].startTime/1E3)/a.u.o*(a.B-(a.A?3:2)*a.T)<a.Oa};
eR=function(a,b,c,d){b=g.Td(b,0,a.A?60:40);a.N=b;var e=a.aa,f=Math.max(a.u.getLength()/a.B,1);a.aa=b/(a.A?60:40)*(f-1)+1;b=a.B*a.aa;a.R=g.Td(d*b-c,0,b-a.B);e!==a.aa&&ZQ(a)};
ZQ=function(a){var b=fR(a),c=-b.u/b.o,d=(-b.u+b.width)/b.o,e=Vaa(a.kb),f=0;if(a.N>.2*(a.A?60:40)&&1===a.o.length){var h=c*(a.u.getLength()/60),l=d*(a.u.getLength()/60);for(h=Math.ceil(h);h<l;h++){var m=e[f];m||(m=g.ue("DIV"),a.kb.appendChild(m));f++;0===h%60?Dn(m,"ytp-60m-progress"):0===h%30?Dn(m,"ytp-30m-progress"):0===h%15?Dn(m,"ytp-15m-progress"):Dn(m,"ytp-1m-progress");var n=(60*h/a.u.getLength()-c)*b.o;m.style.left=n+"px"}}b=a.Va?a.u.o:0;a.update({boundTimeLeft:g.KL(PO(a.u,c)-b),boundTimeRight:g.KL(PO(a.u,
d)-b)});for(c=e.length-1;c>=f;c--)g.ze(e[c]);a.element.style.height=a.N+(a.A?8:5)+"px";a.S("height-change",a.N);a.Hc.style.height=a.N+(a.A?20:13)+"px";e=g.p(Object.keys(a.U));for(f=e.next();!f.done;f=e.next())gR(a,f.value);hR(a);YQ(a,a.F,a.fa)};
fR=function(a){var b=a.ya.x,c=a.B*a.aa;b=g.Td(b,0,a.B);a.tb.update(b,a.B,-a.R,-(c-a.R-a.B));return a.tb};
YQ=function(a,b,c){a.F=b;a.fa=c;var d=fR(a),e=a.u.o,f=PO(a.u,a.F),h=g.JL("$PLAY_PROGRESS of $DURATION",{PLAY_PROGRESS:g.KL(f,!0),DURATION:g.KL(e,!0)});if(a.api.O().ha("web_wn_macro_markers")){var l=iR(a,1E3*f);h=(l=a.o[l].title)?l+" "+h:h}a.update({ariamin:Math.floor(a.u.u),ariamax:Math.floor(e),arianow:Math.floor(f),arianowtext:h});e=a.clipStart;f=a.clipEnd;a.I&&2!==a.api.getPresentingPlayerType()&&(e=a.I.startTimeMs/1E3,f=a.I.endTimeMs/1E3);e=QO(a.u,e,0);h=QO(a.u,f,1);f=g.Td(b,e,h);c=g.Td(c,e,h);
h=b*d.o+d.u;if(a.api.O().ha("web_wn_macro_markers")){h=b*a.u.o*1E3;l=-1;for(var m=g.p(a.o),n=m.next();!n.done;n=m.next())n=n.value,h>n.startTime&&0<n.width&&l++;h=b*(d.o-(a.A?3:2)*a.T)+(a.A?3:2)*(0>l?0:l)+d.u}g.zh(a.Mc,"transform","translateX("+h+"px)");a.api.O().ha("web_wn_macro_markers")?(jR(a,d,e,f,"PLAY_PROGRESS"),jR(a,d,e,c,"LOAD_PROGRESS")):(kR(a,a.o[0].B,d,e,f),kR(a,a.o[0].A,d,e,c))};
jR=function(a,b,c,d,e){var f=a.o.length,h=b.o-a.T*(a.A?3:2),l=c*h;c=bR(a,l);var m=d*h;h=bR(a,m);"HOVER_PROGRESS"===e&&(h=bR(a,b.o*d,!0),m=b.o*d-lR(a,b.o*d)*(a.A?3:2));b=Math.max(l-mR(a,c),0);for(d=c;d<f;d++)a.o[d].wa(e).style.left=c===d?b+"px":"0";for(f=c;f<h;f++)d=a.o[f].width,nR(a,a.o[f].wa(e),f===c?d-b:d,d);f=a.o[h].width;m=g.Td(m-mR(a,h),0,f);c===h&&(m-=b);nR(a,a.o[h].wa(e),m,f);m=a.o.length;for(h+=1;h<m;h++)nR(a,a.o[h].wa(e),0,a.o[h].width);for(h=0;h<c;h++)nR(a,a.o[h].wa(e),0,a.o[h].width)};
mR=function(a,b){if(b>=a.o.length)return a.B;for(var c=0,d=0;d<b;)c+=a.o[d].width,d++;return c};
nR=function(a,b,c,d,e){e||a.api.O().o?b.style.width=c+"px":g.zh(b,"transform","scalex("+(d?c/d:0)+")")};
bR=function(a,b,c){var d=0;(void 0===c?0:c)&&(b-=lR(a,b)*(a.A?3:2));c=g.p(a.o);for(var e=c.next();!e.done;e=c.next()){e=e.value;if(b>e.width)b-=e.width;else break;d++}return d===a.o.length?d-1:d};
iR=function(a,b){for(var c=0,d=g.p(a.o),e=d.next();!(e.done||e.value.startTime>b);e=d.next())c++;return 0===c?c:c-1};
lR=function(a,b){for(var c=a.o.length,d=0,e=g.p(a.o),f=e.next();!f.done;f=e.next())if(f=f.value,0!==f.width)if(b>f.width)b-=f.width,b-=a.A?3:2,d++;else break;return d===c?c-1:d};
kR=function(a,b,c,d,e,f){b.style.left=Math.max(d*c.o+c.u,0)+"px";nR(a,b,g.Td((e-d)*c.o+c.u,0,c.width),c.width,void 0===f?!1:f)};
hR=function(a){var b=!!a.I&&2!==a.api.getPresentingPlayerType(),c=a.clipStart,d=a.clipEnd,e=!0,f=!0;b&&a.I?(c=a.I.startTimeMs/1E3,d=a.I.endTimeMs/1E3):(e=c>a.u.u,f=0<a.u.o&&d<a.u.o);g.J(a.element,"ytp-loop-range-enabled",b);g.J(a.element,"ytp-clip-start-enabled",e);g.J(a.element,"ytp-clip-end-enabled",f);b=e?QO(a.u,c,0):0;d=f?QO(a.u,d,1):1;a.ua.style.left=Math.round(1E3*b)/10+"%";a.ra.style.left=Math.round(1E3*d)/10+"%";a.Lc.style.width=Math.round(1E3*b)/10+"%";a.gb.style.left=Math.round(1E3*d)/10+
"%";a.gb.style.width=Math.round(1E3*(1-d))/10+"%"};
$Q=function(a){var b=fR(a);if(a.api.O().ha("web_wn_macro_markers")){jR(a,b,a.F,Math.max(b.A,a.F),"HOVER_PROGRESS");for(var c=bR(a,b.o*a.F,!0),d=bR(a,b.B,!0),e=c;e<=d;)g.J(a.o[e].u,"ytp-hover-progress-light",b.A>a.F),e++;g.J(a.Hc,"ytp-scrubber-button-hover",c===d&&1<a.o.length)}else kR(a,a.o[0].u,b,a.F,b.A),g.J(a.o[0].u,"ytp-hover-progress-light",b.A>a.F)};
gR=function(a,b){var c=a.U[b],d=a.za[b],e=fR(a),f=QO(a.u,c.start/1E3,0),h=Qga(c,a.A)/e.width;var l=QO(a.u,c.end/1E3,1);h!==Number.POSITIVE_INFINITY&&(f=g.Td(f,0,l-h));l=Math.min(l,f+h);c.color&&(d.style.background=c.color);kR(a,d,e,f,l,!0)};
oR=function(a,b){var c=b.getId();a.U[c]===b&&(g.ze(a.za[c]),delete a.U[c],delete a.za[c])};
pR=function(a,b){b?a.G||(a.element.removeAttribute("aria-disabled"),a.G=new g.gs(a.hc,!0),a.G.subscribe("hovermove",a.QM,a),a.G.subscribe("hoverend",a.PM,a),a.G.subscribe("dragstart",a.OM,a),a.G.subscribe("dragmove",a.SM,a),a.G.subscribe("dragend",a.RM,a),a.Cb=a.na("keydown",a.wJ)):a.G&&(a.element.setAttribute("aria-disabled","true"),a.nb(a.Cb),a.G.cancel(),a.G.dispose(),a.G=null)};
g.qR=function(a){var b=2*a.B*g.Oy();return 1E3*a.u.getLength()/a.api.getPlaybackRate()/b};
rR=function(a,b,c){g.U.call(this,{D:"button",J:"ytp-button",P:{title:"Play on TV","aria-haspopup":"true"},W:"{{icon}}"});this.H=a;this.Ma=c;this.o=null;this.L(a,"onMdxReceiversChange",this.la);this.L(a,"presentingplayerstatechange",this.la);this.L(a,"appresize",this.la);this.la();this.na("click",this.u,this);g.Le(this,g.aP(b.vb(),this.element))};
sR=function(a,b,c){g.U.call(this,{D:"button",Y:["ytp-button","ytp-settings-button"],P:{"aria-haspopup":"true","aria-owns":SL(),title:"Settings","data-tooltip-target-id":"ytp-settings-button"},K:[g.EM()]});this.H=a;this.Ma=c;this.u=!0;this.na("click",this.A);this.L(a,"onPlaybackQualityChange",this.updateBadge);this.L(a,"videodatachange",this.updateBadge);this.L(a,"webglsettingschanged",this.updateBadge);this.L(a,"appresize",this.o);g.Le(this,g.aP(b.vb(),this.element));g.vN(this.H,this.element,this,
28663);this.updateBadge();this.o(g.cN(a).getPlayerSize())};
tR=function(a,b){a.u=!!b;a.o(g.cN(a.H).getPlayerSize())};
uR=function(a,b){g.zP.call(this,"Annotations",5);this.H=a;this.Ma=b;this.o=!1;this.L(a,"videodatachange",this.la);this.L(a,"onApiChange",this.la);this.subscribe("select",this.u,this);this.la()};
g.vR=function(a,b,c,d,e,f){g.rP.call(this,g.sP({"aria-haspopup":"true"}),b,a);this.Ma=d;this.C=!1;this.u=null;this.options={};this.A=new g.vP(c,void 0,a,e,f);g.C(this,this.A);this.na("keydown",this.xJ);this.na("click",this.open)};
wR=function(a){if(a.u){var b=a.options[a.u];b.element.getAttribute("aria-checked");b.element.removeAttribute("aria-checked");a.u=null}};
g.xR=function(a,b){g.wP(a.A);for(var c={},d=!1,e=0;e<b.length;e++){var f=b[e],h=a.options[f],l=f===a.u;l&&(d=!0);h&&h.priority===-e?(l=a,g.qP(l.options[f],l.Of(f,!0)),delete a.options[f]):h=a.ot(f,-e,l);c[f]=h;a.A.xb(h,!0)}d||(a.u=null);d=g.p(Object.keys(a.options));for(e=d.next();!e.done;e=d.next())a.options[e.value].dispose();a.options=c};
yR=function(a,b){g.vR.call(this,"Audio track",2,a,b);this.H=a;this.tracks={};this.o=new g.U({D:"div",K:[{D:"span",W:"Audio track"},{D:"span",J:"ytp-menuitem-label-count",W:"{{content}}"}]});g.C(this,this.o);g.qP(this,this.o);this.L(a,"videodatachange",this.la);this.L(a,"onPlaybackAudioChange",this.la);this.la()};
zR=function(a,b){g.zP.call(this,"Autoplay",