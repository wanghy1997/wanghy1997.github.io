---
title: Medical image segmentation
order: 1
dir:
    text: 3_MIA
navbar: false
---



<p align="center">
  Medical image segmentation under limited annotation<br>
  <b>A curated list of resources on 2D and 3D medical image segmentation.</b>
  <b>Recently, medical image segmentation under limited annotation conditions has received extensive attention. Full supervision is ideal, but due to limitations such as privacy, incomplete annotation is our norm. Therefore, in order to keep up with the research trends and tap into the research potential under limited annotation conditions, we hope to create a benchmark for medical image segmentation under limited annotation. These summaries will include related work under incomplete conditions such as zero-shot, few-shot, weakly supervised learning, semi-supervised learning, and active learning. If there is anything that needs to be supplemented, please feel free to ask me(wendong.6267@gmail.com).</b>
</p>

[//]: # (图片保存路径：/Users/wanghongyi/codes/wanghy1997.github.io/src/.vuepress/public/img2Notebook/MIA)

> 🚧 Status: Actively updated (WIP). </br>
> 🚧 Sections/tags may change. </br>
> 🚧 Contributions welcome via Issues/PRs.

## 📚 Contents

- 🧠 [1. Literature Review]()
  - [1.1 Semi-supervised Learning(SSL)](#11--semi-supervised-learningssl) 

  - [1.2 Weakly-supervised Learning(WSL)](#12--Weakly-supervised-Learningwsl)

  - [1.3 Active Learning(AL)](#13--active-learningal)

  - [1.4 Zero-shot](#14-Zero-shot)

  - [1.5 Few-shot](Few-shot)

    

- 💬 [2. Semi-supervised Learning]() 
  - 一致性学习

    

- 🖼️ [3. Weakly-supervised Learning]() 
  - 基于SAM的弱监督学习

    

- 🦾 [4. Active Learning]() 
  - 基于不确定性的主动学习策略
  - 基于多样性\代表性的主动学习策略



- 🛠️ 5. [Zero-shot]()
  - 基于 SAM 的Zero-shot 医学图像分割

- 🗂️ [Few-shot]()
  - 基于 SAM 的 Few-shot 医学图像分割

## 1. 🧠 Literature Review

## 1.1 💬 Semi-supervised Learning(SSL)

| Date   | The First and Last Authors   | Dim | Title                                                                                                                                     | Code                                              | Reference                                                                                                                                                                                        |
|--------|------------------------------|-|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2025-06 | Zheng Zhang and Wendong Wang | 3D | [A Semantic Knowledge Complementarity based Decoupling Framework  for Semi-supervised Class-imbalanced Medical Image Segmentation](#SKCDF) | [Code](https://github.com/yinguanchun/SKCDF)      | [CVPR2025](https://openaccess.thecvf.com/content/CVPR2025/papers/Zhang_A_Semantic_Knowledge_Complementarity_based_Decoupling_Framework_for_Semi-supervised_Class-imbalanced_CVPR_2025_paper.pdf) |
| 2025-06 | Ming Hu and Quan Wang         | 2D | [β-FFT: Nonlinear Interpolation and Differentiated Training Strategies for  Semi-Supervised Medical Image Segmentation](#betaFFT)         | [Code](https://github.com/Xi-Mu-Yu/beta-FFT)  | [CVPR2025](https://openaccess.thecvf.com/content/CVPR2025/papers/Hu_beta-FFT_Nonlinear_Interpolation_and_Differentiated_Training_Strategies_for_Semi-Supervised_Medical_CVPR_2025_paper.pdf)                                                                                                                                                                                     |
|        |                              | |      |      |  
| 2025-08 | J. Zhu and H. Cui            | | CCA: Contrastive cluster assignment for supervised and semi-supervised medical image segmentation                                         | [Code](https://github.com/zhujinghua1234/CCA-Seg) | [NN2025](https://www.sciencedirect.com/science/article/pii/S0893608025002941)                                                                                                                    |
| 2025-04 | Q. Zhou and Z. Wang          | 3D | [Single-slice Semi-supervised 3D Medical Image Segmentation via Correlation Information Enhancement and Hybrid Pseudo Mask Generation](#paper2) | None                                              | [JBHI2025](https://ieeexplore.ieee.org/abstract/document/10959090)                                                                                                                               |
| 2025-04 | K. Yan and Z. Liu            | | SGTC: Semantic-Guided Triplet Co-training for Sparsely Annotated Semi-Supervised Medical Image Segmentation                               | None                                              | [AAAI2025](https://ojs.aaai.org/index.php/AAAI/article/view/32986)                                                                                                                               |
| 2025-04 | H. Zhang and Y. Ma           | | Prototype-Augmented Mean Teacher for Robust Semi-Supervised Medical Image Segmentation                                                    | None                                              | [PR2025](https://www.sciencedirect.com/science/article/pii/S0031320325003826)                                                                                                                    |
| 2025-04 | W. Huang and L. Zhang        | | GapMatch: Bridging Instance and Model Perturbations for Enhanced Semi-Supervised Medical Image Segmentation                               | None                                              | [AAAI2025](https://ojs.aaai.org/index.php/AAAI/article/view/33919)                                                                                                                               |
| 2025-04 | Y. Wang and Y. Shi           | | Balancing Multi-Target Semi-Supervised Medical Image Segmentation with Collaborative Generalist and Specialists                           | [Code](https://github.com/wangyou0804/CGS)        | [TMI2025](https://ieeexplore.ieee.org/abstract/document/10948494)                                                                                                                                |
|        |                              | | Continuously updated...     |      |                                                                                                                                                                                                  |



## 1.2 🖼️ Weakly-supervised Learning(WSL)

| Date    | The First and Last Authors | Title                                                        | Code                                              | Reference                                                    |
| ------- | -------------------------- | ------------------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------ |
| 2025-08 | J. Zhu and H. Cui          | CCA: Contrastive cluster assignment for supervised and semi-supervised medical image segmentation | [Code](https://github.com/zhujinghua1234/CCA-Seg) | [NN2025](https://www.sciencedirect.com/science/article/pii/S0893608025002941) |
|         |                            | Continuously updated...                                      |                                                   |                                                              |



## 1.3 🦾 Active Learning(AL)

| Date    | The First and Last Authors | Title                                                        | Code                                              | Reference                                                    |
| ------- | -------------------------- | ------------------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------ |
| 2025-08 | J. Zhu and H. Cui          | CCA: Contrastive cluster assignment for supervised and semi-supervised medical image segmentation | [Code](https://github.com/zhujinghua1234/CCA-Seg) | [NN2025](https://www.sciencedirect.com/science/article/pii/S0893608025002941) |
|         |                            | Continuously updated...                                      |                                                   |                                                              |

## 1.4 🛠️ Zero-shot

| Date    | The First and Last Authors | Title                                                        | Code                                              | Reference                                                    |
| ------- | -------------------------- | ------------------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------ |
| 2025-08 | J. Zhu and H. Cui          | CCA: Contrastive cluster assignment for supervised and semi-supervised medical image segmentation | [Code](https://github.com/zhujinghua1234/CCA-Seg) | [NN2025](https://www.sciencedirect.com/science/article/pii/S0893608025002941) |
|         |                            | Continuously updated...                                      |                                                   |                                                              |





## 1.5 🗂️ Few-shot

| Date    | The First and Last Authors | Title                                                        | Code                                              | Reference                                                    |
| ------- | -------------------------- | ------------------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------ |
| 2025-08 | J. Zhu and H. Cui          | CCA: Contrastive cluster assignment for supervised and semi-supervised medical image segmentation | [Code](https://github.com/zhujinghua1234/CCA-Seg) | [NN2025](https://www.sciencedirect.com/science/article/pii/S0893608025002941) |
|         |                            | Continuously updated...                                      |                                                   |                                                              |



## 2. 💬 [Semi-supervised Learning]()

## 2.1 一致性学习
<span id="SKCDF"></span>
- [CVPR2025] A Semantic Knowledge Complementarity based Decoupling Framework  for Semi-supervised Class-imbalanced Medical Image Segmentation [[code]](https://github.com/yinguanchun/SKCDF) [[pdf]](https://openaccess.thecvf.com/content/CVPR2025/papers/Zhang_A_Semantic_Knowledge_Complementarity_based_Decoupling_Framework_for_Semi-supervised_Class-imbalanced_CVPR_2025_paper.pdf)
  - 文章考虑的问题：
    - 当前的半监督学习直接将有标注数据和无标注数据进行联合学习，忽略了因未标注数据缺乏注释而可能对有标记数据产生负面影响；
    - 大多数方法都忽略了标记数据与未标记数据之间的内在关系，且训练过程中两者彼此独立，这导致模型过拟合有标记数据，却无法从大量未标记数据中充分学习，尽管现有方法尝试探索了两者之间存在的内在联系，但并未解决对标记数据过拟合的问题。
    - 医学图像中存在严重的类别不平衡，现有方法常用 reweight 或 resample，这些方式并非特征学习层面根本解决问题，往往只能带来有限的提升，还可能牺牲多数类的表现。
  - 文章的动机和思路：
    - 提出了一种**数据流解耦框架**，该框架采用不同的数据流来训练模型的不同部分，使模型能够充分学习有标注数据的语义信息，同时抑制未标注数据的负面影响；
    - 事实上，有标记数据与未标记数据之间存在内在联系，在医学图像中，不同个体的同一器官具有相对固定的位置和相似的语义信息，因此本文设计了一个**语义知识互补模块**，该模块采用未标记数据来丰富标记数据的特征，并采用标记数据来知道未标记数据生成的高质量伪标签；
    - 为了从特征学习层面解决类别不平衡问题，文章提出了**辅助平衡分割头**作为新的路径，让小器官在网络结构层面得到专门强化，从而“专注强化小类特征，但不损伤大类”，
  - 文章的整体框架：
  ![](/img2Notebook/MIA/image-20250926011556656.png)

<span id="betaFFT"></span>
- [CVPR2025] β-FFT: Nonlinear Interpolation and Differentiated Training Strategies for  Semi-Supervised Medical Image Segmentation [[Code]](https://github.com/Xi-Mu-Yu/beta-FFT) [[pdf]](https://openaccess.thecvf.com/content/CVPR2025/papers/Hu_beta-FFT_Nonlinear_Interpolation_and_Differentiated_Training_Strategies_for_Semi-Supervised_Medical_CVPR_2025_paper.pdf)
  - 文章考虑的问题：
    - 联合训练在半监督学习领域取得显著成功，由趋向于相似决策边界的多个模型引起的**同质化现象**仍然没有得到充分解决；
    - 大多数方法都忽略了标记数据与未标记数据之间的内在关系，且训练过程中两者彼此独立，这导致模型过拟合有标记数据，却无法从大量未标记数据中充分学习，尽管现有方法尝试探索了两者之间存在的内在联系，但并未解决对标记数据过拟合的问题。
    - 医学图像中存在严重的类别不平衡，现有方法常用 reweight 或 resample，这些方式并非特征学习层面根本解决问题，往往只能带来有限的提升，还可能牺牲多数类的表现。
  - 文章的动机和思路：
    - 提出了一种**数据流解耦框架**，该框架采用不同的数据流来训练模型的不同部分，使模型能够充分学习有标注数据的语义信息，同时抑制未标注数据的负面影响；
    - 事实上，有标记数据与未标记数据之间存在内在联系，在医学图像中，不同个体的同一器官具有相对固定的位置和相似的语义信息，因此本文设计了一个**语义知识互补模块**，该模块采用未标记数据来丰富标记数据的特征，并采用标记数据来知道未标记数据生成的高质量伪标签；
    - 为了从特征学习层面解决类别不平衡问题，文章提出了**辅助平衡分割头**作为新的路径，让小器官在网络结构层面得到专门强化，从而“专注强化小类特征，但不损伤大类”，
  - 文章的整体框架：
  ![](/img2Notebook/MIA/26_15-08-33.png)


## 3. 🖼️ Weakly-supervised Learning



## 4. 🦾 Active Learning



## 5. 🛠️ Zero-shot



## 6. 🗂️ Few-shot

